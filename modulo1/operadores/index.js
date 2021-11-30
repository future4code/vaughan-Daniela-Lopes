//const bool1 = true
//const bool2 = false
//const bool3 = !bool2
//const bool3 = !bool2 === true

//let resultado = bool1 && bool2
//console.log("a. ", resultado)
// a. false

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 
// b. false

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)
// c. false

//console.log("d. ", typeof resultado)
// d. typeof boolean

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)
//No caso ele não atribuiu um valor a variavel,
//quando roda o comando console.log não aperece nda
//pois de fato teria que convertela para nunber.

const idadeUsuario = Number (prompt ("Qual é sua idade?"));
const idadeMelhorAmigo = Number (prompt ("Qual é a idade do seu melhor amigo(a)?"));
const comparaçãoBoolean = idadeUsuario <= idadeMelhorAmigo;
const comparaçãoNumber = idadeUsuario - idadeMelhorAmigo
console.log ("Sua idade é maior do que a do seu melhor amigo? True or False", comparaçãoNumber);

const numeroPar = Number (prompt("Insira um número par:"));
const numeroQualquer = Number (prompt("Insira qualquer número"));
const divisao = numeroPar / numeroQualquer % 2;
console.log(divisao); 

/*Quando a divisão foi feita com numeros pares notei 
que todos os numeros eram decimais e raramente tinham mais que
duas casas! */

/*Quando a divisão foi feita com numeros impares foi notado que além
de todos os resultados serem com números decimais tinha uma 
sequencia grande de números após a virgula que visualmente 
não consegui notar algum padrão.*/

const idadeUsuario1 = Number (prompt("Qual é sua idade?"));
console.log(idadeUsuario1);
const idadeMeses = 12;
const horasDias = 365;
const idadeHoras = 8.760;
console.log(idadeUsuario1 * 12);
console.log(idadeUsuario1 * 365);
console.log(idadeUsuario1 * 8.760);

const qualquer2 = Number (prompt("Digite um número:"));
const qualquer3 = Number (prompt("Digite outro número"));
console.log ("O primeiro número é maior que o segundo?", qualquer2 > qualquer3);
console.log ("O primeiro número é igual ao segundo?", qualquer2 === qualquer3);
console.log ("O primeiro número é divisivelpelo segundo?", qualquer2 /  qualquer3);
console.log ("O segundo número é divisivel pelo primeiro?", qualquer2 / qualquer3);
