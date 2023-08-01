
# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads
psql
```

```bash
drop database niusushi_web_partial;
drop database niusushi_db_centralized_development;

create database niusushi_db_centralized_development;
create database niusushi_web_partial;
exit
```

# Cargar los datos

load dumps
`pg_restore -v  -c -O -x -h localhost -U jai -d "niusushi_web_partial" niusushi_web_partial_2023_02_09_09_58.dump`

`pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_db_centralized_development niusushi_centralized_db_2022_11_17_10_12.dump`

```ruby
rake db:migrate
rake centralized:db:migrate
```


# Crear base de datos secundaria

```zsh
psql
create database 2niusushi_db_centralized_development;
create database 2niusushi_web_partial;
```


`pg_restore -v  -c -O -x -h localhost -U jai -d 2niusushi_web_partial niusushi_web_partial_2023_02_09_09_58.dump`

`pg_restore -v  -c -O -x -h localhost -U jai -d 2niusushi_db_centralized_development niusushi_centralized_db_2022_11_17_10_12.dump`
