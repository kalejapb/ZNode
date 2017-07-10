
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
      let valorImc = imc.calcularImc(answers.altura, answers.masa);
      let informacion = moment().format('LLL');
      
      console.log(`${informacion} \n${process.env.USER} \nImc ${valorImc}`);
      let clasificacion = validate.validarClasificacionPorIMC(valorImc);    
      
      informacion += "\r\n" + valorImc;     
      informacion += "\r\n" + clasificacion;      
      
      fs.writeFile(process.env.HOME + '/imc-output.txt', informacion, (err) => {
        if (err) throw err;
      });
      
  }, 1000);
  
  console.log("Calculando ...");  
});


