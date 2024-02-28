// window.onload = principal;

// function principal()
// {
//     fechasDefecto();

//     // valores por defecto de fechas
//     let desde = document.getElementById("inFecha_desde").value;
//     let hasta = document.getElementById("inFecha_hasta").value;
//     recuperarPedidos(desde,hasta);

//     botonBuscar = document.getElementById("btnBuscar");
//     botonBuscar.addEventListener("click",manejadorClickBuscar);

//     botonBuscar = document.getElementById("btnHacerPedido");
//     botonBuscar.addEventListener("click",manejadorClickHacerPedido);


//     // Modal del pedido
//     let botonPedido = crearElemento("input",undefined, {
//         "type" : "button",
//         "value" : "Hacer pedido",
//         "class" : "btn btn-primary"
//     });
//     let miModal = dibujarModal("hacer-pedido","Creación de pedido",undefined, botonPedido);
//     document.getElementById("contenedor-hacer-pedido").appendChild(miModal);
// }

// function fechasDefecto() {
//     //Establecer fecha desde y hasta: Por defecto de hoy a hace un mes
//     // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//     let hoy = new Date();
//     let ultimoMes = new Date(hoy);
//     ultimoMes.setMonth(hoy.getMonth() - 1);
//     ultimoMes = ultimoMes.toISOString().split('T')[0];
//     flatpickr("#inFecha_hasta", {
//         dateFormat: "Y-m-d", // Formato de fecha
//         defaultDate: "today", // Establece la fecha actual como predeterminada
//         maxDate: "today",
//         locale: {
//             firstDayOfWeek: 1,
//             weekdays: {
//               shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
//               longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
//             }, 
//             months: {
//               shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
//               longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//             },
//           }
//       });
//     flatpickr("#inFecha_desde", {
//         dateFormat: "Y-m-d", // Formato de fecha
//         defaultDate: ultimoMes, // Establece la fecha actual como predeterminada
//         maxDate: "today",
//         locale: {
//             firstDayOfWeek: 1,
//             weekdays: {
//               shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
//               longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
//             }, 
//             months: {
//               shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
//               longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//             },
//           }
//       });
//     //   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// }

// function recuperarPedidos(desde, hasta) {
//     obtenerPedidos(desde,hasta);
// }



// function obtenerPedidos(desde,hasta) {
//     let miPeticion = new XMLHttpRequest();

//     miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

//     miPeticion.onreadystatechange = function() {
//         if (miPeticion.readyState == 4 && miPeticion.status == 200) {
//             // console.log("Respuesta Server: ",JSON.parse(miPeticion.responseText));
//             dibujarPedidos(JSON.parse(miPeticion.responseText));
//             // callback(miPeticion.responseText);
//         }
//     }

//     miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     let misDatos = {
//         "desde" : desde,
//         "hasta" : hasta + " 23:59:59"
//     }
//     misDatos = JSON.stringify(misDatos);

//     let datos = "obtenerPedidos=" + misDatos;
//     miPeticion.send(datos);
// }

// // 
// // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓DIBUJAR PEDIDOS↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// function dibujarPedidos(jsonPedidos) {
//     dibujarPedidoEnLista(jsonPedidos);
    
// }

// function dibujarPedidoEnLista(jsonPedidos) {
//     let divPedidosLista = document.getElementById("contenedor-pedidos-enLista");
//     // limpio divPedidosLista
//     divPedidosLista.innerHTML = "";
//     // Crear un json de cada pedido por su producto
//     let jsonProductos = {};
//     // console.log("Pedidos: ",jsonPedidos);
//     for(let i = 0; i< jsonPedidos.length; i++) {
//         // console.log(jsonPedidos[i].producto);
//         if(jsonProductos.hasOwnProperty(jsonPedidos[i].producto)) {
            
//             jsonProductos[jsonPedidos[i].producto].cantidadProducto += jsonPedidos[i].cantidad;
//             jsonProductos[jsonPedidos[i].producto].solicitudes.push(jsonPedidos[i]) ;


//             // Ajustar el rango de fecha
//             let nuevaFecha = jsonPedidos[i].fecha.split(" ")[0];

//             if (jsonProductos[jsonPedidos[i].producto].fecha < nuevaFecha) {
//                 jsonProductos[jsonPedidos[i].producto].fecha = nuevaFecha + " a " + nuevaFecha;
//             } else if (jsonProductos[jsonPedidos[i].producto].fecha.split(" a ")[1] < nuevaFecha) {
//                 jsonProductos[jsonPedidos[i].producto].fecha.split(" a ")[0] = nuevaFecha + " a " + nuevaFecha;
//             }

//             // Filtrar las observaciones
//             if(jsonPedidos[i].observaciones.toLowerCase() !== "sin observaciones") {
//                 jsonProductos[jsonPedidos[i].producto].observaciones += "\n. " + jsonPedidos[i].observaciones;
//             }

