const notas = [7.7, 6.6, 5.3, 8.5, 5.2, 9.0, 7.1]

// Sem callback

let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com Callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7})
console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7 < 7)
console.log(notasBaixas3)