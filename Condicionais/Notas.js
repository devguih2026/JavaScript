// dada uma nota (0–10), diga 'aprovado' se >= 7, 'recuperação' se >= 5, senão 'reprovado'.

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite sua nota: "));

if (nota < 0 || nota > 10) {
    console.log("Nota inválida");
} else if (nota >= 7) {
    console.log("Você está aprovado(a)");
} else if (nota >= 5) {
    console.log("Você está de recuperação");
} else {
    console.log("Você está reprovado(a)");
}