//

console.log("Script cargado");

let edad = 18;

if (edad >= 18) {
} else {
  // SOY menor de 18

  if (edad < 2) {
  } else {
  }
}

if (edad < 2) {
  // CODIGO A
} else if (edad < 12) {
  //  Sólo vamos a hacer esta pregunta si la primera NO SE HA CUMPLIDO
  // CODIGO B
} else if (edad < 18) {
  // CODIGO C
} else {
  // MAYOR O IGUAL Que 18
}

$("#btn_hide").click(function () {
  // .css -> Cambiar cualquier propiedad CSS EN LÍNEA
  $("#contenedor_uno").css({
    // 'clave':'valor',
    color: "red",
    "background-color": "lightgreen",
  });

  // JQuery tiene algunas funciones creadas "por defecto"
  //   $("#contenedor_uno").hide(600); //milisegundos que quiero que tarde en ocultarse
  //   $("#contenedor_uno").slideUp(600); //milisegundos que quiero que tarde en ocultarse
  $("#contenedor_uno").fadeOut(600); //milisegundos que quiero que tarde en ocultarse

  console.log("Clic en botón ocultar");
});

$("#btn_show").click(function () {
  //   $("#contenedor_uno").show(1200);
  //   $("#contenedor_uno").slideDown(1200);
  $("#contenedor_uno").fadeIn(1200);
});

$("#btn_show").dblclick(function () {
  console.log("Doble click");
  $("#btn_show").css({
    color: "blue",
  });
});

$("#btn_show").mousemove(function () {
  console.log("Moviendo el ratón dentro del botón");
});
