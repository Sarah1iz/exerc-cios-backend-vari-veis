let capitalInicial = 60_000;
let meses = 24;
let montante = 90_000;

let taxaDeJuros = ((montante / capitalInicial) ** (1 / meses)) - 1;

let porcentagem = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${porcentagem}% pois após 24 meses você teve que pagar ${montante} reais`);