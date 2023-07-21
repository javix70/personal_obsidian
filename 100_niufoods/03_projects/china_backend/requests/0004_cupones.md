---
created_at: 2023-07-20 11:25
updated_at: 2023-07-20 11:25
tags:
  - [china_backend]
  - requirement
---



# Requerimiento

Agregar nuevo tipo de cupon, en china backend, pof_server y pof.
Este será un nuevo medio de pago para los trabajadores.

Irá vinculado a los cupones, y tendrá de tax true y gives_change true.

# Objetivo

Poder diferenciar un cupón de dsco de un cupón de medio de pago

# Información útil

Antes de empezar:

Utilizar todos los ambientes de Guacamoles, dado que él utiliza toda la lógica con variantes y más

Consideraciones (referencias)
- china backend
- pof
- pof_server_new

## Prs involucrados

**Actual**:

---
# Investigación

## china backend 
![[100_niufoods/03_projects/china_backend/documentation/coupons/diagramns#Secuencia|diagramns]]


Descuento y medio de pago

Cupon descuento 
- [ ] Cupon pago tax true

PaymentType. revisar

POF SERVER
la order llega a pof a webOrderController. create.


- [ ] Tratar ojalá de meterla por código en vez de nombre. porque ese es el general.

- [ ] tabla de tender crear nuevo tipo de tender, tax true
cupon de descuento debe estar invisible (tentativo), rendicion, cierre de caja.y las impresiones  cuadratura e informe z

- [ ] TenderClass -> en qué categoria esta el medio de pago, deberia ser ticket (5)

POS_SEVER, CHINA BACKEND, Y POF

Documentar el de cómo se comunican y agregar el nuevo descuento
checkcontroller es el que manda a pedir la informacion a 

---
# Avance

Ahora voy 

---
## Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] push?

Cómo agregar un nuevo medio de pago.