//         } else {
//             producto = {
//                 "nombreProducto" : jsonPedidos[i].producto,
//                 "cantidadProducto" : jsonPedidos[i].cantidad,
//                 "tramitado" : jsonPedidos[i].tramitado,
//                 "solicitudes" : [jsonPedidos[i]],
//                 "fecha" : jsonPedidos[i].fecha.split(" ")[0],
//                 "observaciones" : jsonPedidos[i].observaciones,
//                 "unidades" : jsonPedidos[i].unidades
//             }
//             jsonProductos[jsonPedidos[i].producto] = producto;
//         }
//     }
//     // console.log("Pedidos unidos: ",jsonProductos);


//     // Iterar en el JSON
//     Object.values(jsonProductos).forEach(function (jsonPedido) {
//         let pedidoUl = crearElemento("ul", undefined, { "id": "pedido" + jsonPedido.nombreProducto });
//         // Estado Pedido
//         // let estado;
//         // if (jsonPedido.tramitado === "1") {
//         //     estado = "Tramitado";
//         // } else {
//         //     estado = "En tramite";
//         // }
//         // let pedidoEstado = crearElemento("li", estado);
//         let pedidoFecha = crearElemento("li", jsonPedido.fecha);
//         let pedidoProducto = crearElemento("li", jsonPedido.nombreProducto);
//         let pedidoCantidad = crearElemento("li", jsonPedido.cantidadProducto + " " + jsonPedido.unidades);
//         let pedidoObservaciones = crearElemento("li", jsonPedido.observaciones);
//         // USUARIOS
//         // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//         let pedidoUsuarios = crearElemento("li",undefined);
//         // cambio los " " por "-" para evitar fallos de id
//         let idModalUsuarios = 
//             jsonPedido.nombreProducto.replaceAll(" ","-")
//             + "-usuarios";
//         let botonUsuarios = crearElemento("input",undefined,{"type":"button",
//         "class":"btnUsuarios",
//         "id":"btnUsuarios",
//         "value":"Usuarios",
//         "data-bs-toggle": "modal",
//         "data-bs-target": "#modal-" + idModalUsuarios
//         });
//         // Modal de usuarios
//         // comienzo a crear el cuerpo del modal de usuarios
//         let elementosCuerpo = crearElemento("div",undefined,{"id": "contenedorUsuariosModal"});
//         for(let i = 0; i < jsonPedido.solicitudes.length; i++) {
//             let ulUsuario = crearElemento("ul",undefined);
//             let solicitud = jsonPedido.solicitudes[i];
//             obtenerUsuario(solicitud.idUsuario, function(respuesta) {
//                 let usuario = JSON.parse(respuesta);
//                 let usuarioPedido = crearElemento("li","Usuario: " + usuario.email);
//                 let fechaPedido = crearElemento("li","Fecha pedido: " +  solicitud.fecha);
//                 let productoPedido = crearElemento("li","Producto pedido: " +  solicitud.producto);
//                 let cantidadPedido = crearElemento("li","Cantidad: " +  solicitud.cantidad + " " + solicitud.unidades);
//                 let observacionesPedido = crearElemento("li","Observaciones: " +  solicitud.observaciones);
//                 let telefonoUsuario = crearElemento("li","Teléfono: " +  usuario.telefono);
//                 let tramitado = "Sin tramitar";
//                 if(solicitud.tramitado === "1") {
//                     tramitado = "En tramite";
//                 }
//                 let estadoPedido = crearElemento("li","Estado Pedido: " +  tramitado);

//                 // Modificar
//                 let idModificar = (solicitud.idUsuario + solicitud.producto + solicitud.fecha).replaceAll(" ","-").replaceAll(":","-");
//                 let modificarPedido = crearElemento("li",undefined);
//                 let botonModificar = crearElemento("button","Modificar Pedido", {
//                     "class" : "btnModificar btn btn-primary",
//                     "id" : "#modal-" + idModificar
//                 });
//                 botonModificar.addEventListener("click", manejadorClickModificar);
//                 modificarPedido.appendChild(botonModificar);

//                 // Modal de modificar
//                 let elementosCuerpoModificar = crearElemento("div",undefined,{"id": "contenedorModificarModal" + idModificar});
//                 let usuarioModificar = crearElemento("p", "Usuario: " + usuario.email);
//                 let fechaModificar = crearElemento("p", "Fecha: " + solicitud.fecha);
//                 let productoModificar = crearElemento("p", "Producto: " + solicitud.producto);
//                 let labelCantidadModificar = crearElemento("label","Cantidad: ",{"for":"inCantidadModificar"});
//                 let cantidadModificar = crearElemento("input", undefined, {
//                     "type" : "text",
//                     "id":"inCantidadModificar" ,
//                     "placeholder" : solicitud.cantidad,
//                     "value" : solicitud.cantidad
//                 });
//                 cantidadModificar.addEventListener("input",manejadorInputCantidad);
//                 let labelUnidadesModificar = crearElemento("label", solicitud.unidades,{"for":"inCantidadModificar"});
//                 let observacionesModificar = crearElemento("p", "Observaciones: " + solicitud.observaciones);
//                 let estado = solicitud.tramitado;
//                 estado === "1" ? estado = "Tramitado" : estado = "En tramite";
//                 let estadoModificar = crearElemento("p", "Estado: " + estado);

