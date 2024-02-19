window.onload = principal;

function principal()
{
    // miDiv.appendChild(dibujarUsuario());
    // document.body.appendChild(miDiv);

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);

    recuperarUsuarios();
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
    let miFila = crearElemento("ul",undefined,{"id":datosUsuario.email});
    let miNombre = crearElemento("li",datosUsuario.nombre);
    miFila.appendChild(miNombre);
    let miCorreo = crearElemento("li",datosUsuario.email);  
    miFila.appendChild(miCorreo);
    let miTelefono = crearElemento("li",datosUsuario.telefono);    
    miFila.appendChild(miTelefono);
    let miCargo = crearElemento("li",datosUsuario.cargo);    
    miFila.appendChild(miCargo);
    let miEstado = crearElemento("li",datosUsuario.estado);
    miFila.appendChild(miEstado);
    // Boton Modificar Datos
    let filita = crearElemento("li",undefined);
    let boton = crearElemento("input",undefined,{"type":"button","value":"Modificar Datos"});
    boton.addEventListener("click",manejadorClickModificar);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Habilitar
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","value":"Habilitar/Deshabilitar"});
    boton.addEventListener("click",manejadorClickHabilitar);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Reiniciar
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","value":"Reiniciar Contraseña"});
    boton.addEventListener("click",manejadorClickReiniciarContrasenia);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Cambiar Cargo
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","value":"Cambiar Cargo"});
    boton.addEventListener("click",manejadorClickCambiarCargo);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    return miFila;
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar(e) {

}

function manejadorClickModificar(e) {
    let padre = this.parentElement.parentElement;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        recuperarUsuarios();
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "modificarDatos=" + padre.id;
  miPeticion.send(datos);
}
function manejadorClickHabilitar(e) {
    let padre = this.parentElement.parentElement;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        recuperarUsuarios();
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "cambiaEstado=" + padre.id;
  miPeticion.send(datos);
    
}
function manejadorClickReiniciarContrasenia(e) {
    let padre = this.parentElement.parentElement;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        recuperarUsuarios();
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "reiniciaContrasenia=" + padre.id;
  miPeticion.send(datos);
}
function manejadorClickCambiarCargo(e) {
    let padre = this.parentElement.parentElement;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        recuperarUsuarios();
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "cambiaCargo=" + padre.id;
  miPeticion.send(datos);
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function recuperarUsuarios(longitud) {
    let miDiv = document.getElementById("contenedor-usuarios");
    miDiv.innerHTML = "";

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

function obtenerUsuarios(callback) {
    let miEmail = localStorage.getItem("email");
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // console.log(miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "obtenerUsuarios=&email=" + miEmail;
  miPeticion.send(datos);
}