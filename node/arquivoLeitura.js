const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)
//NÃO RECOMENDADO

// assincrono...
fs.readFile(caminho,'utf-8',(err,conteudo) => {
    const config = JSON.parse(conteudo) 
    console.log(`${config.db.host}:${config.db.port}`)
})

//maneira mais fácil de passar o config.db
const config = require('./arquivo.json')
console.log(config.db)
//Recomendado 
//esse console.log ,apareceu primeiro na tela por não precisar passar por todo aquele caminho de código.
fs.readdir(__dirname,(err,arquivos) => {
console.log('Conteúdo da pasta...')
console.log('///////////////////')
console.log(arquivos)
})