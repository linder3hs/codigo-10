# Node JS
Es un motor que nos permite ejecutar JS del lado servidor

```js
node nombreArchivo.js
```

## Creando un proyecto
Para poder crear un proyecto en node siempre iniciamos `npm init` este comando nos
va a crear el archivo `package.json`, este basicamente contiene toda la configuración

En este archivo podremos instalar dependecias externas, crear comandos, definir entornos, etc

```json
"scripts": {
    "start": "node index.js"
}
```

Para usar el comando creado en nuestra consola debemos color lo siguiente

```bash
npm start
```

Esto ejecuta el contenido de nuestro archivo index.js