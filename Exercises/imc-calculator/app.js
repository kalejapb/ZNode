
var program = require('commander');
var moment = require("moment");
var chalk = require('chalk');

program
  .version('0.0.1')
  .option('-a, --altura <n>', 'Altura (cm)', parseInt)
  .option('-m, --masa <n>', 'Masa (kg)', parseInt)
  .parse(process.argv);
  
var alturaEnMts = program.altura / 100;
var imc = program.masa / (alturaEnMts ^ 2);

console.log(moment().format('LLL'));
console.log(process.env.USER);
console.log("Imc " + imc);

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
  