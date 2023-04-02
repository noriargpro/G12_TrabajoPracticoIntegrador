

document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("miButton");
    button.addEventListener("click", () => {
        var contenedorEjercicio = document.getElementById("contenedorEjercicio");    
       
        
        /* SPLIT */
        var elementoActivo = contenedorEjercicio.querySelector(".activo");
        var idElementoActivo = elementoActivo.id;
        var descomposicionID = idElementoActivo.split("-");
        var numeroElementoSiguiente = Number(descomposicionID[1]) + 1;
        var elementoSiguiente = contenedorEjercicio.querySelector("#elemento-" + numeroElementoSiguiente);
        console.log(elementoSiguiente);
    });
});