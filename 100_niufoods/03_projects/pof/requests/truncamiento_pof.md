1. [[#Requerimiento|Requerimiento]]
1. [[#Objetivo|Objetivo]]
1. [[#Información útil|Información útil]]
1. [[#Vistas involucradas|Vistas involucradas]]
	1. [[#Vistas involucradas#vista 1|vista 1]]
	1. [[#Vistas involucradas#vista 2|vista 2]]
	1. [[#Vistas involucradas#vista 3|vista 3]]
	1. [[#Vistas involucradas#vista 4|vista 4]]
	1. [[#Vistas involucradas#vista 5|vista 5]]
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
- [[config_change_between_countries |Cambiar entre paises]]: Provar que ambos paises funcionen
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

### vista 1
![[Pasted image 20230707154033.png]]
toda la vista truncada, igual se muestran los 2 decimales.


ENV. Truncated_amount true o false... 
### vista 2
![[Pasted image 20230707153837.png]]

**Truncamientos**

monto medios de pago: no
total cuenta: si
total rendido: no
diferencia a pagar: si, TODO
Vuelto, no.
propina, no

### vista 3
![[Pasted image 20230707154224.png]]

Todo truncado, excepto las propinas

### vista 4
![[Pasted image 20230707154241.png]] 

y duplicar una orden..
### vista 5
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
