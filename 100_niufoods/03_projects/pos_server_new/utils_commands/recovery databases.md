
# Entrar a la base de datos  y vaciar las bases de datos

# Entrar a la base de datos  y vaciar las bases de datos
```bash
cd ~/Downloads
psql
```

```bash
drop database pof_server_20230303;
drop database pof_server_test_db_1;


create database pof_server_20230303;
create database pof_server_test_db_1;

\q
```

# Cargar los datos

```bash
pg_restore -v -c -O -x -h localhost -U jai -d "pof_server_20230303" dump-mexiconiusushi_server_db_20230817_2.tar
```


```bash
cd ~/pof_server_new
```

```ruby
rails db:migrate
```

```ruby
rails c
```

![[100_niufoods/03_projects/pos_server_new/before_start/Login#^c6d642|Login]]



  
produccion
REDIS_URL=redis://mexiconiusushiserver-cache.4o6jse.ng.0001.use1.cache.amazonaws.com:6379
RDS_HOST=mexiconiusushiserver.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com
RDS_USERNAME=mexniusushi
RDS_PASSWORD=zVY3I9aERF6oTY2cihte
RDS_PORT=5432
RDS_DATABASE=mexiconiusushi_server_db

```bash
PGPASSWORD=zVY3I9aERF6oTY2cihte pg_dump -h mexiconiusushiserver.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com -U mexniusushi -F c -b -v -f mexiconiusushi_server_db.sql mexiconiusushi_server_db
```

pg_restore -v -c -O -x -h localhost -U jai -d "pof_server_20230303" mexiconiusushi_server_db.sql
