//ETAPA-02 | AULA-03-03 | BREAK E CONTINUE

/*
CONCEITOS
Ambas são keyword habitualmente usadas para controlar o fluxo de execução de loops e blocos de código

BREAK (PARA A EXECUÇÃO DO LOOP)
- Realizando um loop pra iterar um array
- Ao passar por um break é gerada uma saída do fluxo de executação do loop naquele exato ponto do código
- Ao sair do loop consequentemente não continua a iteração do array
- Pula pra execução da primeira linha de código após o loop


CONTINUE (PULA A EXECUÇÃO DO ITEM REFERENTE, INCREMENTA O ITEM E VOLTA A ITERAR O ARRAY)
- Realizando um loop pra iterar um array
- Se o item do array for referente a um continue, o item não será iterado
- Será ignorada a execução do bloco de código, após o ponto no qual tem o continue
- O contador do índice será incrementado
- O array volta a ser iterado
- Somente após concluir a iteração do array, é executada a primeira linha de código após o loop
*/




/*
SINTAXE - EXPLICAÇÃO

const nomeArray = [item0, item1, item2, item3, item4, item5, item6]

for(contador; condição; contador++){

  if(nomeArray[i] === item2){
    continue
  }

  if(nomeArray[i] === item4){
    break
  }
}
linha de código após o loop
*/




//EXEMPLO PRÁTICO
const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue
  }

  console.log(`Sua pontuação é: ${scores[i]}`)

  if (scores[i] === 100){
    console.log(`Você alcançou o score máximo com ${scores[i]} pontos!`)
    break
  }
}



/*
FLUXO DE EXECUÇÃO DESSE CÓDIGO
1) Dado o Array scores
2) Criamos um loop para iterar o array
3) Criamos a variável pra inicialização/contador com valor 0 
4) A condição 0 < 7 é verificada. Como resulta em true, o bloco de código é executado.
5) O bloco de código é todo executado, já que não tem teste condicional para o valor 50.
6) O contador é incrementado passando a valer 1
7) A condição 1 < 7 é verificada. Como resulta em true, o bloco de código é executado.
8) O bloco de código é todo executado, já que não tem teste condicional para o valor 25.
9) O contador é incrementado passando a valer 2
10) A condição 2 < 7 é verificada. Como resulta em true, o bloco de código é executado.
11) Existe um teste condicional para esse item de valor 0, como resulta em true, é executado o bloco de código referente
12) Esse bloco de código específico possui um continue 
13) Devido ao continue, a partir desse ponto, todo o restante do bloco de código é ignorado
14) Esse item não é iterado, porém o contador é incrementado passando a valer 3
15) A condição 3 < 7 é verificada. Como resulta em true, o bloco de código é executado.
16) O bloco de código é todo executado, já que não tem teste condicional para o valor 30.
17) O contador é incrementado passando a valer 4
18) A condição 4 < 7 é verificada. Como resulta em true, o bloco de código é executado.
19) Existe um teste condicional para esse item de valor 100, como resulta em true, é executado o bloco de código referente
20) Esse bloco de código específico possui um break 
21) Devido ao break, a partir desse ponto, é gerada uma saída do fluxo de execução do loop
22) Consequentemente encerra também a iteração do array
23) É executada a primeira linha de código após o loop