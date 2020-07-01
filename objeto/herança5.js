console.log(typeof String)
console.log(typeof String)
console.log(typeof String)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("otar iO".reverse())

Array.prototype.first = function() {
    return this [0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('LEOZINHO'.reverse())