//                 elementosCuerpoModificar.appendChild(usuarioModificar);
//                 elementosCuerpoModificar.appendChild(fechaModificar);
//                 elementosCuerpoModificar.appendChild(productoModificar);
//                 elementosCuerpoModificar.appendChild(labelCantidadModificar);
//                 elementosCuerpoModificar.appendChild(cantidadModificar);
//                 elementosCuerpoModificar.appendChild(labelUnidadesModificar);
//                 elementosCuerpoModificar.appendChild(observacionesModificar);
//                 elementosCuerpoModificar.appendChild(estadoModificar);

//                 let confirmarModificar = crearElemento("button","Confirmar", {
//                     "class" : "btnConfirmar btn btn-primary",
//                     "id" : "btnConfirmar"
//                 });
//                 confirmarModificar.addEventListener("click", manejadorClickConfirmar);

//                 let miModalModificarPedido = dibujarModal(
//                     idModificar,
//                     "Modificar Pedido de " + usuario.email + " de " + solicitud.producto, elementosCuerpoModificar, confirmarModificar
//                 );
//                 // Añado el modal modificar a pedidoUsuarios, para evitar problemas de vision
//                 pedidoUsuarios.appendChild(miModalModificarPedido);



//                 // Eliminar
//                 let eliminarPedido = crearElemento("li",undefined);
//                 let botonTramitar = crearElemento("input",undefined, {
//                     "class" : "btnTramitar",
//                     "type" : "button",
//                     "value" : "Tramitar/No Tramitar Pedido"
//                 });
//                 botonTramitar.addEventListener("click", manejadorClickTramitar);
//                 eliminarPedido.appendChild(botonTramitar);

//                 ulUsuario.appendChild(usuarioPedido);
//                 ulUsuario.appendChild(fechaPedido);
//                 ulUsuario.appendChild(productoPedido);
//                 ulUsuario.appendChild(cantidadPedido);
//                 ulUsuario.appendChild(observacionesPedido);
//                 ulUsuario.appendChild(telefonoUsuario);
//                 ulUsuario.appendChild(estadoPedido);
//                 ulUsuario.appendChild(modificarPedido);
//                 ulUsuario.appendChild(eliminarPedido);
//             });

//             elementosCuerpo.appendChild(ulUsuario);
//         }


//         let miModal = dibujarModal(idModalUsuarios, "Usuarios que han pedido " + jsonPedido.nombreProducto,elementosCuerpo);

//         // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//         // pedidoUl.appendChild(pedidoEstado);
//         pedidoUl.appendChild(pedidoFecha);
//         pedidoUl.appendChild(pedidoProducto);
//         pedidoUl.appendChild(pedidoCantidad);
//         pedidoUl.appendChild(pedidoObservaciones);

//         pedidoUsuarios.appendChild(botonUsuarios);
//         pedidoUsuarios.appendChild(miModal);
//         pedidoUl.appendChild(pedidoUsuarios);
        
//         divPedidosLista.appendChild(pedidoUl);
//     });
    
// }
// // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑DIBUJAR PEDIDOS↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// // funcion genera para crear un modal
// function dibujarModal(idModal, titulo,elementosCuerpo,elementosFooter) {
//     let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
//     let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
//     let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
//     // Contenido Header
//     let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
//     let modalTitulo = crearElemento("h1", titulo, {"class" : "modal-title"});
//     let modalCierre = crearElemento("button",undefined,{
//         "type" : "button",
//         "class" : "btn-close",
//         "data-bs-dismiss" : "modal",
//         "aria-label" : "Close"
//     });
//     modalHeader.appendChild(modalTitulo);
//     modalHeader.appendChild(modalCierre);
//     // Contenido Body
//     // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//     let modalBody = crearElemento("div",undefined, {"class": "modal-body"});

//     if(elementosCuerpo !== undefined) {
//         modalBody.appendChild(elementosCuerpo);
//     }

//     // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//     // Contenido footer
//     let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
//     // Pongo al boton modificar el id del modal ¿estas seguro?
//     // let modalModificar = crearElemento("button", textoBoton, {
//     //     "type" : "button",
//     //     "class" : "btn btn-primary",
//     //     "id" : "btn-" + textoBoton + "-" + idModal + "-modal",
//     //     "data-bs-toggle": "modal",
//     //     "data-bs-target": "#modal-" + idModal + "-seguro"
//     // });
//     // modalFooter.appendChild(modalModificar);
//     if(elementosFooter !== undefined) {
//         modalFooter.appendChild(elementosFooter);
//     }

