// Clase 35

/*
    jQuery

    - Seleccionar elementos
    - Añadir eventos
    - Modificar elementos
        + Añadir / Quitar Clases
        + Cambiar CSS en línea
        + Añadir elementos nuevos / textos
    - Usar métodos de jQuery por defecto




    
    - Ejemplos
        + Animar elemento con un botón
        + Tabs
        + Pop up

*/

/*
    Cuando clico en el botón quiero añadir una animación al cuadrado


    Cuándo  -> Evento de click -> EVENTO
    Dónde -> En el botón -> El ELEMENTO QUE DESENCADENA EL EVENTO


    
    Qué -> Añadir una animación al cuadrado 


*/

console.log("App.js CARGADO");

$("#btnStart").click(function () {
  console.log("Botón START clicado");
  //Añadir una animación al cuadrado

  // -> Añadir la clase rotar al cuadrado
  $(".cuadrado").addClass("rotar");
});

$("#btnStop").click(function () {
  console.log("Botón Stop Clicado");
  // -> Quitar la clase rotar del cuadrado
  $(".cuadrado").removeClass("rotar");
});

/*
    Añadir la clase rotar cuando esté parado
    Quitar la clase rotar cuando esté en movimiento
*/

// Va a determinar cuándo el cuadrado está rotando
let cuadrado_rotando = false;

$("#btnStartStop").click(function () {
  console.log("Click en Empezar / Parar");

  console.log("Cuadrado rotando", cuadrado_rotando);

  if (cuadrado_rotando === false) {
    // Preguntando si el cuadrado_rotando es falso

    // SOLO si la condición es VERDADERA
    $(".cuadrado").addClass("rotar");
    cuadrado_rotando = true; // AFIRMAR. ASIGNAR un nuevo valor a la variable. Cambiar el estado de la variable
    console.log("CLASE AÑADIDA");
  } else {
    // SOLO si la condición es FALSA
    $(".cuadrado").removeClass("rotar");
    console.log("CLASE QUITADA");
    cuadrado_rotando = false;
  }
});

let nombre = "Luis";

nombre = "Mario";
$("#btnStartStop").click(function () {
  // Te añade la clase si no la tiene, y te la quita si la tiene
  $(".cuadrado").toggleClass("rotar");
});

/*
Cuando pulse en el botón B ( CLICK en btn2 )
    Quitar la clase activo a TODOS los elemenso 
    Añadir la clase activo SOLO a tabs__item-b
*/

$("#btn_b").click(function () {
  // Le quito la clase a TODOS los elementos que cumplen la selección
  $(".tabs__item").removeClass("activo");

  $(".tabs__item-b").addClass("activo");
});

$("#btn_a").click(function () {
  // Le quito la clase a TODOS los elementos que cumplen la selección
  $(".tabs__item").removeClass("activo");

  $(".tabs__item-a").addClass("activo");
});
