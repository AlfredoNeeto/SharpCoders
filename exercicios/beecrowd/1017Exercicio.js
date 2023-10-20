//Obtem os dados
var tempoGastoNaViajem = parseInt(22);
var velocidadeMedia = parseInt(67);

//Calcula a distância percorrida
var distanciaPercorrida = tempoGastoNaViajem * velocidadeMedia;

//calcula a quantidade de litros gastos
var litros = distanciaPercorrida / 12;

//Imprime 
console.log(litros.toFixed(3))