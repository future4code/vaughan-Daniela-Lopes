//let array
//console.log('a. ', array)
// a. indefinido , pois não atribui um valor para ela.

//array = null
//console.log('b. ', array)
// b. null 

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
// c. 11

//let i = 0
//console.log('d. ', array[i])
// d. 3

//array[i+1] = 19
//console.log('e. ', array)
// e.  11

//const valor = array[i+6]
//console.log('f. ', valor)
// f. 9 

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//mudanças: todas as letras maiusculas, substituir as letras A
//por I e me mostrar a quantidade de letras.
//SUBI NUM ONIBÛS EM MIRROCOS 27

//EXERCICIO 1
const nomeUsuario = prompt ("Digite seu nome")
const emailUsurario = prompt ("Digite seu e-mail")
console.log(`O e-mail ${emailUsurario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`);

//EXERCICIO 2
const comidasPrefridas = ["feijoada", "batata", "stogonoffe", "lasanha", "purê"];
console.log(comidasPrefridas);
console.log("Essas são minhas comidas preferidas:");
console.log(comidasPrefridas[0]);
console.log(comidasPrefridas[1]);
console.log(comidasPrefridas[2]);
console.log(comidasPrefridas[3]);
console.log(comidasPrefridas[4]);

const comidaFavoritaUser = prompt ("Digite sua comida favorita");
console.log (comidaFavoritaUser);
comidasPrefridas[1] = `troca comidas ${comidaFavoritaUser}`;

//EXERCICIO 3
let listaDetarefas 
const pergunta1 = prompt("Digite 1 tarefa diaria")
const pergunta2 = prompt("Digite 2 tarefa diaria")
const pergunta3 = prompt("Digite 3 tarefa diaria")
listaDetarefas = [pergunta1, pergunta2, pergunta3];
console.log(listaDetarefas);
const tarefasRealizadas = prompt("Quais tarefas foram realizadas? 1, 2 ou 3");
const tarefasFinal = listaDetarefas.splice(Number(tarefasRealizadas, -1));
console.log(tarefasFinal);