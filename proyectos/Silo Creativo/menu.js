
// MENU BURGUER
const boton = document.getElementById("iconoMenuMovil");
const menu = document.getElementById("menuMovil");

boton.addEventListener("click", function () {

    console.log("HOLA")

    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }

})


// CERRAR EL MENU MOVIL
const cerrar = document.getElementById('cerrar');

cerrar.addEventListener("click", function () {
    menu.style.display = "none";
})