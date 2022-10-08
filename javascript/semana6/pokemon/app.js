const btnGetPokemons = document.querySelector("#get-pokemons");
const container = document.querySelector(".container");

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
  readPokemons(data.results);
  // Reto1: Con la informacion que tenemos en data.results hagan una galeria
  // de pokemones parecida a la de peliculas
};

function readPokemons(pokemons) {
  container.innerHTML = "";
  pokemons.forEach((pokemon, index) => {
    container.innerHTML += `<div class="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png" alt="" />
        <h4>${pokemon.name}</h4>
        <p>
          ${pokemon.url}
        </p>
      </div>
    `;
  });
}
