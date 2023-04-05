document.addEventListener("DOMContentLoaded",() =>{
    var siguiente = document.getElementById("siguiente");
    siguiente.addEventListener("click",()=>{
    var contenedorEjercicio = document.getElementById("contenedorEjercicio");  

     var elementoActivo = contenedorEjercicio.querySelector(".activo");
     var elementoSiguiente = contenedorEjercicio.querySelector(".activo + .desactivo");
    
     if(elementoSiguiente === null){ 
         elementoSiguiente = contenedorEjercicio.querySelector(".desactivo:first-of-type");
     }

    elementoActivo.classList.remove("activo");
    elementoActivo.classList.add("desactivo");
    
    elementoSiguiente.classList.remove("desactivo");
    elementoSiguiente.classList .add("activo");


    }); 
  


    var anterior = document.getElementById("anterior");

    anterior.addEventListener("click",()=>{
        var contenedorEjercicio = document.getElementById("contenedorEjercicio");  
           
        var elementosDiv = contenedorEjercicio.querySelectorAll(".activo , .desactivo");
   

         for (var i= 0; i< elementosDiv.length; i++) {
          
          if (elementosDiv[i].classList.contains("activo") === true) {
            break;
           
          }
      
         }

         var posicionAnterior = i-1;
         if(posicionAnterior === -1){
            posicionAnterior = elementosDiv.length-1;
         }
    
         elementosDiv[i].classList.remove("activo");
         elementosDiv[i].classList.add("desactivo");

         elementosDiv[posicionAnterior].classList.remove("desactivo");
         elementosDiv[posicionAnterior].classList.add("activo");
});
});