
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
rails db:migrate:status
```



Crear Usar tempalte

```psql
CREATE DATABASE pof_dev2 WITH TEMPLATE pof_dev OWNER jai;
```


```psql
DROP DATABASE pof_dev;
CREATE DATABASE pof_dev WITH TEMPLATE pof_dev2 OWNER jai;
```


https://s3.console.aws.amazon.com/s3/object/guacamole-backups?region=us-east-1&prefix=omnium_backups/backup_guaca_omnium_2023_11_21_14_00.dump