//     modalContent.appendChild(modalHeader);
//     modalContent.appendChild(modalBody);
//     modalContent.appendChild(modalFooter);
//     modalDialog.appendChild(modalContent);
//     miDiv.appendChild(modalDialog);

//     return miDiv;
// }

// function crearElemento(etiqueta, texto, atributos) {
//     let elementoNuevo = document.createElement(etiqueta);
//     if(texto !== undefined) {
//         let contenido = document.createTextNode(texto);
//         elementoNuevo.appendChild(contenido);
//     }
//     if(atributos !== undefined) {
//         for(let clave in atributos) {
//             elementoNuevo.setAttribute(clave, atributos[clave]);
//         }
//     }
//     return elementoNuevo;
// }

// function obtenerUsuario(idUsuario ,callback) {
//     let miPeticion = new XMLHttpRequest();

//     miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

//     miPeticion.onreadystatechange = function() {
//         if (miPeticion.readyState == 4 && miPeticion.status == 200) {
//             // console.log(miPeticion.responseText);
//             // console.log(JSON.parse(miPeticion.responseText));
//             callback(miPeticion.responseText);
//         }
//     }

//     miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


//     let datos = "obtenerUsuario=" + idUsuario;
//     miPeticion.send(datos);
// }
// function obtenerProveedores(callback) {
//     let miPeticion = new XMLHttpRequest();

//     miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

//     miPeticion.onreadystatechange = function() {
//         if (miPeticion.readyState == 4 && miPeticion.status == 200) {
//             // console.log(miPeticion.responseText);
//             // console.log(JSON.parse(miPeticion.responseText));
//             callback(miPeticion.responseText);
//         }
//     }

//     miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


//     let datos = "obtenerProveedores=";
//     miPeticion.send(datos);
// }
// function actualizarSolicitud(datosSolicitud ,callback) {
//     let miPeticion = new XMLHttpRequest();

//     miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

//     miPeticion.onreadystatechange = function() {
//         if (miPeticion.readyState == 4 && miPeticion.status == 200) {
//             // console.log(miPeticion.responseText);
//             // console.log(JSON.parse(miPeticion.responseText));
//             callback(miPeticion.responseText);
//         }
//     }

//     miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     datosSolicitud = JSON.stringify(datosSolicitud);
//     let datos = "actualizarSolicitud=" + datosSolicitud;
//     miPeticion.send(datos);
// }
// function tramitarSolicitud(datosSolicitud ,callback) {
//     let miPeticion = new XMLHttpRequest();

//     miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

//     miPeticion.onreadystatechange = function() {
//         if (miPeticion.readyState == 4 && miPeticion.status == 200) {
//             console.log(miPeticion.responseText);
//             // console.log(JSON.parse(miPeticion.responseText));
//             callback(miPeticion.responseText);
//         }
//     }

//     miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     datosSolicitud = JSON.stringify(datosSolicitud);
//     let datos = "tramitarSolicitud=" + datosSolicitud;
//     miPeticion.send(datos);
// }

// function validarInputNumeros(elemento) {
//     let regex = /^(\d+|\d*\.\d+)$/;
//     let valor = elemento.value;
//     if(regex.test(valor) || valor.substr(-1) === ".") {
//         // comprobar que no haya mas de 2 puntos
//         if((valor.match(/\./g) || []).length === 2) {
//             elemento.value = valor.slice(0,-1);
//         }
//         // comprobar que no tengamos valor similar a 02
//         if(valor.length >= 2 && valor[0] === "0") {
//             elemento.value = valor.slice(1);
//         }
//         // Maximos decimales 3
//         if(valor.split(".")[1] && valor.split(".")[1].length > 3) {
//             elemento.value = valor.slice(0,-1);
//         }
//     } else {
//         elemento.value = 0;
//     }
// }

// function manejadorClickModificar() {
//     // modal-4Bacon2024-01-25-00-00-00
//     let superModal = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
//     $(this.id).modal('show');
//     $("#" + superModal.id).modal('hide');
// }
// function manejadorClickTramitar() {
//     let padre = this.parentElement.parentElement;
//     hijos = padre.childNodes;
//     console.log(hijos);
    
//     // Conversion del estado
//     let estado = hijos[6].innerHTML.split(": ")[1];
//     if(estado === "En tramite") {
//         estado = '0';
//     } else {
//         estado = '1';
//     }

//     let datosPedido = {
//         "emailUsuario" : hijos[0].innerHTML.split(": ")[1] ,
//         "fecha" : hijos[1].innerHTML.split(": ")[1],
//         "producto" : hijos[2].innerHTML.split(": ")[1],
//         "cantidad" : hijos[3].innerHTML.split(": ")[1],
//         "observaciones" : hijos[4].innerHTML.split(": ")[1],
//         "telefono" : hijos[5].innerHTML.split(": ")[1],
//         "estado" : estado
//     };

