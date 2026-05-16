// Use o operador ternário para retornar 'Bom dia!' se hora < 12, senão 'Boa tarde/noite!'.

/* exemplo: 
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";  
*/

const prompt = require("prompt-sync")(); 

let hora = Number(prompt("Digite que horas são: "));

let mensagem = hora >= 19 ? "Boa noite" 
            : hora >= 12 ? "Boa tarde" 
            : "Bom dia";
            
console.log(mensagem);


