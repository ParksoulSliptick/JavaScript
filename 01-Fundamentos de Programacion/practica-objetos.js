/*

Practica de objetos

1-. Crear una clase Arma

Debe tener las siguientes propiedades en su conductor

nombre (string): nombre del arma
tipo (string): tipo de arma 
daño (numero): cantidad de daño que puede causar

Agrega un metodo llamado describir que imprima en consola:

`Arma: Galahrim    Tipo: Arco     Daño: 40` 

2-. Crear un objeto llamada arsenal que contenga:

Una propiedad armas que sea un array vacio.
Un metodo agregarArma que rcibe un arma como parametro y la agrega al array armas.


3-. Instancia Armas:

Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño

4-. Agregar las armas al Arsenal

Usa el metodo agregarArma del objeto arsenal para agregar cada una de las armas al array armas.

*/

class Arma{
    constructor(nombre, tipo, daño){
        this.nombre = nombre;
        this.tipo =  tipo;
        this.daño = 100;
    }
}

    describir(){
        console.log(`arma ${this.nombre}, ${this.tipo}, ${this.daño}`)
    }  

let arsenal = 
    Armas =[],
    agregarArma = function (arma){
    }

let arma1 = new arma ("Ak-47", "Arma de fuego", 40)
let arma2 = new arma ("M-16", "Arma de fuego", 50)
let arma3 = new arma ("QBZ-95", "Arma de fuego", 100)

console.log("arma1");
console.log("arma2");
console.log("arma3");
        
    
