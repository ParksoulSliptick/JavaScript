/*
Recorrer arreglos

Podemos acceder a cada dato de un arreglo a traves de se indice, ya sea para obtener el dato o hacer algo con ese indice

*/

let colores = ["rojo", "negro", "gris", "naranja"]
//  indice:       0       1        2        3

/*
console.log(colores[0])
console.log(colores[1])
console.log(colores[2])
*/

colores.push("dorado");

/*Recorrer el array con el bucle for*/ 

/* 
for (let i = 0 ; i < 4 ; i++){
    console.log( colores[i])
}
/*

/*
Bucle for of

Es una manera simple y moderna de recorrer arrays en JavaScript,este nos permite aceder directamente al valor de cada elemento 
sin necesidad de usar indices

Sintaxis

for (constante elemento of nombreArray){
// Codigo a ejecutar por cada elemento en el array

}

*/

/*
for (const color of colores){
    console.log( `Colorcito: ${color}`)
}
/*

/*Ejercicio*/

let bandas = ["Linkin Park", "Fit for Rivals", "Skillet", "SOAD"]

for (const band of bandas){
    console.log( `Bandota: ${band}`)
}