# ReactJS

Es una biblioteca de JavaScript para construir interfaces de usuario.

## Reglas

- Todo componente debe ser una función.
- Todo compomente debe empezar con *mayuscula*.

```js
function MyCard() {
  return <div>My Card</div>
}
```

- Todo componente debe retornar un solo elemento padre.

```js
function MyCard() {
  return (
    <div>
      <h1>Titulo</h1>
      <p>Parrafo</p>
      <div>
        <p>Parrafo hijo</p>
        <div>
          <p>Parrafo hijo 2</p>
        </div>
      </div>
    </div>
  );
}
```

- Nota: Dentro de mi componente puede mas funciones y esas ya no llevan mayuscula.
- Eventos: Los nombre de los eventos en React son camelCase.
  - onclick -> onClick
  - onchange -> onChange
  - onsubmit -> onSubmit

```js
function MyCard() {

  function mostrarMensaje() {
    console.log('Hola mundo');
  }

  return (
    <div>
      <h1>Titulo</h1>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
    </div>
  );
}
```

## useState

En react para poder almacenar un valor en un variable
usamos un hook llamando useState
useState es una funcion de react la cual nos permite poder
manejar el estado de una variable

- Como se usa useState
- *Siempre los import de react van en la primera linea*

```js
import { useState } from "react";

function App() {
  // useState nos retorna un arreglo con dos valores
  // el primer valor es el valor de la variable ("Juan")
  // el segundo valor es una funcion que nos permite cambiar el valor de la variable
  const [nombre, setNombre] = useState("Juan");
  
  // nombre = "Pepe"; // Esto no se puede hacer
  // setNombre("Pepe"); // Esto si se puede hacer

  // Si queremos cambiar el valor de la variable nombre
  // tenemos que llamar a la funcion setNombre
  return (
    <div>
      <p>Nombre {nombre}</p>
      <button onClick={() => setNombre("Pepe")}>Cambiar nombre</button>
    </div>
  )
}
```

## onChange para Inputs

- En react para poder manejar el valor de un input usams el evento onChange
este va a permitir captar cada vez que el usuario escriba en el input

```js
function App() {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    // cambiar el valor de la variable inputText
    // si queremos obtener lo que el usuario escribio
    // usamos event.target.value
    setInputText(event.target.value);
  }

  return (
    <div>
      <p>Nombre {nombre}</p>
      <input type="text" onChange={handleInputChange} />
    </div>
  )
  
}
```
