//ETAPA-02 | AULA-02-03 | ELSE & ELSE IF STATEMENTS

/*
ELSE
- Usado quando há a necessidade de fazer 1 verificação
- Se a condição for true: Executar somente o bloco de código referente ao if
- Se a condição for false: Executar somente o bloco de código referente ao else
- Sempre uma resposta exclui a outra
*/


/*
SINTAXE - EXPLICAÇÃO
if (condição){
  bloco de código ao if
} else{
  bloco de código else
}
*/

/*
FLUXO DO CÓDIGO
1) if (condição)| Verificar a condição
2) if: Se a condição for true: Executar só o bloco de código 1 (if)
3) if: Se a condição for false: Executar só o bloco de código 2 (else)
4) Executar linha de código após o if e else
*/

//EXEMPLO PRÁTICO - TESTE DE STRING*/
//Variável para armazenar um determinado valor e/ou array.
const senha1 = "romulo1"

//Tipo de condicional (condição)
//if: Se a condição do if for true: Executar só o bloco de código referente ao if
if (senha1.length >= 8){
  //Bloco de código do if
  console.log("🟢 Sua senha possui 8 caracteres ou mais.")
}
//else: Se a condição do if for false: Executar só o bloco de código referente ao else
else{
  //Bloco de código do else
  console.log("🔴 Sua senha precisar ter mais de 8 caracteres")
} 


//==============================================


/*
ELSE IF
- Usado quando há a necessidade de várias verificações de condição
- Executa somente o bloco de código referente a verificação da condição com resultado true.
- As verificações de condição com resultado false não tem seus blocos de código executados.
*/


/*
SINTAXE - EXPLICAÇÃO
if (condição){
  bloco de código 1 - if
} else if {
  bloco de código 2 - else if
} else{
  bloco de código 3 - else
}
*/

/*
FLUXO DO CÓDIGO
1) if (condição)| Verificar a condição
2) if: Se a condição for true: Executar só o bloco de código 1 (if)
3) if: Se a condição for false: Verificar a condição de else if
4) else if: Se a condição for true: Executar só o bloco de código 2 (else if)
5) else if: Se a condição for false: Executar só o bloco de código 3 (else)
6) Executar linha de código após o if, else if e else
*/

//ELSE IF - EXEMPLO PRÁTICO - TESTE DE STRING*/

// variável para armazenar um determinado valor e/ou array.
const senha2 = "romulo12"

//Tipo de condicional (condição)
if (senha2.length >= 12){
  //if: Se a condição de if for true: executar só o bloco de código referente ao if  
  console.log("🟢 Senha muito forte. Sua senha possui mais de 12 caracteres. ")
} 
//if: Se a condição de if for false: verificar a condição de else if.
else if (senha2.length >= 8){
  //else if: Se a condição de else if for true: executar só o bloco de código referente ao else if  
  console.log("🟡 Senha válida. Sua senha possui mais de 8 caracteres.")
} 
//else if: Se a condição de else if for false: executar só o bloco de código referente else
else{
    console.log("🔴 Senha inválida. Sua senha possui menos de 8 caracteres.")
}