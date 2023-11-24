# Requerimiento

cada vez que se genera una anulación, o cancelación
se genera un ticket en frogmi



## Objetivo

Pof hará una anulación o una cancela

# Información útil

Antes de empezar

Consideraciones (referencias)

## Prs involucrados

pr : [China backend](https://bitbucket.org/niusushi/china-backend/pull-requests/464)
pr: [PosServer](https://bitbucket.org/niusushi/pof_server_new/pull-requests/391)

---
# Avance

Esta sección es una sección libre, en donde tienes que anotar cada cosa que sientas que sea relevante.



---
# Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] push?

Creación

Ejecucion del worker
``` ruby
rake workers:generate_frogmi_ticket
```

```ruby
options_hash = {
  "name" => "Incidentes desde el Local",
  "version" => "30fc2289-8a18-48e4-afcd-17e3bc2e5777",
  "level_1_code" => "Incidente_local",
  "level_1_uuid" => "30fc2289-8a18-48e4-afcd-17e3bc2e5777",
  "level_2_code" => "an_el",
  "level_2_uuid" => "c7293e77-4e40-446d-9dc8-2df583d4de62",
  "level_3_code" => "an_1",
  "level_3_uuid" => "a6f4bbe3-0ca6-410c-b497-cef554863b02",
  "template_code" => "Ingresar Anulación o Eliminación",
  "questions_uuid" => "[]"
}
new_setting = CentralSetting.new(
  code: "frogmi_incidente_local",
  options: options_hash,
)
new_setting.save

options_hash = {
  code: "frogmi",
  options: {"token"=> "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJGcm9nbWkgKGh0dHBzOi8vZnJvZ21pLmNvbSkiLCJzdWIiOiIzNWViODAwNy1jYTY5LTQ1ZTQtOTExMy0xZGYwZDQ0OWE5NzgiLCJqdGkiOiIxNmQ4NTllZC01NzllLTQwNDAtYWY2OS0yNDFiNDM5OTg3NzciLCJpYXQiOjE2ODgxNjY1NjksImV4cCI6MTY4ODc3MTM2OSwicGVybWlzc2lvbnMiOnsidXNlcl9yZXN0cmljdGVkIjp0cnVlLCJhbGxvd19zdG9yZV9jcmVhdGlvbiI6ZmFsc2V9LCJjb21wYW55X21vZHVsZXMiOlt7InN1YnNjcmlwdGlvbnMiOnRydWV9LHsicm91dGluZXMiOnRydWV9LHsidGlja2V0X21hbmFnZXIiOnRydWUsInVpX25hbWVzIjp7ImVuIjoiVGFyZWFzIFBlbmRpZW50ZXMiLCJlcyI6IlRhcmVhcyBQZW5kaWVudGVzIiwicHQiOiJUYXJlYXMgUGVuZGllbnRlcyJ9fSx7IndlYl9leGVjdXRvciI6dHJ1ZX0seyJ0aWNrZXRfd29ya2Zsb3ciOnRydWUsInVpX25hbWVzIjp7ImVuIjoiR2VzdGlvbmVzIiwiZXMiOiJHZXN0aW9uZXMiLCJwdCI6Ikdlc3Rpb25lcyJ9fSx7ImFwaSI6dHJ1ZX0seyJiaV9kYXNoYm9hcmRzIjp0cnVlfV0sImNvbXBhbnlfc2V0dGluZ3MiOnsiZGF0ZV9mb3JtYXQiOiIlZC0lbS0lWSAlSDolTTolUyIsImFsbG93X3N0b3JlX2NyZWF0aW9uIjpmYWxzZSwic2hvd19hY3Rpdml0eV9hc3NpZ25lZF9zdG9yZXMiOmZhbHNlLCJwcmljZXJfaW50ZWdyYXRpb24iOmZhbHNlfSwicGVybWlzc2lvbiI6ImF1ZGl0b3IiLCJ0aW1lX3pvbmVfb2Zmc2V0IjoiLTA0OjAwIiwidGltZXpvbmUiOiJBbWVyaWNhL1NhbnRpYWdvIiwiY29tcGFueV9uYW1lIjoiTklVIFN1c2hpIiwiaG1hYyI6ImM1YzhiMTA3ZjViZjgzYjUyYTA2ZWY1MDZhOTJhNWIwYmE1NDY1NzljYzYwNTA0NDY1OTlmMTU1NDhkM2RlMzAiLCJjb21wYW55X3NsdWciOiJuaXUtc3VzaGkiLCJ1dWlkIjoiMzVlYjgwMDctY2E2OS00NWU0LTkxMTMtMWRmMGQ0NDlhOTc4IiwiY29tcGFueV91dWlkIjoiMjdkOWJjM2EtMTE2NC00ODAyLTkzNGUtZjZkNGExYjJiYWUzIiwibGFuZ3VhZ2UiOiJlcyIsImVtYWlsIjoicmVjbGFtb3NhcGlAc2lubWFpbC5jbCIsInVzZXJuYW1lIjoicmVjbGFtb3NhcGlAc2lubWFpbC5jbCIsIm5hbWUiOiJOSVUiLCJsYXN0X25hbWUiOiJSZWNsYW1vcyBBcGkifQ.7tDZqrGOhbgXRSxVpmLVaybyeW7Wr4G1dDBpB3xM7Vc"}
}

new_setting.create(options_hash)
```

`Check.update_all(frogmi_state: 'no_need_ticket')`

`Check.nulled.last.need_ticket!`
