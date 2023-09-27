---
created_at: <% tp.file.creation_date() %>
updated_at: <% tp.file.last_modified_date() %>
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>


> [!warning]+ OverDue

- [ ] 

> [!todo]+ Today's Tasks

- [ ]

> [!Warning]+ Unscheduled Tasks

- [ ] 

> [!success]+ Tasks Done Today

- [ ] 

> [!success]+ Meeting

aquí la idea es que se liste automaticamente

<% tp.user.reorganize_checkboxes(tp) %>