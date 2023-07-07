Resumen:

1. Separación de Pr de backend de kushki, listo para revisar
2. Agregar test unitarios a los Casos de Usos para esos prs
3. Revisión de casos de error con OneClick, lo que sucede es que. aquí hay 2 puntos, 1 la interpretación del campo y la otra el error caso borde con transbank y queda todo cómo pendiente(pos_status, payment_state)
4. Karla me estuvo revisando el pr de las imagenes por grupo de restaurants. hoy lo veremos un rato, para ver los detalles y mejoras de funcionalidad
5. Estuve hablando tambien con la gente de Transbank para poder tener 100% un ambiente local, me pude conectar bien, suscribo una tarjeta, pero no logro generar el cobro que es lo que me importa, me uní al slack de soporte para hacer las dudas correspondientes.

Pendiente para hoy:

- [x] Seguir revisando el caso de error de OneClick mencionado.
- [x] Enviar correo a kushki, por ciertos datos que piden.
- [x] Hablar con raúl para ver si puede tomar el front
- [x] Para agregar la configuración de bajar kushki [En este pr](https://bitbucket.org/niusushi/china-backend/commits/9d055fc2bb0c45c24df9a91b333f42fe8e9e5b52)
- [x] Paga GENERATE_CHARGE 
	- [x] Enviar la orden las POS_SERVER cuando el pago se generó
	- [x] agregar los safe navigator `restaurant.restaurant_group&.name`
	```ruby
	def shipping_details(restaurant)
		{
		name: @customer.name,
		phone: @customer.phones.first,
		address: restaurant ? restaurant.address : @order.address,
		city: restaurant ? restaurant.comune.city : @order.city,
		region: restaurant ? restaurant.restaurant_group.name : @order.region,
		country: KUSHKI_CONFIGS.countries.mexico.name,
		zip_code: '64000' # no se de donde sacar esto
		}
	end
	
	  
	
	# Creates the billing details for the Kushki charge.
	#
	# @param restaurant [Restaurant] Restaurant associated with the order.
	# @return [Hash] Hash with the billing details for the order.
	def billing_details(restaurant)
		{
		name: @payment_card.card_holder_name,
		phone: @customer.phones.first,
		address: @customer.addresses.first&.complete_address,
		city: @customer.addresses.first&.comune&.city,
		region: restaurant ? restaurant.restaurant_group.name : @order.region
		country: KUSHKI_CONFIGS.countries.mexico.name,
		zip_code: '64000' # no se de donde sacar esto
		}
	end
```