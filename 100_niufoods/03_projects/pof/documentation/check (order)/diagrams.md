
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

```mermaid
sequenceDiagram
	actor E as Employee 
	participant P as POF
	participant PSN as Pos Server New

	PSN: 
	E->>P: Crear nueva orden
	 
```

# Conexiones con otros servicios o apps

# Flujo 