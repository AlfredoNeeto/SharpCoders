//Obtem o dado
var linha = "10.0 3.0 5.0".split(" ");

//Separa as incognitas
var A = parseFloat(linha[0]);
var B = parseFloat(linha[1]);
var C = parseFloat(linha[2]);

//Calcula o delta
var delta = (B * B) - 4 * A * C;

//Faz as validações e mostra o resultado
if(A === 0 || delta < 0){
    console.log("Impossivel calcular");
}
else{
    
var R1 = (-B + Math.sqrt(delta)) / (2 * A);
var R2 = (-B - Math.sqrt(delta)) / (2 * A);

console.log(`R1 = ${R1.toFixed(5)}`);
console.log(`R2 = ${R2.toFixed(5)}`);
}