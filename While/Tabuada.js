// faça a tabuada de um número

const prompt = require("prompt-sync")(); 

let numero = Number(prompt("Digite um número: "));
let multiplicador = 1;

do {
    console.log(`${numero} * ${multiplicador} = ${numero * multiplicador}`);
    multiplicador++;
} while (multiplicador <= 10);

