//const filme = {
	///nome: "Auto da Compadecida", 
	//ano: 2000, 
	//elenco: [
		//"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		//"Virginia Cavendish"
		//], 
	//transmissoesHoje: [
		//{canal: "Telecine", horario: "21h"}, 
		//{canal: "Canal Brasil", horario: "19h"}, 
		//{canal: "Globo", horario: "14h"}
		//]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])
/*Vai ser impresso no console
Matheus nachtergaele
Virginia Cavendish
canal: 'Globo' horario: '14h'*/

//const cachorro = {
	//nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)
/*A. Vai ser impresso no console
nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD
nome: Jubo, idade: 3, raca: SRD 
B. Os ... pontinhos indicam que foi feita uma cópia */

//function minhaFuncao(objeto, propriedade) {
	///return objeto[propriedade]
//}

//const pessoa = {
  //nome: "Caio", 
  //idade: 23, 
  //backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))
/*A. Vai ser impresso n console
false
undefined
B. O valor altura não foi impresso pois o mesmo
não foi adicionado como um objeto, isso fez ele
retornar como undefined.*/

//EXERCICIO 1
const umaPessoa = {
    nome: "Daniela",
    apelidos: ["Dani ", " Dhia", " Dandan"]
}
    function texto (umaPessoa) {
    console.log (`Eu sou ${umaPessoa.nome}, mas pode me chamar de: ${umaPessoa.apelidos}.`);
    }
    texto(umaPessoa)



//EXERCICIO 2.A
//const segundaPessoa = {
    //nome: "Daniela",
    //idade: 27,
    //profissao: "Estudante"
//}

//const terceiraPessoa ={
    //nome: "David",
    //idade: 30,
    //profissao: "Estudante"
//}

//2.B
//function retornoInformacao(segundaPessoa){
    //console.log([segundaPessoa.nome, segundaPessoa.nome.length, segundaPessoa.idade, segundaPessoa.profissao.length]);
//}
//retornoInformacao(segundaPessoa);
//retornoInformacao(terceiraPessoa);

//EXERCICIO 3
//2.A
const carrinho = []

//2.B
const frutas1 = {
    nome: "Morango",  
    disponibilidade: true,
    }

    const frutas2 = {
    nome: "Abacaxi",  
    disponibilidade: false,
    }

    const frutas3 = {
    nome: "Uva",       
    disponibilidade: true,
    }

//2.C
function adicionandoNoCarrinho (frutas) {
    carrinho.push (frutas)
    return frutas
}

console.log([adicionandoNoCarrinho(frutas1), adicionandoNoCarrinho(frutas2), adicionandoNoCarrinho(frutas3)]);