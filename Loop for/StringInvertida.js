// Use um for decrescente para inverter a string "JavaScript".

let palavra = "JavaScript";
let palavra_invertida = "";

for (let i = palavra.length - 1; i >= 0; i--){
    palavra_invertida += palavra[i]
}

console.log(`String original: ${palavra}`)
console.log(`String invertida: ${palavra_invertida}`)