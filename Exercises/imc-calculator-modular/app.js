
var program = require('commander');
var moment = require("moment");
var imc = require("./utils/imc");
var validate = require("./utils/validate");

program
  .version('0.0.1')
  .option('-a, --altura <n>', 'Altura (cm)', parseInt)
  .option('-m, --masa <n>', 'Masa (kg)', parseInt)
  .parse(process.argv);

var imc = imc.calcularImc(program.altura, program.masa);

console.log(moment().format('LLL'));
console.log(process.env.USER);
console.log("Imc " + imc);

validate.validarClasificacionPorIMC(imc);
  