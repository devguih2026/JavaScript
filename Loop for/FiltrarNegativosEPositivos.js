// Dado um array com números positivos e negativos, crie um novo array só com os positivos e outro só para os negativos.

let numeros = [-1, -5, -7, -9, -15, 2, 4, 6, 8, 5, 19, 22];
let positivos = [];
let negativos = [];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > 0){
        positivos.push(numeros[i])
    } else {
        negativos.push(numeros[i])
    }
}

console.log(`Array original: ${numeros}`)
console.log(`Array somente com números positivos: ${positivos}`)
console.log(`Array somente com números negativos: ${negativos}`)