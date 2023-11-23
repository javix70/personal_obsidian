```mermaid
erDiagram
    Product ||--o{ ProductCategory : "has_many"
    Product ||--o{ PromotionProduct : "has_many"
    Product ||--o{ SelectableItem : "has_many"
    Product {
        bigint id PK
        bigint category_id FK
        string name
        text description
        boolean available
        string sku
        datetime created_at
        datetime updated_at
    }
    ProductCategory ||--|{ Category : "belongs_to"
    ProductCategory {
        bigint product_id FK
        bigint category_id FK
        datetime created_at
        datetime updated_at
    }
    Promotion ||--o{ PromotionProduct : "has_many"
    Promotion ||--o{ SelectableItem : "has_many"
    Promotion {
        bigint id PK
        string name
        text description
        datetime start_date
        datetime end_date
        boolean available
        string sku
        datetime created_at
        datetime updated_at
    }
    PromotionProduct ||--|{ Product : "belongs_to"
    PromotionProduct ||--|{ Promotion : "belongs_to"
    PromotionProduct {
        bigint promotion_id FK
        bigint product_id FK
        integer quantity
        datetime created_at
        datetime updated_at
    }
    SelectableItem ||--|{ Product : "belongs_to"
    SelectableItem ||--|{ Promotion : "belongs_to"
    SelectableItem {
        bigint selectable_option_id FK
        string itemable_type
        bigint itemable_id FK
        datetime created_at
        datetime updated_at
    }
    Ingredient ||--o{ SelectableItem : "has_many"
    Ingredient {
        bigint id PK
        string name
        datetime created_at
        datetime updated_at
    }
```