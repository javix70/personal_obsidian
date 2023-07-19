
```bash
cd ~/Downloads
psql
drop database niusushi_web_partial;
drop database niusushi_db_centralized_development;

create database niusushi_db_centralized_development;
create database niusushi_web_partial;
exit
```

load dumps

`pg_restore -v  -c -O -x -h localhost -U jai -d "niusushi_web_partial" niusushi_web_partial_2023_02_09_09_58.dump`

`pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_db_centralized_development niusushi_centralized_db_2022_11_17_10_12.dump`

```ruby
rake db:migrate
rake centralized:db:migrate
```

```ruby
Customer.last.update password:123123123
```


Crear otra base de datos

```bash
psql
create database niusushi_db_centralized_development2;
create database niusushi_web_partial2;
```


`pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_web_partial2 niusushi_web_partial_2023_02_09_09_58.dump`

`pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_db_centralized_development2 niusushi_centralized_db_2022_11_17_10_12.dump`
