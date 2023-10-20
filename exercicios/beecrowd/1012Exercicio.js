/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. 
Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.*/

//Recebendo e tratando os dados
var input = "12.7 10.4 15.2".split(" ");
var A = parseFloat(input[0]);
var B = parseFloat(input[1]);
var C = parseFloat(input[2]);

//a área do triângulo retângulo que tem A por base e C por altura.
var areaTriangulo = (A * C) / 2;

//a área do círculo de raio C. (pi = 3.14159)
var pi = 3.14159;
var areaCirculo = pi * (C * C);

//a área do trapézio que tem A e B por bases e C por altura.
var areaTrapezio = ((A + B) * C) / 2;

//a área do quadrado que tem lado B.
var areaQuadrado = B * B;

//a área do retângulo que tem lados A e B.
var areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);

// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000

// TRIANGULO: 96.520
// CIRCULO: 725.833
// TRAPEZIO: 175.560
// QUADRADO: 108.160
// RETANGULO: 132.080