const alunos = [
    {nome:'claudiney',nota:7.3,bolsista:false},
    {nome:'claudio',nota:9.2,bolsista:true},
    {nome:'claudia',nota:9.8,bolsista:false},
    {nome:'Breno',nota:8.7,bolsista:true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a =>a.nota).reduce(function(acumululador, atual){
    console.log(acumululador,atual)
    return acumululador + atual
}, 0)
console.log(resultado)