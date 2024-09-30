alert("Estoy enlazado")

/*

La concatenacion es un proceso para unir o combinar dos o mas cadenas de texto en una sola

1-.Operador (+) - Este es el metodo mas comun para concatenar cadenas de texto

2-. Template Strings, Plantilla de cadenas o literales. 
Utilizamos los backtics o acentos imnvertidos, dentro podemos 
insertar cadenas de texto, variables y expresiones.


*/

// Concatenar con operador (+)

let nombre = "Alejandro";
let apellido = "Vega";

let nombreCompleto = nombre + " "  + apellido;

console.log(nombreCompleto);

// Concatenar con Template Strings

let saludo = 'Hola ${nombre} ${apellido} ¿Como estas?';

console.log(saludo);