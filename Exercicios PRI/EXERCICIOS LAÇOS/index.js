//exercicio 1

////const petUsuario = Number(prompt("Digite a quantidade de bichos de estimação que possui!"));
////nomeBichinhos = [];
//if (petUsuario == 0) {
////console.log("Que pena!Voce pode adotar um pet!")
//} else {
//for(let i = 0; i < petUsuario; i++) {
//nomeBichinhos.push(prompt("Digite o nome dos seus Pets!"));
//}
//console.log(nomeBichinhos);
//};

let arrayOriginal = [2, 27, 56, 13, 14, 27]

function imprimeValor() {
    console.log(arrayOriginal)
};
imprimeValor()

function imprimeValorDivido() {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i] / 10)
    }
}
imprimeValorDivido()

function imprimePares() {
    const arrayDePares = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 == 0) {
            arrayDePares.push(arrayOriginal[i])
            console.log(arrayDePares)
        }
    }
}
imprimePares()

function imprimirArrayDeStrings(arrayOriginal) {
    let arrayDeStrings = []
    let i = 0
    for (let valor of arrayOriginal) {
        arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
        i++
    }
    console.log(arrayDeStrings)
}
imprimirArrayDeStrings(arrayOriginal)

function valorMaximoMinimo() {
let valorMaximo = 0;
let valorMinimo = Infinity;

for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] < valorMinimo) {
        valorMinimo = arrayOriginal[i]
    } else if(arrayOriginal[i] > valorMaximo){
        valorMaximo = arrayOriginal[i]
    }
}
console.log("O maior número é:", valorMaximo, "E o menor número é:", valorMinimo)
};

valorMaximoMinimo ();
