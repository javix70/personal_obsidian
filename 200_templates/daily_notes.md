----
created_at: {{tp.file.creation_date("YYYY-MM-DD HH:mm")}}
updated_at: {{tp.file.last_modified_date("YYYY-MM-DD HH:mm")}}  
tags:: [[+Daily Notes]]
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

<% tp.user %>

# <% tp.date.now('YYYY-MM-DD') %>


## Pendientes
<% tp.file. %>

```dataview
list
from #daily
where date(today) - 1
````

## Realizadas

## Requerimientos entrantes hoy
- [ ] 

## Trabajando actualmente
- [ ] 

## Tareas futuras
- [ ] 

## Reuniones
- [ ] 
