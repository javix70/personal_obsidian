---
created_at: 2023-08-30 10:04
updated_at: 2023-08-30 10:04
tags:
  - [china_backend]
  - requirement
---



# Requerimiento

Anotar el requerimiento tal cual ha sido solicitado


## Objetivo

Descubrir cúal es el objetivo del problema


# Información útil

Antes de empezar

1. [Correo con información](https://mail.google.com/mail/u/0/#inbox/FMfcgzGtwqMDCpDKjJScDfQPxjdVWgSJ) - Aqui se encuentra la informacion unificada de hacer el upgrade
2. 

endpoint al cual apunta peya a niufoods - (pedidosya/wh)
## Prs involucrados

**Actual**:

**Dependencias**:

---
# Avance


us-plugin-niufoods-001:
baseUrl: https://integration-middleware.us.restaurant-partners.com
username: us-plugin-niufoods-001
password: 9qvSknRe9y
secret: ooHie6eipahnee2i

    bash: curl -X POST             https://integration-middleware.us.restaurant-partners.com/v2/login             -H 'Content-Type: application/x-www-form-urlencoded'             -d 'username=us-plugin-niufoods-001'             -d 'password=9qvSknRe9y'             -d 'grant_type=client_credentials'   middleware:
baseUri: https://integration-middleware.stg.restaurant-partners.com
pluginSecret: totally_secret



---
# Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] push?