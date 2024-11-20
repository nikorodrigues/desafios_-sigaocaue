//dado o array no input, retornar os numeros pares
//quando houver mais de um numero escrever os números pares são: ${output}
//quando houver apenas um número par escrever o número par é: ${output}
//não trazer número repetidos

const input = [1, 8, 21, 25, 12, 13, 9, 4]
const input2 = [1, 21, 25, 4, 9, 4]

const output = []
const output2 = []

input.forEach(itemAtual => {
    if (itemAtual % 2 == 0) {
        output.push(itemAtual)
    }    
});
if (output.length <= 1){
    console.log(`O número par é: [${output}]`)
}
else {
    console.log(`Os números pares são: [${output}]`)
}

input2.forEach(itemAtual => {
    if (itemAtual % 2 == 0) {
        if (!output2.includes(itemAtual)){
            output2.push(itemAtual)
        }
    }
})
if (output2.length <= 1) {
    console.log(`O número é par: [${output2}]`)
}
else {
    console.log(`Os números pares são: [${output2}]`)
}