const boton = document.querySelector(".button-container");

boton.addEventListener("click", function (event) {
    alert("¡Hola! Soy el div");
    event.stopPropagation();
});