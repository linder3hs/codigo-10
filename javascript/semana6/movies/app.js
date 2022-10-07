import movies from "./data.json" assert { type: "json" };

const container = document.querySelector(".container");

function readMovies() {
  movies.entries.forEach((movie, index) => {
    container.innerHTML += `<div class="movie">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          index + 1
        }.svg" alt="" />
        <h4>${movie.title}</h4>
        <p>
          ${movie.description}
        </p>
      </div>
    `;
  });
}

readMovies();
