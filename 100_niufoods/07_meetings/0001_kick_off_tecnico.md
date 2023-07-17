# Preguntas

## Create a recurring charge
**contactDetails** 

requerido los atributos de  documentType y documentNumber

rps
tema con riesgos: aprobó no enviar los campos: Tipo de documento y Número de documento.

## Make an One-click payment
**contactDetails**.
requerido los atributos de  documentType y documentNumber 

**orderDetails**

dentro de él se necesita shippingDetails y billingDetails

hay campos que no podemos obtener por el momento dado que no se lo solicitamos
zipCode.

Por otro lado, cuando el usuario tiene retiro en tienda, no existe shipping detail por lo que no deberia ser requerido.

Lo mismo para billing Details. el zipCode y los datos en sí de dirección no los podemos obtener dado que será retiro en tienda

**productDetails**

Para generar un cobro, ¿por qué es necesario enviar el detalle de la boleta? por temas de seguridad? respaldo?, no nos queda claro el porqué este campo en especifico.


Cómo será el proceso de solicitud de ayuda con el área técnica?
Para la integracion de OneClick, tuve un problema relacionado a la eliminación de la tarjeta.

Dado que me dice que no existe el endpoint y estoy utilizando el mismo que sale en la documentación.


> Importante
Ten en cuenta que, debido a nuestras políticas de riesgo, los medios de pago disponibles y el tipo de integración pueden variar al momento en que formalices la afiliación. Te indicaremos cómo proceder en caso de que este proceso aplique para tu comercio.


# Nota
- Fernanda acero es la encargada técnica. a traves de slack
- son dos etapas de certificación
- periodo de estabilizacion de 30 dias luego de productivo
- Una vez finalizada post producción, equipo de soporte atento

Cómo son los timepos de respuestas?
- Proceso de integración, Slack (proceso *

# Actions
- 