
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
pg_restore -v -c -O -x -h localhost -U jai -d "pof_dev" backup_niu_brasil_2023_07_18_14_00.dump
```

```ruby
rails db:migrate
```