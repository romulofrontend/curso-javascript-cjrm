//CORREÇÃO
//🏆 100% DE APROVEITAMENTO
//Durante a correção o professor ensinou formas de melhorar a legibilidade do código, tema que não foi abordado anteriormente
//Todos os códigos estavam certos, chegando aos resultados solicitados 😍
//Após a correção já otimizei todos os códigos com base nas orientações da aula


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
const fruit1 = "abacaxi";
const fruit2 = "pera";
let fruit = null
let fruitMessage = null;
const hasFruitMessage = `A string ${fruit} existe no array fruits.`
const noFruitsMessage = `Nem ${fruit2} nem ${fruit1} existem no array "fruits".`

if (fruits.includes(fruit1)){
  fruit = fruit1;
  fruitMessage = hasFruitMessage;
} else if (fruits.includes(fruit2)){
  fruit = fruit2;
  fruitMessage = hasFruitMessage;
} else{
  fruitMessage = noFruitsMessage;  
}

console.log(fruitMessage)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor, melhorei a legibilidade colocando umas coisas em variaveis


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

const examHour = 6
const testMorning = examHour >= 6 && examHour <= 11
const testEvening = examHour >= 12 && examHour <= 17
let messageTurn = null;
const messageMorning = "Bom dia!";
const messageAfternoon = "Boa tarde!";
const messageNight = "Boa noite!";

if (testMorning){
  messageTurn = messageMorning;
} else if (testEvening){
  messageTurn = messageAfternoon
} else{
  messageTurn = messageNight;
}

console.log(messageTurn)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor, apenas melhorei a legibilidade colocando umas coisas em variaveis



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

const ageUser = 64
const ageMin = 7
const ageMax = 65
const isChild = ageUser <= ageMin
const isOlder = ageUser >= ageMax
const testAge = isChild || isOlder
let messageStatus = null
const messageFree = "Para você, a entrada é grátis!"
const messagePay = "A entrada é R$ 30,00."

if (testAge){
  messageStatus = messageFree
}else{
  messageStatus = messagePay
}

console.log(messageStatus)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor, apenas melhorei a legibilidade colocando umas coisas em variaveis//Professor usou um método melhor pra organizar condicionais e exibir a mensagem (já inseri no código)
//Coloquei a condição numa variavel, pois caso fosse necessário mudar o teste não precisaria mexer direto no código






/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99] 
const numbersSelected = [];


for(let i = 0; i < numbers.length; i++){
  const numbersItem = numbers[i];
  const numbersMin = 11;
  const numbersMax = 90;
  const numbersFirst = numbersItem >= numbersMin;
  const numbersLast = numbersItem <= numbersMax;
  const testNumbers = numbersFirst && numbersLast;

  if(testNumbers){    
    numbersSelected.push(numbersItem);
  }
}

console.log(numbersSelected)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor, apenas melhorei a legibilidade colocando umas coisas em variaveis


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
let sumBoolean = 0;
let sumNumber = 0;
let sumString = 0;

for(let i = 0; i < crazyArray.length; i++){  
  const typeItem = typeof crazyArray[i];
  const testBoolean = typeItem === "boolean";
  const testNumber = typeItem === "number";

  if (testBoolean){
    sumBoolean++
  } else if (testNumber){
    sumNumber++
  } else {
    sumString++
  }  
}

console.log(`O crazyArray tem ${sumBoolean} booleans, ${sumNumber} números e ${sumString} strings`)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor apenas melhorei a legibilidade colocando umas coisas em variaveis


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
let oddNumbers = [];
let evenNumbers = [];

//Criando o array pra iterar random Number e preencher randomNumbersOdd e randomNumbersPair
for (let i = 0; i < randomNumbers.length; i++){
  const number = randomNumbers[i];
  const testOdd = number % 2 === 1;

  if(testOdd){
    oddNumbers.push(number)
  }else{
    evenNumbers.push(number)
  }
}

//Transformando o array em string e colocando ", "
oddNumbers = oddNumbers.join(", ");
evenNumbers = evenNumbers.join(", ");

//Verificando a última vírgula de cada string
const lastCommaOdd = oddNumbers.lastIndexOf(",");
const lastCommaEven = evenNumbers.lastIndexOf(",");

//Trocando a última vígula por e
oddNumbers = `${oddNumbers.slice(0, lastCommaOdd)}${oddNumbers[lastCommaOdd].replace(","," e")}${oddNumbers.slice(lastCommaOdd + 1)}`

//Trocando a última vígula por e
evenNumbers = `${evenNumbers.slice(0, lastCommaEven)}${evenNumbers[lastCommaEven].replace(","," e")}${evenNumbers.slice(lastCommaEven + 1)}`

//Exibindo o resultado no console como solicitado
console.log(`Numeros ímpares: ${oddNumbers}. Números pares: ${evenNumbers}.`)
//CORREÇÃO: CERTO 😍
//Cheguei no resultado solicitado
//Conforme as novas orientações do professor apenas melhorei a legibilidade colocando umas coisas em variaveis


//🏆 100% DE APROVEITAMENTO