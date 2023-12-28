---
created_at: 2023-12-13 14:08
updated_at: 2023-12-13 14:08
tags:
  - [pos_server_new]
  - requirement
---
# Requerimiento

Revisar los problemas de sincronización de posserver con el punto de venta

## Objetivo

Replicar y documentar la sincronización, es especifico con la sincronización de variantes


# Información útil
****
pos server de guacamole. hay un producto de prueba que es el TEST001.
cuando crean un producto, si o si te crea una variante y a lavez tiene un variant type
eso se transforma a nivel visual en un grupo

se agregan grupo y cada grupo es un variant type

pasa que cuando se borra y se actualza y se borra bien

pasa que algunos no se sincronizaron al pof

poserver se conecta con pof delete_worker.rb
guaca tobalaba no estaba eliminado

![[Pasted image 20231213141424.png]]
Consideraciones (referencias)

## Prs involucrados

**Actual**:

**Dependencias**:

---
# Avance

Esta sección es una sección libre, en donde tienes que anotar cada cosa que sientas que sea relevante.



---
# Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] push?