
const cuadroLupa = document.querySelector(".cuadroLupa");

cuadroLupa.addEventListener("click", function () {

    const barraBusqueda = document.querySelector(".cuadro");

    barraBusqueda.classList.toggle("mostrar");
    console.log("hola")

})

/* Obtenemos los botones para escucharlos */
const btnTodas = document.querySelector("#btnTodas");
const btnEquinocio = document.querySelector("#btnEquinocio");
const btnFlores = document.querySelector("#btnFlores");
const btnPrimavera = document.querySelector("#btnPrimavera");
const galeria = document.querySelector("#galeria");

/* Escucho el click de cada boton */
btnEquinocio.addEventListener("click", function () {
    filtro("Equinocio");
})
btnFlores.addEventListener("click", function () {
    filtro("Flores");
})
btnPrimavera.addEventListener("click", function () {
    filtro("Primavera");
})
btnTodas.addEventListener("click", function () {
    const elementos = document.querySelectorAll('[data-category]');
    elementos.forEach(elemento => {
        elemento.style.display = "block";
        elemento.style.width = "100%";
    })
    galeria.style.display = "block";
})

function filtro(nombre) {
    const elementos = document.querySelectorAll('[data-category]');

    elementos.forEach(elemento => {

        if (elemento.getAttribute(["data-category"]) !== nombre) {
            elemento.style.display = "none";
        } else {
            elemento.style.display = "block";
            elemento.style.width = "400px"
        }

    });

    galeria.style.display = "flex";
    galeria.style.justifyContent = "center";
    galeria.style.alignItems = "center";
    galeria.style.gap = "5px";
}


/* LO DE LOS ICONOS */
const containers = document.querySelectorAll('.container');

containers.forEach(container => {

    container.addEventListener('mouseover', () => {

        const ocultarIcons = container.querySelectorAll('.ocultar');

        ocultarIcons.forEach(icon => {
            icon.style.display = 'block';
        })

    });

    container.addEventListener('mouseout', () => {
        const ocultarIcons = container.querySelectorAll('.ocultar');

        ocultarIcons.forEach(icon => {
            icon.style.display = 'none';
        })
    })

});

/* DESPLEGAR MINÚ MENÚ */

// Coger el html que se quiere escuchar
const despleMenu = document.querySelector(".despleMenu");
// Coger lo que va a sufrir modificaciones en el html
const miniCuadro = document.querySelector('.miniCuadro');


// ¿Qué quiero escuchar? el click
despleMenu.addEventListener('click', () => {
    /* ¿QUé voy ha hacer cual el click */
    /*  miniCuadro.style.display = "block"; */
    miniCuadro.classList.toggle("mostrarInBlock");
    desplegarMiniMenu.classList.toggle("rotate-270");
});


/* MENU HAMBURGUESA */
const hamburgesa = document.querySelector('#hamburgesa');
const idMovil = document.querySelector(".idMovil");
hamburgesa.addEventListener('click', () => {
    idMovil.classList.toggle('mostrarInBlock');
    //body.style.background.
});