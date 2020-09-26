# Rest Server 

Esta es una aplicación en Node.js, que permite hacer las peticiones de Get de manera paginada, Post, Put con sus respectivas validaciones y Delete, tratando con la eliminación lógica de la entidad usuario, producto y categoria. De igual manera tiene un método del login, que a su vez manda la respuesta con un token, lo cual permitirá realizar las peticiones del CRUD a solo los usuarios administradores, una vez logueados. Además un servicio de búsqueda general de los productos por su nombre.

Se agrego la funcionalidad de logearse con las credenciales del correo Gmail, generando un token, usando Google Sign-In.


Para ejecutarlo, es necesario reconstruir los módulos de node usando el siguiente comando

```
npm install

```

Para correr la aplicación debe ejecutar el siguiente comando, en la carpeta del proyecto

```
node server/server ó nodemon server/server

```




