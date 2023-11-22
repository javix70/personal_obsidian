Que tienen distinto los 2

Problema con edenred. revisar que tiene que difrente 

electronic billing, ahí dentro es donde se genera la info de libre dte, la 14 no hace ninguna lógica.

se arma la data.

Mirar los Tender Tender Class del pedido y el pedido de prueba que su funcino
Electronic Receip que fue lo que generó.

![[Pasted image 20231122115344.png]]
![[Pasted image 20231122115340.png]]
![[Pasted image 20231122115329.png]]

Integración con sdk o api de posserver de kao,. 
dado que hay guacamoles dfentro de kao cómo se manejaría ahí..

check_fail = Check.find(219766)\


check_ok = Check.find(219843)

```
:pre_dte => "{:Encabezado=>{:IdDoc=>{:TipoDTE=>39}, :Emisor=>{:RUTEmisor=>\"76866138-3\", :RznSocEmisor=>\"Inmobiliaria e inversiones Shalom SPA\", :GiroEmisor=>\"Actividades de restaurantes y de servicio movil de comidas\", :DirOrigen=>\"EL CASTILLITO #PC 1-B DEPTO. #6\", :CmnaOrigen=>\"Las Condes\", :CdgSIISucur=>\"81991723\"}, :Receptor=>{:RUTRecep=>\"66666666-6\"}}, :Detalle=>[{:NmbItem=>\"Salsa Unagui\", :QtyItem=>1, :PrcItem=>1500, :DescuentoPct=>0.4e2}], :DscRcgGlobal=>[{:NroLinDR=>1, :GlosaDR=>\"Ticket Edenred\", :TpoMov=>\"D\", :TpoValor=>\"$\", :ValorDR=>900}]}",
                       :temp_dte => "{\"emisor\":76866138,\"receptor\":66666666,\"dte\":39,\"codigo\":\"3dc94e8d29680a841a76df2e14837a9c\"}\n",

```