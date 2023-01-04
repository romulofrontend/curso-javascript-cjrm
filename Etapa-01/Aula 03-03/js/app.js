// NULL E UNDEFINIED
// - Ambos possuem tipos similares
// - Representam a falta de um valor


// NULL
// Esse valor deve ser atribuído propositalmente.

let emptinessNull = null;

console.log(emptinessNull);
// Exibe no console
// null
// Já que esse foi o valor atribuído

console.log(emptinessNull + 3);
// Exibe no console
// 3
// Como foi atribuido o valor null, em caso de operação matemática, compreende null como 0 e permite a realização da operação

console.log(`O valor é ${emptinessNull}`);
// Exibe no console
// o valor é null
// Se usado numa template string ele converte o valor em string


// UNDEFINIED
// Quando não há valor atribuido apesar da variavel ter sido  declarada.

let emptinessUndefinied


console.log(emptinessUndefinied);
// Exibe no console
// undefinied
// Já que não foi atribuído um valor

console.log(emptinessUndefinied + 3);
// Exibe no console
// NaN
// Como não foi atribuido um valor null, em caso de operação matemática, compreende que não é possível realizar a operação e retorna um NaN (Not A Number).

console.log(`O valor é ${emptinessUndefinied}`);
// Exibe no console
// o valor é undefinied
// Se usado numa template string ele converte o valor em string

