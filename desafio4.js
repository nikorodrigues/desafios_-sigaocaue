//dado o array no input, retornar os numeros pares
//usando for in

const input = [1, 8, 21, 25, 12, 13, 9, 4]

const output = []

for (const i in input) {
    if(input[i] % 2 == 0) {
        output.push(input[i])
    }
}
console.log(`Os números pares são: [${output}]`);