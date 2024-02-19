window.onload = principal;

function principal()
{
    let miDiv = document.getElementById("contenedor-usuarios");
    miDiv.appendChild(dibujarUsuario());
    document.body.appendChild(miDiv);

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);

    obtenerUsuarios();
}

function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta);
    if(texto !== undefined) {
        let contenido = document.createTextNode(texto);
        elementoNuevo.appendChild(contenido);
    }
    if(atributos !== undefined) {
        for(let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave]);
        }
    }
    return elementoNuevo;
}

function dibujarUsuario(datosUsuario) {
    let miFila = crearElemento("ul",undefined,{"id":"filaN"});
    let miNombre = crearElemento("li","usuario1", {"id":"nombreUsuario"});
    miFila.appendChild(miNombre);
    let miCorreo = crearElemento("li","correo1", {"id":"correoUsuario"});  
    miFila.appendChild(miCorreo);
    let miTelefono = crearElemento("li","telefono1", {"id":"telefonoUsuario"});    
    miFila.appendChild(miTelefono);
    let miEstado = crearElemento("li","estado1", {"id":"telefonoUsuario"});
    miFila.appendChild(miEstado);
    return miFila;
}

function manejadorClickBuscar(e) {
    let miDiv = document.getElementById("contenedor-usuarios");
    miDiv.innerHTML = "";
    miDiv.appendChild(dibujarUsuario());
    document.body.appendChild(miDiv);
    console.log("añadiendo");
}

function recuperarUsuarios(longitud) {

}

function obtenerUsuarios(callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        console.log(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "obtenerUsuarios=";
  miPeticion.send(datos);
}