//EXERCICIO DE INTERPRETAÇÃO 
//1.
/*O código em questão criou um looping,
 o resultado impresso vai ser vai ser 10.*/

 /*2.A.
 10,11,12,15,18,19,21,23,25,27,30
 B.*/

 /*3.Vai ser impresso no console.
 *
 **
 ***
 ****
 */

 //EXERCICIO DE ESCRITA DE CÓDIGO
 //1.1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    let bichinhosUsuario = Number(prompt("Digite a quantidade de bichinhos que possui!"))
    //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    if(bichinhosUsuario < 0){
        console.log("Que pena! você pode adotar um pet!");
    }
    //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
    else if(bichinhosUsuario > 0){
        let nomeBichinhos = prompt("Digite o nome de seus bichinhos!")
        Array = [nomeBichinhos]
    }
      else{
        console.log([nomeBichinhos])
      }  
        
    //Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        for(let i = 0; i < bichinhosUsuario; i++){
            let nomeBichinhos = prompt("Digite o nome de seus bichinhos!")
        console.log('repetição numero ')
    }
        
        
    
    
 

 