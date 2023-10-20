//Obtem os dados
var salario = parseFloat(4520.00);

if(salario >= 0.00 && salario <= 2000.00){
    console.log("Isento");
}
else if(salario <= 3000.00){
    var taxa = (salario - 2000.00) * 0.08;
    console.log(`R$ ${taxa.toFixed(2)}`);
}
else if(salario <= 4500.00){
    var taxaFaixa1 = 1000.00 * 0.08;
    var taxaFaixa2 = (salario - 3000.00) * 0.18;
    var totalTaxa = taxaFaixa1 + taxaFaixa2;
    console.log(`R$ ${totalTaxa.toFixed(2)}`);
}
else{
    var taxaFaixa1 = 1000.00 * 0.08;
    var taxaFaixa2 = 1500.00 * 0.18;
    var taxaFaixa3 = (salario - 4500.00) * 0.28;
    var totalTaxa = taxaFaixa1 + taxaFaixa2 + taxaFaixa3;
    console.log(`R$ ${totalTaxa.toFixed(2)}`);
}