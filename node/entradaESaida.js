const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n') //stdout= Saida padrão(console ou a tela)
    // ou seja escreva na saida padrão 'fala anonimo
    process.exit()
} else {
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data',data => { 
        //stdin = entrada padrão ou seja o teclado.
        const nome = data.toString().replace('\r\n','')

        process.stdout.write(`Fala ${nome}!!\r\n`) //para quebrar linha no windows é o \r\n
        process.exit()
    })
}