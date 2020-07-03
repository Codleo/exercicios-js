const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err => {
    console.log(err ||'Arquivo Salvo!')
})
//writeFile = escreva uma arquivo

//__dirname : O nome do diretório que está salvo o script que está 
//sendo executado. process : Um objeto que é associado ao presente
// processo em execução