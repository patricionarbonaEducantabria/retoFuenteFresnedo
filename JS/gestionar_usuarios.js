window.onload = principal;

comprobarExisteEmail();


function comprobarExisteEmail() {
    let miEmail = localStorage.getItem("email");
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/redireccion.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        console.log("existe: ",miPeticion.responseText);
        // callback(miPeticion.responseText);
        if(miPeticion.responseText === "0") {
            window.location.href = "../../index.html";
        } else {
            comprobarEsAdmin();
        }
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let datos = "comprobarExisteEmail=" + miEmail;
  miPeticion.send(datos);
}
function comprobarEsAdmin() {
    let miEmail = localStorage.getItem("email");
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/redireccion.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        console.log("es admin: ",miPeticion.responseText);
        // callback(miPeticion.responseText);
        if(miPeticion.responseText === "0") {
            window.location.href = "../../index.html";
        } 
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let datos = "comprobarEsAdmin=" + miEmail;
  console.log(datos);
  miPeticion.send(datos);
}

function principal()
{
    // miDiv.appendChild(dibujarUsuario());
    // document.body.appendChild(miDiv);

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);
    // let botonAdd = document.getElementById("btnAddUsuario");
    
    // let botonNoAdd = document.getElementById("btnNoAdd");


    // botonNoAdd.addEventListener("click",manejadorClickNoAdd);
    // botonAdd.addEventListener("click",manejadorClickAdd);
    dibujarModalesAdd();
    recuperarUsuarios();
    let botonMostrarAdd = document.getElementById("btnMostrarAddUsuarios");
    let modalAddUsuario = new bootstrap.Modal("#modal-Add-Usuario");
    botonMostrarAdd.addEventListener("click", function(modalAddSeguro) {
        modalAddUsuario.show();
    });

      
    let botonAddUsuario = document.getElementById("btnAddUsuario");
    botonAddUsuario.addEventListener("click",manejadorClickAdd);
    let botonAddSiUsuario = document.getElementById("btnSiAdd");
    botonAddSiUsuario.addEventListener("click",manejadorClickSiAdd);

    window.onscroll = function() {
        scrollFunction();
    }; 
    
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
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
    let cargo;
    if(datosUsuario.cargo === "1") {
        cargo = "Administrador";
    } else {
        cargo = "Usuario";
    }
    let miCargo = crearElemento("li",cargo);    
    miFila.appendChild(miCargo);
    
    let estado;
    if(datosUsuario.estado === "0") {
        estado = "Deshabilitado";
    } else {
        estado = "Habilitado";
    }
    let miEstado = crearElemento("li",estado);
    miFila.appendChild(miEstado);
    // Boton Modificar Datos
    let filita = crearElemento("li",undefined);
    let idMagico = datosUsuario.id;
    let boton = crearElemento("input",undefined,{"type":"button",
        "id":"btnModificar",
        "value":"Modificar Datos",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idMagico
    });
    // Añado el modal al boton modificar
    let miModal = dibujarModal(idMagico,datosUsuario);
    let miModalSeguro = dibujarModalSeguro(idMagico);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Habilitar
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","class":"btnHabilitar","value":"Habilitar/Deshabilitar"});
    boton.addEventListener("click",manejadorClickHabilitar);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Reiniciar
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","class":"btnReiniciar","value":"Reiniciar Contraseña"});
    boton.addEventListener("click",manejadorClickReiniciarContrasenia);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    // Boton Cambiar Cargo
    filita = crearElemento("li",undefined);
    boton = crearElemento("input",undefined,{"type":"button","class":"btnCargo","value":"Cambiar Cargo"});
    boton.addEventListener("click",manejadorClickCambiarCargo);
    filita.appendChild(boton);
    miFila.appendChild(filita);
    miFila.appendChild(miModal);
    miFila.appendChild(miModalSeguro);
    return miFila;
}

