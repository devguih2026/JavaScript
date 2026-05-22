// Calcule a soma de todos os números inteiros de 1 a 100 e exiba o resultado.

let inicio = 1; // inicio do contador no while
let soma = 0; // contador que soma os números

do {
    soma += inicio // soma + inicio 
    inicio ++ // inicio recebe + 1
} while (inicio < 101); // condição para parar quando o inicio chegar a 100 

console.log(soma)

