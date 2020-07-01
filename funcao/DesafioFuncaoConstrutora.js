function pessoa(Nome){
    this.Nome = Nome
    this.falar = function(){
     console.log(`Meu nome é ${this.Nome}`)
    }   
}
const p1 = pessoa('João')
p1.falar()