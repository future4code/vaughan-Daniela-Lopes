//EXERCICICIOS DE INTERPRETAÇÃO DE CÓDIGO
//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) {
  //console.log("Passou no teste.")
//} else {
  //console.log("Não passou no teste.")
//}
/*A.O codigo pega um número qualquer do úsuario faz o módulo % por 2
e verifica se o resultado é igual a zero.
B.Ele imprime passou no teste para números pares.
C.Ele imprime não passou no teste para números impares. */

//let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {
  //case "Laranja":
    //preco = 3.5
    //break;
  //case "Maçã":
    //preco = 2.25
    //break;
  //case "Uva":
    //preco = 0.30
    //break;
 // case "Pêra":
   // preco = 5.5
    //break; // BREAK PARA O ITEM c.
  //default:
    //preco = 5
    //break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*2.A O código em questão foi feito para automatizar 
algumas tarefas no supermercado.
B.O preço da fruta, maça é R$ 2.25.
C.O preço da fruta  pera  é  R$  5.*/

//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
  //console.log("Esse número passou no teste")
	//let mensagem = "Essa mensagem é secreta!!!"
//}

//console.log(mensagem)


/*3.A. A primeira linha está pedindo para o úsuario
inserir um número.
B.Não vai aparecer nenhuma mensagem, pois foi ultilizado
apenas a condição if que seria o SE e else no caso é o SENÃO
C .Não consegui identificar visualmente qual seria o erro, porém 
rodei o codigó para ver se dava algum erro, e o mesmo me da essa mensagem
Uncaught SyntaxError: Identifier 'numero' has already been declared.*/

//EXERCICIO DE ESCRITA DE CÓDIGO
//1.A.B
let idadeUsuario = Number(prompt("Digite sua idade"));
//C.
if(idadeUsuario >= 18){
    console.log("O usúario pode dirigir!")
}
else if(idadeUsuario <= 18){
    console.log("O usúario não pode dirigir!")
}
else{
    console.log("Idade do úsuario não encontrada.")
}

//2.
//const turnoAluno = prompt("Qual turno você estuda atualmente: M(Matutino) V(Vespertino) ou N(Noturno)")
//if (turnoAluno === "M"){
    //console.log("Bom dia!")
//}
//else if(turnoAluno === "V"){
   // console.log("Boa tarde!")
//}
//else if(turnoAluno === "N"){
   // console.log("Boa noite!")
//}
//else{
   // console.log("Turno não encontrado!")
//}

//3.
const turnoAluno = prompt("Qual turno você estuda atualmente: M(Matutino) V(Vespertino) ou N(Noturno)")
switch (turnoAluno){
    case "M":
    console.log("Bom dia!");
    break;
case "V":
    console.log("Boa tarde!");
    break;
case "N":
    console.log("Boa noite!");
    break;
default:
    console.log("Turno não encontrado!");
}

//4 NÃO CONSEGUI FAZER AINDA :/