/*

Ciclos o Bucles

Nos permiten ejecutar un bloque de codigo varias veces

Facilita tareas repetitivas, ahorrando codigo y tiempo

*/

/*

1-. For

Este bucle tienen 3 partes clave:

1-. Inicializacion de una variable
2-. Condicion que evalua el valor de la variable
3-. Actualizacion del valor de la variable

Sintaxis

for (inicializacion; condicion; actualizacion ) {
//Codigo que se ejecuta

}
 
*/

for ( let i = 0 ; i < 11 ; i++ ) {
    console.log("Mensaje: " + i)
}

for (let i = 10 ; i >= 0 ; i-- ) {
    console.log(i)
}

/*

2-. While

Ejecuta su bloque de codigo mientras la condicion esécificada sea verdadera

Sintaxis

Se define la variable fuera del ciclo

let nombreVariable = valor;

while (condicion) {
// Codigo a ejecutar

nombreVariable++ //Actualizacion
}

*/

let contador = 0;

while (contador < 3 ) {
    console.log("Gato" + contador)

    contador++;
}

let veces = 5;

while (veces < 2 ){
    
    console.log("veces :" + veces);
    
    veces--;
}

/*

3. do...while

Es similar a while, pero garantiza que el bloque de codigo se ejecute al menos una vez.

Primero se ejecuta el codigo y luego se verifica la coduccion.

Sintaxis:

let nombreVariable = valor // definicion

do {
//Codigo que se ejcuta

nombreVariable++ // Actualizacion

}while (condicion);

*/

let numero = 2;

do{
 console.log("El numero es: " + numero);

 numero++;
} while(numero < 6 );