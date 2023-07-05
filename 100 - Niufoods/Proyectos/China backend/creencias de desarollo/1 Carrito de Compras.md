Como cliente, quiero agregar productos a mi carrito de compras para poder revisarlos y decidir si quiero comprarlos.

Criterios de aceptación:

- El cliente puede agregar productos al carrito de compras.
- El cliente puede ver los productos agregados en su carrito de compras.
- El cliente puede modificar la cantidad de cada producto en su carrito.
- El cliente puede eliminar productos de su carrito de compras.


consideraciones


1. **Persistencia del Carrito**: En algunos sistemas, el carrito activo se guarda de tal manera que si el cliente cierra su navegador o vuelve a visitar el sitio más tarde, los artículos que agregó previamente todavía estarán en su carrito. Esto se puede lograr mediante el uso de cookies o almacenando el carrito en la cuenta del usuario si está registrado.
    
2. **Límite de Tiempo**: Algunos sistemas pueden tener un límite de tiempo para cuánto tiempo los artículos permanecerán en el carrito activo, especialmente si hay inventario limitado. Esto puede ayudar a garantizar que los artículos no se reserven indefinidamente si el cliente no tiene la intención de completar la compra.
    
3. **Transición a Orden**: Cuando un cliente decide proceder al pago, el carrito activo se convierte en una orden y entra en el proceso de finalización de la compra. En este punto, el carrito ya no es editable y el cliente debe completar el pago para finalizar la orden.
    
4. **Creación de un Nuevo Carrito**: Una vez que el cliente ha completado una compra, su carrito activo se considera "cerrado" y se crea un nuevo carrito vacío para futuras compras.