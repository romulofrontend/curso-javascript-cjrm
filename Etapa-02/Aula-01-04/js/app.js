//ETAPA-02 - Aula 01-04 - While Loop

//EXPLICANDO A SINTAXE DO LOOP WHILE

//Variavel de inicialização/contador 
//Precisa ser let pq o valor sofre alteração
//Precisar ser declarada antes de entrar no loop
//Não pode ser declarada dentro dos argumentos do loop (como é feito no for loop)
let i = 0


//Tipo de loop (condição a ser atendida)
while (i < 3){

  //Bloco de código
  console.log(`Iteração ${i}`)

  //Atualização do contador (incremento ou decremento)
  //Precisar ser declarada após o bloco de código
  //Caso não seja declarada entrará em loop infinito
  i++

}

//Primeira linha de código após a saída do loop
console.log('Loop concluído')


//=================================


// FLUXO DE EXECUÇÃO DO LOOP WHILE
//Com base no exemplo acima:

/*.
1) CRIA A VARIÁVEL DE INICIALIZAÇÃO/CONTADOR  let i = 0
- Precisa ser declarada antes de começar a ler o loop
- Começa a contar a partir do valor atribuido, no caso 0.
- Armazenar nesse mesmo contador a quantidade de vezes que o código é executado novamente.
.
2) ENTRA NO LOOP WHILE E VERIFICA A CONDIÇÃO 0 < 3.  
Como o resultado é true pode seguir adiante.
.
3) EXECUTA O BLOCO DE CÓDIGO
console.log(`Iteração ${i}`)
Exibe no console: Iteração: 0

4) INCREMENTA A INICIALIZAÇÃO/CONTADOR.
i++
Contador passa a valer 1
.
5) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 1 < 3  
Como o resultado é true pode seguir adiante.
.
6) EXECUTA NOVAMENTE O BLOCO DE CÓDIGO
console.log(`Iteração ${i}`)
Exibe no console: Iteração: 1

7) INCREMENTA NOVAMENTE A INICIALIZAÇÃO/CONTADOR.
i++
Contador passa a valer 2
.
8) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 2 < 3.  
Como o resultado é true pode seguir adiante.
.
9) EXECUTA NOVAMENTE O BLOCO DE CÓDIGO
console.log(`Iteração ${i}`)
Exibe no console: Iteração: 2
.
10) INCREMENTA NOVAMENTE A INICIALIZAÇÃO/CONTADOR.
i++
Contador passa a valer 3
.
11) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 3 < 3.  
Como o resultado é falso encerra/sai do loop
.
12) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
console.log('Loop concluído')
Exibe no console: "Loop Concluído"
.
13) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)
*/



//=================================




//EXEMPLO DE LOOP WHILE ITERANDO UM ARRAY

//Declarado o array a ser lido
const names = ['Romulo', 'Guilherme', 'Rosa']

//Variavel de inicialização/contador 
//Precisa ser let pq o valor sofre alteração
//Precisar ser declarada antes de entrar no loop
//Não pode ser declarada dentro dos argumentos do loop (como é feito no for loop)
let iEx2 = 0


//Tipo de loop (condição a ser atendida)
while (iEx2 < 3){

  //Bloco de código
  //Exibindo o item do array names referente a posição atual do índice/contador/inicialização
  console.log(`${names[iEx2]}`)

  //Atualização do contador (incremento ou decremento)
  //Precisar ser declarada após o bloco de código
  //Caso não seja declarada entrará em loop infinito
  iEx2++
}

//Primeira linha de código após a saída do loop
console.log('Loop Encerrado');




//=================================



// FLUXO DE EXECUÇÃO DO LOOP WHILE
//Com base no exemplo acima:

/*
1) DECLARADO O ARRAY A SER LIDO const names = ['Romulo', 'Guilherme', 'Rosa']
- É fundamental que o array a ser iterado no loop já tenha sido declarado
.
2) CRIADA A VARIÁVEL DE INICIALIZAÇÃO/CONTADOR  let iEx2 = 0
- Precisa ser declarada antes de começar a ler o loop
- Começa a contar a partir do valor atribuido, no caso 0.
- Armazenar nesse mesmo contador a quantidade de vezes que o código é executado novamente.
.
3) ENTRA NO LOOP WHILE E VERIFICA A CONDIÇÃO 0 < 3.  
Como o resultado é true pode seguir adiante.
.
4) EXECUTA O BLOCO DE CÓDIGO
console.log(`${names[iEx2]}`)
Exibe no console: Romulo
Porque no array names[0] = Romulo

5) INCREMENTA A INICIALIZAÇÃO/CONTADOR.
iEx2++
Contador passa a valer 1
.
6) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 1 < 3  
Como o resultado é true pode seguir adiante.
.
7) EXECUTA NOVAMENTE O BLOCO DE CÓDIGO
console.log(`${names[iEx2]}`)
Exibe no console: Guilherme
Porque no array names[1] = Guilherme

8) INCREMENTA NOVAMENTE A INICIALIZAÇÃO/CONTADOR.
iEx2++
Contador passa a valer 2
.
9) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 2 < 3.  
Como o resultado é true pode seguir adiante.
.
10) EXECUTA NOVAMENTE O BLOCO DE CÓDIGO
console.log(`${names[iEx2]}`)
Exibe no console: Rosa
Porque no array names[2]] = Rosa
.
11) INCREMENTA NOVAMENTE A INICIALIZAÇÃO/CONTADOR.
iEx2++
Contador passa a valer 3
.
12) ENTRA NOVAMENTE NO LOOP WHILE E VERIFICA A CONDIÇÃO 3 < 3.  
Como o resultado é falso encerra/sai do loop
.
13) EXECUTA A PRIMEIRA LINHA DE CÓDIGO APÓS O LOOP 
console.log('Loop Encerrado')
Exibe no console: "Loop Encerrado"
.
14) CASO HAJAM OUTRAS LINHAS DE CÓDIGO ABAIXO DESSA
Seguem com a execução (sempre de cima para baixo)
*/


