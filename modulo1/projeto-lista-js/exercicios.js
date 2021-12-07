// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 n1 = prompt("Digite a altura de um retangulo qualqer!")
 n2 = prompt("Digite a lagura de um retangungulo qualquer!" )
 console.log(n1*n2);
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
anoAtual = prompt("Digite o ano atual!")
anoNascimento = prompt("Digite o ano do seu nascimento!")
console.log(anoAtual-anoNascimento);
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura);
}
console.log(calculaIMC(70,1.70,1.70));

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome");
  idade = prompt("Digite sua idade");
  email = prompt("Digite seu e-mail");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  c1 = prompt("Digite sua primeira cor favorita");
  c2 = prompt("Digite sua segunda cor favorita");
  c3 = prompt("terceira cor favorita");
  console.log([c1,c2,c3]);
}
imprimeTresCoresFavoritas()
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}
console.log(calculaIngressosEspetaculo(2000,50));

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop();
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  primeiroNumero = array[0]
  segundoNumero = array.pop()
    trocarPrimeiroNumero = array.splice(0,1, trocarSegundoNumero)
    trocarSegundoNumero = array.splice(3,1, trocarPrimeiroNumero)
    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1 === string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}