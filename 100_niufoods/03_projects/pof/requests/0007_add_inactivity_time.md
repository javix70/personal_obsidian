---
created_at: 2023-08-28 09:13
updated_at: 2023-08-28 09:13
tags:
  - [pof]
  - requirement
---



# Requerimiento

Hay que agregar un timer de inactividad en el pof para el rol de waiter(Garzon), que si no hace nada y está logeado se pueda salir de la interfaz


## Objetivo

Los otros garzones inicien con su sesion


# Información útil

## Prs involucrados

**Actual**: [Agregar timer a waiter](https://bitbucket.org/nnodes/pof/pull-requests/219)
FIX [Eliminar evento de detección anterior](https://bitbucket.org/nnodes/pof/pull-requests/221)

**Dependencias**:

---
# Avance

Se agrega en la vista de waiter, un js para que detecte la inacticidad del mouse, más una variable de entorno poner el tiempo en segundos de inactividad



---
# Checklist de tareas que hacer 

- [x] En la vista cuando selecciona productos, el timer deja de contar... arreglar  [completion:: 2023-08-28]
- [x] En la vista de login, al parecer se deslogea y sale un toast de que se deslogeo  [completion:: 2023-08-28]
- [x] push?  [completion:: 2023-08-28]