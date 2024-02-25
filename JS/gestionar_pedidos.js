window.onload = principal;

function principal()
{
    fechasDefecto();

    // valores por defecto de fechas
    let desde = document.getElementById("inFecha_desde").value;
    let hasta = document.getElementById("inFecha_hasta").value;
    recuperarPedidos(desde,hasta);
}

function fechasDefecto() {
    //Establecer fecha desde y hasta: Por defecto de hoy a hace un mes
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let hoy = new Date();
    let ultimoMes = new Date(hoy);
    ultimoMes.setMonth(hoy.getMonth() - 1);
    ultimoMes = ultimoMes.toISOString().split('T')[0];
    flatpickr("#inFecha_hasta", {
        dateFormat: "Y-m-d", // Formato de fecha
        defaultDate: "today", // Establece la fecha actual como predeterminada
        maxDate: "today",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
              longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
            }, 
            months: {
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
          }
      });
    flatpickr("#inFecha_desde", {
        dateFormat: "Y-m-d", // Formato de fecha
        defaultDate: ultimoMes, // Establece la fecha actual como predeterminada
        maxDate: "today",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
              longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
            }, 
            months: {
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
          }
      });
    //   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

function recuperarPedidos(desde, hasta) {
    obtenerPedidos(desde,hasta);
}

function obtenerPedidos(desde,hasta) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(JSON.parse(miPeticion.responseText));
            dibujarPedidos(JSON.parse(miPeticion.responseText));
            // callback(miPeticion.responseText);
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let misDatos = {
        "desde" : desde,
        "hasta" : hasta + " 23:59:59"
    }
    misDatos = JSON.stringify(misDatos);

    let datos = "obtenerPedidos=" + misDatos;
    miPeticion.send(datos);
}

// 
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓DIBUJAR PEDIDOS↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function dibujarPedidos(jsonPedidos) {
    dibujarPedidoEnLista(jsonPedidos);
    
}

