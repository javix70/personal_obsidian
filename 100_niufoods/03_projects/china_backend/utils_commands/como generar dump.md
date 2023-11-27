Full:
- Projectos: china-backend, posserver
- Marcas: pequeñas (guacamole, kao, mx)

pg_dump -v -h 'kaoserver.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U kaoserver -Fc kao_server_db > ./kao_server_full_$(date +%Y_%m_%d_%H_%M).dump


Web Partial (actualizado en trello):
- Projectos: china-backend
- Marcas: grandes (guacamole, kao, mx, niusushi)

```psql
pg_dump -h 'guacamoleweb.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U administrator -v -Fc --exclude-table-data=customers --exclude-table-data=orders --exclude-table-data=addresses --exclude-table-data=address_restaurants --exclude-table-data=gournet_documents --exclude-table-data=order_products --exclude-table-data=order_promotions --exclude-table-data=order_product_additionals --exclude-table-data=order_trackings --exclude-table-data=order_transitions --exclude-table-data=webpay_payments --exclude-table-data=product_preferences --exclude-table-data=promotion_preferences --exclude-table-data=feedbacks --exclude-table-data=tbk_users --exclude-table-data=payment_attempts --exclude-table-data=coupon_customers  --exclude-table-data=versions --exclude-table-data=gournet_receipts guacamole > ~/niusushi_web_partial_$(date +%Y_%m_%d_%H_%M).dump 
```

pg_restore -cvO -d pof_server_development ./backup_2021_10_07_13_54.dump