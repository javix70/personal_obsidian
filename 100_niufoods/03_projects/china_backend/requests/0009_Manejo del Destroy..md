---
created_at: 2023-11-20 16:21
updated_at: 2023-11-20 16:21
tags:
  - [china_backend]
  - requirement
---
# Requerimiento
Cambio de flujo cuando hay un error en una orden.

## Objetivo

Los pedidos que tienen algun tipo fallo, se deben ver reflejados
para esto se crearán 3 pestallas en los pedidos de ordenens.

pestalla
1. todo lo actual, con los fallidos de pos, (Enviado a local) si fallaron, si fueron aceptados, agregandole un nuevo estado a post_status. 
2.  Los que fallaron de una. (integraciones), posiblemenete crear un atributo con estado, en base a los estados de posible payload(tentativo.)
3. Pagos (ESTADOS, pero que aún no están listo) payment state

# Información útil

Los scopes del; activeAdmin, se generan las pestañitas.
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