function aumentarNumber(numero, aumento) {
  // En esta funcion vamos a programar que el numero aumente en una cantida x

  // operador de adicion
  //? numero = numero + aumento;
  // 10 + 20
  numero += aumento; // 30
  numero -= aumento; // 10
  numero *= aumento; // 200
  numero /= numero; // 1
  console.log(numero);
}

aumentarNumber(10, 20);

console.log("Funcion 2");
function aumentoDoble(numero, aumento) {
  // numero **= aumento; // 8
  numero %= aumento;
  console.log("aumentoDoble", numero);
}

aumentoDoble(2, 3);
aumentoDoble(8, 4);
aumentoDoble(12, 2);

function operadorDeCambio(numero1, numero2) {
  numero1 <<= numero2;
  // numero1 = numero1 << numero2
  console.log("operadorDeCambio", numero1);
}

operadorDeCambio(5, 20);

function operadoresLogicos(numero1, numero2) {
  // cuando tenemos un operador logico que sea
  // > < >= <= == === || siempre se retorna un true o false
  console.log(">", numero1 > numero2); // true
  console.log("<", numero1 < numero2); // false
  console.log("==", numero1 == numero2); // false
  // === vs ==
  console.log("==", "1" == 1); // true
  console.log("===", "1" === 1); // false
  console.log(typeof 41.3); // number
  console.log(typeof "hola"); // string
  console.log(typeof [1, 2, 3]); // object
}

operadoresLogicos(100, 50);
