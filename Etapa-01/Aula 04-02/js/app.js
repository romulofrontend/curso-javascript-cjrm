// ETAPA 01 - Aula 04-02 - Booleans e Comparações

// BOOLEANS E COMPARAÇÕES

// QUANDO USAR?
// Quando houver a necessidade de confirmar se algum trecho de código precisa ser validado como verdadeiro ou falso.

// ====================================

//Tipos Boolean
console.log(true, false)
// Observe que no console os valores são exibidos na cor roxa frizando que esses são tipos boolean

// ====================================


// Strings com valores "true" e "false"
console.log('true', 'false')
// Observe que no console os valores são exibidos na cor branca frizando que são strings

// ====================================


// MÉTODOS QUE PODEM RETORNAR BOOLEANS

// .includes("valordaspring")
// -Método pode ser usado para comparar strings ou arrays
// -Verifica se o valor passado no argumento do método consta no valor da string/array a ser comparado.
// -Para Strings: pode ser passado um caractere ou uma palavra/frase (conjunto de caracteres)
// -Para Arrays: pode ser passado um valor de um dos itens do array

// Exemplo 1.1 - Strings

const email = "romulorosa@frontend.com.br"

// Conferir se o caractere @ passado no argumenta do método includes consta no valor passado na string atribuída a variável email. Como consta na string o console deve exibir o valor do tipo true.
const testeArroba = email.includes("@");
console.log(testeArroba);

//Exibição no console
//true


// ====================================

// Exemplo 1.2 - Strings
// Conferir se o caractere # passado no argumenta do método includes consta no valor passado na string atribuída a variável email. Como não consta na string o console deve exibir o valor do tipo false.

const testeTralha = email.includes("#");
console.log(testeTralha);

//Exibição no console
//false

// ====================================

// Exemplo 2.1 - Arrays

const names = ['Romulo', 'Guilherme', 'Rosa'];

// Conferir se o valor passado no argumenta do método includes consta como valor de um dos itens do array. 
const namesIncludesGuilherme = names.includes('Guilherme');

//Como consta deve exibir o valor do tipo true no console.
console.log(namesIncludesGuilherme);

//Exibição no console
//true

// Exemplo 2.2 - Arrays

// Conferir se o valor passado no argumenta do método includes consta como valor de um dos itens do array.
const namesIncludesGuilhermeLow = names.includes('guilherme');

//Como não é escrito diferente, por não ser exatamente igual, o console deve exibir o valor do tipo false.
console.log(namesIncludesGuilhermeLow);

//Exibição no console
//false


// Exemplo 2.3 - Arrays

// Conferir se o valor passado no argumenta do método includes consta como valor de um dos itens do array. 
const namesIncludesRoberto = names.includes('Roberto');

//Como não consta deve exibir o valor do tipo false no console.
console.log(namesIncludesRoberto);

//Exibição no console
//true

// ====================================

// OPERADORES DE COMPARAÇÃO NÃO ESTRITOS
console.log("OPERADORES DE COMPARAÇÃO NÃO ESTRITOS")

//Comparações com Numbers
console.log("Comparações com Numbers")

// Declarada a variável abaixo com valor atribuído de 42...
const age = 42;

console.log("== Iguais")
console.log(age == 42)
//true

console.log(age == 22)
//false

console.log(age == '42')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age == '41')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age == '43')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação



console.log("!= Não É Igual")
console.log(age != 42)
//false

console.log(age != 22)
//true

console.log(age != '42')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age != '41')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age != '43')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação



console.log("> Maior Que")
console.log(age > 42)
//false

console.log(age > 41)
//true

console.log(age > 43)
//false

console.log(age > '42')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age > '41')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age > '43')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação


console.log("< Menor Que")
console.log(age < 42)
//false

console.log(age < 41)
//false

console.log(age < 43)
//true

console.log(age < '42')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age < '41')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age < '43')
//true
//Nesse caso o javascript converte a string em numero antes da validação

console.log(">= Maior ou Igual a")
console.log(age >= 42)
//true

console.log(age >= 41)
//true

console.log(age >= 43)
//false

console.log(age >= '42')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age >= '41')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age >= '43')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação


console.log("<= Menor ou Igual a")
console.log(age <= 42)
//true

console.log(age <= 41)
//false

console.log(age <= 43)
//true

console.log(age <= '42')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age <= '41')
//false
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log(age <= '43')
//true
//Nesse caso o javascript converte o tipo do dado de string para number antes da validação

console.log("==========================")

//Comparações com Strings
console.log("Comparações com Strings")

// Declarada a variável abaixo com valor atribuído de "Romulo"...
const name = "Romulo";

console.log("== Igual a")

console.log(name == "Romulo")
//true

console.log(name == "romulo")
//false pq não é escrito de forma idêntica

console.log("!= Não É Igual a")

console.log(name != "Romulo")
//false

console.log(name != "romulo")
//true


console.log("> Maior que")
console.log(name > "Romulo")
 //false pq é igual

 console.log(name > "romulo")
 //false pq para js minúsculo tem peso maior que maiúsculo



 console.log("< Menor que")
 console.log(name < "Romulo")
  //false pq é igual
 
  console.log(name < "romulo")
  //true pq para js minúsculo tem peso maior que maiúsculo

  console.log("==========================")


  // OPERADORES DE COMPARAÇÃO NÃO ESTRITOS
console.log("OPERADORES DE COMPARAÇÃO NÃO ESTRITOS")

console.log(name === "Romulo")
/// Tipo e valor são iguais?
//true

console.log(name === "romulo")
/// Tipo e valor são iguais?
//false

console.log(name !== "Romulo")
/// Tipo e valor não são iguais?
//false

console.log(name !== "romulo")
/// Tipo e valor não são iguais?
//true


console.log(age === 42)
/// Tipo e valor são iguais?
//true

console.log(age === '42')
/// Tipo e valor são iguais?
//false

console.log(age !== 42)
/// Tipo e valor não são iguais?
//false

console.log(age !== '42')
/// Tipo e valor não são iguais?
//true

