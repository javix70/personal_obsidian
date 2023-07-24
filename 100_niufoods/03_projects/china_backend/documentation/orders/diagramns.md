
# Maquinas de estado

## Significado de cada estado


## Orden
#TODO

## Cupón (variante)
```mermaid
---
title: Coupon
---
stateDiagram-v2
    [*] --> coupon_category
    [*] --> coupon_type

    coupon_category --> classic
    coupon_category --> extended
    coupon_category --> single_use

    coupon_type --> percentage
    coupon_type --> fixed_amount
    coupon_type --> products
    coupon_type --> products_free

    classic --> [*]
    extended --> [*]
    single_use --> [*]
    percentage --> [*]
    fixed_amount --> [*]
    products --> [*]
    products_free --> [*]
```

^06234c


# Secuencia (Creación orden)

## China delivery (web #TODO (ajuntar link a projecto))

```mermaid
---
title: Orden con cupon (no incluye casos errores)
---
sequenceDiagram
    autonumber
    actor A as Admin
    participant BA as China Backend Admin
    participant B as China Backend
    participant D as China Delivery
    actor C as Customer
    participant POF

    rect Green
    note left of A: Flujo de crear un cupon
    A->>BA: Other -> Cupones 
    BA->>A: Vista de cupones
    A->>BA: Anadir nuevo cupon
    BA->>B: Crear
    B->>BA: Ok
    BA->>A: Muestra cupon creado
    end
    rect Purple
    note right of C: Flujo de compra
    C->>D: Arma carrito
    C->>D: Selecciona carrito para seguir el flujo de compra
    C-->>D: Aplica cupon con un codigo
    D-->>B: Asigna cupon a customer
    B-->>D: Asignado ok
    D-->>C: Muestra la linea de descuento
    C->>D: Va a pagar
    D->>C: Vista de checkout
    C->>D: Pagar
    D->>B: Generar Order
    B-->>B: Aplica descuento y lo desactiva (dependiendo del cupon)
    B->>D: Order creada
    D->>C: Mostrar vista de orden creada
    end
    B-->>POF: Enviar Orden a Tienda (api/v1/web_orders)
```
^a750b5


# Conexiones con otros servicios o apps

## pof_server_new (adjuntar link a introduccion)

```mermaid
sequenceDiagram
    participant CB as China Backend
    participant PN as Pos server New

	CB->>CB: Armar data para enviar
	CB->>PN: Envia el pedido
	PN->>PN: Lo procesa (api/v1/web_orders)
```

^05331e

### procesado

```mermaid
---
title: Send Order to Pof
---
flowchart LR
	S(Orden) --> A{Tiene un descuento}
	A -- Si --> C(Agregar a rendicion el PaymentType de cupon)
	C --> END(Enviar a pof)
	A -- No --> END
    
```

^530135



# Flujo
