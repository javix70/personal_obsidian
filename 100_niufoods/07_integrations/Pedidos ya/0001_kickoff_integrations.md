

Hacer migración a pedidos ya V2


Hoy se trabaja a nivel SDK  --> API

Se trabaja a traves de webhooks

2 tipos de desarrrollo
indirecto : SDK no va. si o si necesita un sistema de recepcion (aceptar y)
directo: SDK --> pasa a directo. no necesita sistema de i

# AMBIENTE
PRODUCCION
1. Perfiles de test en produccion (orientado para prueba)
2. Homolar migracion
TEST (Stagging)
1. Es inestable
2. Se puede llevar más cuenta


pasar el webhooks pasarselo a ellos para hacer la prueba (ellos lo configuran por su parte)

----------

el worker de ImportPedidosYa no debe llamarse cada 30 segundos como lo hace actualmente

