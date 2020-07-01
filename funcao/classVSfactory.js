//primeira pessoa com class
class pessoa{
    constructor(Nome){
      this.Nome = Nome  
    }
        falar(){
            console.log(`Meu nome é ${this.Nome}`)
        }
}

const p1 = new pessoa('João')
p1.falar()
//segunda pessoa com factory
const criarPessoa = Nome => {
    return{
        falar:() => console.log(`Meu nome é ${Nome}`)
    }
}

const p2 = criarPessoa('PEDRO')
p2.falar()