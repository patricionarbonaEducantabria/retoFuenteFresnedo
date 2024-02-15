window.onload = principal;

function principal()
{   
    
    let boton = document.getElementById("miBoton");
    boton.addEventListener("click", manejadorClick);
}

function manejadorClick()
{
    // Inicializo la petición e instancio un objeto de ella
    let miPeticion = new XMLHttpRequest();
    // Si pongo GET recupero datos y POST envio
    miPeticion.open("POST", "./conexion.php");
    //Añado cabecera a la peticion y el tipo de archivo solicitado
    miPeticion.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    // Ejecuto una función al recibir la respueta a mi peticion
    miPeticion.onreadystatechange = manejarRespuesta;
    // Envio la peticion y las datos a enviar
    // Nota: Cuidado con los espacios pueden dar fallos
    let datosEnviar = "usuario= Patricio";
    miPeticion.send(datosEnviar);
    console.log("hola");
}

function manejarRespuesta(elEvento) {
    // Muestro la informacion recibida
    console.log(this.responseText);
}