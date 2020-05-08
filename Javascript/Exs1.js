// Ex1 Dada una variable "y" que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).

const day = prompt("Insert day of the week");

    if(day==1) console.log( "lunes");
    else if(day==2) console.log( "martes");
    else if(day==3) console.log( "Miercoles");
    else if(day==4) console.log( "jueves");
    else if(day==5) console.log( "viernes");
    else if(day==6) console.log( "sabado");
    else if(day==7) console.log( "domingo");

else{
    console.log( "Not a valid number")
}


// Ex2 Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.

function days(month) {

    const monthLower = month.toLowerCase()

    const treintayuno = ["january", "march", "may", "july", "august", "october", "december"];
    const treinta = ["april", "juin", "september", "november"];
    const veintiocho = ["february"]

    if(treintayuno.includes(monthLower)){
        return `${month} has 31 days`
    }

    else if(treinta.includes(monthLower)){
        return `${month} has 30 days`
    }

    else if(veintiocho.includes(monthLower)){
        return `${month} has 28 days`
    }

    else{
        return `Enter a valid month`
    }
}


days("April")
days("Juin")
days("December")
days("sole")


// if(month == "january" || month == "march" || month == "may" ||month == "july" ||month == "august" ||month == "october" ||month == "december") {
//     console.log(`The month ${month} has 31 days`)
// }

// else if(month == "february") {
//     console.log(`The month ${month} has 28 days`)
// }

// else{
//     console.log(`The month ${month} has 30 days`)
// }




// Ex3 Dada una variable "x" la cual contiene un numero, determinar si ese numero es positivo o negativo. Si es cero, mostrar otro mensaje


function whichSign(x){
    if(x>0){
        console.log("positive")
    }
    else if(x<0){
        console.log("negative")
    }

    else{
        console.log("Es cero")
    }
}


// Ex5 Dadas dos variables ("x" e "y") las cuales contienen un numero, determinar cual es mayor.


function mayor(x, y) {
   return  x > y ? "x es mayor a y" : "y es mayor a x"
}


// Ex6 Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "for"


for(let i = 0; i < 11 ; i++) {
    console.log(i)
};


// Ex7 Dada una variable "x" la cual contiene un numero, imprimir en consola todos los numeros que esten entre el valor de la variable y 0.

function contar(x){

for(let i = x; i >=0 ; i--) {
    console.log(i)
}
}


////////////////////// Ex8 Tarjetas

// 1. Crear un diccionario de tarjetas y sus posibles valores de cuotas.
const tarjetas = [{
    cardName: "Visa",
    installments: [1, 3, 6, 9, 12]
  },
  {
    cardName: "Mastercard",
    installments: [1, 3, 6]
  },
  {
    cardName: "Amex",
    installments: [1, 3]
  },
  {
    cardName: "Tucu",
    installments: [1, 3, 18]
  },
  {
    cardName: "Norteña",
    installments: [1]
  }];
  
  
  
  let card = "Visa";
  console.log("La tarjeta a buscar es: " + card);
  
  
  let selectedCard = undefined;
  
  tarjetas.map(x=> {
    const currentCard = tarjetas[x];
  
    if (currentCard.cardName == card) {
      selectedCard = currentCard;
    }
  })
  
  if (selectedCard) {
    console.log("La tarjeta seleccionada es: ", selectedCard.cardName);
  
    selectedCard.installments.map(y=>{
        const installment = y;
  
        console.log( installment + (installment == 1 ? " cuota" : " cuotas") + " sin interés" );
  
    })

  } else {
    console.log("La tarjeta "+card+" no forma parte del diccionario");
    console.log("1 cuota sin interés");
  }



//////////////////////////////// Ex9 Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "while"

let i = 0;

while(i < 10 ) {
    i ++;
    console.log(i)
}


// Ex10 Imprimir los primeros 50 numeros pares

for (let i = 0 ; i < 101 ; i+=2){
        console.log(i);
} 


