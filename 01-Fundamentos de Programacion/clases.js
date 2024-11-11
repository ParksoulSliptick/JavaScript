/*

Clases

Una clase en JS es una plantilla para crear objetos, es una forma moderna y natural de trabajar con la programacion orientada a objetos

Metodo constructor

El metodo constructor es un metodo especial que se ejecuta automaticamente cuando se crea una nueva instancia de la clase

Dentro del metodo constructor, pasamos las prpiedades y valores de la clase

Las propiedades pasan como parametros y luego se asignan con this
Sintaxis

class nombreClase {
   //Metodo constructor
   
   constructor(par1, par2) {
   this.par1 = par1;
   this.par2 = par2;<
   }

}

Instancia de clase 

   Para crear un objeto usando la clase, se utiliza la palbra new, esto invoca al constructor de la clase.

   Sintaxis:

   new NombreClase(par1, par2);

*/

// Definir la clase Mascota

class Mascota {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;  
    }

    saludo(){
        console.log(`¡Hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
    }
}

// Instancear la clase Mascota. Ctreamos un jetos con la platilla Mascota

let mascota1 = new Mascota("Tonche", 3);
let mascota2 = new Mascota("Cartujo", 4);

// Accedemos a los datos de las instancias

console.log(mascota2.nombre);
console.log(mascota2.edad);

//Lanzar los metodos de los objetos

mascota1.saludo();
mascota2.saludo();