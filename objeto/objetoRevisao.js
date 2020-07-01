// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor : 89000,
    proprietario: {
        nome:'Raul',
        idade: 69,
        endereco:{
            logradouro: 'Rua Amaral Gurgel',
            numero:33
        }
    },
        condutores:[{
            nome:'JOSÉ',
            idade:19
        },{
            nome:'Ana',
            idade:42
        }],
        calcularValorSeguro:function(){
            //...
        }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] ='Av Gigante'
console.log(carro)

delete carro.calcularValorSeguro
delete carro.proprietario.endereco
delete carro.condutores
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores)