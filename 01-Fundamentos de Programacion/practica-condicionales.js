/*

Practica condicionales

Sigue las instrucciones y escribe el codigo

1-. Declkarar una variable llamada "edad" y asignarle un valor numerico.
2-. Imprimir/mostrar por consola el valor de la variable "edad"
3-. Con el bloque "if" evaluar si " edad" es mayor o igual que 18
4-. Si esta condicion es "true", mostrar por consola el mensaje: "Eres mayor de edad"
5-. Agregar otra condicion con el bloque "else if", evaluar si "edad" es menor que 18
6-. Si esta condicion es "true", mostrar por consola el mensaje: "Eres menor de edad"
7-. Con el bloque "else", evaluar cualquier otro dato y en caso de que las condiciones anteriores sean "false", mostrar por consola el mensaje: "Eres un alien"
8-. Dentro de los bloques if, else, if y else, cambiar los "console.log", por "alert"
9-. Cambiar el valor de ñla variable "edad" por un "prompt", para que este dato sea introducido por el usuario y evaluado por las condicionales: 
    prompt("Que edad tienes")
*/

alert("Que edad tienes?") 

edad = prompt("Que edad tienes")

var edad= 20;
console.log(edad);

if (edad > 18) {
    console.log(alert("Eres mayor de edad"));
} else if (edad < 18) {
    console.log("Eres menor de edad");
} else (edad < 18 ); {
    console.log("Eres un alien");
}