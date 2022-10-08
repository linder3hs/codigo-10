const url = "https://movies-app1.p.rapidapi.com/api/genres";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

// creamos la referencia de la lista
const lista = document.querySelector(".lista");

async function getGeneros() {
  const respuesta = await fetch(url, options);
  const data = await respuesta.json();
  const generos = data.results;
  console.log(generos);

  lista.innerHTML = "";
  generos.forEach((genero) => {
    lista.innerHTML += `<li>${genero.name}</li>`;
  });
}

getGeneros();
