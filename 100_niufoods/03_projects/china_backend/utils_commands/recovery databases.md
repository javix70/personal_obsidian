
# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads
psql
```

```bash
drop database niusushi_db_centralized_development;
drop database niusushi_db_centralized_test;

drop database niusushi_web_partial;
drop database niusushi_web_partial_test;

create database niusushi_db_centralized_development;
create database niusushi_db_centralized_test;

create database niusushi_web_partial;
create database niusushi_web_partial_test;

\q
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

```ruby
rails c
```

![[100_niufoods/03_projects/china_backend/before_start/Login|Login]]

# Crear base de datos mexico

```bash
psql
\l

drop database niusushi_web_partial_mx_development;
drop database niusushi_db_centralized_mx_development;

create database niusushi_web_partial_mx_development;
create database niusushi_db_centralized_mx_development;
```

#  Cargar las extensiones de las bases de datos
```bash
\c niusushi_web_partial_mx_development;
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";
CREATE EXTENSION IF NOT EXISTS "hstore";
CREATE EXTENSION IF NOT EXISTS "unaccent";

\c niusushi_db_centralized_mx_development;
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";
CREATE EXTENSION IF NOT EXISTS "hstore";
CREATE EXTENSION IF NOT EXISTS "unaccent";
```

# Cargar los datos

load dumps
```bash
pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_web_partial_mx_development mxniusushi20230801.tar
```

```bash
pg_restore -v  -c -O -x -h localhost -U jai -d niusushi_db_centralized_mx_development mx_niufoods_web_centralizada20230801.tar
```

# Dump de base de datos producción

## centralizada
```bash
PGPASSWORD=59cE5e1zGBkqoQF5EUN9 pg_dump -h mexiconiusushiweb.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com -U administrator -F c -b -v -f mx_niufoods_web_customers_dump.sql niusushi_db_centralized_development
```

## web_partial
```bash
PGPASSWORD=59cE5e1zGBkqoQF5EUN9 pg_dump -h mexiconiusushiweb.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com -U administrator -F c -b -v -f mxniusushi.sql niusushi_db_centralized_development
```


## web_partial chile
