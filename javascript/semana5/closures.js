function primeraFuncion() {
  let valor1 = "Valor 1";

  // tienes la propiedad de crear una funcion dentro de otra funciona
  function segudanFuncion() {
    console.log(valor1);

    function terceraFunction() {
      console.log("Tercera funcion", valor1);

      function cuartaFuncion() {
        console.log("Cuarta funcion", valor1 + " Hola");
      }

      return cuartaFuncion();
    }

    return terceraFunction();
  }

  return segudanFuncion();
}

primeraFuncion();
