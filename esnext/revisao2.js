//Arrow Function
//deixa mais legivel e mais curso
const soma = (a,b) => a+b
const soma1 = (a,b) => {
     a+b    
    }
//se a função arrow tiver um bloco ou um corpo, ela tem que ter o return
console.log(soma(2,3))
console.log(soma1(2,3))

// Arrow Function(this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')
log(null)

// operador rest = agrupar
function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))