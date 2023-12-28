

[[Configurar ssh y servidores]]

```bash
ssh niushi 'tab' #press the server that you do want see
```

para ver los logs

```bash
gologs
grep -i 1055224962 pedidos_ya.log*
`grep -Rn "return Rails.logger.error(\"Skip send #{order.id} with pos_status: '#{order.pos_status}'\") unless order.pending?" /path/to/logs/`
```