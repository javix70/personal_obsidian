
# SSH
```bash
cd ~/.ssh
```

Listar directorios
```
ll
```

Se deben tener 3 archivos importante

```bash
config #config ssh
niusushi.pem #PrivateKey to access aws
pos_config #config de servidores
```

![[Pasted image 20231228140024.png]]

se debe incluir en config el pos_config

config file
```bash
Include pos_config
Host *
  AddKeysToAgent yes
  IdentityFile newfood_work
````

Darle permisos al pem (solo 1 vez)
```bash
chmod 400 "niusushi.pem"
```
