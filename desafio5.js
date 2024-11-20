//dado o array no input, retornar os numeros pares
//usando forEach (funcao embutida das variaveis do tipo array)

const input = [1, 8, 21, 25, 12, 13, 9, 4]

const numerosPares = []

input.forEach((itemAtual) => {
    if (itemAtual % 2 == 0) {
        numerosPares.push(itemAtual)
    }
})

console.log(`Os números pares são: [${numerosPares}]`)