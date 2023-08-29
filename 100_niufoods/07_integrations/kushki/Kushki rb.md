```ruby
# This module contains the Kushki class which is used to interact with the Kushki API.
module Services
  # The Kushki class provides methods for interacting with the Kushki API.
  class Kushki
    # The date format used by the Kushki API.
    FORMAT_DATE = '%Y-%m-%d'.freeze

    # The base URL for the Kushki API.
    KUSHKI_URL = ENV['KUSHKI_URL']

    # Configuration for the API endpoints. Each key is a controller, and the value is a hash
    # mapping action names to their configurations. Each configuration includes the API version,
    # HTTP method, action path, any required arguments for the action and expected code response.
    #
    # Keys in the configuration hash:
    #   - Each top-level key represents a controller in the API.
    #   - Each second-level key represents an action within that controller.
    #
    # Values in the action configuration hash:
    #   - :version is the version of the API to use for the action.
    #   - :method is the HTTP method to use for the action.
    #   - :action is the endpoint path for the action.
    #   - :args is an array of symbols representing required arguments for the action. The arguments should be present in the endpoint path enclosed in curly braces {}.
    #   - :expected_code is the HTTP status code that indicates a successful response for the action.
    #
    # @example Adding a new controller configuration
    #   ENDPOINT_CONFIG = {
    #     ... existing_controller,
    #     new_controller: {
    #       that_makes_the_endpoint : { version: 'v1', method: :get, action: 'new_action', expected_code: 200 }
    #     }
    #
    # @example How to use a new configuration
    #  create a method with the name of that_makes_the_endpoint, and pass the arguments required by the action
    #  def that_makes_the_endpoint(args, params1, params2)
    #   invoke(controller: :new_controller, args: { bin: '1234' }, params1, params2)
    #
    # This will use the configuration for the :existing_controller controller and the :new_action action.
    ENDPOINT_CONFIG = {
      # rubocop:disable Layout/LineLength
      card:          {
        charge:                   { version: 'v1', method: :post, action: 'charges', expected_code: 201 },
        request_deferred_options: { version: 'v1', method: :get, action: 'deferred/{bin}', args: %i[bin], expected_code: 200 },
        bin_info:                 { version: 'v1', method: :get, action: 'bin/{bin}', args: %i[bin], expected_code: 200 }
      },
      subscriptions: {
        create_a_recurring_charge: { version: 'v1', method: :post, action: 'card', expected_code: 201 },
        cancel_a_recurring_charge: { version: 'v1', method: :delete, action: 'card/{subscription_id}', args: %i[subscription_id], expected_code: 204 },
        make_an_oneclick_payment:  { version: 'v1', method: :post, action: 'card/{subscription_id}', args: %i[subscription_id], expected_code: 201 }
      }
      # rubocop:enable Layout/LineLength
    }.freeze
    # Mapping of HTTP methods to the parameter name used for the request body.
    HTTP_METHOD_TO_PARAM_NAME = {
      post: :payload,
      get:  :params
    }.tap { |h| h.default = :params }.freeze

    # Raised when there is an error in the Kushki service.
    class KushkiError < RuntimeError; end

    # Initializes a new instance of the Kushki class.
    #
    # @param auth_method [Symbol] the authentication method to use (:kushki by default)
    # @param username [String] the username for authentication (public merchant id)
    # @param password [String] the password for authentication (private merchant id)
    # @return [Kushki] a new instance of the Kushki class
    def initialize(username: 'kushki', password: ENV['KUSHKI_PRIVATE_MERCHANT_ID'])
      @login_header = Transport.authenticate(auth_method: :kushki, username: username, password: password)
    end

    # Creates a recurring charge.
    # @note Link to the API documentation: https://api-docs.kushkipagos.com/docs/online-payments/one-click-and-scheduled-payments/operations/create-a-subscription-v-1-card
    #
    # @param token [String] The payment token.
    # @param plan_name [String] The name of the plan.
    # @param periodicity [String] The frequency of the recurring charge.
    # @param contact_details [Hash] Contact details for the charge.
    # @param amount [Float] The amount to be charged.
    # @param start_date [Date] The date when the recurring charge should start.
    # @param full_response [Boolean] If set to true, returns full response.
    # @param metadata [Hash] Additional information related to the charge.
    # @return [Hashie::Mash] The response from the API.
    def create_a_recurring_charge(token:, plan_name:, periodicity:, contact_details:,
                                  amount:, start_date:, full_response:, metadata:)
      invoke(controller:      :subscriptions,
             token:           token,
             plan_name:       plan_name,
             periodicity:     periodicity,
             contact_details: contact_details,
             amount:          amount,
             start_date:      start_date,
             full_response:   full_response,
             metadata:        metadata)
    end

    # Makes an one-click payment.
    # @note Link to the API documentation: https://api-docs.kushkipagos.com/docs/online-payments/one-click-and-scheduled-payments/operations/create-a-subscription-v-1-card-1
    #
    # @param args [Hash] Arguments required for the API request.
    # @param token [String] The payment token.
    # @param amount [Float] The amount to be charged.
    # @param contact_details [Hash] Contact details for the charge.
    # @param order_details [Hash] Details of the order.
    # @param product_details [Hash] Details of the product.
    # @param full_response [Boolean] If set to true, returns full response.
    # @param metadata [Hash] Additional information related to the payment.
    # @return [Hash] The response from the API.
    def make_an_oneclick_payment(args:, token:, amount:, contact_details:, order_details:,
                                 product_details:, full_response:, metadata:)
      invoke(controller:      :subscriptions,
             args:            args,
             token:           token,
             amount:          amount,
             contact_details: contact_details,
             order_details:   order_details,
             product_details: product_details,
             full_response:   full_response,
             metadata:        metadata)
    end

    # Cancels a recurring charge.
    # @note Link to the API documentation: https://api-docs.kushkipagos.com/docs/online-payments/one-click-and-scheduled-payments/operations/delete-a-subscription-v-1-card
    #
    # @param args [Hash] Arguments required for the API request.
    # @return [Hash] The response from the API.
    def cancel_a_recurring_charge(args:)
      invoke(controller: :subscriptions, args: args)
    end

    protected

    # Invokes an action on the API.
    #
    # @param controller [Symbol] the controller of the action to be invoked
    # @param args [Hash] the arguments for the action
    # @param params [Hash] additional parameters for the action
    # @return [Hash] the response from the API
    #
    # @example Invoking a `charge` action on the `card` controller
    #   invoke(controller: :card, args: { bin: card_number }, param1: value1, param2: value2)
    #
    # @example Invoking a `create_a_recurring_charge` action on the `subscriptions` controller
    #   invoke(controller: :subscriptions, args: { subscription_id: id }, param1: value1, param2: value2)
    # @todo: This method should be used at a higher level, perhaps in the same transport file.
    def invoke(controller:, args: {}, **params)
      meth = caller_locations(1..1).first.label.to_sym
      config = ENDPOINT_CONFIG[controller][meth]
      raise KushkiError, "No configuration found for #{controller}##{meth}" if config.blank?

      config_keys = %i[version method action args expected_code]
      version, method, action, required_args, expected_code = config.values_at(*config_keys)

      action = process_args(action, required_args, args) if required_args
      endpoint = "#{controller}/#{version}/#{action}"

      param_name = HTTP_METHOD_TO_PARAM_NAME[method]
      params = request_params(params: params) if method == :post

      resp = send(method, endpoint: endpoint, param_name => params) # rubocop:disable Style/HashSyntax
      process(resp, expected_code: expected_code)
    end

    # Transforms the keys of the params hash to camelCase
    #
    # @param params [Hash] the parameters to transform
    # @return [Hash] the transformed parameters
    def request_params(params: {})
      params.deep_transform_keys { |p| p.to_s.camelize(:lower) }
    end

    # Processes the arguments for an action. This method replaces placeholders in the action
    # path with the provided arguments.
    #
    # @example
    #   process_args('deferred/{bin}', [:bin], bin: 12321)
    #   # => 'deferred/12321'
    #
    # @param action [String] the action path
    # @param required_args [Array<Symbol>] the required arguments for the action
    # @param args [Hash] the provided arguments
    # @return [String] the processed action path
    def process_args(action, required_args, args)
      missing_args = required_args - args.keys
      raise ArgumentError, "Missing required arguments: #{missing_args.join(', ')}" unless missing_args.empty?

      required_args.each do |arg|
        action = action.gsub("{#{arg}}", args[arg].to_s)
      end
      action
    end

    # Sends a GET request to the API.
    #
    # @param endpoint [String] the API endpoint
    # @param params [Hash] the parameters for the request
    # @return [Hashie::Mash] the response from the API
    def get(endpoint:, params: nil)
      Transport.get(url:      "#{KUSHKI_URL}/#{endpoint}",
                    xheaders: @login_header,
                    params:   params)
    end

    # Sends a POST request to the API.
    #
    # @param payload [Hash] the payload for the request
    # @param endpoint [String] the API endpoint
    # @param params [Hash] the parameters for the request
    # @return [Hash] the response from the API
    def post(payload:, endpoint:, params: nil)
      Transport.post(url:      "#{KUSHKI_URL}/#{endpoint}",
                     payload:  payload,
                     xheaders: @login_header,
                     params:   params)
    end

    # Make a DELETE request to the API
    #
    # @param endpoint [String] The endpoint of the API to make the request to
    # @params params [Nothing] no send params because is a trick to make the request
    #      if you see a trick, sees the line that executes the HTTP method in the invoke method.
    # @return [Hash] The response from the API
    # rubocop:disable Lint/UnusedMethodArgument
    def delete(endpoint:, params: nil)
      Transport.delete(url:      "#{KUSHKI_URL}/#{endpoint}",
                       xheaders: @login_header)
    end

    # Process the response from the API
    #
    # checks the response code and determines if the request was successful
    # based on whether the response code matches the expected code. If the response code
    # is not what was expected, the method logs an error message and attaches the error details to the response.
    #
    # @param res [Hash] The response from the API
    # @param expected_code [Integer] The expected response code
    # @return [Hash] The processed response, with added 'success' and 'errors' keys
    def process(res, expected_code: 200)
      return res.merge!(success: true, errors: nil) if res.code.to_i == expected_code

      Rails.logger.info("Kushki error: #{res.body}")
      res.merge!(success: false, errors: res.body, kushki_code: res.body.code, body: nil)
    end
  end
end

```


Cómo usarlo

```ruby
kushki = ::Services::Kushki.new
kushki.cancel_a_recurring_charge(
args: { subscription_id: token }
)
```