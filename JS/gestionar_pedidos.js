window.onload = principal;

function principal()
{
    fechasDefecto();

    // valores por defecto de fechas
    let desde = document.getElementById("inFecha_desde").value;
    let hasta = document.getElementById("inFecha_hasta").value;
    recuperarPedidos(desde,hasta);

    botonBuscar = document.getElementById("btnBuscar");
    botonBuscar.addEventListener("click",manejadorClickBuscar);

    botonBuscar = document.getElementById("btnHacerPedido");
    botonBuscar.addEventListener("click",manejadorClickHacerPedido);
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
            // console.log("Respuesta Server: ",JSON.parse(miPeticion.responseText));
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
    // console.log("Pedidos: ",jsonPedidos);
    for(let i = 0; i< jsonPedidos.length; i++) {
        // console.log(jsonPedidos[i].producto);
        if(jsonProductos.hasOwnProperty(jsonPedidos[i].producto)) {
            
            jsonProductos[jsonPedidos[i].producto].cantidadProducto += jsonPedidos[i].cantidad;
            jsonProductos[jsonPedidos[i].producto].solicitudes.push(jsonPedidos[i]) ;


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
    // console.log("Pedidos unidos: ",jsonProductos);


    // Iterar en el JSON
    Object.values(jsonProductos).forEach(function (jsonPedido) {
        let pedidoUl = crearElemento("ul", undefined, { "id": "pedido" + jsonPedido.nombreProducto });
        // Estado Pedido
        // let estado;
        // if (jsonPedido.tramitado === "1") {
        //     estado = "Tramitado";
        // } else {
        //     estado = "En tramite";
        // }
        // let pedidoEstado = crearElemento("li", estado);
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
            obtenerUsuario(solicitud.idUsuario, function(respuesta) {
                let usuario = JSON.parse(respuesta);
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
                let usuarioModificar = crearElemento("p", "Usuario: " + usuario.email);
                let fechaModificar = crearElemento("p", "Fecha: " + solicitud.fecha);
                let productoModificar = crearElemento("p", "Producto: " + solicitud.producto);
                let labelCantidadModificar = crearElemento("label","Cantidad: ",{"for":"inCantidadModificar"});
                let cantidadModificar = crearElemento("input", undefined, {
                    "type" : "text",
                    "id":"inCantidadModificar" ,
                    "placeholder" : solicitud.cantidad,
                    "value" : solicitud.cantidad
                });
                cantidadModificar.addEventListener("input",manejadorInputCantidad);
                let labelUnidadesModificar = crearElemento("label", solicitud.unidades,{"for":"inCantidadModificar"});
                let observacionesModificar = crearElemento("p", "Observaciones: " + solicitud.observaciones);
                let estado = solicitud.tramitado;
                estado === "1" ? estado = "Tramitado" : estado = "En tramite";
                let estadoModificar = crearElemento("p", "Estado: " + estado);

                elementosCuerpoModificar.appendChild(usuarioModificar);
                elementosCuerpoModificar.appendChild(fechaModificar);
                elementosCuerpoModificar.appendChild(productoModificar);
                elementosCuerpoModificar.appendChild(labelCantidadModificar);
                elementosCuerpoModificar.appendChild(cantidadModificar);
                elementosCuerpoModificar.appendChild(labelUnidadesModificar);
                elementosCuerpoModificar.appendChild(observacionesModificar);
                elementosCuerpoModificar.appendChild(estadoModificar);

                let confirmarModificar = crearElemento("button","Confirmar", {
                    "class" : "btnConfirmar btn btn-primary",
                    "id" : "btnConfirmar"
                });
                confirmarModificar.addEventListener("click", manejadorClickConfirmar);

                let miModalModificarPedido = dibujarModal(
                    idModificar,
                    "Modificar Pedido de " + usuario.email + " de " + solicitud.producto, elementosCuerpoModificar, confirmarModificar
                );
                // Añado el modal modificar a pedidoUsuarios, para evitar problemas de vision
                pedidoUsuarios.appendChild(miModalModificarPedido);



                // Eliminar
                let eliminarPedido = crearElemento("li",undefined);
                let botonTramitar = crearElemento("input",undefined, {
                    "class" : "btnTramitar",
                    "type" : "button",
                    "value" : "Tramitar/No Tramitar Pedido"
                });
                botonTramitar.addEventListener("click", manejadorClickTramitar);
                eliminarPedido.appendChild(botonTramitar);

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
        // pedidoUl.appendChild(pedidoEstado);
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
function obtenerProveedores(callback) {
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


    let datos = "obtenerProveedores=";
    miPeticion.send(datos);
}
function actualizarSolicitud(datosSolicitud ,callback) {
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

    datosSolicitud = JSON.stringify(datosSolicitud);
    let datos = "actualizarSolicitud=" + datosSolicitud;
    miPeticion.send(datos);
}
function tramitarSolicitud(datosSolicitud ,callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText);
            // console.log(JSON.parse(miPeticion.responseText));
            callback(miPeticion.responseText);
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    datosSolicitud = JSON.stringify(datosSolicitud);
    let datos = "tramitarSolicitud=" + datosSolicitud;
    miPeticion.send(datos);
}

function validarInputNumeros(elemento) {
    let regex = /^(\d+|\d*\.\d+)$/;
    let valor = elemento.value;
    if(regex.test(valor) || valor.substr(-1) === ".") {
        // comprobar que no haya mas de 2 puntos
        if((valor.match(/\./g) || []).length === 2) {
            elemento.value = valor.slice(0,-1);
        }
        // comprobar que no tengamos valor similar a 02
        if(valor.length >= 2 && valor[0] === "0") {
            elemento.value = valor.slice(1);
        }
        // Maximos decimales 3
        if(valor.split(".")[1] && valor.split(".")[1].length > 3) {
            elemento.value = valor.slice(0,-1);
        }
    } else {
        elemento.value = 0;
    }
}

function manejadorClickModificar() {
    // modal-4Bacon2024-01-25-00-00-00
    let superModal = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    $(this.id).modal('show');
    $("#" + superModal.id).modal('hide');
}
function manejadorClickTramitar() {
    let padre = this.parentElement.parentElement;
    hijos = padre.childNodes;
    console.log(hijos);
    
    // Conversion del estado
    let estado = hijos[6].innerHTML.split(": ")[1];
    if(estado === "En tramite") {
        estado = '0';
    } else {
        estado = '1';
    }

    let datosPedido = {
        "emailUsuario" : hijos[0].innerHTML.split(": ")[1] ,
        "fecha" : hijos[1].innerHTML.split(": ")[1],
        "producto" : hijos[2].innerHTML.split(": ")[1],
        "cantidad" : hijos[3].innerHTML.split(": ")[1],
        "observaciones" : hijos[4].innerHTML.split(": ")[1],
        "telefono" : hijos[5].innerHTML.split(": ")[1],
        "estado" : estado
    };

    console.log(datosPedido);
    tramitarSolicitud(datosPedido, function(respuesta) {
        if(respuesta === "1") {
            // let idModal = contenedorBody.parentElement.parentElement.parentElement.id;
            // $("#" + idModal).modal('hide');
            hijos[6].innerHTML = "Estado Pedido: Sin tramitar";
            
            console.log("se actualizo");
            
        } else {
            console.log("No se actualizo");
            hijos[6].innerHTML = "Estado Pedido: En tramite";
        }
    });

}
function manejadorClickConfirmar() {
    let contenedorBody = this.parentElement.previousSibling;
    let contenedorDatos = contenedorBody.querySelector("div");
    let datosP = contenedorDatos.querySelectorAll("p");
    let datosCantidad = contenedorDatos.querySelector("input");
    let datosPedido = {
        "emailUsuario" : datosP[0].innerHTML.split(": ")[1] ,
        "fecha" : datosP[1].innerHTML.split(": ")[1],
        "producto" : datosP[2].innerHTML.split(": ")[1],
        "cantidad" : datosCantidad.value,
        "observaciones" : datosP[3].innerHTML.split(": ")[1],
        "estado" : datosP[4].innerHTML.split(": ")[1]
    };

    actualizarSolicitud(datosPedido, function(respuesta) {
        if(respuesta === "1") {
            let idModal = contenedorBody.parentElement.parentElement.parentElement.id;
            $("#" + idModal).modal('hide');
            let desde = document.getElementById("inFecha_desde").value;
            let hasta = document.getElementById("inFecha_hasta").value;
            recuperarPedidos(desde,hasta);

        } else {
            console.log("No se actualizo");
        }
    });

}

function manejadorClickHacerPedido() {
    console.log("pidiendo");
    let contenedorPedidos = document.getElementById("contenedor-pedidos");
    let pedidosLista = contenedorPedidos.querySelectorAll("div")[0];
    let elementosCuerpo = crearElemento("div",undefined);
    pedidosLista = pedidosLista.childNodes;
    // crear la fecha
    let desde = document.getElementById("inFecha_desde").value;
    let hasta = document.getElementById("inFecha_hasta").value;
    let titulo = desde + " a " + hasta;
    for(let i = 0; i < pedidosLista.length; i++) {
        let elementosPedido = pedidosLista[i].childNodes;
        let ulPedido = crearElemento("ul",undefined,{"id" : "pedido" + i});
        let liProducto = crearElemento("li",elementosPedido[2].innerHTML);
        let liCantidad = crearElemento("li",elementosPedido[3].innerHTML);

        // proveedores
        let liProveedores = crearElemento("li",undefined);
        let selectProveedores = crearElemento("select",undefined);
        obtenerProveedores( function(respuesta) {
            let proveedores = JSON.parse(respuesta);
            for(let i = 0; i < proveedores.length; i++) {
                console.log(proveedores[i]);
                let optionProveedores = crearElemento("option", 
                    proveedores[i].nombre + " tlf: " + proveedores[i].telefono
                , {"value" : proveedores[i].idProveedor});
                selectProveedores.appendChild(optionProveedores);
            }
        });
        liProveedores.appendChild(selectProveedores);

        ulPedido.appendChild(liProducto);
        ulPedido.appendChild(liCantidad);
        ulPedido.appendChild(liProveedores);
        elementosCuerpo.appendChild(ulPedido);
    }

    // aqui sigue boton
    let elementosFooter = crearElemento

    let miModal = dibujarModal("hacer-pedido","Creación de pedido", elementosCuerpo);
    document.getElementById("contenedor-hacer-pedido").appendChild(miModal);
    $("#modal-hacer-pedido").modal('show');
    // $("#modal-hacer-pedido").on("hidden.bs.modal", function () {
    //     let desde = document.getElementById("inFecha_desde").value;
    //     let hasta = document.getElementById("inFecha_hasta").value;
    //     console.log("me cerraron wey");
    //     recuperarPedidos(desde,hasta);
    // });
}
function manejadorClickBuscar() {
    let desde = document.getElementById("inFecha_desde").value;
    let hasta = document.getElementById("inFecha_hasta").value;
    if(desde < hasta ) {
        recuperarPedidos(desde,hasta);
    } 
}
function manejadorInputCantidad() {
    validarInputNumeros(this);
}