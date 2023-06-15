// MENU BURGUER
const boton = document.getElementById("iconoMenuMovil");
const menu = document.getElementById("menuMovil");

boton.addEventListener("click", function() {
    
    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

})
