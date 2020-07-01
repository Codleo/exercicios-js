// não existe array em JS, array em JS é um objeto mas ele funciona como array

console.log(typeof Array , typeof new Array,typeof [])

//array é uma estrutura heterogenio, mas a boa pratica é usar um tipo só de dados em um array

let aprovados = new Array('Bia','Carlos','Ana') // não é recomendado fazer dessa maneira
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] //maneira literal e recomendado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Leo') //push ele adiciona um novo elemento no array na ultima posição
console.log(aprovados.length)

aprovados[9] ='rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados =['Bia','Carlos','Ana']
aprovados.splice(1,1,'PAULO','ROBERTÃO') // o que splice faz adiciona elementos no array,
// serve para excluir elementos e serve para remover e adicionar
// o primeiro indice é o local que você quer começar no metodo splice,
// o segundo é quantos indices você quer excluir,e adicionar é só usar aspas simples
console.log(aprovados)