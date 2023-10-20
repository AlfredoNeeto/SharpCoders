//Obtendo os dados
var linha1 = "2.5 -0.4".split(" ");
var linha2 = "-12.2 7.0".split(" ");

//linha 1
var X1 = parseFloat(linha1[0]);
var Y1 = parseFloat(linha1[1]);

//linha 2
var X2 = parseFloat(linha2[0]);
var Y2 = parseFloat(linha2[1]);

//Calculo da distância
var distancia = Math.sqrt(((X2 - X1) * (X2 - X1)) + ((Y2 - Y1) * (Y2 - Y1)));

console.log(distancia.toFixed(4));


// 2.5 -0.4
// -12.2 7.0