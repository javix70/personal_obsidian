
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

## pof_server_new (adjuntar link a introduccion)

### Crear nueva order a partir de pedidos web

```mermaid
---
title: Crear una orden a partir de Pos server new
---
sequenceDiagram
	participant P as POF
	participant PSN as Pos Server New

	P->>PSN: Obtiene WebOrders  pendientes (perform_request_pull_web_orders)
	P->>P: Crea una nueva orden
	P->>PSN: WebOrdenes creadas.
	PSN->>PSN: Cambia el estado a WO a Enviadas
```

^17d08c

# Conexiones con otros servicios o apps

# Flujo 