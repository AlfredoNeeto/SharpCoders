// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// Leitura dos dados da peça 1
const [codigoPeca1, numeroPeca1, valorUnitarioPeca1] = lines[0].split(' ').map(parseFloat);

// Leitura dos dados da peça 2
const [codigoPeca2, numeroPeca2, valorUnitarioPeca2] = lines[1].split(' ').map(parseFloat);

// Cálculo do valor total a ser pago
const totalAPagar = (numeroPeca1 * valorUnitarioPeca1) + (numeroPeca2 * valorUnitarioPeca2);

console.log(`VALOR A PAGAR: R$ ${totalAPagar.toFixed(2)}`);
