/*
console.log("Este es una visualizacion de un 'proyecto' con js linkeado");
console.log('Este es una visualizacion de un "proyecto" con js linkeado');
console.log("Este es una visualizacion de un \"proyecto\" con js linkeado");
*/

/* ARRAYS */

/*
var miArray = ["Primer Valor", "Segundo Valor", "Tercer Valor"];
miArray.push("Cuarto Valor");
console.log(miArray.length);
console.log(miArray);
console.log(miArray[3]); // ACCEDO A UNA POSICION DE MI ARRAY (AL VALOR)

miArray.unshift("Valor Cero");

console.log(miArray);
*/

/* INDEXOF() */
//console.log(miArray.indexOf("Tercer Valor"));

/* RECORRER EL ARRAY */
/*
for(var i = 0; i <= (miArray.length-1); i++){

}
*/

// i = i + 2; ========== i+= 2;
/*
for(var i = 0; i < miArray.length; i++){
    console.log(miArray[i]);
}

// FUNCION ANONIMA
miArray.forEach(function(valor, indice){
    console.log("El indice actual es: " + indice);
    console.log("El valor actual es: " + valor);
});

// ARROW FUNCTION
miArray.forEach((valor, indice) => {
    console.log("El indice actual es: " + indice);
    console.log("El valor actual es: " + valor);
});

saludar();
function saludar(){
    console.log("Hola!");
}

const saludarAnonimo = () => console.log("Hola Anonimo!");
console.log(typeof(saludarAnonimo));
saludarAnonimo();
*/
/* ARRAYS ASOCIATIVOS */ 

/*
var miArrayAsoc = [];
miArrayAsoc["nombre"] = "Juan Ignacio";
miArrayAsoc["apellido"] = "Spadoni";
miArrayAsoc["edad"] = 31
*/
/* Recorrer un array comun/asociativo */
/*
for(var key in miArrayAsoc){
    console.log(key);
    console.log(miArrayAsoc[key]);
}
*/
/* Recorrer un array comun/asociativo, considerando al array como un objeto en js */
/*
for(var [clave, valor] of Object.entries(miArrayAsoc)){
    console.log(clave);
    console.log(valor);
}

var elementosP = document.getElementsByTagName("p");
console.log(typeof(elementosP));
*/
/*
for(var i = 0; i < elementosP.length; i++) {
    console.log(elementosP.item(i));
}
*/
/*
for(var i = 0; i < elementosP.length; i++) {
    elementosP.item(i).style.color = "red";
}

for(var i = 0; i < elementosP.length; i++) {
    elementosP.item(i).style = "color: red; background-color: black;";
}

document.getElementsByTagName("h1");

var elementoFooter = document.getElementById("footer");
elementoFooter.style.background = "blue";
elementoFooter.style = "background-color: red;";
*/

/* CLASE 10 */

/*
function saludar(){
    alert("hola!!");
}
*/

document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("miButton");
    button.addEventListener("click", () => {
        var contenedorEjercicio = document.getElementById("contenedorEjercicio");    
        /*
        var elementoActivo = contenedorEjercicio.getElementsByClassName("activo"); //Esto me devuelve un objeto => HTMLCollection
        console.log(elementoActivo.item(0));

        var elementoActivo = contenedorEjercicio.querySelectorAll(".activo"); //Esto me devuelve un objeto => NodeList
        console.log(elementoActivo.item(0)); 
        */

        /*
        var elementoActivo = contenedorEjercicio.querySelector(".activo");
        var elementoSiguiente = contenedorEjercicio.querySelector(".activo + .desactivo");
        if(elementoSiguiente === null) {            
            elementoSiguiente = contenedorEjercicio.querySelector(".desactivo:first-of-type");
        }

        elementoActivo.classList.remove("activo");
        elementoActivo.classList.add("desactivo");

        elementoSiguiente.classList.remove("desactivo");
        elementoSiguiente.classList.add("activo");
        */
        
        /* SPLIT */
        var elementoActivo = contenedorEjercicio.querySelector(".activo");
        var idElementoActivo = elementoActivo.id;
        var descomposicionID = idElementoActivo.split("-");
        var numeroElementoSiguiente = Number(descomposicionID[1]) + 1;
        var elementoSiguiente = contenedorEjercicio.querySelector("#elemento-" + numeroElementoSiguiente);
        console.log(elementoSiguiente);
    });
});