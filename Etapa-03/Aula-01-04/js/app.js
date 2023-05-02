// ETAPA-03 | AULA-01-04 | ARGUMENTOS, PARÂMETRO E DEFAULT PARAMETERS


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
nomeVariavel (argumento1, argumento2,...)

CHAMAR/INVOCAR FUNÇÃO - FLUXO DE EXECUÇÃO 
1) nomeVariavel: Chamar/invocar a função declarada
2) argumentos: Ao invocar a função, passar os argumentos/valores a atribuir aos parâmetros que usados no processamento do bloco de código.
Os argumentos devem ser passados na mesma ordem em que os parâmetros foram declarados.
3) bloco de código: Faz o processamento do script referente. Atribui os valores de argumentos aos devidos parâmetros para executar e ptocessar o script.
4) return: Armazena e retorna/devolve o valor do(s) processamento(s), caso tenha sido definido um return.
*/

//EXEMPLO PRÁTICO
const myFunc = function(firstName, lastName){
  console.log(`NOME: ${firstName} ${lastName}`);
}

myFunc("Bob", "Marley");

/*
DEFAULT PARAMETERS
- Numa função ao declarar um parâmetro/variavél sem inicializá-lo o browser renderiza seu valor undefinied como uma string e exibe no browser.
- Para evitar isso basta declarar os parâmetros e iniciar atribuindo algum valor 
- Casos sejam declarados novos argumentos, os valores serão sobrepostos aos valores já inicializados, do contrário são exibidos os valores default.


DECLARAR FUNÇÃO - SINTAXE
const nomeVariavel = function(parametro1 = argumento1, parametro2 = argumento2, ...){
  bloco de código
  return
}

CHAMAR/INVOCAR FUNÇÃO - SINTAXE
nomeVariavel (novoArgumento1, novoArgumento2,...)
*/


//EXEMPLO PRÁTICO - DEFAULT PARAMETERS
const minhaFeira = function(fruta1 = "pera", fruta2 = "uva", fruta3 = "maçã"){
  return `FEIRA: ${fruta1}, ${fruta2} e ${fruta3}`;
}

console.log(minhaFeira());

console.log(minhaFeira("morango","abacaxi","carambola"));

console.log(minhaFeira("caju"));

console.log(minhaFeira("goiaba","melancia"));

