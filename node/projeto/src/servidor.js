const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true})) 
//para qualquer requisição que houver ,vai passar nessa linha e transformar
//a requisição em um bodyParser
//E Urlencoded é um formato de aplicação



app.get('/produtos/id',(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})


app.get('/produtos',(req,res,next) => {
    res.send(bancoDeDados.getProdutos())// vai converter para JSON
})

app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
        //para pegar uma requisição que veio de um formulario 
    })
    res.send(produto) //vai gerar um JSON para ir para web
})



app.put('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    
    })
    res.send(produto) 
})
app.delete('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta,() =>{
    console.log(`Servidor executando na porta ${porta}.`)
})
//uma mesma aplicação não pode estar na mesma porta 2 vzs

// ISSO É UM CRUD