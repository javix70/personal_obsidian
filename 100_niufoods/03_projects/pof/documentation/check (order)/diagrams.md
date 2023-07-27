
# Maquinas de estado

## Tipo de venta
```mermaid
---
title: sale_type
---
stateDiagram-v2
	[*] --> quick_sale
	[*] --> dine_in
	[*] --> delivery
	[*] --> takeout
	


```
## Significado de cada estado


# Secuencia


# Conexiones con otros servicios o apps

### Crear nueva order a partir de pedidos web

```mermaid
---
title: Crear una orden a partir de Pos server new
---
sequenceDiagram
	participant P as POF
	participant PSN as Pos Server New

	P->>PSN: Obtiene WebOrders pendientes (perform_request_pull_web_orders)
	P->>P: Crea una nueva orden
	P->>PSN: CHECK creadas (WebOrdenes).
	PSN->>PSN: Cambia el estado a WO a Enviadas
	P->>PSN: Por cada Check, pido sus Payments (perform_request_pull_checks_payment_attempts)
	P->>P: Crear rendiciones por cada check
	P->>PSN: envia resultado de procesado (perform_request_update_restaurant_delivery_orders)
	PSN->>PSN: Actualiza los estados segun corresponda
```

^17d08c

### Crear nueva order a partir de la tienda



# Flujo 