
## Información General

- **Origen**: Domain Driven Design
- **Creado por**: _[Eric Evans]_
- **Fecha de creación**: 2003

## Descripción

Representa un objeto cuyo valor lo describe complétame y no tiene una identidad conceptual distinta. Es inmutable, su estado no puede cambiar, si se necesita cambiar de estado se debe crear otro ValueObject y se compara con otros objetos solo en funcion de su valor y no de su identidad en la memoria. 

## Propósito y Función

Encapsular la lógica y los datos relacionados

## Ejemplo de Código

### Representando Dinero

Supón que tienes un modelo `Transaction` y quieres representar la cantidad de dinero involucrada como un Value Object.

Crea un archivo para el Value Object, por ejemplo, `app/models/money.rb`.

```ruby
class Money
	include ActiveModel::Model attr_reader :amount, :currency 
	
	def initialize(amount, currency = "USD")
		@amount = amount
		@currency = currency
	end
	
	def to_s 
		"#{currency} #{'%.2f' % amount}" 
	end 
end
```

Ahora puedes utilizar este Value Object en tu modelo `Transaction`.

```ruby
class Transaction < ApplicationRecord 
	def amount 
	Money.new(super, currency) 
	end 
end
```
## Usos y Aplicaciones en Informática

1. **Uso 1**: _[Describe cómo y dónde se utiliza en el ámbito de la informática]_
2. **Uso 2**: _[Describe otro uso o aplicación en informática]_
3. _..._

## Detalles Técnicos

- **Complejidad de tiempo**: _[Si es un algoritmo, indica su complejidad temporal.]_
- **Complejidad de espacio**: _[Si es un algoritmo, indica su complejidad espacial.]_
- **Lenguajes de programación compatibles**: _[Si es una librería o herramienta, lista los lenguajes con los que es compatible.]_
- _..._

## Recursos y Documentación

- [Documentación oficial](https://chat.openai.com/URL): _[Si existe documentación oficial, incluye el enlace aquí.]_
- [Tutorial o Guía](https://chat.openai.com/URL): _[Enlaces a tutoriales o guías útiles.]_
- ...


## Relación con otros Conceptos/Tecnologías

_[Explica cómo esta tecnología o concepto está relacionado o conectado con otros en informática.]_


## Relación con otros Conceptos/Tecnologías

_[Explica cómo esta tecnología o concepto está relacionado o conectado con otros en informática.]_

## Fecha de Actualización

_[Fecha en la que actualizaste por última vez la información en este archivo.]_