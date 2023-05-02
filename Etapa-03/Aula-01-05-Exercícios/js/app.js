/*ETAPA-03 | Aula-01-05 | Return

/* 
DECLARAR FUNCTION COM RETURN NUMA VARIAVEL - CONCEITO
- Usar quando for armazenar um valor/processamento numa variável.
- Com return esse valor passa a estar disponível para ser usado em qualquer trecho do código no geral.

DECLARAR FUNCTION COM RETURN NUMA VARIAVEL - SINTAXE
const nomeVariavel = function(parametro1, parametro2,...){
  const variavelValorUtilizar = valor/processamento
  return variavelValorUtilizar
}

DECLARAR FUNCTION COM RETURN NUMA VARIAVEL - SINTAXE
const variavelReceberChamadaFuncao = nomeFuncaoExpressao(parâmetros)
*/

const double = function(number){
  const calc = number * 2;
  return calc;
}

console.log(double(3));



/*
DECLARAR FUNCTION COM RETURN DIRETO - CONCEITO
- Usar quando quiser obter o valor/processamento fora da própria função, mas não precisar armazenar numa variavel esse resultado/processamento do bloco de código.


DECLARAR FUNCTION COM RETURN DIRETO - SINTAXE
const nomeFuncaoExpressao = function(parametro1, parametro2,...){
  return valor/processamento  
}

CHAMAR FUNCTION COM RETURN DIRETO - SINTAXE
const variavelReceberChamadaFuncao = nomeFuncaoExpressao(parâmetros)

console.log(variavelReceberChamadaFuncao)
*/

const double2 = function(number){
  return number * 2
}

const result = double2(6);

const showResult = function(value){
  return `O resultado é: ${value}`;
}

console.log(showResult(result));


/*
OBSERVAÇÃO:
Caso não utilize o var o valor/processamento não pode ser utilizado em outro trecho de código como fiz acima.
*/