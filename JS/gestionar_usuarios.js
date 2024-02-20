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
    let idMagico = datosUsuario.nombre + (Math.floor(Math.random() * 1050) + 1);
    let boton = crearElemento("input",undefined,{"type":"button",
        "value":"Modificar Datos",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idMagico
    });
    // Añado el modal al boton modificar
    let miModal = dibujarModal(idMagico,datosUsuario);
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
    miFila.appendChild(miModal);
    return miFila;
}

function dibujarModal(idModal, datosUsuario) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalTitulo = crearElemento("h1","Añadir Usuario", {"class" : "modal-title"});
    let modalCierre = crearElemento("button",undefined,{
        "type" : "button",
        "class" : "btn-close",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    });
    modalHeader.appendChild(modalTitulo);
    modalHeader.appendChild(modalCierre);
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let modalBody = crearElemento("div",undefined, {"class": "modal-body"});

    // Entrada nombre
    let labelNombre = crearElemento("label","Nombre",{"for":"inNombre"});
    let inputNombre = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inNombre" + idModal,
        "placeholder" : datosUsuario.nombre
    });
    modalBody.appendChild(labelNombre);
    modalBody.appendChild(inputNombre);
    // Entrada email
    let labelEmail = crearElemento("label","Email",{"for":"inEmail"});
    let inputEmail = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inEmail" + idModal,
        "placeholder" : datosUsuario.email
    });
    modalBody.appendChild(labelEmail);
    modalBody.appendChild(inputEmail);
    // Entrada telefono
    let labelTelefono = crearElemento("label","Telefono",{"for":"inTelefono"});
    let inputTelefono = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inTelefono" + idModal,
        "placeholder" : datosUsuario.telefono
    });
    modalBody.appendChild(labelTelefono);
    modalBody.appendChild(inputTelefono);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
    // Pongo al boton modificar el id del modal ¿estas seguro?
    let modalModificar = crearElemento("button", "Modificar Datos", {
        "type" : "button",
        "class" : "btn btn-primary",
        "id" : idModal
        // "data-bs-toggle": "modal",
        // "data-bs-target": "#modal-" + idModal + "-seguro"
    });
    modalModificar.addEventListener("click",manejadorClickModificar);
    modalFooter.appendChild(modalModificar);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    //añado modal estas seguro 
    // miDiv.appendChild(dibujarModalSeguro(idModal));

    return miDiv;
}

function dibujarModalSeguro(idModalSeguro) {
    // idModalSeguro = "modal-" + idModalSeguro + "-seguro";
    // obtengo valores de los input del modal modificar
    console.log("idSeguro: " , idModalSeguro);
    let nombre = document.getElementById("inNombre" + idModalSeguro).value;
    if(!nombre) {
        nombre = document.getElementById("inNombre" + idModalSeguro).placeholder;
    }
    let email = document.getElementById("inEmail" + idModalSeguro).value;
    if(!email) {
        email = document.getElementById("inEmail" + idModalSeguro).placeholder;
    }
    let telefono = document.getElementById("inTelefono" + idModalSeguro).value;
    if(!telefono) {
        telefono = document.getElementById("inTelefono" + idModalSeguro).placeholder;
    }
    // console.log("nombre: ", nombre, " telefono: ", telefono, " email: ", email);

    // MODAL SEGURO
    // Comienzo a crear el modal de seguro
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModalSeguro + "-seguro", "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});

    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let modalBody = crearElemento("div",undefined, {"class": "modal-body"});

    let textoCuerpo = crearElemento("h4","¿Esta seguro de introducir los siguientes datos?");
    let textoNombre = crearElemento("p","Nombre: " + nombre + ".");
    let textoTelefono = crearElemento("p","Telefono: " + telefono + ".");
    let textoEmail = crearElemento("p","Email: " + email + ".");
    modalBody.appendChild(textoCuerpo);
    modalBody.appendChild(textoNombre);
    modalBody.appendChild(textoTelefono);
    modalBody.appendChild(textoEmail);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"})

    // añado los botones si y no
    let botonSi = crearElemento("button","Si",{
        "type" : "button",
        "class" : "btn-close",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    });
    let botonNo = crearElemento("button","No",{
        "type" : "button",
        "class" : "btn-close",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    });
    modalFooter.appendChild(botonNo);
    modalFooter.appendChild(botonSi);

    // Añado header, body y footer al modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);
}

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

function modificarUsuario(idDatos) {
    let nombreUsuario = document.getElementById("inNombre" + idDatos);
    if(nombreUsuario.value) {
        console.log(nombreUsuario.value);
    } else {
        console.log(nombreUsuario.placeholder);
    }
    let emailUsuario = document.getElementById("inEmail" + idDatos);
    if(emailUsuario.value) {
        console.log(emailUsuario.value);
    } else {
        console.log(emailUsuario.placeholder);
    }
    let telefonoUsuario = document.getElementById("inTelefono" + idDatos);
    if(telefonoUsuario.value) {
        console.log(telefonoUsuario.value);
    } else {
        console.log(telefonoUsuario.placeholder);
    }
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar(e) {

}

function manejadorClickModificar(e) {
    console.log("modifico: ",this.id , "clase: ", this.className);
    // listaUsuario.appendChild(dibujarModalSeguro(idUsuario));
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