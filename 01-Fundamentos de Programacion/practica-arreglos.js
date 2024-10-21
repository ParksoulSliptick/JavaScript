/*

Practica arreglos - Liga Superheroes

1. Definir un arreglo llamado "heroes" que contenga 5 nombres de superheroes y muestralo en la consola.

2. Agregamos un nuevo heroe al final de array.

3. Eliminamos al primer heroe

4.Cambiamos al 3ro por otro mas poderoso

5. Ordenar alfabeticamente los array

6. Crear un nuevo array llamdo enemigos, con los ultimos 3 heroes del array con un metodo

7. 
*/

let heroes = ["IronMan" , "Ghost Rider" , "Thor" , "Deadpool" , "Hulk"]

heroes.push("Spawn")
heroes.shift();
heroes[2] = "Woverine"
heroes.sort();
let enemigos = heroes.splice(2,5);

console.log(heroes);
console.log(enemigos);
