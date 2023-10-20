//Obter dados
var X = parseFloat(4554).toFixed(1); //total KM
var Y = parseFloat(464.6).toFixed(1); //total Litros

var consumoMedio = X / Y;

console.log(`${consumoMedio.toFixed(3)} km/l`)
