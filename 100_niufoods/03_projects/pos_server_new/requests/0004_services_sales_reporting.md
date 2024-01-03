



Actualización de tenders

```
sap_mapping = {
  "Efectivo" => "114105",
  "Tarjeta Debito" => "114104",
  "Tarjeta Credito" => "114103",
  "Sodexo" => "CL0001",
  "Edenred" => "CL0001",
  "Amipass" => "CL0001",
  "Voucher PY" => "114107",
  "Rappi" => "114109",
  "Uber Eats" => "114108",
  "Pago Online PY" => "114107",
  "One Click Debito" => "114104",
  "One Click Credito" => "114103",
  "Transferencia" => "114106",
  "Cupon descuento" => "115101",
  "One Click" => nil,
  "Kushki" => nil,
  "Kushki credito" => nil,
  "Kushki debito" => nil,
  "American Express" => nil
}

Tender.all.each do |tender|
  sap_id = sap_mapping[tender.name]
  next unless sap_id # Si no hay un SAP ID mapeado, pasamos al siguiente tender
  
  tender.update(sap_id: sap_id)
end

```