//Obtem os Dados
var input = "217 14 6".split(" ");

//Tratamento das informações
var A = parseInt(input[0]);
var B = parseInt(input[1]);
var C = parseInt(input[2]);

var MaiorAB = (A + B + Math.abs(A - B)) / 2;
var MaiorABC = (MaiorAB + C + Math.abs(MaiorAB - C)) / 2
console.log(`${MaiorABC} eh o maior`);