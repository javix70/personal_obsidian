#TODO debo actualizar esta documentación

Esta documentación fue trabajada en [[0004_agregar nuevo cupon taxable|agregar nuevo cupon]]

# Documentación del proceso para agregar un nuevo PaymentType para asignarselo al cupon

Pos_server_new

![[Pasted image 20230727163502.png]]

Sincronizar (opcional), pueden ser solo con el paso 3 de solo los tenders
![[Pasted image 20230727163531.png]]


2. Los restaurant_entities de ese tender, tiene que tener `needs_sync: true`
3. Syncronizar solo los Tenders con POF
```ruby
model_entities = tender.restaurant_entities
model_entities.each { |model_entity| model_entity.entity.sync_now!(model_entity.restaurant_id) }
```
4. En POF si se quiere hacer visible o invisible, por defecto se crea con `"visible", default: true`
5. Por lo que en al consola de Rails c
```Ruby
Tender.find_by(code: 'example').update_columns(visible: false)
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


