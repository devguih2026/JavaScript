// Peça um número ao usuário e exiba sua tabuada completa (1×n até 10×n)

/*
const prompt = require("prompt-sync")();

const numero = prompt("Digite um número: ");
console.log(`Você digitou: ${numero}`); 
*/

const prompt = require("prompt-sync")(); // interação no terminal

const numero = prompt("Digite um número: ");

for (let i = 1; i <= 10; i++){
    const resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`)
}