const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos',(req,res,next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos/id',(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
        //para pegar uma requisição que veio de um formulario 
    })
})

app.get('/produtos',(req,res,next) => {
    res.send(bancoDeDados.getProdutos())// vai converter para JSON
})

app.listen(porta,() =>{
    console.log(`Servidor executando na porta ${porta}.`)
})
//uma mesma aplicação não pode estar na mesma porta 2 vzs