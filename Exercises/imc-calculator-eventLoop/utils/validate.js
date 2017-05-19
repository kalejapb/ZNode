var chalk = require('chalk');
var clasificacion = "Obeso: Tipo III";

var validarClasificacionPorIMC = function(imc){
  if(imc < 16) {
    clasificacion = "Infrapeso: Delgadez Severa";
    console.log(chalk.red(clasificacion));
  } else if (imc >= 16 && imc < 17) {
    clasificacion = "Infrapeso: Delgadez moderada";
    console.log(chalk.red(clasificacion));
  } else if (imc >= 17 && imc < 18.5) {
    clasificacion = "Infrapeso: Delgadez aceptable";
    console.log(chalk.red(clasificacion));
  } else if (imc >= 18.5 && imc < 25) {
    clasificacion = "Peso Normal"
    console.log(chalk.green(clasificacion));
  } else if (imc >= 25 && imc < 30) {
    clasificacion = "Sobrepeso";
    console.log(chalk.yellow(clasificacion));
  } else if (imc >= 30 && imc < 35) {
    clasificacion = "Obeso: Tipo I";
    console.log(chalk.red(clasificacion));
  } else if (imc >= 35 && imc < 40) {
    clasificacion = "Obeso: Tipo II"
    console.log(chalk.red(clasificacion));
  } else {
    console.log(chalk.red(clasificacion));
  }
  return clasificacion;
}

exports.validarClasificacionPorIMC = validarClasificacionPorIMC;