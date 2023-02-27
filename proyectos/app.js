const nodoLanzar = document.querySelector("#lanzar");
const nodoDado = document.querySelector("#dado");
const container_perspective = document.querySelector("#container");

let rotX = 0;
let rotY = 0;
let rotZ = 0;

nodoLanzar.addEventListener("click", function () {
  //   nodoDado.cssText = "transform:rotateX(100deg )";
  const timer = setInterval(() => {
    rotX += 90;
    nodoDado.style.transform = `rotateX(${rotX}deg )`;
  }, 1000);
});
console.log(selectPerspective);

var offset = [0, 0];
var selectPerspective = document.getElementById("selectPerspective");
var isDown = false;

selectPerspective.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [
      selectPerspective.offsetLeft - e.clientX,
      selectPerspective.offsetTop - e.clientY,
    ];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (e) {
    e.preventDefault();
    if (isDown) {
      selectPerspective.style.left = e.clientX + offset[0] + "px";
      selectPerspective.style.top = e.clientY + offset[1] + "px";
      console.log(e.clientX + offset[0] + "px " + e.clientY + offset[1] + "px");
      container_perspective.style.perspectiveOrigin =
        e.clientX + offset[0] + "px " + (e.clientY + offset[1]) + "px";
    }
  },
  true
);
