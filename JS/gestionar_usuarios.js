window.onload = principal;

function principal()
{
    let miDiv = document.getElementById("contenedor-usuarios");
    // miDiv.appendChild(dibujarUsuario());
    // document.body.appendChild(miDiv);

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);

    obtenerUsuarios(function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-usuarios");
        for(let i = 0; i< respuesta.length; i++) {
            miDiv.appendChild(dibujarUsuario(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
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
    let miNombre = crearElemento("li",datosUsuario.nombre, {"id":"nombreUsuario"});
    miFila.appendChild(miNombre);
    let miCorreo = crearElemento("li",datosUsuario.email, {"id":"correoUsuario"});  
    miFila.appendChild(miCorreo);
    let miTelefono = crearElemento("li",datosUsuario.telefono, {"id":"telefonoUsuario"});    
    miFila.appendChild(miTelefono);
    let miCargo = crearElemento("li",datosUsuario.cargo, {"id":"telefonoUsuario"});    
    miFila.appendChild(miCargo);
    let miEstado = crearElemento("li",datosUsuario.estado, {"id":"estadoUsuario"});
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
        // console.log(miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "obtenerUsuarios=";
  miPeticion.send(datos);
}