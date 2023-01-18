let pessoasInfectadas = 1000;
let transmissao = 4;
let tempoDecorridoEmDias = 7;

let pessoasInfectadasPorTempoDecorrido = pessoasInfectadas * (transmissao ** (tempoDecorridoEmDias / 7));

console.log(pessoasInfectadasPorTempoDecorrido);