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


Referencia hacia el daily note que se trabajó antes de crear esta plantilla
## Prs involucrados

1. [1628-kushki-integration](https://bitbucket.org/niusushi/china-backend/pull-requests/310) -> development
2. [1628-add-18n-for-activeinteraction](https://bitbucket.org/niusushi/china-backend/pull-requests/311) -> 1628-kushki-integration
3. [1628-add-kushki-integration](https://bitbucket.org/niusushi/china-backend/pull-requests/312) -> 1628-add-18n-for-activeinteraction
4. [1628-model-design](https://bitbucket.org/niusushi/china-backend/pull-requests/313) -> 1628-add-kushki-integration
5. [1628-subscribe-card](https://bitbucket.org/niusushi/china-backend/pull-requests/314) -> 1628-model-design
6. [1628-generate-charge](https://bitbucket.org/niusushi/china-backend/pull-requests/315) -> 1628-subscribe-card
7. [1628-delete-suscribed_card](https://bitbucket.org/niusushi/china-backend/pull-requests/316) -> 1628-generate-charge
8. [1628-list-card](https://bitbucket.org/niusushi/china-backend/pull-requests/317) -> 1628-delete-suscribed_card
9. [1633-show-logger-payment-intent](https://bitbucket.org/niusushi/china-backend/pull-requests/319) -> 1628-list-card
10. [1628-add-kushki-to-preferences](https://bitbucket.org/niusushi/china-backend/pull-requests/320) -> 1633-show-logger-payment-intent
11. 1628-add-kushki-to-preferences



---
## Avance

Nada. dado que el avance se fue haciendo incorrectamente en la daily notes

---
## Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] push?