const valores = [7.7,8.9,9.9,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false,null,'teste')
console.log(valores)

console.log(valores.pop()) //deleta a ultima variavel do array
delete valores[0] //deleta qualquer lugar do  array que quiser
console.log(valores)

console.log(typeof valores)