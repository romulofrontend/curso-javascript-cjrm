//Etapa-02 aula-02-02 CONDITIONAL IF

/*
IF
- Estrutura condicional
- Verifica SE uma determinada condição é verdadeira
- Caso seja, o bloco de código é executado uma vez
*/



/*
SINTAXE - EXPLICAÇÃO
if (condição){
  bloco de código
}
*/



/*
FLUXO do código
1) if | tipo de condicional. Vai verificar se a condição é true
2) (condição) | Caso a condição seja verdadeira executar o bloco de código
3) { bloco de código } | Trecho de código a ser executado
4) Caso haja alguma linha de código após bloco de código essa será executada
*/



/*EXEMPLO PRÁTICO 01 - TESTE DE VARIAVEL*/

// variável para armazenar um determinado valor. 
const idade = 18;

// tipo de condicional (condição)
// se a condição for verdadeira o bloco de código será executado
if (idade >= 18){

  //bloco de código
  console.log("Igual ou Maior de 18 anos")
}



/*EXEMPLO PRÁTICO 02 - TESTE DE ARRAY*/

// variável para armazenar um determinado valor / array.
const simpsons = ["Bart", "Home", "Marge", "Lisa", "Maggie"]

// tipo de condicional (condição)
// se a condição for verdadeira o bloco de código será executado
if (simpsons.length > 3){

  //bloco de código
  console.log("Os Simpsons possuem mais de 3 personsagens principais")
}


/*EXEMPLO PRÁTICO 03 - TESTE DE STRING*/

// variável para armazenar um determinado valor / array.
const senha = "romulo123"

// tipo de condicional (condição)
// se a condição for verdadeira o bloco de código será executado
if (senha.length => 8){

  //bloco de código
  console.log("Senha possui 8 caracteres ou mais")
}