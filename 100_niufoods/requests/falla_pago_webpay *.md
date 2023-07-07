

Análisis de problema

Flujo
1. usuario registra tarjeta (opcional)
2. Usuario selecciona productos a pagar
3. Usuario presiona pagar con webpay
4. Front llama al backend la endpoint de authorize_transaction
5. Backend genera un WebpayTransaction
6. el backned llama al SDK de transbank Transbank::Webpay::Oneclick::MallTransaction.authorize
7. Respuesta
	1. exitosa
		1. le manda la url al front con la vista éxito
	2. rechazada
		1. Elimina la orden de compra recien creada
		2. Manda payment_status: false al front
		3. Manda Datos de la tarjeta al front
8. Front muestra error (en un toast)
![[Pasted image 20230615111139.png]]

9. El front queda en la vista de terminar una orden, y puede continuar con la compra


Conclusión:

1. Para el método del SDK de transback
```ruby
def request_authorize_transaction(buy_order, customer_id, tbk_user, stores_input)
Transbank::Webpay::Oneclick::MallTransaction.authorize(username: customer_id,
													   tbk_user: tbk_user.tbk_user_key,
														parent_buy_order: buy_order,
														details: stores_input)

rescue Transbank::Webpay::Oneclick::Errors::MallTransactionAuthorizeError => e
log = WebpayPayment.init_webpay_log
log.debug("[AUTHORIZE_TRANSACTION] Payment Error: #{e.inspect}")
e
end
```
La captura de error por parte de Transbank no es clara.
![[Pasted image 20230615111549.png]]
Cómo podemos ver en la imagen el error entregado por Transbank es de `Unexpected error` por lo que no se puede determinar el tipo de error en especifico




Pendiente: A que el alexis me mande la instancia de la tabla order para realizar pruebas


## Solución momentanea
al final, era que el front de niu no envia el parametro de customer_id, asiendo que en el endpoint se caiga la busqueda

Lo que se hizo, fue agregar logger en el metodo de autorización


## Solución definitiva

No se ha implementado, pero en base a los loggers, se podrá generar un mejor análisis a futuro
