//ETAPA-02 | AULA-03-04 | SWITCH

/*
CONCEITO
- Uma condicional alternativa para verificar múltiplos valores possíveis de uma variável, constante ou condição
- Verica a se há dentro do bloco de código algum case/opção com valor que faça o teste da condicinal gerar um true.
- Caso haja, é executado o código referente (que pode ser totalmente customizado pra cada resposta caso seja necessário). Após executar o código, quebra a execução saindo do switch através de um break 
- Caso contrário é excutado o cpódigo referete a opção default (uem também pode ser totalmente customizado frente as demais opções). Após executar o código, Saí do switch sem precisar de break, já que é sempre a última opção a ser declarada.
- Passa a ler a primeira linha de código após o switch
*/


/*
SINTAXE - EXPLICAÇÃO

const nomeVariavel/condição = valor atribuído

switch (nomeVariavel){
  bloco de código
  case condição1: 
    codigo a ser executado caso essa opção gere na gera na condicional true como resposta
    break
  case condição2: 
    codigo a ser executado caso essa opção gere na gera na condicional true como resposta
    break
  case condição3: 
    codigo a ser executado caso essa opção gere na gera na condicional true como resposta
    break
  default: 
    codigo a ser executado caso nenhuma das opções gere na gera na condicional true como resposta
}
*/

//EXEMPLO PRÁTICO - Versão 1

const notaUser1 = 'C'

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
  default:
    console.log(`Nota Inválida`)
}


/*FLUXO DE EXECUÇÃO DESSE CÓDIGO
1) const notaUser1 = 'A' | Dada a variável que recebe o valor A
2) switch(notaUser1) | Vamos verificar se essa variável tem valor igual a um dos cases presentes no bloco de código. 
3) case 'A': | Testar se o valor de NotaUser === 'A'. Como é false, não é executado o código referente e segue pro próximo teste.
4) case 'B': | Testar se o valor de NotaUser === 'B'. Como é false, não é executado o código referente e segue pro próximo teste.
5) case 'c': | Testar se o valor de NotaUser === 'c'. Como é true, é executado o código referente e após passar pelo break faz a saída do switch.
6) Executa a primeira linha de código após o switch.
*/



//EXEMPLO PRÁTICO - Versão 2
// Código que fiz pra chegar no mesmo resultado, porém mais elaborado
let notaUser2 = 'B'

switch(notaUser2){
  case 'A' :
    break
  case 'B': 
    break
  case 'C': 
    break
  default:
    notaUser2 = 'Nota Inválida'
}

if(notaUser2 === 'Nota Inválida'){
  console.log(`${notaUser2}`)
} else{
  console.log(`Você tirou Nota: ${notaUser2}`)
}

/*FLUXO DE EXECUÇÃO DESSE CÓDIGO
1) const notaUser2 = 'B' | Dada a variável que recebe o valor B
2) switch(notaUser1) | Vamos verificar se essa variável tem valor igual a um dos cases presentes no bloco de código. 
3) case 'A': | Testar se o valor de NotaUser === 'A'. Como é false, não é executado o código referente e segue pro próximo teste.
4) case 'B': | Testar se o valor de NotaUser === 'B'. Como é true, é executado o código referente e após passar pelo break faz a saída do switch.
5) Executa a primeira linha de código um if que testa o valor de NotaUser2.
6) Se notaUser2 === 'Nota Inválida' executa um bloco de código com uma resposta referente. Do contrário, executa outro bloco de código com uma resposta que pode ser aplicada as demais respostas.
*/