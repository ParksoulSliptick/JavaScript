alert("Enlazado Operadores")

/*
Operadores

Son simbolos utilizados para realizar operaciones sobre valores y variables

1-. Aritmeticos
2-. Asignacion
3-. Comparacion
*/

/*

1-. Operadores Aritmeticos

Se utilizan para realizar calculos matematicos

*/

// Suma (+): Suma dos valores

let suma = 16 + 6 // 22

console.log(suma);

//Resta (-): Resta el segundo valor al primero

let resta = 54 -15; // 39
console.log(resta);

//Multiplicacion (*): Multiplica dos valores
let multi = 4 * 8; // 32
console.log(multi);

//Division (/): Divide el primer valor por el segundo.
let divi = 20 / 4; //5
console.log(divi);

//Modulo (%): Devuelve el rsto de la division entre dos valores
let mod = 7 % 2; // 1
let mod2 = 9 % 3; // 0
console.log(mod);
console.log(mod2);

//Exponenciacion (**): Eleva un numero a la potencia del otro
let expo = 3 ** 2; //9
let expo2 = 5 ** 12; //244140625
console.log (expo);
console.log (expo2);

//Incremento (++) : Incrementa el valor en 1
let x = 2;
x++;
console.log(x);

// Decremento (--) : Decremento el valor en 1
let y = 6;
x--; //5
console.log(y)

/*
2-. Operadores de asignacion

Estos operadores asignan a las variables

*/

// Asignacion (=): Asigna un valor a una variable

let w = 45;

//Asignacion con suma (+=): Suman el valor a una variable y la reasigna

w += 5;
console.log(w)

//Asignacion con resta (-=): Resta el valor a una variable y la reasigna

w -= 15;
console.log(w)

//Asignacion con multiplicacion (*=): Multiplica una variable por un valor y la reasigna

w *=2;
console.log(w)

//Aignacion con division(/=): Divide una variable por un valor y la reasigna
w /= 10;
console.log(w)

/*
3-. Comparacion

Estos operadores comparan dos valores y devuelven 'true' o 'false'

*/

//Igualdad (==): Compara dos valores para ver si son iguales 

let valor = "5";
let compara = 5 == valor;

console.log(compara)

//Igualdad estricta (===): Compara dos valores y su tipo, para ver si son exactamente iguales

compara = 5 === valor;

console.log(compara)

//Desigualdad (¡=): Verificar si dos valores no son iguales.

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2)

//Desigualdad estricta(!==):Verifica si dos valores y sus tipos no son exactamente iguales.

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2)

//Mayor que (>): Verifica que el primer valor es mayor que el segundo

compara = 5 > 5;

console.log(compara)

//Mayor o igual que (>=): Verifica si el primer valor es mayor o igual que el segundo

compara = 5 >= 5;

console.log(compara)

//Menor que (<): Vertifica si el primer valor es menor que el segundo

console.log(3 < 8);
console.log(10 < 8);
console.log("5" < 5);

//Menor o igual que (<=): Verifica si el primer valor es menor o igual que el segundo valor

console.log(4 <= 10);
console.log(20 <= 100);
console.log(45 <= 7);
console.log(8 <= 8);














