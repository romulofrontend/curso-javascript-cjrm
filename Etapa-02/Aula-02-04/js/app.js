//# ETAPA-02 | AULA-02-04 | OPERADORES LÓGICOS "E" && e "OU" ||
//"E" / && : Precisa que todas as condições sejam true para que execute o bloco de código referente a verificação
//"OU" / || : Precisa que pelo menos uma das condições seja true para que execute o bloco de código referente a verificação
//OBS: Como o código é lido de cima para baixo, só é executado o bloco de código da primeira validação a ser true.
//OBS: Evitar escrever condições com muitos testes encadeados para não prejudicar a leitura do código



/*
SINTAXE - EXPLICAÇÃO
if (condição 1 e condição 2){
  bloco de código referente ao if statement
}else if (condição 1 ou condição 2){
  bloco de códifo referente ao else if statement
} else{
  bloco de código referente ao else statement
}
*/



/*
FLUXO DO CÓDIGO
1) if(condição 1 && condição): Verificar se ambas as condições são true 
2) if: Caso if seja true, executar bloco de código referente a if
3) else if (condição 1 ou condição 2): Caso if seja false. Verificar se uma das condições para que seja true
4) else if: Caso else if seja true, executar o bloco de código referente a else if
5) else: Caso else if seja false, executar o bloco de código referente a else (sem precisar verificar condições)
6) Continuar lendo os códigos posteriores a testes
//OBS: Como o código é lido de cima para baixo, é executado o bloco de código da primeira validação a ser true e não exibir as demais
*/

//EXEMPLO PRÁTICO
//Validação 1 - Senha Forte: Precisa ter 12 caracteres ou mais e conter o número 1 entre eles | (senha.length >= 12 && senha.includes("1")
//Validação 2 - Senha Válida: Precisa ter 8 caracteres ou mais ou conter o número 1 entre eles | (senha.length >= 8 || senha.includes("1"))
//Caso contrário - Senha Inválida: Informar que precisa ter 8 caracteres  ou mais ou uma senha com o número 1 entre seus caracteres

// variável para armazenar um determinado valor e/ou array.
const senha = "romu1"

//Tipo de condicional (condição 1 "E" condição 2)
if (senha.length >= 12 && senha.includes("1")){ 
  //if: Caso ambas as condições sejam true, é executado o bloco de código referente
  console.log("🟢 Senha muito forte. Sua senha possui mais de 12 caracteres. ")  
} 
//else if: Caso if seja false. Verificar as condições de else if.
else if (senha.length >= 8 || senha.includes("1")){ 
  //else if: Caso apenas umas das condições seja true, é executado o bloco de código referente
  console.log("🟡 Senha válida. Sua senha possui mais de 8 caracteres.")
} 
//else: Caso else if seja false, é executado o bloco de código de else (sem precisar verificar uma condição)
else {
  console.log("🔴 Senha inválida. Sua senha precisa ter 8 ou mais caracteres, além de conter o número 1 dentre seus caracteres obrigatóriamente.")
}