//dado o array no input, retornar os numeros pares
//usando for of

const input = [1, 8, 21, 25, 12, 13, 9, 4]

const output = []

for (const itemAtual of input) {
    if(itemAtual % 2 == 0) {
        output.push(itemAtual)
    }
  }
console.log(`os números pares são: [${output}]`)