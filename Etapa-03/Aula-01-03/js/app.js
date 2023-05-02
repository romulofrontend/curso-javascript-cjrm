//ETAPA-03 | AULA-01-03 | FUNCTION EXPRESSION

/*
FUNCTION EXPRESSION - CONCEITO
- Tipo: Object
- Muito util para manter um código organizadO, funcional e sem repetições
- Armazenar um bloco de código que pode ser usado quantas vezes a função for chamada/invocada
- A função é atribuída a uma variável
- Não é impactada por hoisting. Por isso a função sempre vai precisar ser declarada antes de ser chamada. Preferencialmente no topo do código.
- Isso nos ajuda a ter maior controle sobre a execução do código, e em consequência nos ajuda a debugar e corrigir erros.


DECLARAR FUNÇÃO - SINTAXE
const nomeVariavel = function(parametro1, parametro2, ...){
  bloco de código
  return
}

DECLARAR FUNÇÃO - FLUXO DE EXECUÇÃO 
1) const/let: Identificar variavél e tipo
2) nomeVariavel: Definir um nome 
3) =: Atribuir a função a direita
4) function: Usar a palavra reservada informando ao browser que esse trecho de código é uma função. Nesse caso, NÃO ocorre hoisting.
5) parametros: Criar parâmetros/variáveis a serem usados no processamento do bloco de código
6) bloco de código: Script a ser executado ao chamar/invocar a função referente.
7) return: Informar se o resultado do processamento do bloco de código deve ser armazenado para retornar/devolver um resultado a ser usado em outras parte do código no geral.
*/

/*
CHAMAR/INVOCAR FUNÇÃO - SINTAXE
nomeVariavel (valorParametro1, valorParametro2,...)

CHAMAR/INVOCAR FUNÇÃO - FLUXO DE EXECUÇÃO 
1) nomeVariavel: Chamar/invocar a função declarada
2) valorParametros: Passar os valores a serem atribuídos aos parâmetros/variáveis que serão usados no processamento do bloco de código
3) bloco de código: Faz o processamento do script referente. Atribui os valores passados ao parâmetros para executar o script.
4) return: Armazena e retorna/devolve o valor do(s) processamento(s), caso tenha sido definido um return.
*/

//EXEMPLO PRÁTICO
const showFood = function(){
  console.log("Pizza")
}

showFood()