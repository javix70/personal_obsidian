1. [[#Requerimiento|Requerimiento]]
1. [[#Objetivo|Objetivo]]
1. [[#Información útil|Información útil]]
1. [[#Vistas involucradas|Vistas involucradas]]
	1. [[#Vistas involucradas#Venta rapida|Venta rapida]]
	1. [[#Vistas involucradas#Rendiciones|Rendiciones]]
	1. [[#Vistas involucradas#Index de ventas|Index de ventas]]
	1. [[#Vistas involucradas#Edit de venta rápida|Edit de venta rápida]]
	1. [[#Vistas involucradas#Cierre de caja|Cierre de caja]]
1. [[#Para impresiones|Para impresiones]]
	1. [[#Para impresiones#Reportes.|Reportes.]]
	1. [[#Para impresiones#Informe ZETA|Informe ZETA]]
1. [[#Avance|Avance]]


## Requerimiento

Se requiere que la aplicación tenga truncamiento en los precios

## Objetivo

No tener problemas legales con cobrarle de más a los clientes. y se hará truncamiento de los centavos en méxico


## Información útil

Antes de empezar + consideraciones
- [[config_change_between_countries |Cambiar entre paises]]: Probar que ambos paises funcionen
- [[close_shift|Cerrar turno forzadamente]]: Opcional, en caso de tener el turno abierto

ChinaBackend está truncado. no la lógica, pero si revisar de ahí el cómo se hace el truncamiento

En ChinaBackend y Pof existen los mismo archivos de truncamiento

- Money Helper
- config_money_helper
- extensión de gettable

prs
[https://bitbucket.org/niusushi/china-backend/pull-requests/300](https://bitbucket.org/niusushi/china-backend/pull-requests/300)

[https://bitbucket.org/niusushi/china-backend/pull-requests/298](https://bitbucket.org/niusushi/china-backend/pull-requests/298)


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
diferencia a pagar: si, TODO
Vuelto, no.
propina, no

### Index de ventas
![[Pasted image 20230707154224.png]]

Todo truncado, excepto las propinas

### Edit de venta rápida
![[Pasted image 20230707154241.png]] 

y duplicar una orden..
### Cierre de caja
![[Pasted image 20230707154337.png]]
**Propina**, no hay que truncar

---
## Para impresiones

**app/services/printer_manager/thermal_utils/templates**
los nombres de la vista con la clase, se llaman igual
si quiero imprimir, veo el string de utils_pre_receipt


### Reportes.
En teoria no debería cambiar nada. agregar TODO

### Informe ZETA
files.
day_count_sheet, y count_sheet

---
## Avance

El Gabriel me ayudó a configurar el projecto, por que no me acordaba de cómo cambiar entre paises.




---
Checklist de tareas que hacer 

Para todos, habla de referente a montos

[[#Venta rapida]]
- [ ] Menú lateral izquirdo
- [ ] Cada item del menú central
- [ ] Sección de calculos y totales

[[#Rendiciones]]
- [ ] monto medios de pago: no
- [ ] total cuenta: si
- [ ] total rendido: no
- [ ] diferencia a pagar: si, TODO
- [ ] Vuelto, no.
- [ ] propina, no

[[#Index de ventas]]
