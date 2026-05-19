// Percorra um array e encontre o maior valor sem usar Math.max()

let numeros = [2, 4, 6, 8, 5, 19, 22];
let maior_numero = numeros[0];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior_numero){
        maior_numero = numeros[i]
    }
}
    console.log(`O maior número do array é ${maior_numero}`)

