const articulos = document.querySelectorAll(".tarjetas article");

const categorias = document.querySelectorAll(".galeria ul li");

categorias.forEach(categoria => {
    categoria.addEventListener('click', function(){
        const clickCategoria = categoria.getAttribute("data-color");
        // Este selector sirve para coger el elemento li que
        // tenga el atributo data-color="verde"
        const liVerde = document.querySelector('li[data-color="verde"]');
        liVerde.style.border = "none";
        
        // Resetear las tarjetas para quye se vean todas
        articulos.forEach(articulo => {
            
            articulo.style.display = "inline-flex";
  
            
        });

        /* OPCIÓN 1  CONSUME 1*/
        switch(clickCategoria){ //clickCategoria puede ser "verde"...
            // Voy a filtrar la variable clickCategoria
            // En los casos siguientes
            // Si hace match con 1 entonces entra
            case "verde": // si es "verde entra aqui dentro"        
                liVerde.style.padding = "10px";
                liVerde.style.border = "1px solid black";
                /* console.log("verde"); */
            break; // SALGO DEL SWITCH
            case "naranja":
                //
                console.log("naranja");
            break;
            case "rojo":
                //
                console.log("rojo");
            break;
            case "todas":
                //
                console.log("todas");
            break;
            default: // CUANDO clickCategoria no es igual a ningun caso
                console.log("NO EXISTE");
        }
        
        
        /* OPCIÓN 2  CONSUME HASTA QUE ENCUENTRA*/
        if(clickCategoria == "verde"){
            console.log("verde");
        } else if(clickCategoria == "naranja"){
            console.log("naranja");
        } else if(clickCategoria == "rojo"){
            console.log("rojo");
        } else if(clickCategoria == "todas"){
            console.log("todas");
        }

        /* OPCIÓN 3  CONSUME TODOS*/
        if(clickCategoria == "verde"){
            console.log("verde");
        }

        if(clickCategoria == "naranja"){
            console.log("naranja");
        }

        if(clickCategoria == "rojo"){
            console.log("rojo");
        }

        if(clickCategoria == "todas"){
            console.log("todas");
        }


        
        // si la categoria es distinta de valor todas  
        // aplicamos los filtros correspondientes 
        if(clickCategoria != "todas"){
            articulos.forEach(articulo => {
            const dataColor = articulo.getAttribute("data-color");
            if(clickCategoria != dataColor){
                articulo.style.display = "none";
            }
            
        });



        }
        
    })
})

