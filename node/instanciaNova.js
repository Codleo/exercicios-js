const { inc } = require("./instanciaUnica")

// uma Factory retorna um novo objeto
module.exports = () => {
    return {
        valor:1 ,
        inc(){
            this.valor++
        }
    }
}