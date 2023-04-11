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


/****************FORMULARIO INSCRIPCION*************************/

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let apellido = document.querySelector("#apellido").value;
  let materia = document.querySelector("#materia").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name}<br>Apellido: ${apellido}<br>Materia: ${materia}<br> Email: ${email}`; 


     
  // ocultar el primer paso y mostrar el segundo paso
   step1.style.display = "none";
   step2.style.display = "block";
});

/**********fin formulario inscripcion ***************/

