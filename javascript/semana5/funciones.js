// Sintaxys: La forma en la que escribimos escribimos el codigo

// function sumar() {

//}
let n3 = 30;

function sumar() {
  // codigo
  let n1 = 10;
  let n2 = 20;
  console.log(n1 + n2 + n3);
}

let n4 = 40;

// console.log(n1);
console.log(n3);

let nombre = "Pepe";

// Recomendacion: Los nombres de la funciones deben ser verbos
function restar(n1, n2) {
  console.log(n1 - n2);
}

// Significa que cuando tengamos que llamar la funcion esta recibe 2 argumentos
// que son n1, n2
//llamar la funcion hace referencia a usar, porque una funcion cuando es
// creado solo se ejecutada cada que la llamemos

// Para usar la funcion solo debemos escribir el nombre de esta
restar(10, 50); // -40
restar(90, 100); // -10
restar(120, 30); // 90

function saludar(nombre) {
  return "Hola me llamo " + nombre; //
}

saludar("Pepe");
saludar("Juan");

// Ahora vamos a ver funcion que usan return
const edadMinima = 18;
function entrarAFiesta(edad) {
  // Si es es mayor a 18 podrar entrar si no no entra
  let resultado = false;

  if (edad >= edadMinima) {
    // Este return significa que si la condicion se cumple el valor que devuelva (retorne) sera true
    // cuando se ejecuta el return la funcion termina
    resultado = true;
  }

  return resultado;
}

const validacionDeEdad = entrarAFiesta(20); // false
console.log("Vaidacion de edad", validacionDeEdad);
