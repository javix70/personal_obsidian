
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
    B-->>B: Aplica descuento y lo desactiva
    B->>D: Order creada
    D->>C: Mostrar vista de orden creada
    end
    B-->>POF: Enviar Orden a Tienda si no es oneclick (api/v1/web_orders)
    POF-->B: Si es oneclick, va a buscar La orden (Flujo de POF)  
```

^a750b5


# Conexiones con otros servicios o apps

## pof_server_new (adjuntar link a introduccion)

```mermaid
---
title: no es OneClick (cualquier otro medio de pago)
---

sequenceDiagram
    participant CB as China Backend
    participant PN as Pos server New

	CB->>CB: Armar data para enviar
	CB->>PN: Envia el pedido oneclick (SendOrderToPof)
	PN->>PN: Lo procesa (api/v1/web_orders)
```
^05331e



# Flujo

```mermaid
graph TD
A[save_params] --> B{customer_params está presente?}
B -->|Sí| C[save_customer]
B -->|No| D{coupon_customer_id está presente?}
C --> D
D -->|Sí| E[Encuentra y guarda el cupón]
D -->|No| F{payment_type_id está presente?}
E --> F
F -->|Sí| G[Encuentra y guarda el tipo de pago]
F -->|No| H{tbk_user_id está presente?}
G --> H
H -->|Sí| I[Encuentra y guarda tbk_user]
H -->|No| J{provider está presente?}
I --> J
J -->|Sí| K[Configura el provider]
J -->|No| L{el pedido es externo y provider está presente?}
K --> L
L -->|Sí| M[Configura varios atributos]
L -->|No| N{order_type está presente?}
M --> N
N -->|Sí| O[Configura order_type]
N -->|No| P{el tipo de pedido es 'Delivery'?}
O --> P
P -->|Sí| Q[Realiza varias verificaciones y configuraciones]
P -->|No| R{restaurant_id está presente?}
Q --> R
R -->|Sí| S[Verifica la disponibilidad del restaurante]
R -->|No| T{los estados están en blanco?}
S --> T
T -->|Sí| U[Configura los estados por defecto]
T -->|No| V{name no está presente?}
U --> V
V -->|Sí| W[Intenta utilizar el nombre de un pedido anterior]
V -->|No| X{order_promotions está presente?}
W --> X
X -->|Sí| Y[Comprueba la disponibilidad de las promociones]
X -->|No| Z{order_products está presente?}
Y --> Z
Z -->|Sí| AA[Comprueba la disponibilidad de los productos]
Z -->|No| BB[Guarda el pedido]
AA --> BB
BB --> CC{order_promotions está presente?}
CC -->|Sí| DD[Guarda las promociones del pedido]
CC -->|No| EE{order_products está presente?}
DD --> EE
EE -->|Sí| FF[Guarda los productos del pedido]
EE -->|No| GG[Actualiza los estados de categoría]
FF --> GG
GG --> HH{el pedido es externo y provider está presente?}
HH -->|Sí| II[Agrega productos por defecto]
HH -->|No| JJ{additional_products está presente?}
II --> JJ
JJ -->|Sí| KK[Genera y guarda las preferencias del cliente]
JJ -->|No| LL[Actualiza las preferencias de restaurant_id para el cliente]
KK --> LL
LL --> MM[Actualiza el total, estado y tiempo prometido del pedido]
MM --> NN{el cupón del cliente está presente y no es extensible?}
NN -->|Sí| OO[Desactiva el cupón del cliente]
NN -->|No| PP[Fin]
OO --> PP

```