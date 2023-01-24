/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ['morango', 'banana', 'mamão'] 
const searchFruit1 = "abacaxi";
const searchFruit2 = "pera";

if (fruits.includes(searchFruit1)){
  console.log(`A string ${searchFruit1} existe no array fruits.`)
} else if (fruits.includes(searchFruit2)){
  console.log(`A string ${searchFruit2} existe no array fruits.`)
} else{
  console.log(`Nem ${searchFruit2} nem ${searchFruit1} existem no array "fruits".`)
}

//FEITO






/*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/

const hour = 18

if (hour >= 6 && hour <= 11){
  console.log("Bom dia!")
} else if (hour >= 12 && hour <= 17){
  console.log("Bom tarde!")
} else{
  console.log("Bom noite!")
}
//FEITO






/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/

const age = 70
let message = "Para você, a entrada é grátis!"

if (age <= 7 || age >= 65){
  console.log(message)
}else{
  message = "A entrada é R$ 30,00."
  console.log(message)
}
//FEITO






/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
const newNumbers = [];

/*for(let i = 0; i < numbers.length; i++){
  if(numbers[i] >= 11 && numbers[i] <= 90){    
    newNumbers.push(numbers[i]);
  }
}

console.log(newNumbers)*/
//FEITO




/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]
let resultBoolean = 0;
let resultNumber = 0;
let resultString = 0;
let resultType = '';

/*for(let i = 0; i < crazyArray.length; i++){
  resultType = typeof crazyArray[i];
  if (resultType === "boolean"){
    resultBoolean++
  } else if (resultType === "number"){
    resultNumber++
  } else {
    resultString++
  }  
}

console.log(`O crazyArray tem ${resultBoolean} booleans, ${resultNumber} números e ${resultString} strings`)*/
//FEITO




/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

const randomNumbers = [73, 4, 67, 10, 31, 58]
let numberAtual = 0;
const randomNumbersImpar = [];
const randomNumbersPar = [];

for (let i = 0; i < randomNumbers.length; i++){
  if(randomNumbers[i] % 2 === 1){
    randomNumbersImpar.push(randomNumbers[i])
  }else{
    randomNumbersPar.push(randomNumbers[i])
  }
}

let stringRandomNumbersImpar = randomNumbersImpar.join(", ");
let stringRandomNumbersPar = randomNumbersPar.join(", ");

let stringLastVirgulaImpar = stringRandomNumbersImpar.lastIndexOf(",")
let stringLastVirgulaPar = stringRandomNumbersPar.lastIndexOf(",")

stringRandomNumbersImpar = `${stringRandomNumbersImpar.slice(0, stringLastVirgulaImpar)}${stringRandomNumbersImpar[stringLastVirgulaImpar].replace(","," e")}${stringRandomNumbersImpar.slice(stringLastVirgulaImpar + 1)}`

stringRandomNumbersPar = `${stringRandomNumbersPar.slice(0, stringLastVirgulaPar)}${stringRandomNumbersPar[stringLastVirgulaPar].replace(","," e")}${stringRandomNumbersPar.slice(stringLastVirgulaPar + 1)}`

console.log(`Numeros ímpares: ${stringRandomNumbersImpar}. Números pares: ${stringRandomNumbersPar}.`)
//FEITO