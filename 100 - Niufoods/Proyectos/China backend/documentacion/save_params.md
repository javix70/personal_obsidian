# Documentación de Errores en `save_params` Método

Este documento describe los errores que pueden ser lanzados por el método `save_params` y proporciona una breve descripción de cada uno.

## E001-0: Cupón no encontrado

- **Descripción**: Este error ocurre cuando no se encuentra un cupón con el ID proporcionado en los parámetros.
- **Mensaje de Error**: `"E001-0: Cupón '#{coupon_customer_id}' no encontrado"`
- **Posibles Causas**: El ID del cupón proporcionado en `params[:coupon_customer_id]` no existe en la base de datos.

## E001-1: Cupón no activo

- **Descripción**: Este error ocurre cuando el cupón encontrado no está activo.
- **Mensaje de Error**: `"E001-1: Cupón '#{coupon_customer_id}' no activo"`
- **Posibles Causas**: El cupón asociado con el ID proporcionado no está activo.

## E002: Tipo de pago no encontrado

- **Descripción**: Este error ocurre cuando no se encuentra un tipo de pago con el ID proporcionado en los parámetros.
- **Mensaje de Error**: `"E002: Tipo de pago '#{params[:payment_type_id]}' no encontrado"`
- **Posibles Causas**: El ID del tipo de pago proporcionado en `params[:payment_type_id]` no existe en la base de datos.

## E003: Usuario TBK no encontrado

- **Descripción**: Este error ocurre cuando no se encuentra un usuario TBK con el ID proporcionado en los parámetros.
- **Mensaje de Error**: `"E003: Usuario TBK '#{tbk_user_id}' no encontrado"`
- **Posibles Causas**: El ID del usuario TBK proporcionado en `params[:tbk_user_id]` no existe en la base de datos.

## E004: Tipo de pago Oneclick no encontrado

- **Descripción**: Este error ocurre cuando no se encuentra un tipo de pago Oneclick en la base de datos.
- **Mensaje de Error**: `"E004: Tipo de pago Oneclick no encontrado"`
- **Posibles Causas**: No hay un tipo de pago con el nombre 'Oneclick' en la base de datos.

## E005-1: Si eliges delivery, debes elegir una dirección

- **Descripción**: Este error ocurre cuando se elige 'Delivery' como tipo de orden pero no se proporciona una dirección.
- **Mensaje de Error**: `"E005-1: Si eliges delivery, debes elegir una dirección"`
- **Posibles Causas**: No se proporcionó un `address_id` en los parámetros cuando el tipo de orden es 'Delivery'.

## E005-2: Dirección no encontrada

- **Descripción**: Este error ocurre cuando no se encuentra una dirección con el ID proporcionado en los parámetros.
- **Mensaje de Error**: `"E005-2: Dirección '#{params[:address_id]}' no encontrada"`
- **Posibles Causas**: El ID de la dirección proporcionado en `params[:address_id]` no existe en la base de datos.

## E006-1: El restaurant no fue encontrado

- **Descripción**: Este error ocurre cuando no se encuentra un restaurante con el ID proporcionado en los parámetros.
- **Mensaje de Error**: `"E006-1: El restaurant '#{params[:restaurant_id]}' no fue encontrado"`
- **Posibles Causas**: El ID del restaurante proporcionado en `params[:restaurant_id]` no existe en la base de datos.


## E006-2: El restaurante no está abierto

- **Descripción**: Este error ocurre cuando el restaurante encontrado con el ID proporcionado no está abierto.
- **Mensaje de Error**: `"E006-2: El restaurante '#{restaurant.name}' no está abierto"`
- **Posibles Causas**: El restaurante asociado con el ID proporcionado no está abierto en este momento.

## E006-3: El restaurante no se almacenó correctamente

- **Descripción**: Este error ocurre cuando el ID del restaurante no se almacena correctamente en el registro de la orden.
- **Mensaje de Error**: `"E006-3: El restaurante '#{params[:restaurant_id]}' no se almacenó correctamente"`
- **Posibles Causas**: Puede haber un problema con la base de datos o con la lógica de almacenamiento.

## E007-1: Fallo al guardar la orden

- **Descripción**: Este error ocurre cuando hay un fallo al guardar la orden debido a la invalidez del registro.
- **Mensaje de Error**: `"E007-1: Fallo al guardar la orden. Detalles: #{e.record.errors.full_messages.join(', ')}"`
- **Posibles Causas**: Uno o más campos de la orden no cumplen con las validaciones requeridas.

## E007-2: Se ha producido un error inesperado al guardar el pedido

- **Descripción**: Este error ocurre cuando hay un error inesperado al guardar la orden.
- **Mensaje de Error**: `"E007-2: Se ha producido un error inesperado al guardar el pedido. Detalles: #{e.message}"`
- **Posibles Causas**: Puede ser cualquier excepción no capturada específicamente.
