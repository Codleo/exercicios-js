function CriarProduto(nome,preco) {
    return{
        nome,
        preco,
        Desconto: 0.3

    }
  
}
console.log(CriarProduto('Bauducco',12.00))
console.log(CriarProduto('Qualitá leite',3.00))