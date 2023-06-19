

const lupa = document.querySelector(".busca");

const dialog = document.querySelector(".cuadroBusqueda");


lupa.addEventListener("click", function () {

  dialog.classList.toggle("circulo");

});

// Cuando queremos quitar una clase que se añade con el toggle
const quitarX = document.querySelector(".close");

quitarX.addEventListener("click", function () {

  dialog.classList.toggle("circulo");

});