//     console.log(datosPedido);
//     tramitarSolicitud(datosPedido, function(respuesta) {
//         if(respuesta === "1") {
//             // let idModal = contenedorBody.parentElement.parentElement.parentElement.id;
//             // $("#" + idModal).modal('hide');
//             hijos[6].innerHTML = "Estado Pedido: Sin tramitar";
            
//             console.log("se actualizo");
            
//         } else {
//             console.log("No se actualizo");
//             hijos[6].innerHTML = "Estado Pedido: En tramite";
//         }
//     });

// }
// function manejadorClickConfirmar() {
//     let contenedorBody = this.parentElement.previousSibling;
//     let contenedorDatos = contenedorBody.querySelector("div");
//     let datosP = contenedorDatos.querySelectorAll("p");
//     let datosCantidad = contenedorDatos.querySelector("input");
//     let datosPedido = {
//         "emailUsuario" : datosP[0].innerHTML.split(": ")[1] ,
//         "fecha" : datosP[1].innerHTML.split(": ")[1],
//         "producto" : datosP[2].innerHTML.split(": ")[1],
//         "cantidad" : datosCantidad.value,
//         "observaciones" : datosP[3].innerHTML.split(": ")[1],
//         "estado" : datosP[4].innerHTML.split(": ")[1]
//     };

//     actualizarSolicitud(datosPedido, function(respuesta) {
//         if(respuesta === "1") {
//             let idModal = contenedorBody.parentElement.parentElement.parentElement.id;
//             $("#" + idModal).modal('hide');
//             let desde = document.getElementById("inFecha_desde").value;
//             let hasta = document.getElementById("inFecha_hasta").value;
//             recuperarPedidos(desde,hasta);

//         } else {
//             console.log("No se actualizo");
//         }
//     });

// }

// function manejadorClickHacerPedido() {
//     console.log("pidiendo");
//     let contenedorPedidos = document.getElementById("contenedor-pedidos");
//     let pedidosLista = contenedorPedidos.querySelectorAll("div")[0];
    
//     let elementosCuerpo = crearElemento("div",undefined);
//     pedidosLista = pedidosLista.childNodes;
//     // Me quiero morir
    
//     for(let i = 0; i < pedidosLista.length; i++) {

//         let elementosPedido = pedidosLista[i].childNodes;
//         let ulPedido = crearElemento("ul",undefined,{"id" : "pedido" + i});
        
//         // console.log("puta: ", pedidosLista[i]);
//         let liUsuarios = pedidosLista[i].childNodes[4];
//         // console.log("li Usuarios: ", liUsuarios);
//         let modalUsuarios = liUsuarios.querySelector(".modal");
//         // console.log("modal Usuario: ", modalUsuarios);
//         let solicitudesUsuarios = modalUsuarios.querySelectorAll("ul");
//         console.log("solicitudes de usuarios: ", solicitudesUsuarios);
//         let cantidad = 0;
//         let unidad;
//         // Recorro las solicitudes por producto
//         for(let j = 0; j < solicitudesUsuarios.length; j++) {
//             let ulUsuario = solicitudesUsuarios[j];

//             unidad = ulUsuario.querySelectorAll("li")[3].innerHTML.split(" ").slice(2).join().replace(","," ");

//             // console.log("solicitud del usuario: ", ulUsuario);
//             let estadoSolicitudUsuario = ulUsuario.querySelectorAll("li")[6];
//             // console.log("estado solicitud del usuario: ", estadoSolicitudUsuario);
//             estadoSolicitudUsuario = estadoSolicitudUsuario.innerHTML.split(": ")[1];
//             // console.log("estado solicitud del usuario: ", estadoSolicitudUsuario);
            
//             if(estadoSolicitudUsuario === "En tramite") {
//                 console.log("mamahuevo");
//                 let liProducto = crearElemento("li",elementosPedido[1].innerHTML);
//                 cantidad += parseFloat(ulUsuario.querySelectorAll("li")[3].innerHTML.split(" ")[1]);
//             } else {
//                 console.log("digo glu glu");
//             }
//         }
//         // console.log("cantidad: ", cantidad, " unidad: ", unidad);
//         if(cantidad > 0) {
//             let liProducto = crearElemento("li",elementosPedido[1].innerHTML);
//             let liCantidad = crearElemento("li",cantidad + unidad);
//             // console.log("cuanto: " ,cantidad + " " + unidad);
//             let liProveedores = crearElemento("li",undefined);
//             let selectProveedores = crearElemento("select",undefined);
//             obtenerProveedores( function(respuesta) {
//                 let proveedores = JSON.parse(respuesta);
//                 for(let i = 0; i < proveedores.length; i++) {
//                     // console.log(proveedores[i]);
//                     let optionProveedores = crearElemento("option", 
//                         proveedores[i].nombre + " tlf: " + proveedores[i].telefono
//                     , {"value" : proveedores[i].idProveedor});
//                     selectProveedores.appendChild(optionProveedores);
//                 }
//             });
//             liProveedores.appendChild(selectProveedores);
//             ulPedido.appendChild(liProducto);
//             ulPedido.appendChild(liCantidad);
//             ulPedido.appendChild(liProveedores);
//             liProveedores.appendChild(selectProveedores);

