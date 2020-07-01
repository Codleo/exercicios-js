const funcs = []        

for (let i =0;i < 10;i++){
    funcs.push(function(){//O método push adiciona valores a um array. ... Podendo ser utilizado por call() ou apply() em objetos que implementam arrays. O método push depende da propriedade length para determinar onde começar a inserir os valores.
console.log(i)
    })
}

funcs[2]()
funcs[3]()
funcs[8]()