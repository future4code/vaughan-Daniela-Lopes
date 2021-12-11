//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

//const usuarios = [
    //{ nome: "Amanda Rangel", apelido: "Mandi" },
    //{ nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" }
  //]
  
  //const novoArrayA = usuarios.map((item, index, array) => {
     //console.log(item, index, array)
  //})
  //1.A. Vai ser impresso o mesmo valor 3 vezes, pois deixamos os
  //parametros (item, index, array).

  //2.
 // const usuarios = [
    //{ nome: "Amanda Rangel", apelido: "Mandi" },
    //{ nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" },
  //]
  
  //const novoArrayB = usuarios.map((item, index, array) => {
     //return item.nome
  //})
  
  //2.A. Não aperece nada pois não chamamos a função, apenas deu um return,
  //ou seja os dados ficam apenas dentro do corpo da função!
  
  //3.
  //const usuarios = [
    //{ nome: "Amanda Rangel", apelido: "Mandi" },
    //{ nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" },
  //]
  
  //const novoArrayC = usuarios.filter((item, index, array) => {
   //  return item.apelido !== "Chijo"
  //})
  
  //console.log(novoArrayC)

  //3.A. Vai imprimir 2 arrays Laura e Mandy, pois no exercicio
  // pediu para ser impresso pelo console o que fosse diferente de chijo.

  //EXERCICIO DE ESCRITA DE CODIGO
  //1.A
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //const nomeDoguinhos = pets.map((nomes, indice, array) => {
    // return nomes.nome
 //})
 //console.log(nomeDoguinhos)

 //1.B.
 //const doguinhoSalcicha = pets.filter((nomes, indice, array) => {
   //  return nomes.raca === "Salsicha"
 //})
 //console.log(doguinhoSalcicha)

 //const cuponsPoodels = pets.filter((nomes, indice, array) => {
    //console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Madame!")
    //return nomes.raca === "Poodle"
//})
//console.log(cuponsPoodels)




//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//2.A
//const nomeProdutos = produtos.map((nomes, indice, array) => {
    //return nomes.nome
//})
//console.log(nomeProdutos)

//2.B
const descontoProdutos = produtos.filter((nomes, indice, array) =>{
    return nomes.nome 
})
console.log(descontoProdutos)