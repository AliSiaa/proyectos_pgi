
const catBordes = document.querySelectorAll(".categoria li");
console.log(catBordes)

catBordes.forEach(catBorde => {

    catBorde.addEventListener("click" , function(){
        
            for(let i = 0; i < catBordes.length; i++){
                catBordes[i].style.border = "0";
                // estrella leght porque queremos saber cuantas estrellas queremo tener y ponemos esttellaas y no estrella porque son todas 
                // i son las posiciones
                // let sirve par definir una variable q solo esxist en el bloque for
            }
            
            catBorde.style.border = "2px solid black";
            catBorde.style.padding = "2px";
            catBorde.style.borderRadius = "3px";
            
            


        });
});

