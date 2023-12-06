Full:
- Projectos: china-backend, posserver
- Marcas: pequeñas (guacamole, kao, mx)

pg_dump -v -h 'kaoserver.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U kaoserver -Fc kao_server_db > ./kao_server_full_$(date +%Y_%m_%d_%H_%M).dump


Web Partial (actualizado en trello):
- Projectos: china-backend
- Marcas: guacamole, kao, mx, niusushi

GUACAMOLE
```psql
pg_dump -h 'guacamoleweb.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U administrator -v -Fc --exclude-table-data=customers --exclude-table-data=orders --exclude-table-data=addresses --exclude-table-data=address_restaurants --exclude-table-data=gournet_documents --exclude-table-data=order_products --exclude-table-data=order_promotions --exclude-table-data=order_product_additionals --exclude-table-data=order_trackings --exclude-table-data=order_transitions --exclude-table-data=webpay_payments --exclude-table-data=product_preferences --exclude-table-data=promotion_preferences --exclude-table-data=feedbacks --exclude-table-data=tbk_users --exclude-table-data=payment_attempts --exclude-table-data=coupon_customers  --exclude-table-data=versions --exclude-table-data=gournet_receipts guacamole > ~/niusushi_web_partial_$(date +%Y_%m_%d_%H_%M).dump 
```

pg_restore -cvO -d pof_server_development ./backup_2021_10_07_13_54.dump


KAO
```psql
PGPASSWORD=Q2gtQ77IVL67 pg_dump -h 'kaothai.cdx4hhfxpr2j.us-east-1.rds.amazonaws.com' -U administrator -v -Fc --exclude-table-data=customers --exclude-table-data=orders --exclude-table-data=addresses --exclude-table-data=address_restaurants --exclude-table-data=gournet_documents --exclude-table-data=order_products --exclude-table-data=order_promotions --exclude-table-data=order_product_additionals --exclude-table-data=order_trackings --exclude-table-data=order_transitions --exclude-table-data=webpay_payments --exclude-table-data=product_preferences --exclude-table-data=promotion_preferences --exclude-table-data=feedbacks --exclude-table-data=tbk_users --exclude-table-data=payment_attempts --exclude-table-data=coupon_customers  --exclude-table-data=versions --exclude-table-data=gournet_receipts kaothai > ~dumps/kaothai_web_partial_$(date +%Y_%m_%d_%H_%M).dump 
```


updates = {
  'G-1' => 'a761944f-22df-402e-8c54-7aa16059fe3b',
  'G-3' => '5168b5b1-6a5f-4f46-b27b-4e465e04c5e1',
  'GDK-2' => '5cdb319b-f087-40b8-9e8c-595bdaf6b4a5',
  'G-4' => '23f6973e-2a55-4a1e-95f0-16fe79a1ccd0',
  'G-2' => 'becd4006-5cf7-4efe-b11a-cd220627b64f'
}

updates.each do |identifier, uuid|
  local = Restaurant.find_by(universal_identifier: identifier)
  local.update(frogmi_uuid: uuid) if local
end