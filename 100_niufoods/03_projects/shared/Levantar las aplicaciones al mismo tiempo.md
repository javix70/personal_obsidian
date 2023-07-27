
# Consideraciones antes de empezar

1. debes tener las bases de datos de la misma franquicia, si es kao, china backend, poss y pof con kao
2. debes tener todo con las migraciones

# POF
```bash
cd pof_server_new # donde se encuentre la app
```

## Revisa las variables de entorno

```bash
DB_NAME=pof_server_20230303
DB_USERNAME=jai
DB_PASS=123123123

FRANCHISE=KAOTHAI

API_KEY=1234
SERVER_API_KEY=1234
EXTERNAL_API_KEY=123456789
POS_SERVER=http://localhost:3000
HOST=http://127.0.0.1:3000

AWS_ACCESS_KEY_ID=AKIAIIXAZGEYGPK3CUNQ
AWS_SECRET_ACCESS_KEY=LZc8NttnFqlkFrRmmWW...
AWS_REGION=us-east-1


ALLOW_CUSTOM_RESTAURANTS_PRICE=true
SECRET_KEY_BASE=bdfb4f888b...


# Currency
DEFAULT_CURRENCY=MXN
ICU_LOCALE=es-MX
SERVICE_DELIVERY_AMOUNT=1500
TRUNCATE_AMOUNT=true
```