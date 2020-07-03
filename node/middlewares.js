// middleware pattern (chain of responsibility)

const passo1 =(ctx,next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 =(ctx,next) => {
    ctx.valor2 = 'mid2'
    next()
}
const passo3 = ctx => ctx.valor3 = 'mid3'
    

// padrões de projetos, ele é uma solução para problemas comuns. Você só
//precisa adaptar o padrão de projeto

const exec = (ctx,...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx,() => execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx,passo1,passo2,passo3)
//você pode mudar os passos de lugares mas lembrando que o último passo
//não chamará outro passo pois não possuem um next()
console.log(ctx)