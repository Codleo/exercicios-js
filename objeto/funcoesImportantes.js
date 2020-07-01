const pessoa = {
    nome: 'Rebeca',
    idade:12,
    peso:54,
}

console.log(Object.keys(pessoa))  // pega a chave ou seja ex :nome
console.log(Object.values(pessoa)) // só os valores, ou seja ex rebeca , 12 e 54
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value: '01/01/2019'
})

pessoa.dataNascimento ='01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest ={a:1 ,b:5}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2) // pega todos os atributos do
// objetos e concatena em um objeto de destino ou seja no primeiro
//Todos jogam na primeira variavel
Object.freeze(obj)
obj.c = 1234
console.log(obj)