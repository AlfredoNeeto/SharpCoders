var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var raio = parseFloat(lines.shift());
var n = 3.14159;
var area = n * (raio * raio);
console.log(`A=${area.toFixed(4)}`)