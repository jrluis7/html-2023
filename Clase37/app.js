/*
    Clase 37

    Ejemplo de Elemento hecho en JS


*/

$(".circulo").click(function () {
  console.log("Click en el círculo");
});

// $("body").mousemove(function (evento) {
//   // evento -> Vamos a tener más información sobre el evento que se acaba de producir
//   //   evento.pageX -> los píxeles en X donde está el ratón
//   //   evento.pageY-> los píxeles en Y donde está el ratón
//   console.log("Muevo el ratón DENTRO DE BODY");
//   console.log("X: ", evento.pageX);
//   console.log("Y: ", evento.pageY);

//   // Voy a acceder a círculo y le voy a cambiar la posición

//   // Estoy poniendo el valor de evento.pageX + 'px' porque en CSS necesito escribir algo parecido a "145px", o 200px ó 154px, algo como "<valor>px"
//   $(".circulo").css({
//     top: evento.pageY - 50 + "px",
//     left: evento.pageX - 50 + "px",
//   });
// });

// EJEMPLO 2

// Estado que controla si muevo o no el circulo
let mueveCirculo = false;

$("body").mousemove(function (evento) {
  if (mueveCirculo === true) {
    // evento -> Vamos a tener más información sobre el evento que se acaba de producir
    //   evento.pageX -> los píxeles en X donde está el ratón
    //   evento.pageY-> los píxeles en Y donde está el ratón
    console.log("Muevo el ratón DENTRO DE BODY");
    console.log("X: ", evento.pageX);
    console.log("Y: ", evento.pageY);

    // Voy a acceder a círculo y le voy a cambiar la posición

    // Estoy poniendo el valor de evento.pageX + 'px' porque en CSS necesito escribir algo parecido a "145px", o 200px ó 154px, algo como "<valor>px"
    $(".circulo").css({
      top: (evento.pageY - 50) / 1 + "px",
      left: (evento.pageX - 50) / 1 + "px",
    });
  }
});

$(".circulo").click(function () {
  mueveCirculo = true;
});
