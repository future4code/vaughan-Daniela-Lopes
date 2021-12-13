/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//MONTANDO O JOGO
const mensagemBoasVindas = prompt ("Boas vindas ao jogo de Blackjack!");
var botaoOk = true
var botaoCancel = false
if(confirm("Quer iniciar uma nova rodada?")){
   console.log(botaoOk)
}else{
   console.log("O jogo acabou!")
   console.log(botaoCancel)
}

const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)
comprarCarta()