function certificaciones() 
   {
    window.location.href = "alumnos.html"
    }


function validar()
{
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;	

    if(usuario == "pedro" && Contraseña == "1234")
    {
        alert("Usuario y Contraseña validos");
        certificaciones();
         
    }
    else
    {
        alert("Verifique sus credenciales");
    }
}