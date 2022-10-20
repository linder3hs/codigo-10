const listPlayers = document.querySelector("#list-players");

const urlApi = "http://localhost:4000/jugadores-balon-oro";

async function renderPlayers() {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();

    data.forEach((player) => {
      listPlayers.innerHTML += `<my-card title=${player.name} img=${player.img} message="El ganador del año ${player.year}"></my-card>`;
    });
  } catch (error) {
    // si algo sale mal en el try acá vamos a poder manejar este error
    console.log(error);
  }
}

renderPlayers();