//             ulPedido.appendChild(liProducto);
//             ulPedido.appendChild(liCantidad);
//             ulPedido.appendChild(liProveedores);
//             elementosCuerpo.appendChild(ulPedido);
//         }
//     }

//     // aqui sigue boton
//     // crear la fecha
//     let desde = document.getElementById("inFecha_desde").value;
//     let hasta = document.getElementById("inFecha_hasta").value;
//     let titulo = desde + " a " + hasta;
//     let miModal = document.getElementById("modal-hacer-pedido");

//     miModal.querySelector(".modal-body").innerHTML = "";
//     miModal.querySelector(".modal-body").appendChild(elementosCuerpo);
//     miModal.querySelector(".modal-header h1").innerHTML = "";
//     miModal.querySelector(".modal-header h1").innerHTML = "Creación de pedido de " + titulo;
//     // document.getElementById("modal-hacer-pedido").appendChild(elementosCuerpo);

    
//     $("#modal-hacer-pedido").modal('show');
//     // $("#modal-hacer-pedido").on("hidden.bs.modal", function () {
//     //     let desde = document.getElementById("inFecha_desde").value;
//     //     let hasta = document.getElementById("inFecha_hasta").value;
//     //     console.log("me cerraron wey");
//     //     recuperarPedidos(desde,hasta);
//     // });
// }
// function manejadorClickBuscar() {
//     let desde = document.getElementById("inFecha_desde").value;
//     let hasta = document.getElementById("inFecha_hasta").value;
//     if(desde < hasta ) {
//         recuperarPedidos(desde,hasta);
//     } 
// }
// function manejadorInputCantidad() {
//     validarInputNumeros(this);
// }




// UN FÉNIX CAYÓ Y DE SUS CENIZAS OTRO SE ALZÓ.




















window.onload = principal;

function principal()
{
    fechasDefecto();

    rellenarPedidos();

    botonBuscar = document.getElementById("btnBuscar");
    botonBuscar.addEventListener("click",manejadorClickBuscar);
    botonVerSolicitudes = document.getElementById("btnVerSolicitudes");
    botonVerSolicitudes.addEventListener("click",manejadorClickMostrarSolicitudes);
    botonVerPedidos = document.getElementById("btnVerPedidos");
    botonVerPedidos.addEventListener("click",manejadorClickMostrarPedidos);
}

// ===========FUNCIONES GENERALES=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES GENERALES=========================================



// ===========FUNCIONES GENERADORAS=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
function rellenarPedidos(desde,hasta) {
    if(typeof(desde) === "undefined" && typeof(hasta) === "undefined") {
        // valores por defecto de fechas
        desde = document.getElementById("inFecha_desde").value;
        hasta = document.getElementById("inFecha_hasta").value;
    }
    // cargo los pedidos
    obtenerPedidos(desde,hasta, function(respuesta) {
        dibujarPedidos(respuesta);

    });
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES GENERADORAS=========================================



// ===========MANEJADORES=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar() {
    let desde = document.getElementById("inFecha_desde").value;
    let hasta = document.getElementById("inFecha_hasta").value;
    if(desde < hasta ) {
        rellenarPedidos(desde,hasta);
    } 
}
function manejadorClickMostrarSolicitudes() {
    console.log("Muestro Solicitudes(llamo manejador)");
}
function manejadorClickMostrarPedidos() {
    console.log("Muestro Solicitudes(llamo manejador)");
}
function manejadorClickHacerPedido () {
    console.log("Hago Pedido(llamo manejador)");
    let idSolicitudes = [];
    for(let i = 0; i < this.parentElement.querySelectorAll("ul").length; i++) {
        idSolicitudes.push(this.parentElement.querySelectorAll("ul")[i].id.split("solicitud")[1]);
    }
  
    hacerPedidoObtenerSolicitudes(idSolicitudes, function(respuesta) {

        // recorro las id y obtengo los ul con esas id
        let solicitudes = JSON.parse(respuesta);
        let divSolicitudes = crearElemento("div",undefined);
        for(let i = 0; i < solicitudes.length; i++) {
            let ulSolicitud = document.getElementById("solicitud"+solicitudes[i].idSolicitud,undefined);
            divSolicitudes.appendChild(ulSolicitud);
        }

        document.querySelector("#modal-TramitarPedido .modal-body").innerHTML = "";
        document.querySelector("#modal-TramitarPedido .modal-body").appendChild(divSolicitudes);
        $("#modal-TramitarPedido").modal("show");

    });
}
function manejadorClickTramitarPedido () {
    console.log("Tramito Pedido(llamo manejador)");
    console.log(this.parentElement.parentElement.previousSibling);
    // aqui estoy
}

