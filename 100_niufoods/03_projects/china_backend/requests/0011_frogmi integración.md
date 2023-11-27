# Requerimiento

cada vez que se genera una anulación, o cancelación
se genera un ticket en frogmi



## Objetivo

Pof hará una anulación o una cancelación,. 

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

Probar el evento AASM
`Check.update_all(frogmi_state: 'no_need_ticket')`

`Check.nulled.last.need_ticket!`


{name: "1.- Número de comanda:", uuid: "de6cab2f-0751-418a-9cb5-77db0272d243",…}  
{name: "2.- Nombre de cliente:", uuid: "63c79bf1-5f1c-4d95-b4ea-e3a3d63c36e7",…}  
{name: "3.- Número de teléfono de cliente:", uuid: "06ffa694-9058-43c9-a1e7-5af8d6107d35",…}  
{name: "4.- Correo electrónico de cliente:", uuid: "0cb6feea-97b5-4885-b120-05eae306eb10",…}  
{name: "5.- Monto comanda:", uuid: "f1388f84-b8fc-477b-b749-c997c6d2d6f7",…}  
{name: "6.- Número de boleta:", uuid: "5d19a390-223b-402a-9a10-8c09e4d7aaa6",…}  
{name: "7.- Motivo de anulación:", uuid: "dd65f6a3-22f0-41d5-ae29-0811e9bd1e33",…}  
{name: "8.- Fotos de respaldo:", uuid: "8e572476-1491-4cca-9590-384b1d9fee91",…}  
{name: "9.- Nombre responsable de turno:", uuid: "e45a1698-4ae7-40ca-8ee6-99e22583eb85",…}


 #<Setting:0x0000562de8348c50
  id: "19247a27-0f62-4922-82c6-23e88b41a490",
  created_at: Mon, 22 Aug 2022 12:31:50 CDT -05:00,
  updated_at: Mon, 22 Aug 2022 12:31:50 CDT -05:00,
  name: "frogmi_tuve_otro_problema",
  options:
   {"name"=>"Tuve otro problema",
    "version"=>"21017e69-7542-4c6a-8f77-f814f2e88774",
    "level_1_code"=>"REC",
    "level_1_uuid"=>"c1d90559-cdfa-4366-94c1-9a6e0c4417a9",
    "level_2_code"=>"LINK_A",
    "level_2_uuid"=>"cd24b07a-9449-4b9d-bf7f-39f6ac5a18a2",
    "level_3_code"=>"rec5_2",
    "level_3_uuid"=>"bcdfce87-df25-4c77-bd01-1422464f97f4",
    "template_code"=>"rec_Av2_1",
    "questions_uuid"=>
     "[\"28b72dd4-d891-494c-bf45-10859279c928\", \"61e9dec3-43ad-4e13-b357-9f932413a1b4\", \"967c6b77-82e8-47c8-be62-fc69efa58d9d\", \"eccac498-8cbe-4381-a53d-3d19a24bbd9c\", \"dee8e883-6f97-4d8c-b1ca-0e71b11f1e41\", \"b7ccd598-1c03-498d-8799-5a3fdab4cd71\"]"},
  section: 4,
  image_file_name: nil,
  image_content_type: nil,
  image_file_size: nil,
  image_updated_at: nil>,
