/*
01 - No index.html deste diretório (exercicio-02):

- Declare uma marcação HTML;
- Modifique a linguagem para português do Brasil;
- Remova as meta tags desnecessárias;
- Modifique o title para "Exercício 02";
- E linke este arquivo, app.js, antes do fechamento da tag body.
*/

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
02 - Inicie o seu servidor local e abra o console do browser.
*/

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
03 - Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.

Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.
*/

//console.log('Grandes poderes trazem grandes responsabilidades.')
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
04 - Comente o console.log acima, e:

- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.
*/

const tom = 'Tom';
const firstTom = 'Hanks';
const secondTom = 'Cruise';

//SOLUÇÃO 1 - Método Tradicional
const myFavoriteTom1 = tom + " " + firstTom;
//console.log(myFavoriteTom1);

//SOLUÇÃO 2 - Usando Template String
const myFavoriteTom2 = `${tom} ${secondTom}`;
//console.log(myFavoriteTom2);

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
05 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/

const programmingLanguage = 'JavaScript';

//SOLUÇÃO 1 - Método Tradicional
const js1 = programmingLanguage[0] + programmingLanguage[4]
//console.log(js1)

//SOLUÇÃO 2 - Usando Template String
const js2 = `${programmingLanguage[0]}${programmingLanguage[4]}`
//console.log(js2)

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
06 - Comente o console.log acima, e,

- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/

const mozilla = 'Mozilla Developer Network'

//SOLUÇÃO 1 - Método Tradicional
const mdn1 = mozilla[0] + mozilla[8] + mozilla[18]
//console.log(mdn1.toLowerCase())

//SOLUÇÃO 2 - Usando Template String
const mdn2 = `${mozilla[0]}${mozilla[8]}${mozilla[18]}`.toLowerCase()
//console.log(mdn2)

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
07 - Comente o console.log acima, e,

- Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;
*/

//console.log(programmingLanguage.length);
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
08 - Comente o console.log acima, e,

- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/

let randomWord = 'Araponga'
//console.log(randomWord[randomWord.length-1]);

//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
09 - Comente o console.log acima, e,

- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/

const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
//console.log(summerMessage.toLowerCase())
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
10 - Comente o console.log acima, e,

- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/

const winterMessage = 'o inverno está chegando'
//console.log(winterMessage.toUpperCase())
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
11 - Comente o console.log acima, e,

- Exiba, no console, o index do caractere "v" da "winterMessage";
*/

//console.log(winterMessage.indexOf("v"));
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
12 - Comente o console.log acima, e,

- Exiba, no console, o index da última ocorrência do caractere "n" da "winterMessage".
*/

//console.log(winterMessage.lastIndexOf("n"));
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
13 - Comente o console.log acima, e,

- Após a const "harryPotterAuthor" (abaixo), exiba no console a parte "J.K." da string "harryPotterAuthor";
- Não digite a string "J.K." manualmente;
*/

const harryPotterAuthor = 'J.K. Rowling'

//console.log(harryPotterAuthor.slice(0,4))
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
14 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/

const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace("La la land","Moonlight")
//console.log(realBestMovie)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
15 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/

const reminder = 10 % 3;
//console.log(reminder)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
16 - Comente o console.log acima, e,

- Abaixo da let "episodes", incremente o valor dela em 1;
- Após o incremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 7.
*/

let episodes = 6
episodes++
//console.log(episodes)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
17 - Comente o console.log acima, e,

- Decremente a let "episodes" em 1;
- Após o decremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/

episodes--
//console.log(episodes)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
18 - Comente o console.log acima, e,

- Utilize o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/

episodes += 4
//console.log(episodes)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
19 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/

//SOLUÇÃO 1 - Método tradicional
const allEpisodes1 = 'O nº de episódios é: ' + episodes
//console.log(allEpisodes1)
//FEITO

//SOLUÇÃO 2 - Template String
const allEpisodes2 = `O nº de episódios é: ${episodes}`
//console.log(allEpisodes2)
//FEITO

//CORREÇÃO: CERTO :) Igual ao professor




/*
20 - Comente o console.log acima, e,

- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/

const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.'
//console.log(bookMessage)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor




/*
21 - Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

- Após a const "name" (abaixo), declare uma let "newName";
- A let "newName" deverá armazenar uma string ES5 com o mesmo valor que "name" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/

const name = 'walter white'
const space = name.indexOf(" ");
let newName = name[0].toUpperCase() + name.slice(1,space) + " " + name[space+1].toUpperCase() + name.slice(space+2)
//console.log(newName)
//FEITO
//CORREÇÃO: CERTO :) Diferente do professor, fiz de forma que se o nome e/ou sobrenome forem trocados continue exibindo corretamente



/*
22 - Comente o console.log acima, e,

- Atribua à "newName" uma template string;
- A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/

newName = `${name[0].toUpperCase()}${name.slice(1,space)} ${name[space+1].toUpperCase()}${name.slice(space+2)}`
console.log(newName)
//FEITO
//CORREÇÃO: CERTO :) Igual ao professor



//APROVEITAMENTO: 100%! QUE FODA!!!