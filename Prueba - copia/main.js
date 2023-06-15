/* COJO TODOS LOS ELEMENTOS QUE
TENGO QUE ESCUCHAR O MODIFICAR */

const lista = document.getElementById("miLista");
// const botonesBorrar = document.querySelectorAll(".borrar");


/* ¿Qué tengconst botonReiniciar = document.getElementById("reiniciar");
o que escuchar? */
function borrarElemento(id){
    const elemento = document.getElementById(id);
    elemento.classList.add('oculto');
}


function reiniciarLista(){
    const items = document.querySelectorAll('#miLista .flex.');
    console.log(items)
    items.forEach( item => {
        item.classList.remove('oculto');
    })
}
function cambiarColor(icono){
    icono.classList.toggle('color');
}


function toggleMenu(){

    const menu = document.getElementById("bodyPulsable");
    
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