function dibujarPedidoEnLista(jsonPedidos) {
    let divPedidosLista = document.getElementById("contenedor-pedidos-enLista");
    // limpio divPedidosLista
    divPedidosLista.innerHTML = "";
    // Crear un json de cada pedido por su producto
    let jsonProductos = {};
    
    for(let i = 0; i< jsonPedidos.length; i++) {
        console.log(jsonPedidos[i].producto);
        if(jsonProductos.hasOwnProperty(jsonPedidos[i].producto)) {
            
            jsonProductos[jsonPedidos[i].producto].cantidadProducto += jsonPedidos[i].cantidad;
            jsonProductos[jsonPedidos[i].producto].solicitudes.push(jsonPedidos[i]) ;
            console.log("c d:", jsonProductos[jsonPedidos[i].producto].cantidad);


            // Ajustar el rango de fecha
            let nuevaFecha = jsonPedidos[i].fecha.split(" ")[0];

            if (jsonProductos[jsonPedidos[i].producto].fecha < nuevaFecha) {
                jsonProductos[jsonPedidos[i].producto].fecha = nuevaFecha + " a " + nuevaFecha;
            } else if (jsonProductos[jsonPedidos[i].producto].fecha.split(" a ")[1] < nuevaFecha) {
                jsonProductos[jsonPedidos[i].producto].fecha.split(" a ")[0] = nuevaFecha + " a " + nuevaFecha;
            }

            // Filtrar las observaciones
            if(jsonPedidos[i].observaciones.toLowerCase() !== "sin observaciones") {
                jsonProductos[jsonPedidos[i].producto].observaciones += "\n. " + jsonPedidos[i].observaciones;
            }

        } else {
            producto = {
                "nombreProducto" : jsonPedidos[i].producto,
                "cantidadProducto" : jsonPedidos[i].cantidad,
                "tramitado" : jsonPedidos[i].tramitado,
                "solicitudes" : [jsonPedidos[i]],
                "fecha" : jsonPedidos[i].fecha.split(" ")[0],
                "observaciones" : jsonPedidos[i].observaciones,
                "unidades" : jsonPedidos[i].unidades
            }
            jsonProductos[jsonPedidos[i].producto] = producto;
        }
    }
    console.log(jsonProductos);

    // Iterar en el JSON
    Object.values(jsonProductos).forEach(function (jsonPedido) {
        console.log("que", jsonPedido);
        let pedidoUl = crearElemento("ul", undefined, { "id": "pedido" + jsonPedido.nombreProducto });
        // Estado Pedido
        let estado;
        if (jsonPedido.tramitado === "1") {
            estado = "Tramitado";
        } else {
            estado = "En tramite";
        }
        let pedidoEstado = crearElemento("li", estado);
        let pedidoFecha = crearElemento("li", jsonPedido.fecha);
        let pedidoProducto = crearElemento("li", jsonPedido.nombreProducto);
        let pedidoCantidad = crearElemento("li", jsonPedido.cantidadProducto + " " + jsonPedido.unidades);
        let pedidoObservaciones = crearElemento("li", jsonPedido.observaciones);
        // USUARIOS
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        let pedidoUsuarios = crearElemento("li",undefined);
        // cambio los " " por "-" para evitar fallos de id
        let idModalUsuarios = 
            jsonPedido.nombreProducto.replaceAll(" ","-")
            + "-usuarios";
        let botonUsuarios = crearElemento("input",undefined,{"type":"button",
        "class":"btnUsuarios",
        "id":"btnUsuarios",
        "value":"Usuarios",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idModalUsuarios
        });
        // Modal de usuarios
        // comienzo a crear el cuerpo del modal de usuarios
        let elementosCuerpo = crearElemento("div",undefined,{"id": "contenedorUsuariosModal"});
        for(let i = 0; i < jsonPedido.solicitudes.length; i++) {
            let ulUsuario = crearElemento("ul",undefined);
            let solicitud = jsonPedido.solicitudes[i];
            console.log("solicitudes:",solicitud);
            obtenerUsuario(solicitud.idUsuario, function(respuesta) {
                let usuario = JSON.parse(respuesta);
                console.log(usuario);
                let usuarioPedido = crearElemento("li","Usuario: " + usuario.email);
                let fechaPedido = crearElemento("li","Fecha pedido: " +  solicitud.fecha);
                let productoPedido = crearElemento("li","Producto pedido: " +  solicitud.producto);
                let cantidadPedido = crearElemento("li","Cantidad: " +  solicitud.cantidad + " " + solicitud.unidades);
                let observacionesPedido = crearElemento("li","Observaciones: " +  solicitud.observaciones);
                let telefonoUsuario = crearElemento("li","Teléfono: " +  usuario.telefono);
                let tramitado = "Sin tramitar";
                if(solicitud.tramitado === "1") {
                    tramitado = "En tramite";
                }
                let estadoPedido = crearElemento("li","Estado Pedido: " +  tramitado);

                // Modificar
                let idModificar = (solicitud.idUsuario + solicitud.producto + solicitud.fecha).replaceAll(" ","-").replaceAll(":","-");
                let modificarPedido = crearElemento("li",undefined);
                let botonModificar = crearElemento("button","Modificar Pedido", {
                    "class" : "btnModificar btn btn-primary",
                    "id" : "#modal-" + idModificar
                });
                botonModificar.addEventListener("click", manejadorClickModificar);
                modificarPedido.appendChild(botonModificar);

                // Modal de modificar
                let elementosCuerpoModificar = crearElemento("div",undefined,{"id": "contenedorModificarModal" + idModificar});
                aqui estoy
                let miModalModificarPedido = dibujarModal(
                    idModificar,
                    "Modificar Pedido de " + usuario.email + " de " + solicitud.producto, elementosCuerpoModificar
                );
                // Añado el modal modificar a pedidoUsuarios, para evitar problemas de vision
                pedidoUsuarios.appendChild(miModalModificarPedido);



                // Eliminar
                let eliminarPedido = crearElemento("li",undefined);
                let botonEliminar = crearElemento("input",undefined, {
                    "class" : "btnEliminar",
                    "type" : "button",
                    "value" : "Eliminar Pedido"
                });
                botonEliminar.addEventListener("click", manejadorClickEliminar);
                eliminarPedido.appendChild(botonEliminar);

                ulUsuario.appendChild(usuarioPedido);
                ulUsuario.appendChild(fechaPedido);
                ulUsuario.appendChild(productoPedido);
                ulUsuario.appendChild(cantidadPedido);
                ulUsuario.appendChild(observacionesPedido);
                ulUsuario.appendChild(telefonoUsuario);
                ulUsuario.appendChild(estadoPedido);
                ulUsuario.appendChild(modificarPedido);
                ulUsuario.appendChild(eliminarPedido);
            });

            elementosCuerpo.appendChild(ulUsuario);
        }


        let miModal = dibujarModal(idModalUsuarios, "Usuarios que han pedido " + jsonPedido.nombreProducto,elementosCuerpo);

        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        pedidoUl.appendChild(pedidoEstado);
        pedidoUl.appendChild(pedidoFecha);
        pedidoUl.appendChild(pedidoProducto);
        pedidoUl.appendChild(pedidoCantidad);
        pedidoUl.appendChild(pedidoObservaciones);

        pedidoUsuarios.appendChild(botonUsuarios);
        pedidoUsuarios.appendChild(miModal);
        pedidoUl.appendChild(pedidoUsuarios);
        
        divPedidosLista.appendChild(pedidoUl);
    });
    
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑DIBUJAR PEDIDOS↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// funcion genera para crear un modal
function dibujarModal(idModal, titulo,elementosCuerpo,elementosFooter) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalTitulo = crearElemento("h1", titulo, {"class" : "modal-title"});
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

    if(elementosCuerpo !== undefined) {
        modalBody.appendChild(elementosCuerpo);
    }

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
    // Pongo al boton modificar el id del modal ¿estas seguro?
    // let modalModificar = crearElemento("button", textoBoton, {
    //     "type" : "button",
    //     "class" : "btn btn-primary",
    //     "id" : "btn-" + textoBoton + "-" + idModal + "-modal",
    //     "data-bs-toggle": "modal",
    //     "data-bs-target": "#modal-" + idModal + "-seguro"
    // });
    // modalFooter.appendChild(modalModificar);
    if(elementosFooter !== undefined) {
        modalFooter.appendChild(elementosFooter);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    return miDiv;
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

function obtenerUsuario(idUsuario ,callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            // console.log(JSON.parse(miPeticion.responseText));
            callback(miPeticion.responseText);
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


    let datos = "obtenerUsuario=" + idUsuario;
    miPeticion.send(datos);
}

function manejadorClickModificar() {
    // modal-4Bacon2024-01-25-00-00-00
    let superModal = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    // console.log(superModal);
    $(this.id).modal('show');
    $("#" + superModal.id).modal('hide');
}
function manejadorClickEliminar() {

}