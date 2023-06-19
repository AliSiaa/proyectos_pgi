// 1º Cogemos todos los articulos de la pagina
articles = document.querySelectorAll(".galeria article");

// 2º Por cada articulo escuchamos SU
// icono de papelera Y si hacen click
// Ocultamos ese articulo.
articles.forEach( articulo => {
    const icoBorrar = articulo.querySelector(".papelera");
    icoBorrar.addEventListener("click", function(){
        articulo.style.display="none";
    });  
});


// Botón para volver a ver todas las imagenes.   
const btnVerTodasImg = document.querySelector("#btnVerTodasImg");
btnVerTodasImg.addEventListener("click", function(){
    articles.forEach(articulo => {
        articulo.style.display = "inline-flex";
    });
});