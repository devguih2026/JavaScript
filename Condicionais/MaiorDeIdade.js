// Classifique uma pessoa em: criança (< 12), adolescente (12–17), adulto (18–59) ou idoso (60+).

const prompt = require("prompt-sync")(); 

let idade = Number(prompt("Digite sua idade: "));

if (idade < 12 ){
    console.log(`Com ${idade} anos, você é uma criança`)
} else if (idade >= 12 && idade <= 17){
    console.log(`Com ${idade} anos, você é adolescente`)
} else if (idade >= 18 && idade <= 59){
    console.log(`Com ${idade} anos, você é adulto(a)`)
} else {
    console.log(`Com ${idade} anos, você é idoso(a)`)
}