const escola = "Cod3r"

console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Associado ao indice na tabela unicode
console.log(escola.indexOf('r'))//associado a ver em casa a letra está começando do zero r=4

console.log(escola.substring(1))//retorna todos os caracteres começando do numero pedido
console.log(escola.substring(0,3))//retorna todos os caracteres do 0 ao 2

console.log('Escola'.concat(escola).concat("!"))//concat adiciona algo antes(concat antes) ou depois(concat depois) da variavel
console.log('Escola' + escola + "!")
console.log(escola.replace(3,'e')) // coloca no lugar do caracter desejado

console.log('Ana,Maria,Pedro'.split(","))