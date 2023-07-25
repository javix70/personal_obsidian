Esta documentación fue trabajada en [[0004_agregar nuevo cupon taxable| agregar nuevo cupon]]

# Documentación del proceso para agregar un nuevo PaymentType para asignarselo al cupon

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


# Lista de códigos manejados por cada app, solo los que hacen match.
| ChinaBackend     |                   | pos_server_new |             |      |              | POF |              |      |              |
|------------------|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| Payment Type Code| Payment Type Name | Tender Name    | Tender Code | Tax  | Gives Change | Name| Tender Code | Tax  | Gives Change |
|--------------
----|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| TND0008          | Oneclick          | One Click      | TND0008     | true | true         | One Click | TND0008 | true | true |
| TND0010          | Pago online PY    | Pago Online PY | TND0010     | true | true         | Pago Online PY | TND0010 | true | true |
| TND0009          | VoucherPY         | Voucher PY     | TND0009     | false| false        | Voucher PY | TND0009 | false | false |
| TND0011          | Rappi             | Rappi          | TND0011     | true | true         | Rappi | TND0011 | true | true |
| TND0013          | Cupon pago        | Cupon pago     | TND0013     | false| false        | Cupon Dcto | TND0013 | false | false |
| TND0016          | Cupon descuento   | Cupon descuento| TND0016     | true | true         | Cupon descuento | TND0016 | true | true |
