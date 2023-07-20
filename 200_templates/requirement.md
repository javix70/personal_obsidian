---
created_at: <% tp.file.creation_date() %>
updated_at: <% tp.file.last_modified_date() %>
tags:
  - [<% tp.user.set_tags(tp) %>]
  - requirement
---

<% tp.file.rename(tp.user.new_prefix_requirements(tp)) %>

# Requerimiento

Anotar el requerimiento tal cual ha sido solicitado


## Objetivo

Descubrir cúal es el objetivo del problema


# Información útil

Antes de empezar

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