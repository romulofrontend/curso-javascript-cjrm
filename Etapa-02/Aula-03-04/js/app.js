//ETAPA-02 | AULA-03-04 | SWITCH

/*
CONCEITO
- Uma condicional alternativa para verificar múltiplos valores possíveis de uma variável e/ou constante

*/


/*
SINTAXE - EXPLICAÇÃO

const nomeVariavel = valor atribuído
const message = `Você tirou um ${nomeVariavel}`

switch (nomeVariavel){
  bloco de código
  case condição1: 
    codigo a ser executado
    break
  case condição2: 
    codigo a ser executado
    break
  case condição3: 
    codigo a ser executado
    break
  default: 
    codigo a ser executado
}

*/

//EXEMPLO PRÁTICO - Versão A

const notaUser1 = 'A'

switch(notaUser1){
  case 'A':
    console.log(`Você tirou Nota: A`)
    break
  case 'B':
    console.log(`Você tirou Nota: B`)
    break
  case 'C':
    console.log(`Você tirou Nota: C`)
    break
  case 'D':
    console.log(`Você tirou Nota: D`)
    break
  case 'E':
    console.log(`Você tirou Nota: E`)
    break
  default:
    console.log(`Nota Inválida`)
}



//EXEMPLO PRÁTICO - Versão 2

const notaUser2 = 'B'
let notaTest2 = null;

switch(notaUser2){
  case 'A' :
    notaTest2 = 'A'
    break
  case 'B':
    notaTest2 = 'B'    
    break
  case 'C':
    notaTest2 = 'C'    
    break
  case 'D':
    notaTest2 = 'D'
    break
  case 'E':
    notaTest2 = 'E'     
    break
  default:
    notaTest2 = 'Nota Inválida'
}


if(notaTest2 === 'Nota Inválida'){
  console.log(`${notaTest2}`)
} else{
  console.log(`Você tirou Nota: ${notaTest2}`)
}


/*
FLUXO DE EXECUÇÃO DESSE CÓDIGO
1)

*/
