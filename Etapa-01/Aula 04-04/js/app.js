//ETAPA-01 - AULA-04-04 - CONVERSÃO DE TIPOS

//Dada uma variavel
let ex01Pontos = "100"
//Escolhemos let porque esse valor pode ser alterado

//Usaremos uma Função Construtora para converter explicitamente a String para Number
ex01Pontos = Number(ex01Pontos)

//Exibindo no console:
//1) O valor convertido
//2) O valor modificado
//3) A verificação do tipo desse valor após a conversão
console.log(ex01Pontos, ex01Pontos + 10, typeof ex01Pontos)


//Dá pra converter e modificar o valor na mesma linha de código
let ex02Pontos = "200"
ex02Pontos = Number(ex02Pontos) + 20
console.log(ex02Pontos,  typeof ex02Pontos)

//OBS.: É necessário realizar a conversão antes de realizar a operação matemática, pois do contrário exibe NaN

//==============================================


//Dada uma variavél, usaremos uma Função Construtora para converter explicitamente a String para Number
const ex03ConversaoMaluca = Number("Romulo");

//Retorna NaN pq o js não dá suporte para a conversão dessa string pra number
console.log(ex03ConversaoMaluca);


//==============================================


//Dada uma variavél, usaremos uma Função Construtora para converter explicitamente o Number para String
const ex04NumeroConvertido = String(97);

//Exibindo no console
//1) O Number convertido em String
//2) A string concatenando ao number 2
//3) A string concatenando a string "romulo"
//4) Verificação do tipo da variavel ex04NumeroConvertido
console.log(ex04NumeroConvertido, ex04NumeroConvertido + 2, ex04NumeroConvertido + "romulo", typeof ex04NumeroConvertido);


//==============================================

//Dada uma variavél, usaremos uma Função Construtora para converter explicitamente o Number para Boolean
const ex05BooleanoConvertido = Boolean(10);

//Exibindo no console
//1) O Number convertido em Boolean
//2) Verificação do tipo da variável ex04NumeroConvertido
console.log(ex05BooleanoConvertido, typeof ex05BooleanoConvertido);


//Função Construtora Boolean - Funcionamento
//Valores Truthy (true)
//Qualquer valor convertido resulta em true, exceto os valores falsy

//Valores Falsy (false)
// false
// 0
// '', "", ``
// undefinied
// null
// NaN
