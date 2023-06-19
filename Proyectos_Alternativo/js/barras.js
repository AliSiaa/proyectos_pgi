//Guardamos en una constante el html que VAMOS A MANIPULAR:
const progressBarLeer = document.querySelector(".leer");
const progressBarDisenyo = document.querySelector(".disenyo");
const progressBarCine = document.querySelector(".cine");
const progressBarFotografia = document.querySelector(".fotografia");

window.addEventListener('scroll', function() {
    
    // Cuando hago scrollo hacia abajo
    // gracias a window.scrollY veo en que punto me encuentro
    console.log(window.scrollY);
    // Como he visto que a partir del punto 1070
    // es un buen punto para que se empieza a mostrar
    // las barras lo defino en una constante
    const punto = 1070; 
    
    // Si, window.scrollY es mayo o igual a punto
    // entonces haremos las barras al tamaño que toca.
    if(window.scrollY >= punto){ 
        progressBarLeer.style.width = "70%";
        progressBarDisenyo.style.width = "85%";
        progressBarCine.style.width = "30%";
        progressBarFotografia.style.width = "10%";
    }
   
});