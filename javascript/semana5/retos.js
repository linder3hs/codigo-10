/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 */
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

/*
 * Reto #2
 * ÁREA DE UN POLÍGONO
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de
 * calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 */

// area triangulo: bxh/2
// area cuadrado: bxh
// area rectangulo: bxh

function calcularAreaDePoligono(tipoPoligono, base, altura) {
  const poligonos = {
    triangulo: (base * altura) / 2,
    cuadrado: base * altura,
    rectangulo: base * altura,
  };

  // cubo poligonos[tipoPoligono] = undefined
  return (
    //poligonos["triangulo"] = undefined
    poligonos[tipoPoligono] ??  "Hubo un error no se pudo difinir el poligono"
  );
}

const triangulo = calcularAreaDePoligono("triangulo", 40, 2);
const cuadrado = calcularAreaDePoligono("cuadrado", 20, 20);
const rectangulo = calcularAreaDePoligono("rectangulo", 10, 15);
const cubo = calcularAreaDePoligono("cubo", 10, 20);
console.log("triangulo", triangulo);
console.log("cuadrado", cuadrado);
console.log("rectangulo", rectangulo);
console.log("cubo", cubo);
