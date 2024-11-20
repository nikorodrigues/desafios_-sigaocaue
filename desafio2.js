//dado o array no input, retornar os numeros pares

const input = [1, 8, 21, 25, 12, 13, 9, 4]

//iterar o array, dividir por 2 % ==0, retornar um novo array

const output = []

for (i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
        output.push(input[i])
    }
        
}

console.log(`O novo array de números pares é: [${output}]`)