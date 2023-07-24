
# Maquinas de estado

## Significado de cada estado

```mermaid
stateDiagram-v2
	[*] --> sent
	[*] --> pending
	[*] --> failed
```


# Secuencia

# Creación WebOrder ~ Orden  de china backend

##  Oneclic
```mermaid
---
title: Create - WebOrder controller
---
sequenceDiagram
	participant CB as China Backend
	participant PSN as Pos Server New

	CB->>PSN: Crea un nuevo WebOrder enviando el web_order_id
	PSN->>PSN: Crea WebOrder vinculandolo con web_order_id y estado pending
```

^7d5da0

## Otro metio de pago
```mermaid
---
title: Pull pull_web_orders - WebOrder controller
---
sequenceDiagram
	participant CB as China Backend
	participant PSN as Pos Server New

	
	
```

^9df783

# Conexiones con otros servicios o apps

## China Backend (recibe nueva orden)
![[100_niufoods/03_projects/china_backend/documentation/orders/diagramns#^05331e|diagramns]]

### procesado


# Flujo 