//ETAPA-03 | AULA-01-02 | FUNCTION DECLARATION

/*
FUNCTION DECLARATION - CONCEITO
- Tipo: Object
- Muito util para manter um código organizadO, funcional e sem repetições
- Armazenar um bloco de código que pode ser usado quantas vezes a função for chamada/invocada


DECLARAR FUNÇÃO - SINTAXE
function nomedafunção(parametro1, parametro2,...){
  bloco de código
  return
}

DECLARAR FUNÇÃO - FLUXO DE EXECUÇÃO 
1) function: Usar a palavra reservada informando ao browser que esse trecho de código é uma função. Nesse caso, o hoisting sobe a função para o topo do código independente da posição que for declarada.
2) nomedafunção: identificar a função
3) parametros: Criar parâmetros/variáveis a serem usados no processamento do bloco de código
4) bloco de código: Script a ser executado ao chamar/invocar a função referente.
5) return: Informar se o resultado desse processamento deve ser armazenado para retornar/devolver um valor a ser usado em otras parte do código no geral
*/

/*
CHAMAR/INVOCAR FUNÇÃO - SINTAXE
nomedafunção(valorParametro1, valorParametro2,...)

CHAMAR/INVOCAR FUNÇÃO - FLUXO DE EXECUÇÃO 
1) nomedafunção: Chamar/invocar a função já declarada
2) valorParametros: Passar os valores a atribuir aos parâmetros/variáveis que serão usados no processamento do bloco de código
3) bloco de código: Faz o processamento do script referente. Atribui os valores passados ao parâmetros para executar o script
4) return: Armazena e retorna/devolve o valor do(s) processamento(s), caso tenha sido definido um return.
*/

//EXEMPLO PRÁTICO
function sayName(name){
  return `Oi ${name}!`;
}

console.log(sayName("Julia Roberts"));