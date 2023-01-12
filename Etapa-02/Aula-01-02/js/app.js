//ETAPA-02 AULA-01-02 - CONTROLE DE FLUXO - FOR LOOP


//Explicando O LOOP FOR

/*
tipo do loop(inicialização/contador; condição; incremento/decremento){
  bloco de código
}
*/


//for loop
for (let i = 0; i < 3; i++){

  console.log(`Dentro do loop: ${i}`)

}

console.log("Loop concluído")


//Explicando O LOOP FOR ACIMA
//for | Tipo dO loop ()
//let i = 0 | Inicialização/contador
//i < 3 | Condição a ser atendidada para executar o bloco de código
//i++ | Incremento (ou decremento) após executa o código


//FLUXO DE EXECUÇÃO
/*.
1) CRIA A VARIÁVEL DE INICIALIZAÇÃO/CONTADOR
Começa a contar e armazenar a quantidade de vezes que o código é executado.
.
2) VERIFICA A CONDIÇÃO 0 < 3.  
Como resulta em true pode seguir adiante.
.
3) EXECUTA O BLOCO DE CÓDIGO
Exibe no console: "Dentro do loop: 0"
Após executar o bloco incrementa o contador.

.
4) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA i = 1
Após incrementar o valor de i o código retorna ao teste da condição novamente
.
5) VERIFICA A CONDIÇÃO NOVA COM 1 < 3.  
Como resulta em true pode seguir adiante.
.
6) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
Exibe no console: "Dentro do loop: 1"
Após executar o bloco incrementa o contador novamente.
.
7) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA i = 2
Após incrementar o valor de i o código retorna ao teste da condição novamente.
.
8) VERIFICA A CONDIÇÃO NOVA COM 2 < 3.  
Como resulta em true pode seguir adiante.
.
9) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
Exibe no console: "Dentro do loop: 2"
Após executar o bloco incrementa o contador novamente.
.
10) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA i = 3
Após incrementar o valor de i o código retorna ao teste da condição novamente.
.
11) VERIFICA A CONDIÇÃO NOVA COM 3 < 3.  
Como resulta em false (já que 3=== 3) o código é encerrado/sai do loop.
.
12) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
Exibe no console: "Loop concluído"
.
13) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)