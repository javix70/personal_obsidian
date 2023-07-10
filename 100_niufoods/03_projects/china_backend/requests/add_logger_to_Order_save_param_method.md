1. [[#Requerimiento|Requerimiento]]
1. [[#Objetivo|Objetivo]]
1. [[#Información útil|Información útil]]
1. [[#Antes de empezar + consideraciones (referencias)|Antes de empezar + consideraciones (referencias)]]
1. [[#prs involucrados|prs involucrados]]
1. [[#Avance|Avance]]

## Requerimiento

Se necesita agregar mensajes de errores más claros, dado que este metodo tiene errores y es dificil seguir el tracking

## Objetivo

Implementar una manera sencilla de mostrar los errores sin hacer tanto traking

## Información útil

Antes de empezar + consideraciones (referencias)
-


## prs involucrados

actual: [Order save_params](https://bitbucket.org/niusushi/china-backend/pull-requests/330)

---
## Avance

Esperar a la revisión de pr para revisar si el mensaje dle 420, de que forma se utiliza en el front para no cambiar el mensaje,

tengo que cambiar un StandardError a argument error

```ruby
    if restaurant_id.blank?

      raise StandardError, "E006-3: El local '#{params[:restaurant_id]}' no se almacenó correctamente"

    end
```
