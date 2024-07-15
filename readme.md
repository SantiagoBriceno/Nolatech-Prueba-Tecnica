<h1 align="center">Prueba técnica - Nolatech</h1>
<p align="center"><i>Prueba técnica de Nolatech - realizada por Ing. Santiago Briceño</i></p>

<br>

Este repositorio está destinado para la realización de la prueba tecnica de Nolatech, la cual consiste en la componetización práctica de una pagina web con ReactJS, además de realizar los formulario de registro y login del usuario, en conjunto de una serie de validaciones de campos y la capacidad de poder realizar las acciones básicas de CRUD en una tabla de usuarios.

## Contenido
  - [Monorepositorio multipaquete](#github-readme-profile-category)
  - [Front-End de proyecto](#list-out-awesome-readme-profile-tools)
  - [Back-End del proyecto](#list-out-awesome-readme-profile-articles)
  - [Archivo simulador de base de datos](#contribute)


## Descripción

El proyecto se encuentra dividido en dos partes, el front-end y el back-end, los cuales se encuentran en carpetas separadas dentro del repositorio. Ambas con sus respectivas herramientas de desarrollo. 

El frontend se encuentra desarrollado en ReactJS, utilizando CSS puro para dar estilos básicos a la aplicación. Debemos hacer alusión que se buscó la implementación de componentes reutilizables, los cuales se encuentra en la carpeta `src/components`, junto a ellos, encontraremos el desarrollo de un conjunto de Custom Hooks empleados por los mismos, es ahí donde encontraremos también la validación del FRONT-END; además de la implementación de un archivo de configuración de rutas con ayuda del enrutador React-Router, el cual se encuentra en `src/router/routes.js`. El Fetching de los datos se realizaron sin ayuda de librerias externas, utilizando el método `fetch` nativo de JavaScript y la implementación de `async/await` (Promises) para la obtención de los datos y manipulación de los mismos, los métodos podremos encontrarlos en `src/service/`.

El backend se encuentra desarrollado en NodeJS, utilizando ExpressJS como framework para el desarrollo de la API REST, la cual se encarga de la manipulación de los datos de los usuarios, los cuales se encuentran almacenados en un archivo JSON simulando una base de datos (Para evitar problemáticas relacionados al momento de ejecutar el proyecto en otros dispositivos) y siendo manipulada con ayuda de la libreria FileSystem y la creación de un Modelo para la entidad User, todos estos archivos podremos encontrarlos en la carpeta `src/database`. La API cuenta con un conjunto de rutas que permiten la manipulación de los datos de los usuarios, las cuales se encuentran en `src/routes/v1`. Los métodos de la API se encuentran distribuidos en la carpeta `src/controllers/v1`, los cuales se encargan de la manipulación de los datos y la respuesta de los mismos empleando el estandar de respuesta de la API. Las validaciones de los campos de los formularios fueron desarrollados sin ayuda de librerias externas, empleando lógica de programación en conjunto de la posibilidad que nos brinda NodeJS de manipular nuestro objeto Request, los métodos de validación se encuentran en `src/middlewares/v1`. Por ultimo, los servicios de comunicación con nuestra "Base de datos JSON" se encuentran en `src/services/v1`. Fue aquí en el backEnd que se simuló el uso de un token de autenticación, el cual se encuentra en la carpeta `src/controller/login` y se encarga de la validación del token en las rutas protegidas de la API apesar de no ser empleado en su totalidad en el FRONT-END.

Se realizaron dos encriptaciones de datos, por un lado la contraseña de los usuarios, la cual se encripta con ayuda de la libreria `bcrypt` en donde utilizamos el método `hash` para encriptar la contraseña y el método `compare` para comparar la contraseña encriptada con la contraseña ingresada por el usuario. Por otro lado, se encripta el id del usuario con ayuda de la libreria uuid, la cual nos permite generar un id único para cada usuario, el cual se encripta con el método `v4` de la libreria y se guarda en la base de datos encriptado y no incurrir en problemas de seguridad al hacer el id un campo incremental y con ello facilmente predecible.

Es de resaltar que las validaciones de los campos (Requisito de la prueba técnica) se encuentran en ambos lados, tanto en el FRONT-END como en el BACK-END, esto con el fin de garantizar la integridad de los datos y evitar problemas de seguridad en la aplicación.

## RUTAS DE LA API

- **GET** - /api/v1/users - Obtiene todos los usuarios
- **GET** - /api/v1/users/paginated - Obtiene todos los usuarios de forma paginada Ingresando la pagina y la cantidad de usuarios por pagina deseados como queryparam (Ejemplo: /api/v1/users/paginated?page=1&limit=10)
- **GET** - /api/v1/users/:id - Obtiene un usuario por su ID
- **POST** - /api/v1/users - Crea un usuario
- **PUT** - /api/v1/users/:id - Actualiza un usuario por su ID
- **DELETE** - /api/v1/users/:id - Elimina un usuario por su ID
- **POST** - /api/v1/login - Inicia sesión de un usuario

## Condiciones del proyecto

- La aplicación cuenta con un formulario de registro, el cual solicita los siguientes campos:
  - Nombre y apellido
  - Nombre de usuario o correo electrónico
  - Confirmación de nombre de usuario o correo electrónico
  - Contraseña
  - Confirmación de contraseña

- La aplicación cuenta con un formulario de login, el cual solicita los siguientes campos:
  - Nombre de usuario o correo electrónico
  - Contraseña

- Los campos de los formularios deben cumplir con las siguientes condiciones:
  - Todos los campos son obligatorios
  - El campo de nombre y apellido debe contener solo letras
  - El campo de nombre de usuario o correo electrónico no debe contener espacios en blanco y en caso de ser un correo electrónico, debe tener el formato correcto
  - El campo de confirmación de nombre de usuario o correo electrónico debe ser igual al campo de nombre de usuario o correo electrónico
  - El campo de contraseña cuenta con validaciones básicas de seguridad (Mínimo 8 carácteres, máximo 20 carácteres y no debe contener espacios en blanco) Puede mejorarse incluyendo más validaciones de seguridad
  - El campo de confirmación de contraseña debe ser igual al campo de contraseña

### Instalación 🔧

Una guía paso a paso sobre cómo configurar el entorno de desarrollo e instalar todas las dependencias.

```bash
# paso 1
# Clonar el repositorio en tu maquina local
# git clone https://github.com/SantiagoBriceno/Nolatech-Prueba-Tecnica.git
```

```bash
# paso 2
# Instalar las dependencias en la raiz del proyecto
# npm install
```

```bash
# paso 3
# Instalar las dependencias en la carpeta del backend
# cd backend
# npm install
```

```bash
# paso 4
# Instalar las dependencias en la carpeta del frontend
# cd frontend
# npm install
```

```bash
# paso 5
# Ejecutar el proyecto
# npm run start en la raiz del proyecto
```

## Construido Con 🛠️

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
- [NodeJS](https://nodejs.org/es/) - Entorno de ejecución
- [ExpressJS](https://expressjs.com/es/) - Framework de NodeJS
- [React](https://es.react.dev/) - Biblioteca de JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo de frontend
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Lenguaje de estilos
- [JSON](https://www.json.org/json-es.html) - Formato de intercambio de datos
- [FileSystem](https://nodejs.org/api/fs.html) - Módulo de NodeJS
- [React-Router](https://reactrouter.com/web/guides/quick-start) - Enrutador de React


## Autor ✒️

- **Santiago G. Briceño F.** - _Ing. de Sistemas_ - [Santiago G. Briceño F.](https://github.com/SantiagoBriceno)

## Expresiones de Gratitud 🎁

Muy a gusto con la oportunidad brindad, no solo por la posibilidad de demostrar mis habilidades, sino por la posibilidad de aprender y mejorar en el proceso. Me gustaria recibir un feedback de la prueba realizada, con el fin de mejorar y corregir los errores que se hayan podido cometer.

## Observaciones y curiosidades del proyecto

- Los estilos de la aplicación en el FRONT-END fueron realizados sin ayuda de librerias externas, empleando CSS puro, por lo cual tiene un aspecto básico y sencillo que puede ser mejorado utilizando librerias de estilos como Bootstrap, Material-UI, TailwindCSS, entre otros.

- La validación de los campos en el BACK-END se realizó sin ayuda de librerias externas, empleando lógica de programación por lo cual tiene un desarrollo básico y fácil de ser vulnerado, sin embargo se puede mejorar utilizando librerias de validación como Joi, Yup, entre otros, que potenciarian la seguridad de la aplicación.

- La base de datos fue SIMULADA con un archivo JSON, y sin ayuda de gestores de base de datos, por lo cual, no se garantiza la integridad y seguridad de los datos, sin embargo, se puede mejorar utilizando gestores de base de datos como MongoDB, MySQL, PostgreSQL, entre otros.
