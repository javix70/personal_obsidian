
# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads
psql
drop database pof_server_20230303;

create database pof_server_20230303;
exit
```

# Cargar los datos

```bash
pg_restore -v -c -O -x -h localhost -U jai -d "pof_server_20230303" dump-kao_server_db_2023_07_27.tar
```

```ruby
rails db:migrate
```

![[100_niufoods/03_projects/pos_server_new/before_start/Login#^c6d642|Login]]