const sequencia = {
    _valor: 1, //convenção
    get valor() {return this._valor++},  /*A definição deles é basicamente
     o significado das palavras. O get pega o valor do atributo e o set 
     põe um valor no atributo.*/
      set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1010
console.log(sequencia.valor,sequencia.valor)
