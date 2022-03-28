const Listadepecas = ['pecas de teste', 'AB', 'peca B']
console.log('quantidade de caracteres')
if (Listadepecas.lenght <= 10) {
    console.log('as peças podem ser cadastradas')
}
console.log('quantidade de caracteres')
for (let index = 0; index < Listadepecas.lenght; index++) {
    const pecaatual = Listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
    } else {
        console.log(pecaatual + ':a peça pode ser cadastrada.')
    }
    console.log('peso da peça')
    const pesodapecaemgramas = 50
    if (pesodapecaemgramas >= 100) {
        console.log('peso suficiente')
    } else {
        console.log(pecaatual + 'valor insuficiente')
    }
}