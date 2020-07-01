Array.prototype.forEach2= function(callback){
    for(let i=0;i< this.length;i++){
        callback(this[i],i,this)
    }
}
//foreach criado por nós

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
    console.log("/////////")
})
// ForEach é um For(loop) que percorre um array
