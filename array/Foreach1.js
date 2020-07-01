const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
    console.log("/////////")
})
// ForEach é um For(loop) que percorre um array
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
console.log("//////")
aprovados.forEach(exibirAprovados)