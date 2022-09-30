// Arreglos: Son un conjunto de datos
// como es la sintaxys de arreglos

const nombres = ["Pepe", "Juan", "Luisa", "Maria", "Carlos"];

// cuantos datos hay en nombres: Podemos que el arreglo nombres tiene 5 elementos
// Tiene 5 elementos
// Hay una cosa llamada indice: Posicion de cada elemento y tiene como inicio el 0
console.log(nombres[0]); // Pepe
console.log(nombres[3]); // Maria
console.log(nombres[5]); // undefined

const edades = [18, 20, 22, 12];

console.log("Edades 1", edades);

const booleanos = [true, false, true, false];

// Funciones de array
// Funcion para agregar un elemento push
edades.push(34);
edades.push("Pepe");
edades.push(true);
edades.push(["Juan", "Luis"]);
console.log("Edades 2", edades);
console.log(edades[7][2]); // ["Juan, "Luis"]

// arrays multiples
const cursos = [
  ["React", "Angular", "Svelt", "Vue"],
  ["Laravel", "Sinfony", "Cake", ["poo", "java", "php", ["js", "css", "html"]]],
  ["Spring", "JHipster"],
];

console.log(cursos[1][3][3][1]);

cursos.unshift("React Native");
console.log("unshift", cursos);
cursos[1].unshift("Nextjs");
console.log("adsadsa", cursos);

console.log("Pop", "Elimina el ultimo elemento");
const valorEliminado = cursos.pop();
console.log(valorEliminado);
console.log(cursos);

console.log("Shift", "Eliminar el primero el elemento");
const valorEliminado2 = cursos.shift();
console.log(valorEliminado2);
console.log(cursos);

// For es un bucle es una estructura que se repite n veces
// Sintaxys de for

// cursos.length => retorna la cantidad de elementos
console.log("=================");
const newCursos = ["Angular", "React", "Vue", "Svelt"];
// console.log(newCursos[0]); // Angular
// i++
// i += 1
for (let i = 0; i < newCursos.length; i++) {
  // El i funge de indice
  // primera vuelta i = 0
  // segunda vuelta i = 1
  // Este console.log se hace 4 veces
  if (newCursos[i] === "React") {
    console.log(newCursos[i]);
  }
}

console.log("=======forEach=========");
// Como seria la forma moderna
// Foreach va a recorrer el arreglo pero no retorna ni un valor
// necesita de una funcion que obtenga su valor en cada vuelta
newCursos.forEach(function (curso, indice) {
  if (curso === "React") {
    console.log(curso, indice);
  }
});

const numeros = [10, 11, 12, 13, 14, 15];

for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]); // 10, 11, 12, 13, 14
  if (numeros[j] > 13) {
    // Es basicamente para romper una funcion, este caso estamos rompinedo al for
    break;
  }
}

console.log("Foreach numeros");
// funcion anonima
numeros.forEach(function (numero) {
  console.log(numero); // 10, 11, 12, 13, 14, 15
  if (numero > 13) {
    // Es basicamente para romper una funcion, este caso estamos rompinedo al for
    return;
  }
  // un forEach tiene la peculiardidad de que no se puede romper
});
