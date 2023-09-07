### Paso 1: Asegúrate de que Redis esté ejecutándose
Al igual que con Sidekiq, Resque utiliza Redis como su sistema de almacenamiento de fondo. Asegúrate de que Redis esté ejecutándose con el siguiente comando:


```sh
redis-server
```

### Paso 2: Inicia Resque

Para iniciar Resque, puedes usar el siguiente comando desde el directorio raíz de tu aplicación Rails:
```sh
QUEUE=* rake resque:work
``
`````````
Este comando iniciará un trabajador de Resque que comenzará a procesar trabajos de todas las colas.

### Paso 3: Inicia el Planificador de Resque

Dado que estás utilizando el planificador de Resque para programar trabajos, también necesitarás iniciar el planificador de Resque con el siguiente comando:

sh

`rake resque:scheduler`

Este comando iniciará el planificador de Resque, que comenzará a programar trabajos según lo definido en tu archivo `resque_schedule.yml`.

### Paso 4: Verifica que Resque esté ejecutándose

Una vez que Resque y el planificador de Resque estén ejecutándose, deberías ver una salida en tu terminal que indica que están listos para comenzar a procesar y programar trabajos, respectivamente.

### Paso 5: Accede a la interfaz de Resque

Ya has configurado la interfaz web de Resque en tu archivo `routes.rb`. Puedes acceder a esta interfaz visitando `http://localhost:3000/resque` en tu navegador web (asumiendo que tu aplicación Rails está ejecutándose en `localhost` en el puerto `3000`).

En esta interfaz, podrás ver y administrar tus colas y trabajos, y también verás una pestaña para el planificador de Resque donde podrás ver tus trabajos programados.

Espero que esto te ayude a levantar y ejecutar Resque en tu aplicación Rails. ¡Déjame saber si tienes alguna pregunta o encuentras algún problema!