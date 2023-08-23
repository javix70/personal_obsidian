
# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads 
psql
```

```
drop database pof_dev;

create database pof_dev;
\q
```

# Cargar los datos

```bash
pg_restore -v -c -O -x -h localhost -U jai -d "pof_dev" coyoacan_2023_08_23_12_00.dump
```

```bash
~/pof
```

 ```ruby
 rails db:rollback STEP=XX
 ```

```ruby
rails db:migrate
```



Crear Usar tempalte

```psql
CREATE DATABASE pof_dev2 WITH TEMPLATE pof_dev OWNER jai;
```


```psql
DROP DATABASE pof_dev;
CREATE DATABASE pof_dev WITH TEMPLATE pof_dev2 OWNER jai;
```

