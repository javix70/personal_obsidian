

pof

hay liberado, caleta de prs para revisión, y se va en la mitad.

los retornos de los metodos no eran claros,
podian ser integer o money

se empezó a definir un solo retorno y por el camino de monetize

hay que revisar toa la app, en donde se pueda morir..

**solo los flujos que afecte a monetize y unbillable_cents**

https://bitbucket.org/nnodes/pof/pull-requests/135?w=1

ese es el pr, y hago las pruebas sobre 

https://bitbucket.org/nnodes/pof/pull-requests/142?w=1

ese es el último pr que se subio. 

WIP:

- [x] default money price -> default price.

cachar el que el cambio donde se fue a modificar y actualizar el nombre donde correponda.

en los lugares en donde no se modificó
- [ ] 


Consideración en QA.

combo box
app/helpers/combo_definitions_helper.rb

```ruby
default_price: variant.provider_price_cents(provider_id),
extra_price: variant.extra_price,
```