function manejadorClickModificarSolicitud() {
    console.log("modifico cantidad(llamado manejador)");
    let contenedorCantidad = this.parentElement.parentElement.childNodes[2];
    let idSolicitud = contenedorCantidad.parentElement.id.split("solicitud")[1];
    let partesCantidad = contenedorCantidad.innerHTML.split(": ")[1].split(" ");
    let cantidad = partesCantidad[0];
    let unidad = partesCantidad.slice(1).join(" ");
    let producto = this.parentElement.parentElement.childNodes[1].innerHTML;
    let elModal = document.querySelector("#modal-ModificarCantidad .modal-body div");
    let pDatosModal = elModal.querySelectorAll("p")[1];
    let hijosModal = pDatosModal.childNodes;
    elModal.querySelector("p").innerHTML = producto
    hijosModal[1].value = cantidad; 
    hijosModal[2].innerHTML = unidad; 
    document.getElementById("btnActualizarSolicitud").placeholder = idSolicitud;

    $("#modal-ModificarCantidad").modal("show");

    console.log(contenedorCantidad.parentElement.id.split("solicitud")[1]);
}
function manejadorClickActualizarSolicitud() {
    console.log("actualizo cantidad(llamado manejador)");
    let idSolicitud = this.placeholder;
    let cantidad = document.getElementById("inCantidad-modal").value
    let datosPedido = {
        "id" : idSolicitud,
        "cantidad" : cantidad
    };
    actualizarSolicitud(datosPedido, function(respuesta) {
        if(respuesta === "1") {
            rellenarPedidos();
            $("#modal-ModificarCantidad").modal("hide");
        } else  {
            console.log("Hubo un error");
        }
    });
    console.log("idSolicitud: ",idSolicitud, " cantidad: ", cantidad);
}
function manejadorClickTramitarSolicitud() {
    console.log("tramito solicitud(llamado manejador)");
    let contenedor = this.parentElement.parentElement;
    let idSolicitud = contenedor.id.split("solicitud")[1];
    let liEstado = contenedor.childNodes[4];
    tramitarSolicitud(idSolicitud,function(respuesta) {
        if(respuesta === "1") {
            liEstado.innerHTML = "Estado: Tramitado";
        } else if(respuesta === "0") {
            liEstado.innerHTML = "Estado: En tramite";
        } else {
            console.log("Ha ocurrido un error");
        }
    });
}
function manejadorInputCantidad() {
    validarInputNumeros(this);
    console.log("cambio cantidad(llamado manejador)");
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========MANEJADORES=========================================



// ===========PETICIONES BD=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function obtenerPedidos(desde,hasta, callback) {
    let miPeticion = new XMLHttpRequest();
    miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log("Respuesta Server: ",JSON.parse(miPeticion.responseText));
            callback(JSON.parse(miPeticion.responseText));
            // console.log(miPeticion.responseText);
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

function tramitarSolicitud(idSolicitud ,callback) {
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

    let datos = "tramitarSolicitud=" + idSolicitud;
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
function hacerPedidoObtenerSolicitudes(datosSolicitud ,callback) {
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
    let datos = "hacerPedidoObtenerSolicitudes=" + datosSolicitud;
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
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========PETICIONES BD=========================================

// ===========FUNCIONES DIBUJAR=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function dibujarPedidos(jsonPedidos) {
    // contenedor de pedidos
    let divUsuarios = document.getElementById('contenedor-pedidos');
    divUsuarios.innerHTML = "";
    
    


    for(let i = 0; i < jsonPedidos.length; i++) {
        // console.log("id: ",jsonPedidos[i].idUsuario, " email: ",jsonPedidos[i].nombreUsuario, "telefono: ",
        //     jsonPedidos[i].telefonoUsuario, " solicitudes: ", jsonPedidos[i].solicitudes);
        
        let divPedidosUsuario = crearElemento("div",undefined,{"id": "usuario" + jsonPedidos[i].idUsuario});
        // datos del usuario
        let h2emailUsuario = crearElemento("h2","Pedidos de: " + jsonPedidos[i].nombreUsuario );
        let h3telefonoUsuario = crearElemento("h3","Teléfono: " + jsonPedidos[i].telefonoUsuario);

        // añado datos del usuario antes que las solicitudes
        divPedidosUsuario.appendChild(h2emailUsuario);
        divPedidosUsuario.appendChild(h3telefonoUsuario);

        // listar solicitudes del usuario
        for(let j = 0; j < jsonPedidos[i].solicitudes.length; j++) {
            let solicitud = jsonPedidos[i].solicitudes[j];
            // solicitudes del usuario
            let ulSolicitud = crearElemento("ul",undefined,{"id": "solicitud" + solicitud.idSolicitud});
            let fechaSolicitud = crearElemento("li","Fecha Solicitud: " + solicitud.fecha);
            let productoSolicitud = crearElemento("li","Producto: " + solicitud.producto);
            let cantidadSolicitud = crearElemento("li","Cantidad: " + solicitud.cantidad + " " + solicitud.unidad);
            let observacionesSolicitud = crearElemento("li","Observaciones: " + solicitud.observaciones);

            // Mostrar el estado de la solicitud, si se ha completado es 1 sino esta en tramite(cancelado)
            let estado;
            if(solicitud.estadoPedido === "1") {
                estado = "Tramitado";
            } else {
                estado = "En tramite";
            }
            let estadoSolicitud = crearElemento("li","Estado: " + estado);

            // botones
            let liModificar = crearElemento("li",undefined);
            let botonModificar = crearElemento("input",undefined,{
                "class" : "btnModificaSolicitud",
                "type" : "button",
                "value" : "Modificar Cantidad"
            });
            botonModificar.addEventListener("click",manejadorClickModificarSolicitud);

            liModificar.appendChild(botonModificar);

            


            let liTramitar = crearElemento("li",undefined);
            let botonTramitar = crearElemento("input",undefined, {
                "class" : "btnTramitarSolicitud",
                "type" : "button",
                "value" : "Tramitar/No Tramitar Pedido"
            });
            botonTramitar.addEventListener("click",manejadorClickTramitarSolicitud);
            liTramitar.appendChild(botonTramitar);

            // añado todo al ul de la solicitud y lo añado al div
            ulSolicitud.appendChild(fechaSolicitud);
            ulSolicitud.appendChild(productoSolicitud);
            ulSolicitud.appendChild(cantidadSolicitud);
            ulSolicitud.appendChild(observacionesSolicitud);
            ulSolicitud.appendChild(estadoSolicitud);
            ulSolicitud.appendChild(liModificar);
            ulSolicitud.appendChild(liTramitar);
            divPedidosUsuario.appendChild(ulSolicitud);
        }
        let botonHacerPedido = crearElemento("input",undefined,{
            "class" : "btnHacerPedido",
            "type" : "button",
            "value" : "Hacer Pedido"
        });
        botonHacerPedido.addEventListener("click", manejadorClickHacerPedido);
        divPedidosUsuario.appendChild(botonHacerPedido);

        
        divUsuarios.appendChild(divPedidosUsuario);
    }
    console.log("eh?");
    document.getElementById("contenedor-modales").appendChild(dibujarModalModificarCantidad());
    let modalTramitarPedido = dibujarModalTramitarPedido();
    // solucion pocha, problema raro del modal
    modalTramitarPedido.addEventListener('hidden.bs.modal', function () {
        rellenarPedidos();
        console.log("me cerraro wey");
      });
    document.getElementById("contenedor-modales").appendChild(modalTramitarPedido);

}

function dibujarModalTramitarPedido() {
    // Creo el contenido del modal para modificar
    let elementosCuerpo = crearElemento("div",undefined);
    let elementosFooter = crearElemento("div",undefined);
    let botonTramitarPedido = crearElemento("input",undefined, {
        "id" : "btnTramitarPedido",
        "type" : "button",
        "value" : "Hacer pedido"
    });
    botonTramitarPedido.addEventListener("click",manejadorClickTramitarPedido);
    

    elementosFooter.appendChild(botonTramitarPedido);

    let modalTramitarPedido = dibujarModal("TramitarPedido","Hacer Pedido",elementosCuerpo, elementosFooter);
    return modalTramitarPedido;
}
function dibujarModalModificarCantidad() {
    // Creo el contenido del modal para modificar
    let elementosCuerpo = crearElemento("div",undefined);
    let productoModal = crearElemento("p","Producto: ");
    let pCantidadModal = crearElemento("p",undefined);
    let labelCantidadModal = crearElemento("label", "Cantidad: ", {
        "for" : "inCantidad-modal"});
    let cantidadModal = crearElemento("input",undefined, {
        "id" : "inCantidad-modal",
        "type" : "text"
    });
    cantidadModal.addEventListener("input",manejadorInputCantidad);
    let labelUnidadModal = crearElemento("label",undefined, {
        "for" : "inCantidad-modal"});
    pCantidadModal.appendChild(labelCantidadModal);
    pCantidadModal.appendChild(cantidadModal);
    pCantidadModal.appendChild(labelUnidadModal);

    
    let elementosFooter = crearElemento("div",undefined);
    let botonActualizarCantidad = crearElemento("input",undefined, {
        "id" : "btnActualizarSolicitud",
        "type" : "button",
        "value" : "Modificar cantidad"
    });
    botonActualizarCantidad.addEventListener("click",manejadorClickActualizarSolicitud);
    

    elementosCuerpo.appendChild(productoModal);
    elementosCuerpo.appendChild(pCantidadModal);
    elementosFooter.appendChild(botonActualizarCantidad);

    let modalModificarCantidad = dibujarModal("ModificarCantidad","Modificar Cantidad de la solicitud",elementosCuerpo, elementosFooter);
    return modalModificarCantidad;
}

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
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========FUNCIONES DIBUJAR=========================================
