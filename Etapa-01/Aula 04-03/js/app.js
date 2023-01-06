console.log('ETAPA 01 - AULA 04-03 - COMPARADORES ESTRITOS')
console.log('- São a forma mais segura de realizar comparações')
console.log('- Verificam o valor e tipo do dado')
console.log('- Ambos precisam ser validados para que retorne como true')
console.log('- Não geram o problema de conversão de tipagem realizada pelos comparadores não estritos')
console.log("========================")


//Dada uma variável
const age = 42;

console.log("Comparadores Estritos")

console.log("1) Igual a, e do mesmo tipo")

console.log(age === 42)
//Exibição no console : true

console.log(age === '42')
//Exibição no console : false

console.log("========================")

console.log("2) Diferente de, e do mesmo tipo")

console.log(age !== 42)
//Exibição no console : false

console.log(age !== '42')
//Exibição no console : true