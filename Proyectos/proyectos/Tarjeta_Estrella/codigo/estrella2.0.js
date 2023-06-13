const tarjetas = document.querySelectorAll(".tarjeta");
// Aqui si se le puede poner .class para especificar q elemnnto es 

tarjetas.forEach(tarjeta => {

    const estrellas = tarjeta.querySelectorAll(".estrellas .fas");
    estrellas.forEach(estrella =>{

        estrella.addEventListener("click" , function(){
            console.log("hola soy una estrella")
        
            const posEstrella = estrella.getAttribute("data-index");
            console.log(posEstrella)
            // pos de posicion de la estrella

            for(let i = 0; i < estrellas.length; i++){
                estrellas[i].style.color = 'black';
                // estrella leght porque queremos saber cuantas estrellas queremo tener y ponemos esttellaas y no estrella porque son todas 
            }
            
            for(let i = 0; i < posEstrella; i++){
                estrellas[i].style.color = 'blue';
            }


        });
    });
});