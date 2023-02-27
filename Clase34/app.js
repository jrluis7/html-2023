// Comentario

/*
    Comentario
    de
    varias 
    líneas
*/

// Console.log -> Mostrar en la consola del navegador los textos o las variables que le pongamos

console.log("Hola Mundo JS");

console.log("Segunda línea de código");

// Definimos una variable con la palabra let
// Los datos que definimos con "" son cadenas de texto -> STRING
let nombre = "Luis Jiménez";

console.log("El valor de la varibale nombnre es:");
console.log(nombre);

// Modificar el valor de una variable
nombre = "Marcos";

console.log("Nombre después de modificarlo");
console.log(nombre);

let edad = 10; // NUMBER

console.log("edad");
console.log(edad);

// BOOLEAN
let mayorEdad = true; // Asigno con un =
let otromayorEdad = false;

console.log(mayorEdad);

// Sentencia de control: IF - ELSE

// IF - ELSE sólo ejecuta UNA de los dos trozos de código
if (mayorEdad === true) {
  // Pregunto con ===
  console.log("Eres mayor de edad");
} else {
  console.log("Eres un niño");
}

let precio = 120;
let gastos_envio = 0;

if (precio < 50) {
  console.log("Sumar gastos de envío");
  gastos_envio = 5;
} else {
  console.log("Gastos de envío son 0");
}

let precio_total = precio + gastos_envio;

console.log("precio_total");
console.log(precio_total);

/*

    Cómo cargar jquery
    Cómo acceder a elemenetos de la web
    Cómo crear eventos 
        - Algo que hace el usuario y quiero responder a esa acción
        - Click, Doble click, hover, scroll, keyboard, keyup, keypress ,mover el ratón...

    Añadir y quitar clases 

*/

$(document).ready(function () {
  // Estamos seguros de que document ha terminado de cargar
  // Sobretodo se usa cuando no podemos cargar el script al final de la página
});

// Seleccionar elementos de la web

// $("h1").addClass("color-red");

// Crear eventos

$("#btn_1").click(function () {
  // NO SE EJECUTA AL PRINCIPIO de la carga
  // SÓLO se ejecuta cuando se produce el evento
  console.log("Click en el botón");
  $("h1").addClass("color-red");
});

// Añadir / quitar clases
