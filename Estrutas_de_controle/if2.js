function teste1(num) {
    if(num > 7)
    console.log(num)

    console.log("final")
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // cuidado com o ';' , nnão usar com as estruturas de controle
        console.log(num) //codigo errado , não use ponto e virgula
    }
}
teste2(8)
teste2(6)