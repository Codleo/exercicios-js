
// sem promisse...
const http = require('http')


const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { // res é uma função callback de resposta
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

//resumindo a proposta da aula
let Turmas = ['A', 'B', 'C']
let nomes = []
for (let t of Turmas) {
    getTurma(t, alunos => {
        nomes = nomes.concat(alunos.map(a => `${t}:${a.nome}`))
        t === 'C' ? console.log(nomes) : ''
    })
}