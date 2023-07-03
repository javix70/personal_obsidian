# Que es?
variable que almacena la dirección de memoria de otra variable
no el valor.

y son fundamentales para trabajar con estructuras de datos y para realizar operaciones de memoria eficientes.

##  Algunas características
**Aritmética de Punteros**: Puedes realizar operaciones aritméticas en punteros, como incrementar o decrementar la dirección de memoria que almacenan. Esto es útil para recorrer arreglos y acceder a sus elementos, por ejemplo.


**Desreferenciación**: Acceder al valor almacenado en la dirección de memoria a la que apunta un puntero se llama desreferenciación. Esto se hace utilizando el operador `*` en C y C++.

## Diagrama
```mermaid
graph TD;
    A["Puntero (almacena direccion de memoria)"];

    B["Variable (almacena valor)"];

    A -->|Desreferenciación| B;

    C["Dirección de memoria de la variable"];

    D["Valor almacenado en la variable"];

    A --> C;

    B --> D;


````## 