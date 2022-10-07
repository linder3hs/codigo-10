const button_start = document.getElementById("button_start");
const live_qty = document.querySelector(".live_qty");

button_start.addEventListener("click", function () {
  this.disabled = true;
  document.getElementById("game").style.display = "block";
});

// Game:
const pi_decimals =
  "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";

let position = 0;
// podemos crear una variable para contar la cantidad de errores
let errors = 0;

const input_decimals = document.getElementById("input_decimals");
const result_decimals = document.getElementById("result_decimals");
const result_score = document.getElementById("result_score");

// vamos a crear una funcion que permite altertar el valor de vidas
function renderLives() {
  // cada vez que error sea true entonces vamos a disminuir un corazon
  live_qty.innerHTML = "";
  // for (let i = 0; i < 4; i++)
  for (let i = 0; i < 5 - errors; i++) {
    // live_qty.innerHTML = live_qty.innerHTML + "❤️";
    live_qty.innerHTML += "❤️";
  }
}

// Cuando llamamos por primera a la funcion errors = 0
renderLives();

// keydown -> keypress -> .value -> keyup
input_decimals.addEventListener("keyup", function () {
  this.value = "";
  this.focus();
});

function getSixCharacters() {
  // que funcion converite un string a un array split
  // const numeros = pi_decimals.split(""); // string vacio
  // retorna la lista de numeros hasta la position postion + 5 // que son los 6 numeros despues que me equivoque
  // 14159265358979;
  // suponganmos que solo acerte hasta 3.1415
  // caso1 = 3.1415
  // position = 4
  // quiero los numeros donde el index sea <= position + 5 // 9
  // newNumeros = 1415926535 // aca se cumple la condicon y ya no imprime mas
  // const newNumeros = numeros.filter((number, index) => index <= position + 5);
  // result_decimals.innerHTML = "3." + newNumeros.join("");
  result_decimals.innerHTML =
    "3." +
    pi_decimals
      .split("")
      .filter((number, index) => index <= position + 5)
      .join("");
}

input_decimals.addEventListener("keydown", function (evt) {
  if (evt.code == "Enter") return;
  // Convirtiendo la tecla presionado a el caracter que representa:
  const decimal = String.fromCharCode(evt.keyCode);
  if (decimal == "") return;
  if (decimal == " ") return;
  if (isNaN(decimal)) return; // is Not a Number
  // Si decimal llegó hasta aquí, es porque el usuario presiono un numero:
  // Comprobar si decimal es igual al siguiente decimal de la cadena:
  if (decimal == pi_decimals.charAt(position)) {
    // acierto:
    result_decimals.innerText += decimal;
    result_decimals.style.color = "green";
    position++;
    result_score.innerText = position;
  } else {
    // desacierto:
    errors++;
    result_decimals.style.color = "red";
    // llamamamos a renderlives
    renderLives();
    if (errors === 5) {
      input_decimals.disabled = true;
      // debemos llamar a los 6 numeros para aprender
      getSixCharacters();
    }
  }
  // Volver el texto a negro:
  setTimeout(() => {
    result_decimals.style.color = "black";
  }, 500);
});
