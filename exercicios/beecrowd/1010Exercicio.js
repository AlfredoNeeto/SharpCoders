// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 //Obtem os dados dos produtos
 var produto1 = "1 1 15.10".split(" ");
 var produto2 = "2 1 15.10".split(" ");
 
 //Calcula o total a ser pago pelo usuário
 var totalASerPago = (parseInt(produto1[1]) * parseFloat(produto1[2])) + (parseInt(produto2[1]) * parseFloat(produto2[2]));
 
 //Imprime o total
 console.log(`VALOR A PAGAR: R$ ${totalASerPago.toFixed(2)}`);