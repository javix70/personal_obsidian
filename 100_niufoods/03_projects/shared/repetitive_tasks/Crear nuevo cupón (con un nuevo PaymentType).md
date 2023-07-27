#TODO debo actualizar esta documentación

Esta documentación fue trabajada en [[0004_agregar nuevo cupon taxable|agregar nuevo cupon]]

# Documentación del proceso para agregar un nuevo PaymentType para asignarselo al cupon

Pos_server_new

1. Ejecuta el siguiente comando
```ruby
  Tender.create(
	name: 'Cupon descuento', 
	tender_class_id: 5, # segun correspoda el tender por Franquisia
	tax: true,
	gives_change: true
  )
```
2. Creado, revisa el nuevo code que se generó
	`Tender.last.code` 
3. Sincroniza desde el administrador de PSN
4. Cambiar de nombre el cupon antiguo
```ruby
	`tender = Tender.find_by(name: 'Cupon Dcto')
tender.update_column(name: 'Cupon pago')
```
5. Los restaurant_entities de ese tender, tiene que tener `needs_sync: true`
6. Syncronizar solo los Tenerds con POF
```ruby
model_entities = tender.restaurant_entities
model_entities.each { |model_entity| model_entity.entity.sync_now!(model_entity.restaurant_id) }
```
1. Guarda este código porque tienes que crealo en China Backend

China backend
1. Crear un nuevo PaymentType con el nombre solicitado
2. Tiene que tener el nombre de cupon. dado que en admin al crear cupón, tiene que asignar el nuevo tipo de paymentType y el ve solo los que tienen de nombre cupon.
	```ruby

PaymentType.create(name: 'Cupon descuento',
				   code: 'TND0016', #código copiado de pos_server_new
				   payment_discount: PaymentDiscount.last ) #example
end
	```



# Lista de códigos manejados por cada app, solo los que hacen match.

| ChinaBackend     |                   | pos_server_new |             |      |              | POF |              |      |              |
|------------------|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| Payment Type Code| Payment Type Name | Tender Name    | Tender Code | Tax  | Gives Change | Name| Tender Code | Tax  | Gives Change |
|------------------|-------------------|----------------|-------------|------|--------------|-----|--------------|------|--------------|
| TND0008          | Oneclick          | One Click      | TND0008     | true | true         | One Click | TND0008 | true | true |
| TND0010          | Pago online PY    | Pago Online PY | TND0010     | true | true         | Pago Online PY | TND0010 | true | true |
| TND0009          | VoucherPY         | Voucher PY     | TND0009     | false| false        | Voucher PY | TND0009 | false | false |
| TND0011          | Rappi             | Rappi          | TND0011     | true | true         | Rappi | TND0011 | true | true |
| TND0013          | Cupon pago        | Cupon pago     | TND0013     | false| false        | Cupon pago | TND0013 | false | false |
| TND0016          | Cupon descuento   | Cupon descuento| TND0016     | true | true         | Cupon descuento | TND0016 | true | true |
