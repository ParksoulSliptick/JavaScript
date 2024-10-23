/*
Funciones

Son bloques de codigo reutilizables, ya que realizan una tarea especifica.

En lugar de escribir el mismo codigo una y otra vez, podemos definir una sola vez y usarla siempre que la necesitemos

Conceptos de las funciones

Definir: Creamos la funcion con un nombre y los datos llamamos parametros (opcionales)

Invocan: Llamamos la funcion cuando queremos que ejecute su codigo, es decir que haga su tarea

Retorna: Puede devolver un resultado la funcion (opcional) return

Sintaxis 

    function nombreFuncion( param1, param2) {
    
    // Codigo que se va a ejecutar.
    
    return resultado;
    }

Function -> La palbra clave para declarar una funcion.

nombreFuncion -> El nombre que le asignamos a la funcion, este nombre lo usamos para invocarla

param1, param2, ... -> Son los datos que le pasamos a la funcion para que trabaje con ellos en su bloque de codigo.

Cuerpo de la funcion -> El codigo que se ejecuta y realiza su tarea de la funcion

return -> Devuelve o retorna un resultado (opcional)

*/

function saludo() {
    console.log("Ya me tiene hasta la chin...")
}


/* saludo(); */
function saludoPersonalizado(nombre) {
  console.log('¡Ya me tiene ${nombre} hasta la chin...')
}

/*saludoPersonalizado("Alejandro")*/

function sumar(a, b) {
   return a + b 
}

let resultado = sumar(10,20);

console.log( resultado * 5 );


