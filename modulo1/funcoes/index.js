//function minhaFuncao(variavel) {
//return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//A. vai ser impresso 10 e 50, foi atribuido o valor 5 a varaivel dentro da função
//e foi feito um calculo matematico pelo console.log apartir dai.

//B. nada pois não digitei comando algum.

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

//A. Na função criada podemos ver dois comandos, com o primeiro deixamos todas as letras minusculas
// e no terceiros conseguimos incluir uma palavra(porém ela me da valores apenas booleanos).

//B. Por conter o comando Includes em todas as saídas ele me retorna um valor booleano
// ou seja TRUE OR FALSE.

//EXERCICIO A
//function informacaoSobreMim(){
//return textoSobreMim = "Eu sou Daniela, tenho 27 anos, moro em Curitiba e sou Estudante.";
//}
//console.log(informacaoSobreMim());

//EXERCICIO B
function imprimirDados(nome, idade, cidade, profissao) {
    console.log(`Olá eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade}, e sou ${profissao}`);
}
imprimirDados('Viviane', 28, 'Curitiba', 'Fotografa');

//EXERCICIO 2
//A
function somar(n1,n2){
    return n1+n2
}
 console.log(somar(10,5));

 //B
 function parOuNao (n3,n4){
     return n3/n4 == 2
 }
console.log(parOuNao(3,6==2));

//C
function numero(qualqer){
    return qualqer == 2
}
console.log(numero(2 === 2));

//D
const mensagem = "MORANGO É MUITO BOM"
function recebeMensagem(mensagem){
mensagem.towLowerCase()
    
    return mensagem
}

console.log(mensagem);