"use strict";

// let list_rects = document.querySelectorAll("rect");
// console.log(list_rects);

// list_rects.forEach((e) => {
//   e.addEventListener("mouseenter", function () {
//     console.log("Ey");

//     // ELIMINAR EL IDENTIFICADOR QUE HABÍA ANTES
//     let nodoseleccionado = document.querySelector("#seleccionado");
//     console.log(nodoseleccionado);
//     nodoseleccionado.id = null;

//     // EL ELEMENTO QUE HE HECHO HOVER LE AÑADO ESTE IDENTIFICADOR
//     this.id = "seleccionado";
//   });
// });

// JQUERY

/*

En SVG no se puede pisar fácilmente la posición de otro elemento que "se ha pintado después" por lo que si queremos escalar uno de los píxeles de Mario sin que se recorte con los de la derecha y abajo debemos usar la etiqueta <use>

<use href="#identificador"> se usa para literamente utilizar dentro de él (duplicandolo ) otro elemento.

De esta manera vamos a crear un píxel que tenga "preferencia"

Vamos a usar una única etiqueta <use> con el identificador #seleccionado

Cada vez que hagamos hover en CADA rect, vamos a quitar el identificador #seleccionado y vamos a ponerselo al elemento que acabamos de hacer hover

 */

$("rect").mouseenter(function () {
  // Seleccionamos el elemento que actualmente tiene el identificador #seleccionado y se lo quitamos
  $("#seleccionado").attr("id", null);

  // this hace referencia al elemento que está siendo seleccionado
  // Le añadimos el identificador #seleccionado al elemento
  $(this).attr("id", "seleccionado");
});
