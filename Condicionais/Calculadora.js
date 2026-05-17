// Crie uma calculadora que aceite '+', '-', '*', '/' usando switch.

console.log("Quer fazer qual operação?")

console.log("Soma = 1")
console.log("Subtração = 2")
console.log("Multiplicação = 3")
console.log("Divisão = 4")

const prompt = require("prompt-sync")();

let operacao = Number(prompt("Escolha: "));

if (operacao < 1 || operacao > 4) {
    console.log("Opção inválida");
} else {
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));
   switch (operacao){
    case 1:
        let resultado_soma = numero1 + numero2
        console.log(`${numero1} + ${numero2} = ${resultado_soma}`);
        break;
    case 2:
        let resultado_sub = numero1 - numero2
        console.log(`${numero1} - ${numero2} = ${resultado_sub}`);
        break;
    case 3:
        let resultado_x = numero1 * numero2
        console.log(`${numero1} x ${numero2} = ${resultado_x}`);
        break;
    case 4:
        if (numero2 == 0){
            console.log("digite um número acima de zero")
        } else {
        let resultado_div = numero1/ numero2
        console.log(`${numero1} / ${numero2} = ${resultado_div}`);
        }
        break;
}
}

