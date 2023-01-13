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
Como resulta em false (já que 3 === 3) o código é encerrado/sai do loop.
.
12) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
Exibe no console: "Loop concluído"
.
13) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)
*/




// ================================================




//for loop

//Simulando a chegada de um dado por banco de dados vamos usar um array

const names1 = ['Romulo','Guilherme','Rosa'];

for (let iNames1 = 0; iNames1 < names1.length; iNames1++){

  console.log(names1[iNames1])

}

console.log("Fim do loop")


//Explicando O LOOP FOR ACIMA
//for | Tipo dO loop ()
//let iNames1 = 0 | Inicialização/contador
//iNames1 < names.length | Condição a ser atendidada para executar o bloco de código
//iNames1++ | Incremento (ou decremento) após executa o código

//Através dessa condição é possível percorrer cada item do array e realizar algo sem saber exatamente quantos itens tem nele, mas se baseando pelo seu total de itens 

//FLUXO DE EXECUÇÃO
/*.
1) CRIA A VARIÁVEL DE INICIALIZAÇÃO/CONTADOR iNames1
Começa a contar e armazenar a quantidade de vezes que o código é executado.
.
2) VERIFICA A CONDIÇÃO 0 < o tamanho do array names (3).  
Como resulta em true pode seguir adiante.
.
3) EXECUTA O BLOCO DE CÓDIGO
console.log(nomeDoArray[índice/contador])
console.log(names1[iNames1])
console.log(names1[0])
Exibe no console: "Romulo"
Após executar o bloco incrementa o contador.

.
4) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames = 1
Após incrementar o valor de iNames1 o código retorna ao teste da condição novamente
.
5) VERIFICA A CONDIÇÃO NOVA COM 1 < iNames1.length.  
Como resulta em true pode seguir adiante.
.
6) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
console.log(nomeDoArray[índice/contador])
console.log(names1[iNames1])
console.log(names1[1])
Exibe no console: "Guilherme"
Após executar o bloco incrementa o contador novamente.
.
7) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames1 = 2
Após incrementar o valor de iNames o código retorna ao teste da condição novamente.
.
8) VERIFICA A CONDIÇÃO NOVA COM 2 < 3.  
Como resulta em true pode seguir adiante.
.
9) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
console.log(nomeDoArray[índice/contador])
console.log(names1[iNames1])
console.log(names1[2])
Exibe no console: "Rosa"
Após executar o bloco incrementa o contador novamente.
.
10) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames1 = 3
Após incrementar o valor de iNames1 o código retorna ao teste da condição novamente.
.
11) VERIFICA A CONDIÇÃO NOVA COM 3 < 3.  
Como resulta em false (já que 3 === 3) o código é encerrado/sai do loop.
.
12) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
Exibe no console: "Fim do Loop"
.
13) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)
*/




// ================================================




//for loop

//Simulando a chegada de um dado por banco de dados vamos usar um array e a criação de um template HTML no bloco de código

const names2 = ['Magna','Guilherme','Silva'];

for (let iNames2 = 0; iNames2 < names2.length; iNames2++){

  const HTMLTemplate = `<p>${names2[iNames2]}</p>`
  console.log(HTMLTemplate)

}

console.log("Fim do loop 2")

//Explicando O LOOP FOR ACIMA
//for | Tipo do loop ()
//let iNames2 = 0 | Inicialização/contador
//iNames2 < names2.length | Condição a ser atendidada para executar o bloco de código
//iNames2++ | Incremento (ou decremento) após executa o código



//FLUXO DE EXECUÇÃO
/*.
1) CRIA A VARIÁVEL DE INICIALIZAÇÃO/CONTADOR iNames2
Começa a contar e armazenar a quantidade de vezes que o código é executado.
.
2) VERIFICA A CONDIÇÃO 0 < o tamanho do array names (3).  
Como resulta em true pode seguir adiante.
.
3) EXECUTA O BLOCO DE CÓDIGO
const HTMLTemplate = `<p>${names2[iNames2]}</p>`
console.log(HTMLTemplate)
Exibe no console: <p>Magna</p>
Após executar o bloco incrementa o contador.

.
4) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames2 = 1
Após incrementar o valor de iNames2 o código retorna ao teste da condição novamente
.
5) VERIFICA A CONDIÇÃO NOVA COM 1 < iNames2.length.  
Como resulta em true pode seguir adiante.
.
6) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
const HTMLTemplate = `<p>${names2[iNames2]}</p>`
console.log(HTMLTemplate)
Exibe no console: <p>Guilherme</p>
Após executar o bloco incrementa o contador novamente.
.
7) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames2 = 2
Após incrementar o valor de iNames2 o código retorna ao teste da condição novamente.
.
8) VERIFICA A CONDIÇÃO NOVA COM 2 < 3.  
Como resulta em true pode seguir adiante.
.
9) EXECUTA O BLOCO DE CÓDIGO NOVAMENTE
const HTMLTemplate = `<p>${names2[iNames2]}</p>`
console.log(HTMLTemplate)
Exibe no console: <p>Rosa</p>
Após executar o bloco incrementa o contador novamente.
.
10) INCREMENTA A INICIALIZAÇÃO/CONTADOR. AGORA iNames2 = 3
Após incrementar o valor de iNames2 o código retorna ao teste da condição novamente.
.
11) VERIFICA A CONDIÇÃO NOVA COM 3 < 3.  
Como resulta em false (já que 3 === 3) o código é encerrado/sai do loop.
.
12) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
Exibe no console: "Fim do Loop 2"
.
13) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)
*/


