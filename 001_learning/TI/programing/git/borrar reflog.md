## Problema:

Borrar historial de git reflog (en realidad no es problema)
 
 **Borrar el historial del reflog**:

	- El reflog puede crecer con el tiempo y ocupar espacio.
	- Se puede usar un comando para borrar el reflog y otro para limpiar la base de datos de Git.


## Solución implementada:

**Para borrar el historial del reflog**:

    - Usar `git reflog expire --expire=now --all` para borrar el reflog.
    - Luego, limpiar y compactar la base de datos de Git con `git gc --prune=now`.
