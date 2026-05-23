// Faça um programa que leia o sexo de uma pessoa, mas só aceite os valores 'M' ou 'F'. Caso esteja errado, peça a digitação novamente até ter um valor correto

const prompt = require("prompt-sync")(); 

let sexo = prompt("Digite seu sexo: ");

while (sexo != "m" && sexo != "f"){
    console.log(`${sexo} não é válido, digite de novo`)
    sexo = prompt("Digite seu sexo: ");
} if (sexo === "m") {
        console.log("Você se identifica como homem")
    } else if (sexo === "f") {
        console.log("Você se identifica como mulher")
    }
