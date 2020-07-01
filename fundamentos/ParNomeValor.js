// par nome/valor
const saudacao = "Opa" // contexto léxico  (lexico, aonde a variavel foi definida(nesse caso foi definido no arquivo ParNomeValor.js))
function exec(){
    const saudacao = "Falaa" //contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor
const cliente ={
    nome : "Leonardo",
    idade: 32,
    peso : 90,
    endereco :{
        logradouro:"Rua primeiro de maio",
        numero: 124
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)