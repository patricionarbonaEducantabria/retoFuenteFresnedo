// UN FÉNIX CAYÓ Y DE SUS CENIZAS OTRO SE ALZÓ.
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
    fechasDefecto();

    // rellenarSolicitudes();
    sessionStorage.setItem("dondeEstoy",null);
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
        altInput: true,
        altFormat: "F j, Y",
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
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
          }
      });
    flatpickr("#inFecha_desde", {
        altInput: true,
        altFormat: "F j, Y",
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
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
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
function rellenarSolicitudes(desde,hasta) {
    if(typeof(desde) === "undefined" && typeof(hasta) === "undefined") {
        // valores por defecto de fechas
        desde = document.getElementById("inFecha_desde").value;
        hasta = document.getElementById("inFecha_hasta").value;
    }
    // cargo los pedidos
    obtenerSolicitudes(desde,hasta, function(respuesta) {
        dibujarSolicitudes(respuesta);

    });
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
        console.log(respuesta);
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
        if(sessionStorage.getItem("dondeEstoy") === "null") {
            console.log("Selecciona que quieres ver");
        } 
        if(sessionStorage.getItem("dondeEstoy") === "solicitudes") {
            rellenarSolicitudes(desde,hasta);
        } else if(sessionStorage.getItem("dondeEstoy") === "pedidos") {
            rellenarPedidos(desde,hasta);
        }
    } 
}
function manejadorClickMostrarSolicitudes() {
    console.log("Muestro Solicitudes(llamo manejador)");
    sessionStorage.setItem("dondeEstoy", "solicitudes");
    rellenarSolicitudes();
}
function manejadorClickMostrarPedidos() {
    console.log("Muestro Pedidos(llamo manejador)");
    sessionStorage.setItem("dondeEstoy", "pedidos");
    rellenarPedidos();
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
        if(solicitudes[0] !== undefined) {
            
            let divSolicitudes = crearElemento("div",undefined,{"id": solicitudes[0].idUsuario});
            for(let i = 0; i < solicitudes.length; i++) {
                let ulSolicitud = document.getElementById("solicitud"+solicitudes[i].idSolicitud,undefined);
                let liProveedores = crearElemento("li",undefined);
                let selectProveedores = crearElemento("select",undefined);
                obtenerProveedores( function(respuesta) {
                    let proveedores = JSON.parse(respuesta);
                    for(let i = 0; i < proveedores.length; i++) {
                        // console.log(proveedores[i]);
                        let optionProveedores = crearElemento("option", 
                            proveedores[i].nombre + " tlf: " + proveedores[i].telefono
                        , {"value" : proveedores[i].idProveedor});
                        selectProveedores.appendChild(optionProveedores);
                    }
                });


                // Elimino lis del ul que no necesito
                let hijosEliminar = ulSolicitud.childNodes;
                // fuera fecha
                // console.log(hijosEliminar);
                ulSolicitud.removeChild(hijosEliminar[0]);
                // fuera botones
                // console.log(hijosEliminar);
                ulSolicitud.removeChild(hijosEliminar[4]);
                ulSolicitud.removeChild(hijosEliminar[4]);
                // fuera estado
                ulSolicitud.removeChild(hijosEliminar[3]);

                liProveedores.appendChild(selectProveedores);
                ulSolicitud.appendChild(liProveedores);
                divSolicitudes.appendChild(ulSolicitud);

            }

            document.querySelector("#modal-TramitarPedido .modal-body").innerHTML = "";
            document.querySelector("#modal-TramitarPedido .modal-body").appendChild(divSolicitudes);
            $("#modal-TramitarPedido").modal("show");
        }

    });
}
function manejadorClickTramitarPedido () {
    console.log("Tramito Pedido(llamo manejador)");
    console.log(this);
    let ulSolicitudes = this.parentElement.parentElement.previousSibling.querySelectorAll("div ul");
    console.log(ulSolicitudes);
    let datosPedido = [];
    for(let i = 0; i < ulSolicitudes.length; i++) {
        let idUsuario = ulSolicitudes[i].parentElement.id;
        let idSolicitud = ulSolicitudes[i].id.split("solicitud")[1];
        let productoSolicitud = ulSolicitudes[i].childNodes[0].innerHTML.split(": ")[1];
        
        let cantidadSolicitud = ulSolicitudes[i].childNodes[1].innerHTML.split(": ")[1].split(" ");
        let unidadesSolicitud = cantidadSolicitud.slice(1).join(" ");
        cantidadSolicitud = cantidadSolicitud[0];
        
        let observacionesSolicitud = ulSolicitudes[i].childNodes[2].innerHTML.split(": ")[1];
        let idProveedorSolicitud = ulSolicitudes[i].childNodes[3].childNodes[0].value;

        datosPedido.push({
            "idUsuario" : idUsuario,
            "idSolicitud" : idSolicitud,
            "producto" : productoSolicitud,
            "cantidad" : cantidadSolicitud,
            "unidades" : unidadesSolicitud,
            "observaciones" : observacionesSolicitud,
            "idProveedor" : idProveedorSolicitud
        });
    }
    console.log(datosPedido);
    hacerPedido(datosPedido, function(respuesta) {
        if(respuesta === "1") {
            // console.log("Se hizo el pedido");
            $("#modal-TramitarPedido").modal("hide");

        } else {
            console.log("No se pudo hacer el pedido");
        }
    });

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
            rellenarSolicitudes();
            $("#modal-ModificarCantidad").modal("hide");
        } else  {
            console.log("Hubo un error");
        }
    });
    console.log("idSolicitud: ",idSolicitud, " cantidad: ", cantidad);
}
function manejadorClickActualizarPedido() {
    console.log("actualizo estado(llamado manejador)");
    let contenedorPedido = this.parentElement.parentElement.parentElement.parentElement;
    let idPedido = contenedorPedido.id.split("-")[1];
    let idEstado = this.className;
    let liEstadoPedido = contenedorPedido.childNodes[5];
    console.log(idEstado);
    console.log(idPedido);
    console.log(liEstadoPedido);
    let datosPedido = {
        idPedido: idPedido,
        idEstado: idEstado
    };
    actualizarPedido(datosPedido, function(respuesta) {
        console.log("respuesta actualizar: ",respuesta);
        if(respuesta === "1") {
            obtenerEstado(idPedido, function(respuesta) {
                    console.log("respuesta obtener estado: ",respuesta);
                    liEstadoPedido.innerHTML = "";
                    liEstadoPedido.innerHTML = "Estado: " + respuesta;
                    if(respuesta === "En espera") {
                        liEstadoPedido.className = "enEspera";
                    } else if(respuesta === "Pendiente") {
                        liEstadoPedido.className = "pendiente";
                    } else if(respuesta === "Completado") {
                        liEstadoPedido.className = "completado";
                    } else {
                        liEstadoPedido.className = "cancelado";
                    }

            });
        }
    });
    
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
function obtenerSolicitudes(desde,hasta, callback) {
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

    let datos = "obtenerSolicitudes=" + misDatos;
    miPeticion.send(datos);
}
function obtenerPedidos(desde,hasta, callback) {
    let miPeticion = new XMLHttpRequest();
    miPeticion.open("POST", "../../PHP/gestionar_pedidos.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("Respuesta Server Pedidos: ",JSON.parse(miPeticion.responseText));
            callback(JSON.parse(miPeticion.responseText));
            // console.log(miPeticion.responseText);
            // aqui estoy
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
function actualizarPedido(datosSolicitud ,callback) {
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
    let datos = "actualizarPedido=" + datosSolicitud;
    miPeticion.send(datos);
}
function obtenerEstado(datosSolicitud ,callback) {
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

    let datos = "obtenerEstado=" + datosSolicitud;
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
function hacerPedido(datosSolicitud ,callback) {
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
    let datos = "hacerPedido=" + datosSolicitud;
    miPeticion.send(datos);
}
function obtenerEstados(callback) {
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

    let datos = "obtenerEstados=";
    miPeticion.send(datos);
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ===========PETICIONES BD=========================================

// ===========FUNCIONES DIBUJAR=========================================
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function dibujarSolicitudes(jsonPedidos) {
    // contenedor de pedidos
    let divUsuarios = document.getElementById('contenedor-pedidos');
    divUsuarios.innerHTML = "";
    
    


    for(let i = 0; i < jsonPedidos.length; i++) {
        // console.log("id: ",jsonPedidos[i].idUsuario, " email: ",jsonPedidos[i].nombreUsuario, "telefono: ",
        //     jsonPedidos[i].telefonoUsuario, " solicitudes: ", jsonPedidos[i].solicitudes);
        
        let divPedidosUsuario = crearElemento("div",undefined,{"id": "usuario" + jsonPedidos[i].idUsuario});
        // datos del usuario
        let h2emailUsuario = crearElemento("h2","Solicitudes de: " + jsonPedidos[i].nombreUsuario );
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
        rellenarSolicitudes();
        console.log("me cerraro wey");
      });
    document.getElementById("contenedor-modales").appendChild(modalTramitarPedido);

}
function dibujarPedidos(jsonPedidos) {
    // contenedor de pedidos
    let divPedidos = document.getElementById('contenedor-pedidos');
    divPedidos.innerHTML = "";
    console.log("dibujos algo:",jsonPedidos);
    for (let fecha in jsonPedidos) {
        console.log('Fecha:', fecha);
        let divFecha = crearElemento("div",undefined);
        let h2Fecha = crearElemento("h2", "Pedidos del " + fecha);
        divFecha.appendChild(h2Fecha);
        
        // Recorrer los usuarios y sus pedidos para cada fecha
        for (let idUsuario in jsonPedidos[fecha]) {
            let ulUsuario = crearElemento("ul",undefined, {"class" : "ulUsuario"});
            let usuario = jsonPedidos[fecha][idUsuario];
            let liNombre = crearElemento("li","Pedidos de: " + usuario.usuario);
            let liPedidos = crearElemento("li",undefined);


            // console.log('Id Usuario:', usuario.idUsuario);
            // console.log('Usuario:', usuario.usuario);
    
            // Recorrer los pedidos para cada usuario
            usuario.pedidos.forEach(pedido => {
                let ulPedido = crearElemento("ul",undefined, {"id":"pedido-" + pedido.idPedido});
                let liProducto = crearElemento("li", 'Producto: ' + pedido.producto);
                let liCantidad = crearElemento("li", 'Cantidad: ' + pedido.cantidad);
                let liUnidades = crearElemento("li", 'Unidades: ' + pedido.unidades);
                let liObservaciones = crearElemento("li", 'Observaciones: ' + pedido.observaciones);
                let liProveedor = crearElemento("li","Proveedor: " + pedido.proveedor.nombre + "  tlf: " + pedido.proveedor.telefono);
                
                let liSuEstado = crearElemento("li", "Estado: " + pedido.estado);
                if(pedido.estado === "En espera") {
                    liSuEstado.className = "enEspera";
                } else if(pedido.estado === "Pendiente") {
                    liSuEstado.className = "pendiente";
                } else if(pedido.estado === "Completado") {
                    liSuEstado.className = "completado";
                } else {
                    liSuEstado.className = "cancelado";
                }
                // lista de botones de estado pedido
                let liEstados = crearElemento("li",undefined);
                let ulBotonesEstados = crearElemento("ul",undefined,{"class" : "ulEstados"});
                
                obtenerEstados(function(respuesta) {
                    respuesta = JSON.parse(respuesta);
                    for(let i = 0; i < respuesta.length; i++) {
                        let liEstado = crearElemento("li",undefined);
                        let botonEstado = crearElemento("input", respuesta[i].estado,{
                            "type" : "button",
                            "class" : respuesta[i].idEstado,
                            "value" : respuesta[i].estado
                        });
                        botonEstado.addEventListener("click",manejadorClickActualizarPedido);
                        liEstado.appendChild(botonEstado);
                        ulBotonesEstados.appendChild(liEstado);
                    }
                });
                liEstados.appendChild(ulBotonesEstados);

                ulPedido.appendChild(liProducto);
                ulPedido.appendChild(liCantidad);
                ulPedido.appendChild(liUnidades);
                ulPedido.appendChild(liObservaciones);
                ulPedido.appendChild(liProveedor);
                ulPedido.appendChild(liSuEstado);
                ulPedido.appendChild(liEstados);
                liPedidos.appendChild(ulPedido);
            });
            ulUsuario.appendChild(liNombre);
            ulUsuario.appendChild(liPedidos);
            divFecha.appendChild(ulUsuario);
        }

        divPedidos.appendChild(divFecha);
    }

    
    


    

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
