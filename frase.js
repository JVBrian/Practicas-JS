const inquirer = require("inquirer"); // Importar el paquete

const frases = async () => {
  console.clear();
  console.log("==================================");
  console.log("            Mi programa            ");
  console.log("==================================");
  const palabra = [
    //Array de objetos
    {
      // clave = valor
      type: "input", // tipo de entrada
      name: "opcion", // nombre del dato ingresado
      message: "Ingrese una frase", // mensaje por consola
    },
  ];
  const frase = await inquirer.prompt(palabra);
  operacion(frase.opcion.toLowerCase());
};

const operacion = (frase) => {
  let vocalA = 0,
    vocalE = 0,
    vocalI = 0,
    vocalO = 0,
    vocalU = 0;
  const vocales = [];
  for (let i = 0; i < frase.length; i++) {
    if (
      frase.substr(i, 1) === "a" ||
      frase.substr(i, 1) === "e" ||
      frase.substr(i, 1) === "i" ||
      frase.substr(i, 1) === "o" ||
      frase.substr(i, 1) === "u"
    ) {
      //   if (frase.substr(i, 1) === "a") {
      //     vocalA++;
      //   }
      //   if (frase.substr(i, 1) === "e") {
      //     vocalE++;
      //   }
      //   if (frase.substr(i, 1) === "i") {
      //     vocalI++;
      //   }
      //   if (frase.substr(i, 1) === "o") {
      //     vocalO++;
      //   }
      //   if (frase.substr(i, 1) === "u") {
      //     vocalU++;
      //   }
      vocales.push(frase.substr(i, 1)); // Sirve para meter valores al array
    }
  }
  //   vocales.pop() // Sirve para eliminar el último elemento
  //   vocales.shift(); // Sirve para eliminar el primer elemento
  //   vocales.unshift("a"); // Sirve para agregar elemento en la primera posición
  vocales.splice(1, 2,"Hola"); // 1- Indice, 2-Cuantos elementos vas a eliminar, 3-Elemento que voy agregar
  console.log(vocales)


  //   console.clear();
  //   console.log("==================================");
  //   console.log("            Resultados          ");
  //   console.log("==================================");
  //   console.log(
  //     ` A = ${vocalA}\n E = ${vocalE}\n I = ${vocalI}\n O = ${vocalO}\n U = ${vocalU}`
  //   );
};

frases();
