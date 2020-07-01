// Closure é o escopo cirado quando uma função é declarada
// E esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())