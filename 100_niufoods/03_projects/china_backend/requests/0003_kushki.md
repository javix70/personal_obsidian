---
created_at: 2023-07-17 15:26
updated_at: 2023-07-17 15:26
tags:
  - [china_backend]
  - requirement
---



## Requerimiento

Integración con kushki para poder realizar pagos oneClick o OnDemand
Todo el flujo, recomendado por [Kushki OnClick](https://docs.kushki.com/mx/one-time-payments/card/on-demand)


## Objetivo

El cliente puede pagar con kushki en méxico

## Información útil
[Kushki Online Payment](https://api-docs.kushkipagos.com/docs/online-payments/services-by-country), de aquí podrás sacar detalles y validaciones de cada llamada al servicio
[[2023-06-16_separar_prs_de_kushki|Linea de prs más correcciones y anotaciones]]

Si quieres puedes utilizar [[update_restorant_datetime|Actualizar hora de los restaunrant]]


Referencia hacia el daily note que se trabajó antes de crear esta plantilla
## Prs involucrados

1. [1628-kushki-integration](https://bitbucket.org/niusushi/china-backend/pull-requests/310) -> development
2. [1628-add-18n-for-activeinteraction](https://bitbucket.org/niusushi/china-backend/pull-requests/311) -> 1628-kushki-integration
3. [1628-add-kushki-integration](https://bitbucket.org/niusushi/china-backend/pull-requests/312) -> 1628-add-18n-for-activeinteraction
4. [1628-model-design](https://bitbucket.org/niusushi/china-backend/pull-requests/313) -> 1628-add-kushki-integration
5. [1628-subscribe-card](https://bitbucket.org/niusushi/china-backend/pull-requests/314) -> 1628-model-design
	1. [1628-generate-charge](https://bitbucket.org/niusushi/china-backend/pull-requests/315) -> 1628-subscribe-card
6. [1628-delete-suscribed_card](https://bitbucket.org/niusushi/china-backend/pull-requests/316) -> 1628-generate-charge
7. [1628-list-card](https://bitbucket.org/niusushi/china-backend/pull-requests/317) -> 1628-delete-suscribed_card
8. [1633-show-logger-payment-intent](https://bitbucket.org/niusushi/china-backend/pull-requests/319) -> 1628-list-card
9. [1628-add-kushki-to-preferences](https://bitbucket.org/niusushi/china-backend/pull-requests/320) -> 1633-show-logger-payment-intent
10. 1628-add-kushki-to-preferences



---
## Avance

Dado la meeting de [[0001_kick_off_tecnico]] con Kushki.
Se abordaron unos puntos que no habia considerado como la multiplicación del total por 10 a la 6.

Y se hará testeo del flujo.

estoy probando el eliminar tarjeta de kushki
por insomnia me funciona correctamente
Pero al momento de hacerlo por el código, no me funciona bien.

al final fue un error código, la solucion fue leer la documentación ocn lo que respecta a typhoues gem y vi que no hay que pasarle headers, sino que params..

Las pruebas quedaron ok., probé varios casos, cambié lo mencionado en la reunion de kushkil

Además modifqué el flujo segun lo conversado, de esperar la respuesta del pago en caso de que el pago no se procece correctamente por algún eror

---
## Checklist de tareas que hacer 

con las ramas de 
[Frontend](https://bitbucket.org/niusushi/china-delivery/branch/kushki-integration)
[Backend](https://bitbucket.org/niusushi/china-backend/pull-requests/320)

probar el flujo correspondiente para validar que todo esté funcionando como correpsonde

