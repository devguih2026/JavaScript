// Retorne o valor absoluto de um número usando o operador ternário (sem Math.abs).

const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número positivo ou negativo: "));

let valor = n < 0 ? -n : n; // se n for menor que zero, retorna -n, se não, retorna n

console.log(valor)