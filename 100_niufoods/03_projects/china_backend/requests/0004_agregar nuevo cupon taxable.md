---
created_at: 2023-07-20 11:25
updated_at: 2023-07-20 11:25
tags:
  - [china_backend pof pos_server_new]
  - requirement
---



# Requerimiento

Agregar nuevo tipo de cupon, en china backend, pof_server y pof.
Este será un nuevo medio de pago para los trabajadores.

Irá vinculado a los cupones, y tendrá de tax true y gives_change true.

# Objetivo

Poder diferenciar un cupón de dsco de un cupón de medio de pago

# Información útil

Antes de empezar:

Utilizar todos los ambientes de Guacamoles, dado que él utiliza toda la lógica con variantes y más

Consideraciones (referencias)
- china backend
- pof
- pof_server_new

## Prs involucrados

**Actual**: #TODO 

---
# Investigación

## china backend 
![[100_niufoods/03_projects/china_backend/documentation/orders/diagramns#^a750b5|diagramns]]

 

Comunicación entre china backend y POF
![[100_niufoods/03_projects/china_backend/documentation/orders/diagramns#^05331e]]


[[Flujo de ordenes de compra.canvas|Flujo de ordenes de compra(Canvas)]]

---
# Avance


Por ahora me enfocaré  en el caso de web y tiene un nuevo cupón  (China backend), luego voy a las siguientes apps.
![[Pasted image 20230724152103.png]]
Si tiene cupon pregunta por el Cupon Amount
Los cupones no tienen forma de diferenciar si son de descuento de pago
![[Pasted image 20230724152204.png]]

## Opciones de implementación
###  agregar al cupón si tax o no

Así se puede llegar de la orden al cupon y preguntarle a él
El cupon es tax?
	Entonces **PaymentType cupon Pago**
	Sino **PaymentType cupon descuento**

PaymentType,
![[Pasted image 20230724154350.png]]

### Agregar en front seleccionar el tipo de cupón (tengo mis dudas aquí)
La idea sería preguntarle al utilizador de cupon de tipo de cupon utilizará, pero él cómo sabra que tipo de cupón es?, por ahora el camino que veo válido, es la [[#agregar al cupón si tax o no|La opcion 1]]

![[100_niufoods/03_projects/china_backend/documentation/orders/diagramns#^530135|diagramns]]



---
## Checklist de tareas que hacer 

Si crees que es necesario tener un checklist antes de tirar un pr, hazlo

- [ ] Documentar el de cómo se comunican y agregar el nuevo descuento
- [ ] Cupon descuento, debe cambiar a invisible
- [ ] Cupon pago tax true
- [ ] Tratar ojalá de meterla por código en vez de nombre. porque ese es el general. (Tiene que ver que hace la busqueda por sting y no por el code)
- [ ] tabla de tender crear nuevo tipo de tender, tax true
cupon de descuento debe estar invisible (tentativo), rendicion, cierre de caja.y las impresiones  cuadratura e informe z
- [ ] TenderClass -> en qué categoria esta el medio de pago, deberia ser ticket (5)
- [ ] crear task para futuras ocaciones
- [ ] Antes de mezclar, asegurarse que el cupón de descuento de pos_server_new sea igual a China backend
- [ ] push?

Cómo agregar un nuevo medio de pago.



---
Documentación del proceso para agregar un nuevo PaymentType para asignarselo al cupon

Pos_server_new
1. Crear una migración o una task para crear un nuevo Tender con el nombre solicitado
```ruby
	class UpdateTenderAndAddDiscountCoupon < ActiveRecord::Migration[5.1]
	    def up
	
	      Tender.create(
	        name: 'Cupon descuento', 
	        tender_class_id: 5, 
	        tax: true,
	        gives_change: true
	      )
	    end
	
	    def down
	      Tender.find_by(name: 'Cupon descuento').destroy
	    end
	end
```
2. Creado, revisa el nuevo code que se generó
	`Tender.last.code`
3. Guarda este código porque tienes que crealo en China Backend y en POF

China backend
1. Crear una migración o una task para crear un nuevo PaymentType con el nombre solicitado
2. Tiene que tener el nombre de cupon. dado que en admin al crear cupón, tiene que asignar el nuevo tipo de paymentType y el ve solo los que tienen de nombre cupon.
	```ruby
	class UpdateAndCreatePaymentTypes < ActiveRecord::Migration
	  def up
	    PaymentType.create(name: 'Cupon descuento',
	                       code: 'TND0016', #código copiado de pos_server_new
	                       payment_discount: PaymentDiscount.last ) #example
	  end
	
	  def down
	    PaymentType.find_by(name: 'Cupon descuento')&.destroy #puede ser por el arg que gustes
	  end
	end
	```

POF
1. Crear una migración o una task para crear un nuevo Tender con el nombre solicitado
```ruby
	class UpdateTenderAndAddDiscountCoupon < ActiveRecord::Migration[5.1]
	    def up
	
	      Tender.create(
	        name: 'Cupon descuento', 
	        tender_class_id: 5, 
	        tax: true,
	        gives_change: true
	      )
	    end
	
	    def down
	      Tender.find_by(name: 'Cupon descuento').destroy
	    end
	end
```
2.  Listo


| ChinaBackend     |                   | pos_server_new |             |      |              | POF |              |      |              |
|------------------|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| Payment Type Code| Payment Type Name | Tender Name    | Tender Code | Tax  | Gives Change | Name| Tender Code | Tax  | Gives Change |
|------------------|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| TND0008          | Oneclick          | One Click      | TND0008     | true | true         | One Click | TND0008 | true | true |
| TND0010          | Pago online PY    | Pago Online PY | TND0010     | true | true         | Pago Online PY | TND0010 | true | true |
| TND0009          | VoucherPY         | Voucher PY     | TND0009     | false| false        | Voucher PY | TND0009 | false | false |
| TND0011          | Rappi             | Rappi          | TND0011     | true | true         | Rappi | TND0011 | true | true |
| TND0013          | Cupon pago        | Cupon pago     | TND0013     | false| false        | Cupon Dcto | TND0013 | false | false |
| TND0016          | Cupon descuento   | Cupon descuento| TND0016     | true | true         | Cupon descuento | TND0016 | true | true |
