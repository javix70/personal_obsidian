- [x] Si la llamada no tiene body, controlarlo
- [x] Si intento eliminar un PaymentCard, tira error si tiene un PaymentIntent asociado.

Revisión de pr

## Generales
- [x] KushkiHelper-> Helper China
- [x] backend comillas dobles
- [x] Para todos loa ActiveRecord::Base -> Application record.



## PaymentIntent -> attemp
 cambiar nombre de PaymentIntent a Payment Attempts (o cómo se escriba)
- [x] cambiar los json por jsonb
- [x] cambiar las id por UUID
- [x] quitar response_at(tentativo) quitar las fechas de estado.
- [x] Simplificar metodos de payment_ , cambiar los PaymentIntent.state
- [x] los update siempre con Bang
- [x] Amount integer
- [x] amoun_currency, amount_cent ( migracion de kushko. pendiente, todos los `_currency`. y punto `_cent` kushki.  dejar un TODO.)
- [x] metadata jsonb  -> meta

## PaymentCard
 - [x] La base de datos a utilizar es la centralizada. (transversar a las marcas)
 - [x] agregar todo, al customer info

## PaymentController
- [x] los render json -> json_reponse
- [x] revisar el response del gateway not found (si el front muestra el propio mensaje )

## ACtiveInteraction
- [x] usar los bang, y quitar los valid.
- [x] usar el exception_handler

## Transport
- [x] En el authenticate, agregar todo para verificar su funcionamiento



- [x] Agregar foreign key a paymentCard
- [x] y debe heredar de la Centralize


## Probar kushki nuevamente a ver si todo anda bien
https://bitbucket.org/niusushi/china-delivery/branch/kushki-integration

KUSHKI_MERCHANT_ID: "49abdde783a14d5da1c012532b9909af"