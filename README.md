# Api REST Flotilla de Carros

### Sobre el Proyecto
El repositorio contiene una Api REST que tiene como objetivo simplificar la tarea de los usuarios que manejan cierta cantidad de datos de manera ffísica. En este proyecto se toma como referencia una ‘Flotilla de carros’, para esto la API cuenta de dos secciones principales, la primera es un CRUD para un modelo de datos referido a los carros y la otra parte es un CRUD que utilizaran los usuarios anteriormente registrados con un Rol Administrativo con el objetivo de manipular datos de los carros y de los futuros usuarios registrados (por dicho usuario administrativo), cabe resaltar que cada usuario para poder usar la aplicación debe de realizar un proceso de Login anteriormente.

### Construcción
Las tecnologías principales utilizadas para la creación del proyecto fueron:
- NodeJS
- Express
- Bootstrap
- Angular (*En su version 9.1.3*)

Lenguajes de programacion utilizados:
- JavaScript
- TypeScript

Se utilizo el lenguaje de etiquetas HTML5 y el lenguaje de diseño grafico CSS3. Por ultimo como gestor de base de datos se uso MySQL

### Construcción del Proyecto de Manera Local
##### Prerrequisitos
- Instalar NodeJS descargándolo desde la pagina oficial. https://nodejs.org/es/download/
- Instalar Angular CLI en su version 9.1.3 .
`npm install -g @angular/cli@6.1.1
- Tener instalado MySQL Workbench como software para manipular scripts SQL y Esquemas.
- Tener una conexión local mysql con hostname:127.0.0.1, port 3306, username root, password: password y Connection Method: Standard(TCP/IP).
[MySQL Connection](https://ibb.co/L8QHTn7 "MySQL Connection")

##### Instalación
1. Clonar el repositorio. 
2. Abrir y ejecutar (en MySQL Workbench) el archivo DBFlotillaCarros.sql ubicado en la carpeta FlotillaCarrosBackend dentro de la carpeta‘database’.
3. En la directorio de la carpeta FlotillaCarrosBackend .
`npm install express`
`npm install nodemon`
`npm install body-parser`
`npm install jwt-simple`
`npm install moment`
`npm install mysql`
4. En el mismo directorio ejecutar el comando 
`npm start`
5. En el directorio de la carpeta FlotillaCarrosFrontend ejecutar los comandos 
`npm install bootstrap`
`npm install jquery`
6.En el mismo directorio ejecutar el comando
`ng serve`

### Uso

- Para poder empezar a utilizar el programa debe de ingresar desde un navegador a la ruta local
http://localhost:4200 en donde puede empezar a usar el programa.
[Ruta](https://ibb.co/P9DK6Kn "Ruta")
- Como primera vista estará un Login en donde ingresara los siguiente datos, email: juancorreo@correo.com, contraseña: password.
[Login](https://ibb.co/86wpGnS "Login")
- Una vez Logueado estara una pagina principal, en esta podrá acceder a las distintas funciones.
[principal](https://ibb.co/h926VWw "principal")
- En el boton de la tarjeta Agregar Registro en el apartado Carros, al hacer click abrira un formulario en donde se puede guardar un registro.
[RegisterCar](https://ibb.co/Jyzvj87 "RegisterCar")
- En el boton de la tarjeta Listar Registro de Carros en el apartado Carros, al hacer click abre una tabla con todos los carros anteriormente registrados.
[ListCars](https://ibb.co/g7kg6jF "ListCars")
- Al hacer click en el icono editar se abrira un formulario para poder editar el registro del Carro.
- Al hacer click en el icono eliminar se eliminara un registro de la tabla.
- En el boton de la tarjeta Registrar Usuario del Apartado Usuarios, al hacer click abrira un formulario con la posibilidad de guardar el registro.
- En el boton de la tarjeta Listar Registro de Usuario del Apartado Usuarios, al hacer click abrira una tabla con los usuarios registrados sin la posibilidad de editarlos o eliminarlos.
- Al hacer click en la pestaña de navegacion Herramientas mostrara de nuevo la pagina principal.

### Acciones Incompletas
- Vistas para las funciones Editar y Eliminar del modelo Usuarios.
- Autenticacion por Token en todas las rutas de las acciones de Administradores, excepto para Registrar un nuevo Usuario.
- -	Falta la implementación de la librería bcrypt-nodejs y utilizar su propiedades.

### Licencia
Distribuido bajo la licencia MIT

### Contacto
Joel Alexander Guzaro Tzunun - alexanderguzarotzunun@gmail.com