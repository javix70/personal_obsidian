
La fuente de la verdad la tiene la app de pos_server_new


```ad-note
collapse: closed
title: Sync desde el worker

dentro de una lib llamada
`lib/tasks/franchise.rake`
![[Pasted image 20230726151717.png]]

Esta librería se encarga de sincronizar todos los elementos dentro del array.

Para este caso, veremos cómo funciona el Tender

`Tender.sync_later!(1)` (el 1 representa el id del resutant 1, así que asumo que no sirve para todos los casos)
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

# sync_to_restaurant (modelo base de la sincronización)
 ![[Pasted image 20230727104256.png]]

se separa en dos partes este metodo, a modo ilustrativo se utilizará `Tender` model

## Sincronizar
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

para ejecutarlo en consola el flujo

```ruby
re = RestaurantEntity.where(needs_sync: true).first
entity = re.entity #tender 
entity.sync_later!(1) # execute mode
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

En el caso de tender quedaría `http://10.11.100.2/api/v1/tenders/create_or_update_server_data`

Ahora nos vamos a POF (esta documentación debe ir a pof sync data)

`TendersController < V1Controller`

`app/controllers/api/v1/v1_controller.rb`

```ruby
    class V1Controller < ApiController
      before_action :set_object, only: %i[create_or_update_server_data]

	    def create_or_update_server_data
	        if @existing_object.save
	          render json: { object: @existing_object, discard_old_sync: false }, status: :ok
	        else
	          render json: @existing_object.errors, status: :unprocessable_entity
		    end
	    end
        ... # other methods
    
		def set_object
			@object_name = params.keys[0]
			@object_class = @object_name.singularize.titleize.delete(' ').constantize
			@existing_object = @object_class.find_by_id(params[@object_name][:id])
			@existing_object = @object_class.new unless @existing_object.present?
			@existing_object.assign_attributes(object_params)
	    end
    end
```



## Eliminar modelos sincronizados