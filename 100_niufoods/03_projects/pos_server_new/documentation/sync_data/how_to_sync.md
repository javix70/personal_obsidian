
La fuente de la verdad la tiene la app de pos_server_new


```ad-note
collapse: closed
title: Sync desde el worker

dentro de una lib llamada
`lib/tasks/franchise.rake`
![[Pasted image 20230726151717.png]]

Esta librería se encarga de sincronizar todos los elementos dentro del array.

Para este caso, veremos cómo funciona el Tender

`Tender.sync_later!(1)`
```


```ad-note
collapse: open
title: Sync desde la pagina de admin en la seccion de restaurantes

1. Presiona botón sincronizar
2. Ejecuta controller de sync `app/controllers/admin/restaurants_controller.rb`
```

metodo del controller  `def sync_to_restaurants`
![[Pasted image 20230727104709.png]]

En donde
Restaurant.models_to_sync: es un arrray de modelos a sincronizar
Restaurant.sync_tp_restaurant:  `sync_to_restaurants` método heredado de `app/models/application_record.rb`
 ![[Pasted image 20230727104256.png]]

se separa en dos partes este metodo, a modo ilustrativo se utilizará `Tender` model

`RestaurantEntity.where(needs_sync: true).first.tender` (retorna una colección) `# modo ilustrativo`
![[Pasted image 20230727105948.png]]

ahora le sacamos el . restaurant_entities
![[Pasted image 20230727110046.png]]

Lo impotante de aquí es el attributo de `needs_sync`, dado que solo hará match con los que son true

por cada uno de ellos, le hace `sync_later!(entity.restaurant_id`

Los modelos a sincronizados herendan de `app/models/application_record.rb`
dado que necesitan el siguiente metodo método 

```ruby
  def sync_later!(restaurant_id, delay = 0.seconds)
    if shared_syncable_entities.include?(self.class) || global_syncable_entities.include?(self.class)
      worker = "RestaurantUpdate::#{self.class.name}Worker".safe_constantize
      return 'Non-syncable object' unless worker.present?

      worker.process(delay: delay, id: id, restaurant_id: restaurant_id, sync_time: Time.now.to_i)
    else
      'Non-syncable object'
    end
  end
```

```ruby
worker = "RestaurantUpdate::TenderWorker"
worker.process # Ejecución
```

Esto ejecuta este modulo.
![[Pasted image 20230726153005.png]]

con el metodo de process que es heredado desde UpdateWorkerClass `app/workers/update_worker.rb`
![[Pasted image 20230727110858.png]]
`perform_in` ejecuta el metodo `perform`
![[Pasted image 20230727110929.png]]

Ahora lo importante de aquí es la URL que apunta..
Esta url es de POF app, por lo que Dado el ejemplo de tender

![[Pasted image 20230727111224.png]] 

Tiene la configuracion de path de tender. y se arma la ruta con

```ruby
perform_request(
      restaurant_path: @restaurant.local_path,
      path:            "#{@path}/create_or_update_server_data",
      sync_time:       sync_time
    )
```

```ruby
 uri = URI("#{args[:restaurant_path]}/api/v1/#{args[:path]}")
```

En el caso de tender quedaría `192.160.231.4/`