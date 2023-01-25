//Etapa-02 | Aula-03-02 | Operadores Lógicos Not (!)

/*Operadores Lógicos not (!)
- Ao inserir o sinal de exclamação na frente de boolean ou condição, o resultado da verificação é invertido. Se for true vira not true === false, se for false === true;
*/





/*
SINTAXE - EXPLICAÇÃO

let condição = false

if (!condição){
  bloco de código
}
*/




/*
FLUXO DO CÓDIGO
1) let condição = false | Criada uma variável que recebe como valor um boolean false
2) if | O código só pode seguir a diante se a verificação da condição gerar como resultado um boolean true
3) (!condição) | O valor desse boolean seria false, MAS como foi inserida a ! ANTES DA CONDIÇÃO, o VALOR DO BOOLEAN É INVERTIDO para true. (Lembrar que sempre que ! na frente do boolean seu valor será invertido)
4) bloco de código | É executado, já que validação da condição teve o valor invertido pra true
5) Continuar lendo os códigos posteriores a testes
*/




//EXEMPLO PRÁTICO
// Criada uma variável que recebe como valor um boolean false.
let isUserLoggedIn = false;

//if: Tipo de teste da condicional. Se o resultado da verficicção da condicional for true é ececutado o bloco de código 
//(!isUserLoggedIn): O valor de verificação seria false, mas como tem ! na frente, o resultado é invertido pra não false == true.
if (!isUserLoggedIn){
  //Bloco de código: É executado já que o valor de verificação da condicional foi invertido pra true
  console.log("Usuário precisa estar logar!")
}