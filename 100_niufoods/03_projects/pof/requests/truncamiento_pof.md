

ChinaBackend está truncado. no la lógica, pero si revisar de ahí el cómo se hace el truncamiento

en pof existe un mismo archivo de 

**Money Helper**
**config_money_helper**
extensión de **gettable**

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


