
Full:
``` psql
pg_dump -v -h 'kaoserver.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U kaoserver -Fc kao_server_db > ./backup_$(date +%Y%m_%d_%H_%M).dump
```
Falta la clave.

