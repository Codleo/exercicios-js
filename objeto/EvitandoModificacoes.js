// Object.preventExtensions não vai deixar 
//adicionar novos atributos mas pode excluir

const produto = Object.preventExtensions({
    nome:'leo', preco: 1.99,tag:'promoção'
})
console.log('Extensível:',Object.preventExtensions(produto))

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal SELAR, não pode adicionar novos atributos ex ´pessoa.sobrenome,
//excluir mas consegue modificiar os valores do atributos

const pessoa = {nome:'Juliana',idade:21}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobronome = 'Volotão'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
