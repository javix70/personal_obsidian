
## Sirve para
identificar los componentes principales que conforman al sistema
Capturas de requerimientos fundamentales
mostrar el qué muestra no el cómo

Nos provee vista de alto nivel

## **Actor**: 
aquel que interactura con el sistema para poder hacer algo con el sistema,
Puede ser una persona o un nuevo sistema(ROL)

Cada objetivo que el actor quiere hacer es un Caso de uso.

## **Dependecia**
nos indica que hay una relación entre los diferentes casos de usos, no olvidar hacer una descripción

Existen dos tipos de **depencias**

### **include**
![[Pasted image 20230709204158.png]]

- El invocador no puede finalizar su objetivo sin la ayuda del incluido
- El invocador depende del incluido
- el incluido siempre es a la derecha de invocador
- La flecha va del invocador al incluido 
### Ejemplo

![[Pasted image 20230709204517.png]]


### Extend

La dependecia es opción, 
Base **puede** finalizar sus objetivos sin la necesidad del extend
algunos objetivos son con ayuda de la extends
La flecha va de la extensión a la base 


![[Pasted image 20230709204556.png]]


## Generalización

- Similar a la herencia pero con Casos de usos

- Casos de uso Padre
- Casos de usos hijos

- los Hijos son más especificos.

![[Pasted image 20230709205313.png]]


Ejemplo 
Pueden suceder con los Casos de Usos y de los actores.

![[Pasted image 20230709205419.png]]


# test WAVE

corrborar si los casos de uso están bienn definidos, a traves de 4 preguntas

W: Describe QUÉ hacer y no COMO hacerlo
A: Está descrito desde la perspectiva del Actor: Que hace el actor con mi sistema, que objetivos
V: incluye Valor para el actor?
E: Flujo de eventos, un escenario completo

