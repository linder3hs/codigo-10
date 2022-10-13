import movies from "./data.json" assert { type: "json" };

const container = document.querySelector(".container");
const inputBuscar = document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

btnBuscar.onclick = () => {
  const texto = inputBuscar.value;

  const moviesFiltradas = movies.entries.filter(
    (movie) => movie.title.toLowerCase() === texto.toLowerCase()
  );

  readMovies(moviesFiltradas);
};

function test() {
  console.log("movies");
}

function readMovies(listPeliculas = movies.entries) {
  container.innerHTML = "";
  listPeliculas.forEach((movie, index) => {
    container.innerHTML += `<div class="movie">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(
          index + (Math.random() * 10).toFixed(0)
        ).replace("0", "")}.svg" alt="" />
        <h4>${movie.title}</h4>
        <p>
          ${movie.description}
        </p>
        <button onclick="test()">aaaa</button>
      </div>
    `;
  });
}

readMovies();
