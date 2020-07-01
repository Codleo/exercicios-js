let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}
ola = () => 'olá'
ola = _ => 'olá' //possui um paramentro
console.log(ola())