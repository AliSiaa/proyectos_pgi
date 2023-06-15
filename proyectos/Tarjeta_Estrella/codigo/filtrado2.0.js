const articulos = document.querySelectorAll(".tarjetas article");

const categorias = document.querySelectorAll(".galeria ul li");

categorias.forEach(categoria => {
    categoria.addEventListener('click', function(){
        const colorSelecionadoParaQueSeMuestre = categoria.getAttribute("data-color");
        // Este selector sirve para coger el elemento li que
        // tenga el atributo data-color="verde"
        // const liVerde = document.querySelector('li[data-color="verde"]');
        // liVerde.style.border = "none";
        
        // Resetear las tarjetas para quye se vean todas
        articulos.forEach(articulo => {
            
            articulo.style.display = "inline-flex";
  
            
        });


        
        // si la categoria es distinta de valor todas  
        // aplicamos los filtros correspondientes 
        // SI ES DIFERENTE o SI NO ES IGUAL
        if(colorSelecionadoParaQueSeMuestre != "todas"){
            articulos.forEach(articulo => {
            const articuloQueTengoQueDecidirSiSeMuestraONo = articulo.getAttribute("data-color");
            if(colorSelecionadoParaQueSeMuestre != articuloQueTengoQueDecidirSiSeMuestraONo){
                articulo.style.display = "none";
            }
            
        });



        }
        
    })
})

