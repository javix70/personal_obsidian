
# Diagrama ER

```mermaid
erDiagram
    PriceList ||--o{ SalesPlataform : "has_many"
    SalesPlataform }|--|| Product : "has_many"
    SalesPlataform }|--|| Promotion : "has_many"
    SalesPlataform }|--|| Ingredient : "has_many"
    Product ||--o{ SelectableOption : "has_many"
    Promotion ||--o{ SelectableOption : "has_many"
    SelectableOption ||--o{ SelectableItem : "has_many"
    Ingredient ||--o{ SelectableItem : "has_many"
    CategoryGroup ||--|{ Category : "has_many"
    Category }|--|{ Product : "has_many"

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

    SelectableItem {
        bigint selectable_option_id FK
        string itemable_type
        bigint itemable_id FK
        datetime created_at
        datetime updated_at
    }

    Ingredient {
        bigint id PK
        string name
        datetime created_at
        datetime updated_at
    }

    CategoryGroup {
        int id PK
        string name
    }

    SelectableOption {
        bigint promotion_id FK
        bigint product_id FK
        string name
        string sku
        integer quantity
        integer max_selection
        integer min_selection
        integer free_selection
        integer position
    }
```