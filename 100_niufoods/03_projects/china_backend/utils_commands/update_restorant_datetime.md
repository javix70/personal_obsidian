
# abrir a las 8am
```ruby
	# Primero, crea un objeto DateTime para las 8:00 AM
	new_open_time = DateTime.parse("2000-01-01 08:00:00 UTC")
	
	# Luego, actualiza todos los registros de Schedule donde la hora de apertura es las 12:00 PM
	Schedule.where("extract(hour from open) = ?", 12).update_all(open: new_open_time)
```


	# cerrar mas tarde
```ruby
# Primero, crea un objeto DateTime para las 17:59:59
new_close_time = DateTime.parse("2000-01-01 17:59:59 UTC")

# Luego, actualiza todos los registros de Schedule donde la hora de apertura es las 12:00 PM
Schedule.where("extract(hour from open) = ?", 8).update_all(closed: new_close_time)
```