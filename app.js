const inquirer = require("inquirer");

const valor = async () => {
  console.clear();
  console.log("==================================");
  console.log("            Mi programa            ");
  console.log("==================================");

  const pregunta = [
    //Array de objetos
    {
      // clave = valor
      type: "input", // tipo de entrada
      name: "opcion", // nombre del dato ingresado
      message: "Ingrese un número", // mensaje por consola
    },
  ];

  const numero = await inquirer.prompt(pregunta); // Espera
  operacion(numero.opcion);
};

const operacion = (dato) => {
  //   if (dato % 2 !== 0) return console.log(`El número ${dato} no es divisible por 2`);
  //   return console.log(`El número ${dato} es divisible por 2`);
  if (dato % 2 !== 0) {
    console.log(`El número ${dato} no es divisible por 2`);
  } else {
    console.log(`El número ${dato} es divisible por 2`);
  }
};

valor();
