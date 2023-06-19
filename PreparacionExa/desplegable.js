const tarjetas = document.querySelectorAll(".tarjetas");
const selecionado = document.querySelector(".seleccionado");
console.log("hola")

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", function () {
        // console.log("click", event)

        /* RESET ESTILOS TARJETAS */
        tarjetas.forEach(tarjeta => {
            tarjeta.style.border = "none";
            /* tarjeta.classList.toggle("modicarAnchura"); */

        })



        /* tarjeta */
        tarjeta.style.background = "white";
        tarjeta.style.border = "1px solid red";



        /* para el div del objeto selecionado */
        /*  console.log("la imagen es:", event.target.attributes.src.nodeValue); */ /* img/2.png */

        const img = tarjeta.querySelector("img");


        /* Cojo la imagen de div "SELECCIONADO" */
        const selecionadoImg = selecionado.querySelector("img.zapatos");
        selecionadoImg.src = img.src;

        /* h1 */
        const selecionadoH1 = selecionado.querySelector("h1");
        selecionadoH1.textContent = tarjeta.dataset.tarjeta;


        /* p */
        const selecionadoP = selecionado.querySelector("#precio");
        selecionadoP.textContent = tarjeta.dataset.p;

        selecionado.style.display = "block";
    })


})

function toggleMenu() {
    const desplegable = document.querySelector(".seleccionado");

    if (desplegable.style.display == "none") {
        desplegable.style.display = "block";

    }

    else { desplegable.style.display = "none" }
}