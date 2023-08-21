---
tags: pof requirement
---

## Requerimiento

Se requiere que la aplicación tenga truncamiento en los precios

## Objetivo

No tener problemas legales con cobrarle de más a los clientes. y se hará truncamiento de los centavos en méxico


## Información útil

Antes de empezar + consideraciones
- [[config_change_between_countries |Cambiar entre paises]]: Probar que ambos paises funcionen
- [[100_niufoods/03_projects/pof/urils_commands/close_shift|Cerrar turno forzadamente]]: Opcional, en caso de tener el turno abierto

ChinaBackend está truncado. no la lógica, pero si revisar de ahí el cómo se hace el truncamiento

En ChinaBackend y Pof existen los mismo archivos de truncamiento

- Money Helper
- config_money_helper
- extensión de gettable

**pedir una base de datos para salón** 

prs
[https://bitbucket.org/niusushi/china-backend/pull-requests/300](https://bitbucket.org/niusushi/china-backend/pull-requests/300)
[https://bitbucket.org/niusushi/china-backend/pull-requests/298](https://bitbucket.org/niusushi/china-backend/pull-requests/298)

[1644 - Truncar valores pof](https://bitbucket.org/nnodes/pof/pull-requests/169) en este trabaje
dependiente: 
[1587 - Mostrar decimales por localizacion](https://bitbucket.org/nnodes/pof/pull-requests/151)

## Vistas involucradas

### Venta rapida
![[Pasted image 20230707154033.png]]
toda la vista truncada, igual se muestran los 2 decimales.


ENV. Truncated_amount true o false... 
### Rendiciones
![[Pasted image 20230707153837.png]]

**Truncamientos**

monto medios de pago: no
total cuenta: si
total rendido: no
diferencia a pagar: no,  

Vuelto, no.
propina, si

### Index de ventas
![[Pasted image 20230707154224.png]]

Todo truncado, excepto las propinas

### Edit de venta rápida
![[Pasted image 20230707154241.png]] 

y duplicar una orden..
### Cierre de caja
![[Pasted image 20230707154337.png]]
**Propina**, no hay que truncar


### VIsta cash Delivery

![[Pasted image 20230712120300.png]]

#note
Por alguna razón, se está truncando la propina. porqué? no lo sé.

---
## Avance

El Gabriel me ayudó a configurar el projecto, por que no me acordaba de cómo cambiar entre paises.


12:04
Metodos se ejecutan demasiadas veces en el check.
sin siquiera hacer lo que realmente tiene que hacer en un comienzo.

hay calculos tanto de front cómo de back, hay una alta probabilidad de que esto no calcen con los valores calculados, por ejemplo, cuando uno hace una comanda, y luego la rinde, el 50 y 40% se vuelven a calcular pero ahora por el lado del back. y el la comanda se calculan por el lado de front, uno tiende a pensar que por modificar el precio del front debería estar ok, pero no.

12:13
Los prs del Gabriel no están actualizados, por lo que, le procedí a preguntar y esperar la respuesta. esto lo necesito dado que necesito utilizar los métodos (modificados en el pr de cambiar los nombres de los metodos para que no tengan money) en calculos de descuentos del 40 y 50%

13:09

existe un modeo llamado BlockingDiscount.
este se crea al momento de hacer una rendición, y asignarle un porcentaje de descuento

El flujo padre viene de check controller
`def create_quick_sale`

llama al `save_check`. que si se logra guardar bien, crea un `add_line_discount` (metodo de check)
y ejecuta un par de callback, uno de los callbacks de `after_save, crea la rendición`

`add_line_discount`, va a buscar un descuento y con el descuento(BlockingDiscount encontrado)
ejecuta un metodo del descuento llamado `add_discount` recibiendo por parametro la rendición
leugo crea una instancia intermedia entre descuentro y rendición de tipo polimorfica que almacena el valor, esta intermedia se llama `LineDiscount`

dentro de LineDiscount, tenemos lso montos que serán descontado.

el problema, es que inmediatamente despues, en otro callback, se llama un método llamado recalculate_discounts, `after_update :recalculate_discounts`

y recalcula y se pasa por el forro lo anterior de add_discount.

13:57

LineDiscount posee un callback: `after_save :set_check_total_price`
Que la intención es actualizar el total_price de check,

llamando al meodo de `update_total_price` que a su vez llama `calculate_total_price` para actualizar el line total_price de check.


Me estoy dando cuenta que hay calculos que lo hacen directamente con el %, y otros con el 1 -%, para los calculos no dan igual dado que si uno trunca, los resultados difieren.

ejemp: 
`88*0.4=35.2`  truncado es `35`
`88-35=53`
pero si ahora lo sacamos al reves
`88*0.6=52.8` truncado es `52`

Al final, se opta por truncar el calculate_total_price, dado que el descuento tiene que ser el completo


al momento de pagar, no puede pagar lo justo, sale bloqueado
![[Pasted image 20230711154511.png]]


15:56

Cuando hago un retiro, los montos no calzan, esto no tiene na que ver conmigo. es un posible #rare_operation

El envio se le suma despues de hacer los calculos de descuento de los porcentajes.
debe ser una regla de negocio.

![[Pasted image 20230711155626.png]]


17:24
Cómo útlimo, tengo que esperar que Gabriel Toro, actualice sus prs para inyectar el código ahí

esta guardado en un stash mientras

2023-07-12 15:19





---
## Checklist de tareas que hacer 

Para todos, habla de referente a montos

[[#Venta rapida]]
- [x] Menú lateral izquirdo
- [x] Cada item del menú central
- [x] Sección de calculos y totales

[[#Rendiciones]]
- [x] monto medios de pago: no
- [x] total cuenta: si
- [x] total rendido: no
- [x] diferencia a pagar: si, TODO (yo creo que no, porque ya le hiciste el descuento en el total, sería doble truncamiento sale ganando por mucho el cliente)
- [x] Vuelto, no.
- [x] propina, no

[[#Index de ventas]]
- [x] SI

[[#Edit de venta rápida]]
- [x] Calculos de totales
- [x] Corroborar los productos
- [x] Corroborar Sidebar izquiera

**Duplicar orden**
- [x]  Tenga los valores truncados 

[[#Cierre de caja]]
- [x] corroborar


## Solución

Al final se hace redondeo de los valores, no truncamiento. y solo se genera para las rendition, agregar un override de los valores.

**Nuevo requerimiento** 

Solo truncar para la propina del 10%.