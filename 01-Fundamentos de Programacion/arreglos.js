/*

Arreglos o Arrays

Son una estructura de datos que permite almacenar multiples valores en una sola variable

Los elementos dentro del array tienen una posicion o indice que permite acceder a ellos

Los indices de los datos comienzan en 0 

Los Arrays pueden contener datios de cualqier tipo: numeros, strings, boleanos, incluso arrays anidados

Sintaxis

let nombreArray = [ elemento1 , 
elemento2, elemento3 ]

*/

let frutasFavoritas = ["sandia", "naranja", "mango"]; 
let numerosSuerte = [5, 10, 8, 16, 35];
let meQuieroNoMeQuiere = [true, false, false, true];
let misDatos = ["Alejandro", "Vega", 20, false];
let anidadosArrays = [ 
    [123, 456, 789] , 
    ["Gato", "Perro", "Ballena"] , 
    [true, false, false, true] ,
];

/*


array -> ["sandia", "naranja", "mango"]
indice ->    0           1         2

array -> [5 , 10 , 8 , 16 , 35]
indice -> 0    1   2    3   4

*/

/*
 
Acceder a los elementos de un array

Para scceder a un dato usamos la siguiente sintaxis

nombreArrary[indice];

 */
console.log( frutasFavoritas[2] );
console.log( numerosSuerte[1] )
console.log( anidadosArrays[2][2] )

/*

Modificar elementos del array

Para cambiar el valor de cualquier elemento dentro del array usamos la siguiente sintaxis:

nombreArray[indice] = nuevoDato

*/

console.log( frutasFavoritas )

frutasFavoritas[0] = "pera";

console.log( frutasFavoritas )

/*

Metodos utiles para los arrays

los metodos son "funciones" que trabajan con los datos de los arrays su sintaxis es la siguiente

1. nombreArray.nombreMetodo
2. nombreArray.nombreMetodo(parametro)

*/

/*

length  nos dice cuantos elements tiene un array

*/

console.log(frutasFavoritas.length)
console.log(numerosSuerte.length)
console.log(anidadosArrays[0].length)

/*

push () - Agrega un elemento al final del array

nombreArray.push(dato)

*/

console.log(frutasFavoritas);

frutasFavoritas.push("maracuya");

console.log(frutasFavoritas);

/*

pop() Eliminamos el el ultimo elemento del array y lo devuelve

nombre.Array.pop()

*/

console.log(numerosSuerte);

let numeroQuitado = frutasFavoritas.pop()

console.log(numerosSuerte);

console.log(numeroQuitado)

/*

Unshift

Agrega un elemento al inicio del array.

nombreArray.unshift(elemento)

*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("sandia");

console.log(frutasFavoritas);

/*

shift

Elimina el primer elemento del array y lo devuelve

nombreArray.shift(elemento)

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/*

indexOf

Encuentra el indice de un elemento en el array

nombreArray.indexOf(dato);

*/

let indice = frutasFavoritas.indexOf("uva");

console.log(indice)

/*

splice

Eliminar o agregar elementos al array desde una posicion especifica 

nombreArray.splice(indiceInicio, indiceFinal);

Agregar

nombreArray.splice(indiceInicio, pasos, valor1, valor2);

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1,2)

console.log(frutasFavoritas);

frutasFavoritas.splice(1,0, "fresa" , "maracuya")

/*

slice

Crea una copia de una porcion del array, no modifica al original, se crea un nuevo array

nombreArray.slice(indiceInicio, indiceFinal);

*/

let frutasCopia = frutasFavoritas.slice(3,6)

console.log(frutasCopia)

/*

sort

Ordena los elementpos de un array de mayor a menor

nombreArray.sort ()

De primera no pasamos datos entre parentesis

*/

console.log(frutasFavoritas)

frutasFavoritas.sort();

console.log(frutasFavoritas)



console.log(numerosSuerte)
numerosSuerte.sort();

console.log(numerosSuerte)
