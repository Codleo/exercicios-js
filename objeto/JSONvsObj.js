//JSON é formato de dados,o mais usado para interoperabilidade
const obj = {a: 1,b: 2,c: 3,soma() {return a+b+c}}
console.log(JSON.stringify(obj))

//JSON É FORMATO TEXTUAL, NÃO TEM FUNCÃO

// de JSON para obj
//console.log(JSON.parse('{a: 1,b: 2,c: 3}')) da erro
//console.log(JSON.parse("{'a': 1,'b': 2,'c': 3}")) da erro , os atributos em JSON tem que ter aspas duplas é uma regra obrigatoria
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'))
console.log(JSON.parse('{"a": 1.7,"b": "string","c": true,"d":{},"e":[] }')) //Tudo em aspa dupla