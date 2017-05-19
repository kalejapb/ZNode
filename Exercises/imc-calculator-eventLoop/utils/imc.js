var calcularImc = function (altura, masa) {
  var alturaEnMts = altura / 100;
  var imc = masa / (alturaEnMts ^ 2);
  return imc;
}

exports.calcularImc = calcularImc;