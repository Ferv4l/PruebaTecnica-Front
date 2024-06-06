<h1>Gestor de Personas</h1>

> Este repositorio contiene el código fuente y la documentación para el Gestor de Personas


## 🚀 Comandos de uso

Para la instalación de los modulos se utiliza

```sh
yarn install
```

Para correr el proyecto se utiliza

```sh
yarn dev
```

El proyecto deberia estar corriendo si se muestra el siguiente mensaje

![Vite](/docs/yarnvite.png "VITE")

## 📄 Estructura del proyecto

`root`: Carpeta principal de los archivos del proyecto que se encuentran en el directorio raíz del proyecto

![ROOT](/docs/root.png "Carpeta ROOT")

`src`: Carpetas que contienes los componentes, assets y demas del proyecto

![SRC](/docs/src.png "Carpeta SRC")

Esta aplicación va a llamar a una api llamada https://randomuser.me/, la cual trae X cantidad de personas, esto lo podemos manejar en el servicio `UserService.ts`

![USER](/docs/userservice.png "USER")

En donde en Results le podemos mandar la cantidad de personas que puede traer.


## 📝 Mejoras por hacer

- Ordenar al hacer click en nombre, pais o apellido
- Filtar por el nombre del país


