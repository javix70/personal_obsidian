****
Que voy hacer hoy?

Dudas
En la docu de kuhski, piden minimos para [[2023-06-13_kushki_and_des-able_picking#Checklist certificación Kushki|Obtener Certificado]]  que se encuentran en  insertar link [Preparar certificación](https://docs.kushki.com/mx/one-time-payments/card/on-demand#4-prepara-tu-certificaci%C3%B3n)


 Tengo duda con lo que dice en la [Docu kushki](https://docs.kushki.com/mx/getting-started/go-live)
	>Los medios de pago disponibles y el tipo de integración pueden variar al momento en que formalices la afiliación

Entonces, 

- [x] Manejo de errores ahora por parte del front con los casos de pruebas recomendados por kushki.
- [x] Implementar test unitarios para los endpoint desarrollados


- [x] Raul necesitaré tu ayuda hoy para trabajar con lo que respecta al formulario de Kushki, y formas de mostrarlo y validaciones, nosé si tienes tiempo hoy, o mañana. (diseño y flujo) por que las conexiones con el backend ya estan ok


[Status check](https://docs.kushki.com/mx/notifications/webhooks/webhooks-check) de Kushki Apagar o Enceder .
Si o si, tener un dato variable de ambiente que sea apagado completamente
Otro para el interfaz


raul me ayudo a mejorar la interfaz de inscripción de tarjeta en kushki
pendiente

- [x] Enviar correo a kushki, para preguntar sobre el detalle de la orden. y shipping_details, subtotalIva y subtotalIva0

- [x]  En el front se crea un modal con el formulario a enviar a kushki para registrar una tarjeta, hablar con Raul haber si puede tomar el front.

- [x] separar los prs
      Estoy aprovechando de creale test unitarios a cada caso de uso.

ya tengo la primera separación, me faltan 4 prs más

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


china-delivery git:(kushki-integration) - destructurar el WIP commit

---

Para mañana prioridad.

1. Analizar qué pasa cuando falla transbank
2. Armar reporte de data real, con fallo, más una solución (con la documentación de transbank)
3. Hablar con alexis primero
4. Seguir con la separación de prs.






