- Resolví los comentarios que me habia dejado karla en el pr de Habilitar y Deshabilitar los tipos de retiro desde el admin, además aproveché en ese mismo PR aumentar la paginación a 100 y documentar con YARD.
- Con lo que respecta a la integreación.
	- Hoy  terminaré la conexión, especificamente generar cobros cuando cuando el front presiona, confirmar compra (esta creo que es la parte más enredada pero la última), basicamente sería terminar la integración de manera funcional, tanto back cómo front, siguiendo por ahora el mismo lineamiento de diseño (por ahora podriamos seguir con la misma forma en cómo se registra una tarjeta y cómo paga con una tarjeta ya inscrita en tbk, pero ahora con kushki, luego en otra salida, mejorar el diseño dado que en primera instancia no agregarán más de 2 tarjetas y no se verá tan feo). 
	- Implementación de test a la integración (ver estrategias para no sobrecargar el endpoint de prueba)
	- Revisión y aplicar un nuevo diseño para las pasarelas de pago



---------------
# In working

Avanzando en la creación de generar un cargo a la tarjeta de kushki.

Ya se puede crear transacciones aprobadas con OneClick

1) Revisar cada caso que tienen ellos con las tarjetas, para analizar que sucede:
	1)  **Transacción aprobada**: `5451951574925480` 
		1) no hay error en recibir el token. por lo estamos OK.
	2)  **Transacción declinada en solicitud de token (front-end)**: `4574441215190335`
		1) Falta el manejo de errores por parte de front
	3)  **Transacción declinada en solicitud de cobro (back-end)**: `4349003000047015`
		1) Falta enviar los mensajes de errores para el front para que vea que no se pudo por X o Y razón
		2) No estoy seguro si es necesario guardar estos logs, asumo que sí. pero tengo dudas donde debería hacerlo.


