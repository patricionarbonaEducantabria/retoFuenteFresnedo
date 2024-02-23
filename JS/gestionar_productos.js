window.onload = principal;

function principal()
{
    // miDiv.appendChild(dibujarProducto());
    // document.body.appendChild(miDiv);

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);
    // let botonAdd = document.getElementById("btnAddUsuario");
    
    // let botonNoAdd = document.getElementById("btnNoAdd");


    // botonNoAdd.addEventListener("click",manejadorClickNoAdd);
    // botonAdd.addEventListener("click",manejadorClickAdd);


        // Editar despues de recuperar Productos
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // dibujarModalesAdd();
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    recuperarProductos();

    // Editar despues de recuperar Productos
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // let botonMostrarAdd = document.getElementById("btnMostrarAddUsuarios");
    // let modalAddUsuario = new bootstrap.Modal("#modal-Add-Usuario");
    // botonMostrarAdd.addEventListener("click", function(modalAddSeguro) {
    //     modalAddUsuario.show();
    // });

    
    
    
    // let botonAddUsuario = document.getElementById("btnAddUsuario");
    // botonAddUsuario.addEventListener("click",manejadorClickAdd);
    // let botonAddSiUsuario = document.getElementById("btnSiAdd");
    // botonAddSiUsuario.addEventListener("click",manejadorClickSiAdd);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    
    
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

function dibujarProducto(datosProducto) {
    let miFila = crearElemento("ul",undefined,{"id":datosProducto.id});
    // foto del producto
    let miFotoLista = crearElemento("li",undefined);
    let miFoto = crearElemento("img",undefined,{"src":datosProducto.foto});
    miFotoLista.appendChild(miFoto);
    miFila.appendChild(miFotoLista);
    
    let miNombre = crearElemento("li",datosProducto.nombre);
    miFila.appendChild(miNombre);
    let misUnidades = crearElemento("li",datosProducto.unidades);  
    miFila.appendChild(misUnidades);

    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    let misResiduos = crearElemento("li",undefined);
    let misResiduosSelect = crearElemento("select",undefined);
    let misResiduosOption;    
    // recorro los residuos
    if(datosProducto.residuos.length !== 0) {
        for(let i=0; i<datosProducto.residuos.length;i++) {
            misResiduosOption= crearElemento("option",datosProducto.residuos[i]);
            misResiduosSelect.appendChild(misResiduosOption);
        }
    } else {
        misResiduosOption = crearElemento("option","No produce residuos");
        misResiduosSelect.appendChild(misResiduosOption);
    }
    misResiduos.appendChild(misResiduosSelect);
    miFila.appendChild(misResiduos);
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    let misCategorias = crearElemento("li",undefined);   
    let misCategoriasSelect = crearElemento("select",undefined);
    let misCategoriasOption;    
    for(let i=0; i<datosProducto.categorias.length;i++) {
        misCategoriasOption= crearElemento("option",datosProducto.categorias[i]);
        misCategoriasSelect.appendChild(misCategoriasOption);
    }
    misCategorias.appendChild(misCategoriasSelect);
    miFila.appendChild(misCategorias);
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    // Boton Modificar Datos
    let filita = crearElemento("li",undefined);
    let idMagico = datosProducto.id;
    let boton = crearElemento("input",undefined,{"type":"button",
        "class":"btnModificar",
        "value":"Modificar Datos",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idMagico
    });
    // Añado el modal al boton modificar
    let miModal = dibujarModal(idMagico,datosProducto);
    let miModalSeguro = dibujarModalSeguro(idMagico);
    filita.appendChild(boton);
    miFila.appendChild(filita);  
    miFila.appendChild(miModal);
    miFila.appendChild(miModalSeguro);
    return miFila;
}

function dibujarModal(idModal, datosProducto) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalTitulo = crearElemento("h1","Modificar Producto", {"class" : "modal-title"});
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

    let inputID = crearElemento("input",undefined,{
        "type" : "hidden",
        "id": "inID" + idModal,
        "placeholder" : datosProducto.id,
        "value": "Subir Foto"
    });
    modalBody.appendChild(inputID);

    // Entrada foto
    let labelFoto = crearElemento("label","Foto",{"for":"inFoto"});
    let inputFoto = crearElemento("input",undefined,{
        "type" : "file",
        "id": "inFoto" + idModal,
        "placeholder" : datosProducto.foto,
        "value": "Subir Foto"
    });
    modalBody.appendChild(labelFoto);
    modalBody.appendChild(inputFoto);
    // Entrada nombre
    let labelNombre = crearElemento("label","Nombre",{"for":"inNombre"});
    let inputNombre = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inNombre" + idModal,
        "placeholder" : datosProducto.nombre
    });
    modalBody.appendChild(labelNombre);
    modalBody.appendChild(inputNombre);
    // Entrada Unidades
    let labelUnidades = crearElemento("label","Unidades",{"for":"inUnidades"});
    let inputUnidades = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inUnidades" + idModal,
        "placeholder" : datosProducto.unidades
    });
    modalBody.appendChild(labelUnidades);
    modalBody.appendChild(inputUnidades);
    // Entrada Residuos
    let labelResiduos = crearElemento("label","Residuos",{"for":"inResiduos"});
    let inputResiduos = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inResiduos" + idModal,
        "placeholder" : datosProducto.residuos
    });
    modalBody.appendChild(labelResiduos);
    modalBody.appendChild(inputResiduos);
    // Entrada Categorias
    let labelCategorias = crearElemento("label","Categorias",{"for":"inCategorias"});
    let inputCategorias = crearElemento("input",undefined,{
        "type" : "text",
        "id": "inCategorias" + idModal,
        "placeholder" : datosProducto.categorias
    });
    modalBody.appendChild(labelCategorias);
    modalBody.appendChild(inputCategorias);
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
    let miFoto = crearElemento("p",undefined,{"id" : "inFoto" + idModalSeguro + "-seguro"});
    let miNombre = crearElemento("p",undefined,{"id" : "inNombre" + idModalSeguro + "-seguro"});
    let misUnidades = crearElemento("p",undefined,{"id" : "inUnidades" + idModalSeguro + "-seguro"});
    let misResiduos = crearElemento("p",undefined,{"id" : "inResiduos" + idModalSeguro + "-seguro"});
    let misCategorias = crearElemento("p",undefined,{"id" : "inCategorias" + idModalSeguro + "-seguro"});
    modalBody.appendChild(miPregunta);
    modalBody.appendChild(miFoto);
    modalBody.appendChild(miNombre);
    modalBody.appendChild(misUnidades);
    modalBody.appendChild(misResiduos);
    modalBody.appendChild(misCategorias);
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

