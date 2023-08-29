```ruby
# frozen_string_literal: true

module Services
  Oj::Rails.mimic_JSON
  # Transport is a service that handles all HTTP requests. unify the way we make HTTP requests
  class Transport
    # The base headers for all requests, including the content type and accept headers for JSON.
    BASE_HEADERS = { 'Content-Type' => 'application/json', 'Accept' => 'application/json' }.freeze

    # The response logging setting, showing whether or not to log responses. Options are 'LOG_RESPONSES' or 'DO_NOT_LOG_RESPONSES'.
    RESPONSE_LOGGING = ENV.fetch('RESPONSE_LOGGING', 'LOG_RESPONSES').freeze

    # Authenticates an HTTP request using a given authentication method.
    #
    # @param username [String] The username for authentication.
    # @param password [String] The password for authentication.
    # @param auth_method [Symbol] The method of authentication. Options are :basic, :bearer, or :kushki.
    # @return [Hash] The headers required for authentication.
    def self.authenticate(username:, password:, auth_method: :bearer)
      case auth_method
      when :basic
        # TODO: the base64 encoding should be tested, it may not be correct
        auth_token = Base64.strict_encode64("#{username}:#{password}")
        login_header = { 'Authorization' => "Basic #{auth_token}" }
      when :bearer
        login_header = { 'Authorization' => "Bearer #{password}" }
      when :kushki
        login_header = { 'Private-Merchant-Id' => password }
      else
        raise ArgumentError, "Unknown auth_method: #{auth_method}"
      end
      login_header
    end

    # Sends a GET request.
    #
    # @param url [String] The URL to send the request to.
    # @param xheaders [Hash] Any additional headers for the request.
    # @param params [Hash] Any parameters for the request.
    # @param body [String] The body of the request.
    # @return [Hashie::Mash] The response from the request.
    def self.get(url:, xheaders: {}, params: {}, body: nil)
      headers = BASE_HEADERS.merge(xheaders)
      options = { headers: headers, query: params, body: body }

      response = HTTParty.get(url, options)
      process(response)
    end

    # Sends a POST request.
    #
    # @note that `body` and `payload` cannot be used together. You should use only one.
    # The `body` is supposed to be a pre-processed string, and `payload` is a hash that will be transformed.
    #
    # @example:
    #   MyModule.post(url: 'http://example.com', payload: { foo: 'bar' })
    #   or
    #   MyModule.post(url: 'http://example.com', body: '{"foo":"bar"}')
    #
    # @param url [String] The URL to send the request to.
    # @param body [String, nil] The pre-processed string of the request. Default is nil.
    # @param payload [Hash] Any payload for the request. Default is empty hash.
    # @param xheaders [Hash] Any additional headers for the request. Default is empty hash.
    # @param params [Hash] Any parameters for the request. Default is empty hash.
    # @raise [ArgumentError] If both `body` and `payload` are provided.
    # @return [Hashie::Mash] The response from the request.
    def self.post(url:, body: nil, payload: {}, xheaders: {}, params: {})
      check_body_and_payload(body, payload)

      headers = BASE_HEADERS.merge(xheaders)
      body ||= Oj.generate(payload.deep_stringify_keys)
      options = { headers: headers, query: params, body: body }

      response = HTTParty.post(url, options)
      process(response)
    end

    # Sends a PUT request.
    #
    # @note that `body` and `payload` cannot be used together. You should use only one.
    # The `body` is supposed to be a pre-processed string, and `payload` is a hash that will be transformed.
    #
    # @example:
    #   MyModule.put(url: 'http://example.com', payload: { foo: 'bar' })
    #   or
    #   MyModule.put(url: 'http://example.com', body: '{"foo":"bar"}')
    #
    # @param url [String] The URL to send the request to.
    # @param body [String, nil] The pre-processed string of the request. Default is nil.
    # @param payload [Hash] Any payload for the request. Default is empty hash.
    # @param xheaders [Hash] Any additional headers for the request. Default is empty hash.
    # @param params [Hash] Any parameters for the request. Default is empty hash.
    # @raise [ArgumentError] If both `body` and `payload` are provided.
    # @return [Hashie::Mash] The response from the request
    def self.put(url:, body: nil, payload: {}, xheaders: {}, params: {})
      check_body_and_payload(body, payload)

      headers = BASE_HEADERS.merge(xheaders)
      body ||= Oj.generate(payload.deep_stringify_keys)
      options = { headers: headers, query: params, body: body }

      response = HTTParty.put(url, options)
      process(response)
    end

    # Sends a DELETE request.
    #
    # @param url [String] The URL to send the request to.
    # @param xheaders [Hash] Any additional headers for the request.
    # @return [Hashie::Mash] The response from the request.
    def self.delete(url:, xheaders: {})
      headers = BASE_HEADERS.merge(xheaders)
      options = { headers: headers }

      response = HTTParty.delete(url, options)
      process(response)
    end

    # Processes and returns the response from an HTTP request.
    #
    # @param rsp [HTTParty::Response] The response from the request.
    # @return [Hashie::Mash] The processed response.
    def self.process(rsp)
      coded_response = code_response(rsp, rsp.headers)
      log_coded_response(coded_response) if RESPONSE_LOGGING == 'LOG_RESPONSES'
      Hashie::Mash.new(coded_response)
    end

    # Generates a coded response from a Http Response.
    #
    # @param rsp [HTTParty::Response] The Http response.
    # @param headers [HTTParty::Response::Headers] The processed headers from the response.
    # @return [Hash] The coded response.
    def self.code_response(rsp, headers)
      response_code = rsp.code
      {
        code:    response_code,
        url:     rsp.request.last_uri.to_s,
        headers: headers,
        cookies: headers[:set_cookie],
        body:    rsp.body.blank? ? nil : formatted_body(rsp.body)
      }
    end

    # Formats the body of a response.
    #
    # @param body [String] The body of the response.
    # @return [Hash] The formatted body of the response.
    def self.formatted_body(body)
      JSON.parse(body).to_h.deep_transform_keys(&:underscore)
    rescue JSON::ParserError => _e
      Oj.load(body)&.deep_symbolize_keys
    end

    # Checks if both body and payload are provided and raises an error if so.
    #
    # @param body [String, nil] The body of the HTTP request as a preformatted string.
    #                          This is expected to be nil if a payload is provided.
    # @param payload [Hash, nil] The payload of the HTTP request as a hash.
    #                          This should be empty if a body is provided.
    # @raise [ArgumentError] If both body and payload are provided.
    def self.check_body_and_payload(body, payload)
      raise ArgumentError, 'Cannot provide both body and payload' if body && payload
    end

    # Logs an HTTP message.
    #
    # @param message_type [String] The type of the message, either 'Request to' or 'Response from'.
    # @param msg [Hash] The message to be logged.
    # @param url [String] The URLassociated with the message.
    # @return [nil]
    def self.log_http_message(message_type, msg, url = nil)
      log ||= Logger.new("#{Rails.root}/log/transport.log", 10, 5 * 1024 * 1024)
      log.debug "#{message_type} #{msg[:url] || url}"

      msg.except(:url).each do |key, value|
        log.debug "#{key.to_s.ljust(10, ' ')} : #{value}" unless key == :headers
      end
    end

    # Logs a coded response.
    #
    # @param resp [Hash] The response to be logged.
    # @return [nil]
    def self.log_coded_response(resp)
      log_http_message('Response from', resp)
    end
  end
end

```