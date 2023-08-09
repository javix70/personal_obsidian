
# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads
psql
```

```bash
drop database niusushi_db_centralized_development;
drop database niusushi_db_centralized_test;

drop database niusushi_web_partial_development;
drop database niusushi_web_partial_test;

create database niusushi_db_centralized_development;
create database niusushi_db_centralized_test;

create database niusushi_web_partial_development;
create database niusushi_web_partial_test;

exit
```

# Cargar los datos

load dumps
```bash
pg_restore -v  -c -O -x -h localhost -U jai -d "niusushi_web_partial_development" niusushi_web_partial_2023_02_09_09_58.dump
```

```bash
pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_db_centralized_development niusushi_centralized_db_2022_11_17_10_12.dump
```

```bash
cd ~/china-backend
```
```ruby
rake db:migrate
rake centralized:db:migrate
```


# Crear base de datos mexico

```zsh
psql

drop database niusushi_web_partial_mx_development;
drop database niusushi_web_partial_mx;

create database niusushi_web_partial_mx_development;
create database niusushi_web_partial_mx;
```

# Cargar los datos

load dumps
```bash
pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_web_partial_mx_development mxniusushi20230801.tar
```

```bash
pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_web_partial_mx mx_niufoods_web_centralizada20230801.tar

```
