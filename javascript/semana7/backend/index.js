/*
 * Reto #7
 * CONTANDO PALABRAS
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada
 *  palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 */

/*
 "Hola, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs)."

 Hola = 1
 mi = 2
 nombre = 2
 es = 2
 linder = 3
 completo = 1
 linder3hs = 1
 */

function countWords(text) {
  // vamos a crear un arreglo el cual guarde las palabra y su cantidad
  const result = [];

  text
    .toLowerCase()
    .split(" ")
    .forEach(function (word) {
      // Paso 1: Quitar los signos de puntuación
      const cleanWord = word.replaceAll(/\W/g, "");
      const search = result.find((res) => res.word === cleanWord);
      if (search === undefined) {
        result.push({
          word: cleanWord,
          count: 1,
        });
      } else {
        search.count++;
      }
    });

  console.log(result);
}

console.log("dsadsa");
console.log("2");
countWords(
  "Hola, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs)."
);
