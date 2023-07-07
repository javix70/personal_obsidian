

```ruby
#<Schedule:0x000055a48c6b0ef0
 id: "ffcc642d-0ee9-438f-ade2-0e1998f64073",
 day: 4,
 open: 2000-01-01 12:00:00 UTC,
 closed: 2000-01-01 16:45:00 UTC,
 restaurant_id: "1f0094ce-1db6-4f1b-a331-e6d8ffa30e34">
```


```ruby
# Primero, crea un objeto DateTime para las 8:00 AM
new_open_time = DateTime.parse("2000-01-01 08:00:00 UTC")

# Luego, actualiza todos los registros de Schedule donde la hora de apertura es las 12:00 PM
Schedule.where("extract(hour from open) = ?", 12).update_all(open: new_open_time)

```