function dibujarModal(idModal, datosUsuario) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalTitulo = crearElemento("h1","Modificar Usuario", {"class" : "modal-title"});
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
    let labelTelefono = crearElemento("label","Teléfono",{"for":"inTelefono"});
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
        "id" : idModal,
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idModal + "-seguro"
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
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModalSeguro + "-seguro", "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalCierre = crearElemento("button",undefined,{
        "type" : "button",
        "class" : "btn-close",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    });
    modalHeader.appendChild(modalCierre);
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let modalBody = crearElemento("div",undefined, {"class": "modal-body"});
    let miPregunta = crearElemento("h5","¿Estas seguro que quieres los siguientes datos para el usuario?");
    let miNombre = crearElemento("p",undefined,{"id" : "inNombre" + idModalSeguro + "-seguro"});
    let miEmail = crearElemento("p",undefined,{"id" : "inEmail" + idModalSeguro + "-seguro"});
    let miTelefono = crearElemento("p",undefined,{"id" : "inTelefono" + idModalSeguro + "-seguro"});
    modalBody.appendChild(miPregunta);
    modalBody.appendChild(miNombre);
    modalBody.appendChild(miEmail);
    modalBody.appendChild(miTelefono);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
    // Pongo al boton modificar el id del modal ¿estas seguro?
    let botonSi = crearElemento("button", "Si", {
        "type" : "button",
        "id" : "btnSi" + idModalSeguro,
        "class" : "btn btn-primary",
        "data-bs-dismiss" : "modal",
        "aria-label" : "Close"
    });
    let botonNo = crearElemento("button", "No", {
        "type" : "button",
        "class" : "btn btn-secondary",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idModalSeguro
    });
    botonSi.addEventListener("click", manejadorClickActualizarBD);
    modalFooter.appendChild(botonSi);
    modalFooter.appendChild(botonNo);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    //añado modal estas seguro 
    // miDiv.appendChild(dibujarModalSeguro(idModal));

    return miDiv;
}

