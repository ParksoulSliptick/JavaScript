/*

Objetos

Es una coleccion de propiedades y metodos.

Las propiedades describen las caracteristicas del objeto.

Los metodos describen comportamientos del objeto.

Los objetos pueden contener distintos tipos de datos, strings, arrays, booleans, "undefined", otros objetos e incluso funciones.

Sintaxis:

let nombreObjeto = {
// Propiedades y Metodos
}

Propiedades dentro de un objeto se escriben en pares "clave" : "valor".

nombre: "Alejandro" // Propiedad

let nombre = Alejandro // Variable

Las propiedades de un objeto se separan por comas ´,´ despues del valor.

Las claves de las propiedades pueden tener mas de una palabra, pero se deberan escribir entre comillas "" o ´´

"nombre" : "Alejandro"

*/

let personaje = {
  nombre : "Carter Slade",
  edad : 20,
  residencia : "USA",
  poderes: true,
  "habilidades humanas" : 
  ["Mirada del castigo",
    "Remolino de fuego",
  ]
}

/*Accedemos al valor de las propiedades del objeto*/

console.log(personaje.nombre);
console.log(personaje["habilidades humanas"][0]);

/*Agregar y borrar propiedades de objetos*/

personaje.enemigos = ["Sucubos", "Demonios", "Almas impuras"];

delete personaje.poderes;

/**/

let mascota = {
    nombre : "Estrella Llameante",
    tipo : "Caballo",
    edad : 1000,

//Objeto anidado

fisico : {
 estatura : 2.4,
 peso : 420,
 color : "blanco"

},
//Declaramos un metodo

saludo: function(dueño){
    alert("Buenos dias " + dueño);

}

}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.color);

mascota.fisico.colorOjos = "negro"
delete mascota.fisico.color;

/*Accedemos al metodo saludo del objeto mascota*/

mascota.saludo("Carter Slade");