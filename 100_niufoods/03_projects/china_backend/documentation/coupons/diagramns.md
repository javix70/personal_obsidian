
# Maquinas de estado
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


# Secuencia

