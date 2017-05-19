var chalk = require('chalk');

var validarClasificacionPorIMC = function(imc){
  if(imc < 16) {
    console.log(chalk.red("Infrapeso: Delgadez Severa"))
  } else if (imc >= 16 && imc < 17) {
    console.log(chalk.red("Infrapeso: Delgadez moderada"));
  } else if (imc >= 17 && imc < 18.5) {
    console.log(chalk.red("Infrapeso: Delgadez aceptable"));
  } else if (imc >= 18.5 && imc < 25) {
    console.log(chalk.green("Peso Normal"));
  } else if (imc >= 25 && imc < 30) {
    console.log(chalk.yellow("Sobrepeso"));
  } else if (imc >= 30 && imc < 35) {
    console.log(chalk.red("Obeso: Tipo I"));
  } else if (imc >= 35 && imc < 40) {
    console.log(chalk.red("Obeso: Tipo II"));
  } else {
    console.log(chalk.red("Obeso: Tipo III"));
  }
}

exports.validarClasificacionPorIMC = validarClasificacionPorIMC;