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
