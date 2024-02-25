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
                "observaciones" : jsonPedidos[i].observaciones
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
        let pedidoCantidad = crearElemento("li", jsonPedido.cantidadProducto);
        let pedidoObservaciones = crearElemento("li", jsonPedido.observaciones);
        // USUARIOS
        let pedidoUsuarios = crearElemento("li",undefined);
        let botonUsuarios = crearElemento("input",undefined,{"type":"button",
        "class":"btnUsuarios",
        "id":"btnUsuarios",
        "value":"Usuarios",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + jsonPedido.nombreProducto + "-usuarios"
        });
        // Modal de usuarios

        pedidoUl.appendChild(pedidoEstado);
        pedidoUl.appendChild(pedidoFecha);
        pedidoUl.appendChild(pedidoProducto);
        pedidoUl.appendChild(pedidoCantidad);
        pedidoUl.appendChild(pedidoObservaciones);
        pedidoUl.appendChild(pedidoUsuarios);
        divPedidosLista.appendChild(pedidoUl);
    });
    
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑DIBUJAR PEDIDOS↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// funcion genera para crear un modal
function dibujarModal(idModal, titulo,elementosCuerpo) {
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

    modalBody.appendChild(elementosCuerpo);

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
    // Pongo al boton modificar el id del modal ¿estas seguro?
    let modalModificar = crearElemento("button", titulo, {
        "type" : "button",
        "class" : "btn btn-primary",
        "id" : "btn-" + titulo + "-" + idModal + "-modal",
        "data-bs-toggle": "modal",
        "data-bs-target": "#modal-" + idModal + "-seguro"
    });
    modalFooter.appendChild(modalModificar);

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