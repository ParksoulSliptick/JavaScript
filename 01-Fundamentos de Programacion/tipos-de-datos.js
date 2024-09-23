alert("Tipos enlazados")

/* Tipos de datos

Los tipos de datos se dividen en dos categorias: Primitivos y Complejos

1. Tipos de datos primitivos

* Datos basicos que no se consideran "objetos" y no tienen "metodos"

Tipo number o numero

Representacion de valores numericos ya sea enteros o con decimales (punto flotante)

* String o cadena de caracteres

Se usa para representar texto. El texto se coloca entre comillas dobles o simples  "texto" 'text'.


*Boolean 

Estos representan un valor logico que puede ser 'true' o 'false'.


*Undefined

Es el valor que se le asigna a una variable que ha sido declarada pero no inicializada.

2. Tipos de datos complejos

*Array o Arreglo

Es un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados
por comas.


*/


/*Numbers*/

let miNumero = 8;
let miNumeroDecimal = 3.4562;

console.log(miNumero);
console.log(miNumeroDecimal);


/*Strings */

let miNombre = 'Alejandro';
let miApellido = 'Vega';

console.log(miNombre);
console.log(miApellido);


/*Bolean*/ 

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);


/*Undefined*/

let x;

console.log(x);

x = prompt("Cual es tu numero favorito?");

console.log(x);

/*Array*/

let misFrutasFavoritas = ["Durazno", "Naranjas", "Uvas"];
let misNumerosSuerte = [8, 5, 7];
let otroArray = ["Puchunguito, 32, true"]

console.log(misFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);


/*Objeto*/

let persona = {
    nombre : "Alejandro",
    edad : 20,
    colorCabello : "negro",
    colorOjos : "cafes",
    altura : 1.68,
    peso : undefined,
    vivo : true,
    novia : false,
} 

console.log(persona);
//Accedemos al valor de una clave dentro de un objeto 
//Con la notacion de corchetes []
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.novia);

/*Function*/

let mensajito = function () {
    //Pasamos el codigo que ejecuta la funcion
    console.log("Este es un mensaje lanzado por una funcion");
}

mensajito();