function recuperarProductos(longitud) {
    let miDiv = document.getElementById("contenedor-productos");
    miDiv.innerHTML = "";

    obtenerProductos(function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-productos");
        for(let i = 0; i< respuesta.length; i++) {
            miDiv.appendChild(dibujarProducto(respuesta[i]));
            // console.log(respuesta[i]);
        }
        document.body.appendChild(miDiv);
    });
}

function obtenerProductos(callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_productos.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // console.log(miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "obtenerProductos=";
  miPeticion.send(datos);
}

function modificarProducto(idDatos) {
    idDatos = idDatos.split("btnSi")[1];
    let fotoProducto = document.getElementById("inFoto" + idDatos + "-seguro").innerHTML;
    // divido el contenido desde ": "
    fotoProducto = fotoProducto.split(": ")[1].trim();

    let nombreProducto = document.getElementById("inNombre" + idDatos + "-seguro").innerHTML;
    // divido el contenido desde ": "
    nombreProducto = nombreProducto.split(": ")[1].trim();

    let unidadesProducto = document.getElementById("inUnidades" + idDatos + "-seguro").innerHTML;
    unidadesProducto = unidadesProducto.split(": ")[1].trim();

    let residuosProducto = document.getElementById("inResiduos" + idDatos + "-seguro").innerHTML;
    residuosProducto = residuosProducto.split(": ")[1].trim();

    let categoriasProducto = document.getElementById("inCategorias" + idDatos + "-seguro").innerHTML;
    categoriasProducto = categoriasProducto.split(": ")[1].trim();


    // COMIENZO A MODIFICAR LA BD
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            // callback(miPeticion.responseText);
            recuperarProductos();
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "modificarDatos=" + idDatos + "&nombre=" + nombreProducto + "&foto=" +fotoProducto + "&unidades=" + unidadesProducto + "&residuos=" + residuosProducto + "&categorias=" + categoriasProducto;
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
            recuperarProductos();
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
    let modalCierre = crearElemento("button", undefined, {
        "type": "button",
        "class": "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });
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
    let labelTelefonoAdd = crearElemento("label", "Telefono", { "for": "inTelefonoAdd" });
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
    modificarProducto(this.id);

}

function manejadorClickModificar(e) {
    console.log("modifico: ",this.id , "clase: ", this.className);
    let txt = "";
    // ↓↓↓↓↓↓↓↓↓↓↓
    // Obtengo valor del archivo
    let archivo = document.getElementById("inFoto" + this.id);
    if(archivo.files[0]) {
        txt = "Foto: " + archivo.files[0].name;
    } else {
        txt = "Foto: " + archivo.placeholder;
    }
    document.getElementById("inFoto" + this.id + "-seguro").innerHTML = txt;
    document.getElementById("inFoto" + this.id + "-seguro").value = this.id;



    let nombre = document.getElementById("inNombre" + this.id);
    if(nombre.value) {
        txt = "Nombre: " + nombre.value;
    } else {
        txt = "Nombre: " + nombre.placeholder;
    }
    document.getElementById("inNombre" + this.id + "-seguro").innerHTML = txt;

    let unidades = document.getElementById("inUnidades" + this.id);
    if(unidades.value) {
        txt = "Unidades: " + unidades.value;
    } else {
        txt = "Unidades: " + unidades.placeholder;
    }
    document.getElementById("inUnidades" + this.id + "-seguro").innerHTML = txt;

    let residuos = document.getElementById("inResiduos" + this.id);
    if(residuos.value) {
        txt = "Residuos: " + residuos.value;
    } else {
        txt = "Residuos: " + residuos.placeholder;
    }
    document.getElementById("inResiduos" + this.id + "-seguro").innerHTML = txt;

    let categorias = document.getElementById("inCategorias" + this.id);
    if(residuos.value) {
        txt = "Categorias: " + residuos.value;
    } else {
        txt = "Categorias: " + residuos.placeholder;
    }
    document.getElementById("inCategorias" + this.id + "-seguro").innerHTML = txt;
    // ↑↑↑↑↑↑↑↑↑↑↑↑
}
function manejadorClickHabilitar(e) {
    let padre = this.parentElement.parentElement;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_usuarios.php", true);

    miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        recuperarProductos();
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
        recuperarProductos();
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
        recuperarProductos();
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "cambiaCargo=" + padre.id;
  miPeticion.send(datos);
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