
```mermaid
classDiagram
class categories {
  +category_group_id : bigint
  +name : string
  +description : text
  +created_at : datetime
  +updated_at : datetime
}
class category_groups {
  +name : string
  +description : text
  +created_at : datetime
  +updated_at : datetime
}
class ingredients {
  +name : string
  +description : text
  +available : boolean
  +sku : string
  +created_at : datetime
  +updated_at : datetime
}
class orders {
  +uuid : uuid
  +number : integer
  +aasm_state : string
  +promised_time : datetime
  +total : decimal
  +order_type : string
  +notes : text
  +created_at : datetime
  +updated_at : datetime
}
class price_lists {
  +priceable_type : string
  +priceable_id : bigint
  +sales_platform_id : bigint
  +price : decimal
  +extra_price : decimal
  +created_at : datetime
  +updated_at : datetime
}
class product_categories {
  +product_id : bigint
  +category_id : bigint
  +created_at : datetime
  +updated_at : datetime
}
class products {
  +category_id : bigint
  +name : string
  +description : text
  +available : boolean
  +sku : string
  +created_at : datetime
  +updated_at : datetime
}
class promotion_products {
  +promotion_id : bigint
  +product_id : bigint
  +quantity : integer
  +created_at : datetime
  +updated_at : datetime
}
class promotions {
  +name : string
  +description : text
  +start_date : datetime
  +end_date : datetime
  +available : boolean
  +sku : string
  +created_at : datetime
  +updated_at : datetime
}
class round_items {
  +round_id : bigint
  +product_id : bigint
  +promotion_id : bigint
  +quantity : integer
  +notes : text
  +created_at : datetime
  +updated_at : datetime
}
class rounds {
  +order_id : bigint
  +aasm_state : string
  +total : decimal
  +notes : text
  +created_at : datetime
  +updated_at : datetime
}
class sales_platforms {
  +name : string
  +code : string
  +active : boolean
  +is_default : boolean
  +created_at : datetime
  +updated_at : datetime
}
class selectable_items {
  +selectable_option_id : bigint
  +itemable_type : string
  +itemable_id : bigint
  +created_at : datetime
  +updated_at : datetime
}
class selectable_options {
  +promotion_id : bigint
  +product_id : bigint
  +name : string
  +max_selection : integer
  +min_selection : integer
  +free_items : integer
  +sku : string
  +created_at : datetime
  +updated_at : datetime
}
```