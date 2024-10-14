/*
Instrucciones condicionales if / else if / else

1-. Crear una variable dia y asignarle un valor numerico
2-. Con la sentencias if, else if y else, evaluar el valor de la variable dia con las siguientes condiciones:

-dia === 1 // Lunes
-dia === 2 // Martes
-dia === 3 // Miercoles
-dia === 4 // Jueves
-dia === 5 // Viernes
-dia === ? // Dia no valido

*/

/*
let dia = 1;

if (dia === 1){
    console.log("Lunes");
} else if (dia === 2){
    console.log("Martes");
} else if (dia === 3){
    console.log("Miercoles");
}  else if (dia === 4){
    console.log("Jueves");
}  else if (dia === 5){
    console.log("Viernes");
} else {
    console.log("Dia no valido!");
}*/

/*
Switch 

Es una estructura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles 
para evaluar una expresion 

Es mas eficiente y legible en situaciones dodne se quiere coomparar una sola variable con varios valores posibles 

Sintaxis:

switch (dia){
  case: valor1:
    //codigo que se ejecuta
    brake;
    case: valor2:
    //codigo que se ejecuta
    brake;
    case: valor3
    //codigo que se ejecuta
    brake;
   default:
   //codigo que se ejecuta por default
}
*/

let dia = 6;

switch (dia) {
  case 1: 
  console.log("Lunes");
  break;
  case 2: 
  console.log("Martes");
  break;
  case 3: 
  console.log("Miercoles");
  break;
  case 4: 
  console.log("Jueves");
  break;
  case 5: 
  console.log("Viernes");
  break;
  default:
    console.log("Dia no valido!")
}

/*
Ejercicio

1-.Crear una variable pokemon y asignarle un valor en string con el nombre de un pokemon

*/

let pokemon = "Togepi";

switch (pokemon) {
    case "Charmander":
        console.log(`Tu pokemon es ${pokemon} y es de tipo fuego!`)
        break;
    case "Pikachu":
        console.log(`Tu pokemon es ${pokemon} y es de tipo electrico!`)
        break;
    case "Togepi":
        console.log(`Tu pokemon es ${pokemon} y es de tipo hada!`)
        break;
        default:
        console.log(`¿Quien es ese pokemon?`)
}