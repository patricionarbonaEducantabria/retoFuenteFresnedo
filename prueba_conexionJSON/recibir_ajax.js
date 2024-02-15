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
    miPeticion.open("GET", "./conexion.php");
    //Añado cabecera a la peticion y el tipo de archivo solicitado
    miPeticion.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    // Ejecuto una función al recibir la respueta a mi peticion
    miPeticion.onreadystatechange = manejarRespuesta;
    // Envio la peticion
    miPeticion.send();
}

function manejarRespuesta(elEvento) {
    // Antes de mostrar la información compruebo que la conexión sea correcta y solo trabajare con los datos
    // al recibir estos, no antes ni durante.
    if((this.readyState === 4) && (this.status === 200)) {
        // datos almacena toda la respuesta, que es un array con todos los objetos
        let datos = JSON.parse(this.responseText);
        for(let i=0; i < datos.length; i++) {
            // Muestro los datos de cada objeto
            // El typeof lo uso para ver que todos los datos recibidos son de tipo string
            console.log(datos[i].id);
            console.log(typeof(datos[i].id));
            
            console.log(datos[i].nombre);
            console.log(typeof(datos[i].nombre));
        }

    }
}