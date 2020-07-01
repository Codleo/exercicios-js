const pilotos = ['Vettel','Alonso','Raikkonen','Massa'] //pode mexer no array mas não atribuir nada a piloto

pilotos.pop() //massa quebrou o carro! o pop remove o ultimo elemento
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // o shift tira da primeira posição
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou :(
console.log(pilotos)

const algunspilotos1 =pilotos.slice(2) //slice retorna um novo array. Pega um novo array dps do indice que vc mostrar
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1,4) //não pega o 4 , pega um anterior
console.log(algunspilotos2)