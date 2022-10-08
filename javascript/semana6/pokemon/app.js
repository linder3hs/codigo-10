const btnGetPokemons = document.querySelector("#get-pokemons");

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";

btnGetPokemons.onclick = async function () {
  // Como. hacemos para que JS pueda extrar la informacion
  //de dichar
  // En JS existela la. funcion "fetch" permite consumir
  // la inforacion de una url

  // Para poder hacer que fetch termine la ejecucion
  // tener que converitir nuestra funcion en async
  const respuesta = await fetch(urlPokemons);
  // Ahora vamos a crear una variable que guarde la
  // informacion que el servidor responde

  // Lo parsea de JSON -> Objeto
  // Siempre debemos convertir nuestros a un objeto
  // para que JS lo pueda entender
  const data = await respuesta.json();
  console.log(data.results);
};
