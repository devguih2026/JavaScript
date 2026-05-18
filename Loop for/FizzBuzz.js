// Para números de 1 a 100: imprima os ímpares e pares dentro de dois arrays 
let impares = [];
let pares = [];

for (let i = 1; i <= 100; i ++ ){
    if (i % 2 === 0)
        pares.push(i)
    else if (i % 2 === 1)
        impares.push(i)
}
console.log(`Números ímpares = ${impares}`)
console.log(`Números pares = ${pares}`)
