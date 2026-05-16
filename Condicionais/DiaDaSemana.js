// Dado um número (1–7), retorne o nome do dia da semana usando switch.

/* exemplo:
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
*/

const prompt = require("prompt-sync")(); 

let dia = Number(prompt("Nós estamos em qual dia da semana? "));
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break; 
  case 7:
    console.log("Sábado");
    break;   
}