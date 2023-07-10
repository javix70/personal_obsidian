## Requerimiento

Se requiere que la aplicación tenga truncamiento en los precios

## Objetivo

No tener problemas legales con cobrarle de más a los clientes. y se hará truncamiento de los centavos en méxico


## Información útil

Antes de empezar + consideraciones
- [[config_change_between_countries |Cambiar entre paises]]: Provar que ambos paises funcionen
- [[close_shift|Cerrar turno forzadamente]]: Opcional
- 


ChinaBackend está truncado. no la lógica, pero si revisar de ahí el cómo se hace el truncamiento

En ChinaBackend y Pof existen los mismo archivos de truncamiento

- Money Helper
- config_money_helper
- extensión de gettable

prs
[https://bitbucket.org/niusushi/china-backend/pull-requests/300](https://bitbucket.org/niusushi/china-backend/pull-requests/300)

[https://bitbucket.org/niusushi/china-backend/pull-requests/298](https://bitbucket.org/niusushi/china-backend/pull-requests/298)

Revisar donde deberíamos trabajar con el truncamientos

CB -> solo los calculos finales es cuando se trunca.


truncado (utilizar el método que corresponda). la vista, subtotal, potcentaje
generar linea extra para mostrar algo como: ley de redondeo pero con TODO para verlo más adelante

## Vistas
![[Pasted image 20230707154033.png]]
toda la vista truncada, igual se muestran los 2 decimales.


ENV. Truncated_amount true o false... 
![[Pasted image 20230707153837.png]]

**truncamientos**

monto medios de pago: no
total cuenta: si
total rendido: no
diferencia a pagar: si, TODO
Vuelto, no.
propina, no


![[Pasted image 20230707154224.png]]

Todo truncado, excepto las propinas

![[Pasted image 20230707154241.png]] **edit** 

y duplicar una orden..

![[Pasted image 20230707154337.png]]

Ser propina, no hay que truncar

## **impresionar que estan en**

**app/services/printer_manager/thermal_utils/templates**

los nombres de la vista con la clase, se llaman igual

si quiero imprimir, veo el string de utils_pre_receipt


## Reportes.

En teoria no debería cambiar nada. agregar TODO

## Informe **ZETA**
files.
day_count_sheet, y count_sheet

---
Avanzando más notas

El Gabriel me ayudó a configurar el projecto, por que no me acordaba de cómo cambiar entre paises

