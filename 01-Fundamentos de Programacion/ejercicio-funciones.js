/*

Ejercicio 

1-. Vamos a definir una variable llamada  `heroe`  que tenga un dato en string con el nombre de un superheroe
2-. Definimos una funcion llamada  `obtenerPoder`  
3-. Esta funcion recibe el parametro  `heroe` que sera validado en el cuerpo de la funcion
4-. En el cuerpo de la funcion validar: 

    si heroe === "ghost rider" -> "Yo cabalgo, y el infierno me sigue"
    si heroe === "superman" -> "Yo cabalgo, y el infierno me sigue"
5-. Invocar a la funcion con su parametro `heroe`
6-. Deben cambiar el valor de la variable `heroe`
*/

let heroe;

heroe = prompt("Elige entre superman, batman y ghosth rider para conocer tu superpoder")

function  obtenerPoder(heroe){
}

if(heroe === "ghost rider"){
console.log("Yo cabalgo, y el infierno me sigue")
} else if (heroe == "superman") {
    console.log("Los que no quieren ser salvados, no se pueden salvar")
} else if (heroe == "batman") {
    console.log("Tu poder es ser millonario")
}

obtenerPoder(heroe)