function recuperarUsuarios(emailUsuario) {
    let miDiv = document.getElementById("contenedor-usuarios");
    miDiv.innerHTML = "";
    console.log("recupweo");
    obtenerUsuarios(emailUsuario,function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-usuarios");
        miDiv.innerHTML ="";
        let miCabecera = crearElemento("ul",undefined,{
            "id":"cabecera"
        });
        let miNombreCabecera = crearElemento("li","Nombre"); 
        let miEmailCabecera = crearElemento("li","Email"); 
        let miTelefonoCabecera = crearElemento("li","Teléfono"); 
        let miCambioCabecera = crearElemento("li","Cargo"); 
        let miHabilitadoCabecera = crearElemento("li","Habilitado/Deshabilitado");
        let miCabeceraVacia = crearElemento("li","");
        let miCabeceraVacia1 = crearElemento("li","");
        let miCabeceraVacia2 = crearElemento("li","");
        let miCabeceraVacia3 = crearElemento("li","");
        miCabecera.appendChild(miNombreCabecera); 
        miCabecera.appendChild(miEmailCabecera); 
        miCabecera.appendChild(miTelefonoCabecera); 
        miCabecera.appendChild(miCambioCabecera); 
        miCabecera.appendChild(miHabilitadoCabecera); 
        miCabecera.appendChild(miCabeceraVacia); 
        miCabecera.appendChild(miCabeceraVacia1); 
        miCabecera.appendChild(miCabeceraVacia2); 
        miCabecera.appendChild(miCabeceraVacia3); 
        miDiv.appendChild(miCabecera);
        document.body.appendChild(miDiv);
        for(let i = 0; i< respuesta.length; i++) {
            miDiv.appendChild(dibujarUsuario(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
}

function obtenerUsuarios(emailUsuario,callback) {
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
  if(emailUsuario){
    emailUsuario.toLowerCase();
    datos = "obtenerUsuarios=" + emailUsuario + "&email=" + miEmail;
  }
  miPeticion.send(datos);
}

function modificarUsuario(idDatos) {
    idDatos = idDatos.split("btnSi")[1];
    let nombreUsuario = document.getElementById("inNombre" + idDatos + "-seguro").innerHTML;
    // divido el contenido desde ": "
    nombreUsuario = nombreUsuario.split(": ")[1].trim();

    let emailUsuario = document.getElementById("inEmail" + idDatos + "-seguro").innerHTML;
    emailUsuario = emailUsuario.split(": ")[1].trim();

    let telefonoUsuario = document.getElementById("inTelefono" + idDatos + "-seguro").innerHTML;
    telefonoUsuario = telefonoUsuario.split(": ")[1].trim();

    console.log("si Nombre:"+ nombreUsuario + " si Email:" + emailUsuario + " si Telefono:" + telefonoUsuario);

    let emailOriginal = document.getElementById("inEmail" + idDatos + "-seguro").value;
    console.log(emailOriginal);


    // COMIENZO A MODIFICAR LA BD
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            // callback(miPeticion.responseText);
            recuperarUsuarios();
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "modificarDatos=" + emailOriginal + "&nombre=" + nombreUsuario + "&email=" +emailUsuario + "&telefono=" + telefonoUsuario;
    miPeticion.send(datos);
}

function addUsuario(nombreUsuario,cargoUsuario,emailUsuario,telefonoUsuario) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            // callback(miPeticion.responseText);
            // dibujarModalesAdd();
            recuperarUsuarios();
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "addUsuario=" + "&nombre=" + nombreUsuario + "&cargo=" + cargoUsuario + "&email=" +emailUsuario + "&telefono=" + telefonoUsuario;
    miPeticion.send(datos);
}

function dibujarModalesAdd() {
    let misModales = document.getElementById("contenedorModalesAdd");
    misModales.appendChild(dibujarModalAddUsuario());
    misModales.appendChild(dibujarModalAddUsuarioSeguro());
    document.body.appendChild(misModales);
}

function dibujarModalAddUsuario() {
    let miDiv = crearElemento("div", undefined, { "id": "modal-Add-Usuario", "class": "modal" });
    let modalDialog = crearElemento("div", undefined, { "class": "modal-dialog" });
    let modalContent = crearElemento("div", undefined, { "class": "modal-content" });
    // Contenido Header
    let modalHeader = crearElemento("div", undefined, { "class": "modal-header" });
    let modalTitulo = crearElemento("h1","Añadir Usuario ", {"class" : "modal-title"});
    let modalCierre = crearElemento("button", undefined, {
        "type": "button",
        "class": "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
    modalHeader.appendChild(modalTitulo);
    modalHeader.appendChild(modalCierre);
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let modalBody = crearElemento("div", undefined, { "class": "modal-body" });

    // Entrada Cargo
    let labelCargo = crearElemento("label", "Cargo", { "for": "inCargoAdd" });
    let selectCargo = crearElemento("select", undefined, { "id": "inCargoAdd" });
    let optionAdmin = crearElemento("option", "Admin");
    let optionUsuario = crearElemento("option", "Usuario");
    selectCargo.appendChild(optionAdmin);
    selectCargo.appendChild(optionUsuario);
    modalBody.appendChild(labelCargo);
    modalBody.appendChild(selectCargo);

    // Entrada Nombre
    let labelNombreAdd = crearElemento("label", "Nombre", { "for": "inNombreAdd" });
    let inputNombreAdd = crearElemento("input", undefined, {
        "type": "text",
        "id": "inNombreAdd",
        "placeholder": "ej: Mi Nombre y apellidos"
    });
    modalBody.appendChild(labelNombreAdd);
    modalBody.appendChild(inputNombreAdd);

    // Entrada Email
    let labelEmailAdd = crearElemento("label", "Email", { "for": "inEmailAdd" });
    let inputEmailAdd = crearElemento("input", undefined, {
        "type": "text",
        "id": "inEmailAdd",
        "placeholder": "ej: micorreo@example.com"
    });
    modalBody.appendChild(labelEmailAdd);
    modalBody.appendChild(inputEmailAdd);

    // Entrada Teléfono
    let labelTelefonoAdd = crearElemento("label", "Teléfono", { "for": "inTelefonoAdd" });
    let inputTelefonoAdd = crearElemento("input", undefined, {
        "type": "text",
        "id": "inTelefonoAdd",
        "placeholder": "ej: 644763523"
    });
    modalBody.appendChild(labelTelefonoAdd);
    modalBody.appendChild(inputTelefonoAdd);

    // Error
    let errorAdd = crearElemento("p", "", { "id": "errorAdd" });
    modalBody.appendChild(errorAdd);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido Footer
    let modalFooter = crearElemento("div", undefined, { "class": "modal-footer" });
    // Botón Añadir Usuario
    let btnAddUsuario = crearElemento("button", "Añadir Usuario", {
        "type": "button",
        "class": "btn btn-primary",
        "id": "btnAddUsuario"
    });
    modalFooter.appendChild(btnAddUsuario);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);
    
    return miDiv;
}    

function dibujarModalAddUsuarioSeguro() {
    let miDiv = crearElemento("div", undefined, { "id": "modalAdd-seguro", "class": "modal" });
    let modalDialog = crearElemento("div", undefined, { "class": "modal-dialog" });
    let modalContent = crearElemento("div", undefined, { "class": "modal-content" });
    // Contenido Header
    let modalHeader = crearElemento("div", undefined, { "class": "modal-header" });
    let modalCierre = crearElemento("button", undefined, {
        "type": "button",
        "class": "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
    modalHeader.appendChild(modalCierre);
    // Contenido Body
    let modalBody = crearElemento("div", undefined, { "class": "modal-body" });

    // Pregunta de Confirmación
    let confirmacion = crearElemento("h5", "¿Estás seguro que quieres los siguientes datos para el usuario?");
    modalBody.appendChild(confirmacion);

    // Detalles del Usuario
    let inNombreAddSeguro = crearElemento("p", "", { "id": "inNombreAdd-seguro" });
    let inCargoAddSeguro = crearElemento("p", "", { "id": "inCargoAdd-seguro" });
    let inEmailAddSeguro = crearElemento("p", "", { "id": "inEmailAdd-seguro" });
    let inTelefonoAddSeguro = crearElemento("p", "", { "id": "inTelefonoAdd-seguro" });
    modalBody.appendChild(inNombreAddSeguro);
    modalBody.appendChild(inCargoAddSeguro);
    modalBody.appendChild(inEmailAddSeguro);
    modalBody.appendChild(inTelefonoAddSeguro);

    // Contenido Footer
    let modalFooter = crearElemento("div", undefined, { "class": "modal-footer" });
    // Botones de Confirmación
    let btnSiAdd = crearElemento("button", "Sí", {
        "type": "button",
        "class": "btn btn-primary",
        "id": "btnSiAdd",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
    let btnNoAdd = crearElemento("button", "No", {
        "type": "button",
        "class": "btn btn-secondary",
        "id": "btnNoAdd",
        "data-bs-dismiss": "modal"
    });
    modalFooter.appendChild(btnSiAdd);
    modalFooter.appendChild(btnNoAdd);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    return miDiv;
}


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar(e) {
    console.log("busco el camino a la vida");
    correo = this.previousElementSibling.value;
    // console.log(this.previousElementSibling.value);
    recuperarUsuarios(correo);
}
function manejadorClickAdd(e) {
    console.log("añado usuario");
    
    // ↓↓↓↓↓↓↓↓↓↓↓
    let nombre = document.getElementById("inNombreAdd");
    
    let cargo = document.getElementById("inCargoAdd");

    let email = document.getElementById("inEmailAdd");

    let telefono = document.getElementById("inTelefonoAdd");
    

    if(nombre.value && email.value && telefono.value && cargo.value) {
    let modalAddUsuarioSeguro = new bootstrap.Modal("#modalAdd-seguro");

        document.getElementById("inNombreAdd-seguro").innerHTML = "Nombre: " + nombre.value;
        document.getElementById("inCargoAdd-seguro").innerHTML = "Cargo: " + cargo.value;

        document.getElementById("inEmailAdd-seguro").innerHTML = "Email: " + email.value;

        document.getElementById("inTelefonoAdd-seguro").innerHTML = "Telefono: " + telefono.value;
        modalAddUsuarioSeguro.show();
    } else {

        document.getElementById("errorAdd").innerHTML = "No se han rellenado todos los campos";
    }
    
    // ↑↑↑↑↑↑↑↑↑↑↑↑
}

function cerrarModales() {
    $('#modal-Add-Usuario').modal('hide');
    $('#modalAdd-seguro').modal('hide');
}

function manejadorClickSiAdd(e) {
    console.log("si mi pana");
    cerrarModales();
    // Recupero los datos del nuevo usuario
    let nombreUsuario = document.getElementById("inNombreAdd-seguro").innerHTML;
    nombreUsuario = nombreUsuario.split(": ")[1].trim();
    let cargoUsuario = document.getElementById("inCargoAdd-seguro").innerHTML;
    cargoUsuario = cargoUsuario.split(": ")[1].trim();
    let emailUsuario = document.getElementById("inEmailAdd-seguro").innerHTML;
    emailUsuario = emailUsuario.split(": ")[1].trim();
    let telefonoUsuario = document.getElementById("inTelefonoAdd-seguro").innerHTML;
    telefonoUsuario = telefonoUsuario.split(": ")[1].trim();
    addUsuario(nombreUsuario,cargoUsuario,emailUsuario,telefonoUsuario);

}

function manejadorClickAddUsuario(e) {
    console.log("añado usuario");

}
function manejadorClickActualizarBD(e) {
    console.log("actualiza puto id:", this.id);
    modificarUsuario(this.id);

}

function manejadorClickModificar(e) {
    console.log("modifico: ",this.id , "clase: ", this.className);
    let txt = "";
    // ↓↓↓↓↓↓↓↓↓↓↓
    let nombre = document.getElementById("inNombre" + this.id);
    if(nombre.value) {
        txt = "Nombre: " + nombre.value;
    } else {
        txt = "Nombre: " + nombre.placeholder;
    }
    document.getElementById("inNombre" + this.id + "-seguro").innerHTML = txt;

    let email = document.getElementById("inEmail" + this.id);
    if(email.value) {
        txt = "Email: " + email.value;
    } else {
        txt = "Email: " + email.placeholder;
    }
    document.getElementById("inEmail" + this.id + "-seguro").innerHTML = txt;
    document.getElementById("inEmail" + this.id + "-seguro").value = email.placeholder;

    let telefono = document.getElementById("inTelefono" + this.id);
    if(telefono.value) {
        txt = "Telefono: " + telefono.value;
    } else {
        txt = "Telefono: " + telefono.placeholder;
    }
    document.getElementById("inTelefono" + this.id + "-seguro").innerHTML = txt;
    // ↑↑↑↑↑↑↑↑↑↑↑↑
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