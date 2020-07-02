const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio a chinesa com menor salario  e mulher
const apenasChinesa = funcionarios => funcionarios.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

const func = funcionarios.filter(apenasChinesa).filter(mulheres).reduce(menorSalario)

console.log(func)
})