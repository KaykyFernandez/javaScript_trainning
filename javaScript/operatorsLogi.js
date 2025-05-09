let number1 = 'andre';

console.log(number1 > 0)
console.log(number1 < 0)
console.log(number1 <= 3)
console.log(number1 <= 3)
console.log(number1 === 'andre') // serve tanto para number quanto string
console.log(number1 !== 'andre') // serve tanto para number quanto string

// === igualdade
// !== diferente
// > maior que
// < menor que
// operadores:
// + adição
// - subtração
// * multiplicação
// / divisão
// ++ aumento
// -- redução
// % resto de divisão
// ** exponecia

//operadores logicos 

//and -> e --> &&
//or -> ou --> ||
//not -> não --> !
let temIdadeMinima = true
let temTituloEleitor = true

let podevotar = temIdadeMinima && temTituloEleitor
console.log('pode votar: ' + podevotar)

let podeviajar = !podevotar
console.log('pode viajar: ' + podeviajar)