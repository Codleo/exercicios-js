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