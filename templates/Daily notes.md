# Nota Diaria - {{tp_date}}

## Realizado Ayer
<%* const yesterdayNote = await tp.file.get_note('Daily Notes/' + tp.date.now("YYYY-MM-DD", -1)); %>
<%* const yesterdayContent = yesterdayNote ? await tp.file.read(yesterdayNote) : ''; %>
<%* const pendingTasks = yesterdayContent.split('## Pendientes para Hoy')[1] || ''; %>
<%- pendingTasks %>

## Trabajando Hoy
- 

## Pendientes para Hoy
- 

## Próximos Desarrollos
- 

## Reflexión del Día
- 

## Ideas y Pensamientos
- 
