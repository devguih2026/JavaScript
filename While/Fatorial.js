const prompt = require("prompt-sync")(); 

let numero = Number(prompt("Digite um número: "));
let contador = 1;
let i = 0;

while(i < numero){
    i ++
    
    contador *= i
    console.log(`${i}! = ${contador}`)
}
