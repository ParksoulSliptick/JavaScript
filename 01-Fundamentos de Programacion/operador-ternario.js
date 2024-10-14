/*
Ejemplo condicionsales if / else

1-.Declarar una variable edad y le asignamos un valor numerico
2-. Comprobamos si edad es igual o mayor que 18 mostramos el mensaje: "Eres mayor de edad"
3-. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebe!"
*/

/*let edad = 7;
    
if (edad >=18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres un bebe");
}
*/

/*
El operador ternario es una forma masconcisa de escribir una condicion if / else

Trabaja con tres operandos:

1-. Una condicion
2-. La expresion si la conmdicion es verdadera
3-. La expresion si la condicion es falsa

Sintaxis

condicion ? expresionSiVerdadera : expresionSiFalsa

*/

let  edad = 18;

let resultado = edad >= 18 ?  "Eres mayor de edad" : "Eres un bebe";

console.log(resultado)
    

