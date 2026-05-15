// Dado [3, 7, 2, 9, 4], calcule a soma de todos os elementos

const numeros = [3, 7, 2, 9, 4];
let soma = 0;

for (let i = 0; i < numeros.length; i ++){
    soma += numeros[i];
}
console.log(soma);