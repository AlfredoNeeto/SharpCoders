//nome do vendedor
var vendedor = toString("JOAO").toUpperCase();

//salario fixo
const salarioFixo = parseFloat(500);

//Total de vendas realizadas($)
var totalVendasMes = parseFloat(1230.30);

// 15% de comissão das vendas
var TOTAL = (totalVendasMes * 0.15) + salarioFixo;

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);

