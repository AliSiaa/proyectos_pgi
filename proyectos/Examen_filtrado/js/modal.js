/* Hacemos un array con todas las tarjetas */
const tarjetas = Array.from(document.querySelectorAll(".tarjeta_imagen"));
/* Cogemos el modal */
const modal = document.getElementById("modal");
/* Cogemos el sitio donde insertaremos la imagen del modal */
let modalImg = document.getElementById("modal-img");
/* Variable para saber que imagen estoy mostrando del array */
let currentIndex = 0;


/* ESCUCHAMOS TODAS LAS IMAGENES 
PARA CUANDO HAGAN CLICK SACAR EL MODAL
CON ESA IMAGEN*/
tarjetas.forEach((tarjeta, index) => {
    tarjeta.addEventListener("click", (event) => {
        event.stopPropagation();
        const img = tarjeta.querySelector(".imagen");
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = img.src

    });
});

/* Siguiente imagen */
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tarjetas.length;
    let img = tarjetas[currentIndex].querySelector(".imagen");
    modalImg.src = img.src;
})

/* Imagen anterior */
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
    let img = tarjetas[currentIndex].querySelector(".imagen");
    modalImg.src = img.src;
})

/* Cerrar modal */
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})


console.log("FIN");