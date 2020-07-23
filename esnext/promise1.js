//promise = promessa , associar alguma coisa a promise lhe dará um dado no futuro

let a = 1
console.log(a)

let p = new Promise(function(resolve){
    resolve(['Manuel','Bruno','José','Leo'])
})
// a promise só devolve 1 valor 
//para mais valores criar um objeto {} ou uma lista []
console.log(typeof p)
console.log(p)

//p.then(function(valor){ //then =então
//    console.log(valor)
//})
p.then(valor => console.log(valor))

const primeiroElemento = arrayOuString => arrayOuString[0]

//const primeiraLetra = string =>string[0]
const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
    //processamento síncrono