
## Variables de entorno a agregar:

**México**:

**DEFAULT_CURRENCY**=MXN
**ICU_LOCALE**=es-MX

**Chile**:

**DEFAULT_CURRENCY**=CLP
**ICU_LOCALE**=es-CL

Luego de correr las migraciones se debe correr adicionalmente lo siguiente:

`PriceList.all.update_all(extra_price_currency: 'CLP')`

Lo anterior solo se requiere para las tiendas de Chile. Para servidores que sean levantados de 0 no es necesario.

Si se quieren hacer pruebas para México, se deben cambiar los datos de currency de la bd. Se puede correr esto en la consola:

> Check.all.update_all(price_currency: 'MXN')  
> Check.all.update_all(total_price_currency: 'MXN')  
> Check.all.update_all(unbillable_currency: 'MXN')  
> LineDiscount.all.update_all(amount_currency: 'MXN')  
> LineItem.all.update_all(price_currency: 'MXN')  
> PriceList.all.update_all(price_currency: 'MXN')  
> PriceList.all.update_all(extra_price_currency: 'MXN')  
> RegisterShift.all.update_all(initial_cash_currency: 'MXN')  
> RenditionTender.all.update_all(amount_currency: 'MXN')  
> Rendition.all.update_all(change_currency: 'MXN')  
> Rendition.all.update_all(tip_currency: 'MXN')

y para Chile

> Check.all.update_all(price_currency: 'CLP')  
> Check.all.update_all(total_price_currency: 'CLP')  
> Check.all.update_all(unbillable_currency: 'CLP')  
> LineDiscount.all.update_all(amount_currency: 'CLP')  
> LineItem.all.update_all(price_currency: 'CLP')  
> PriceList.all.update_all(price_currency: 'CLP')  
> PriceList.all.update_all(extra_price_currency: 'CLP')  
> RegisterShift.all.update_all(initial_cash_currency: 'CLP')  
> RenditionTender.all.update_all(amount_currency: 'CLP')  
> Rendition.all.update_all(change_currency: 'CLP')  
> Rendition.all.update_all(tip_currency: 'CLP')


## En caso de cambio, revisar este pr
[configuración de valores mexico valores / chile](https://bitbucket.org/nnodes/pof/pull-requests/129)
