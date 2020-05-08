// FIZZBUZZ


function fizzbuzz(number){

    if(number!=NaN) {
  
      for (let i=1; i<=end;i++){
        
          if(i%3===0 && i%5===0){
            console.log("Fizzbuzz");
          }
          
          else if(i%3===0){
                console.log("Fizz");
            }
      
            else if(i%5===0){
                console.log("Buzz");
            }
              
            else{
                console.log(i);
            }
        }
      }
     
  }

  
//*******2. Crear una funcion que devuelva el mayor numero dentro de un array**********


const arrayTest = [4, 7, 98, -6, 2, -23]

function mayor(arr){
    return Math.max(...arr)
}

mayor(arrayTest)



 //3.Crear una funcion que devuelva los dos numeros mas grandes dentro de un array

 const arrayTest = [4, 7, 98, -6, 2, -23]

function dosMayores(arr) {
const newArr = arr.sort((a,b) => {return a-b})
console.log(newArr)
console.log(newArr[newArr.length - 1] , newArr[newArr.length - 2])
}

dosMayores(arrayTest)



//4.Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.

const arr = [1,2,3,2,3,4,1]

function duplicados(array){
    const noDuplis = []
    const duplis = []

    array.map(elem =>{
        noDuplis.includes(elem) ? duplis.push(elem) : noDuplis.push(elem)
       })
    return duplis
}

duplicados(arr)


//5.Crear una funcion que diga todos los elementos que aparecen solo una vez en un array.

const arr = [1,2,3,2,3,4,1]

function unoSolo(array){
   
}

unoSolo(arr)


//6.Crear una funcion que determine si una palabra es palindromo o no.

function palindromo(word) {
    return word.split("").reverse().join("") === word
}

//7.Crear una funcion que devuelva el string que le enviamos pero invertido.

function invertido(word){
    return word.split("").reverse().join("")
}