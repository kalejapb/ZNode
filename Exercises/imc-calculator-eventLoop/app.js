
var moment = require("moment");
var imc = require("./utils/imc");
var validate = require("./utils/validate");
var inquirer = require('inquirer');
var fs = require('fs');

var questions = [
    {
        type: 'input',
        name: 'altura',
        message: 'Digite su altura en Cm',
        validate: function (value) {
          var valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number';
        },
        filter: Number
      },
      {
          type: 'input',
          name: 'masa',
          message: 'Digite su masa en Kg',
          validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
        },
];
  
inquirer.prompt(questions).then(function (answers) {
  setTimeout(function () {
      var valorImc = imc.calcularImc(answers.altura, answers.masa);
      var informacion = moment().format('LLL');
      
      console.log(informacion);
      console.log(process.env.USER);
      console.log("Imc " + valorImc);
      var clasificacion = validate.validarClasificacionPorIMC(valorImc);    
      
      informacion += "\r\n" + valorImc;     
      informacion += "\r\n" + clasificacion;      
      
      fs.writeFile(process.env.HOME + '/imc-output.txt', informacion, (err) => {
        if (err) throw err;
      });
      
  }, 1000);
  
  console.log("Calculando ...");  
});


