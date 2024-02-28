window.onload = principal;

function principal()
{
    // miDiv.appendChild(dibujarUsuario());
    // document.body.appendChild(miDiv);
    fechasDefecto();

    let miBoton = document.getElementById("btnBuscar");
    miBoton.addEventListener("click", manejadorClickBuscar);

    recuperarHistorico();
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

function dibujarHistorico(datosSolicitud) {
    // console.log("dibujando fila: ",datosSolicitud);
    let miFila = crearElemento("ul",undefined,{"id":"solicitud" + datosSolicitud.id,"class":"padre"});
    if(datosSolicitud.tramitado == 1){
        let miEstado = crearElemento("li",undefined,{"class":"estadoCirculo circle"});
        miFila.appendChild(miEstado);
        miEstado = crearElemento("li","Esta pedido",{"class":"estadoMensaje"});
        miFila.appendChild(miEstado);
    }else if(datosSolicitud.tramitado == 0){
        let miEstado = crearElemento("li",undefined,{"class":"estadoCirculo circle2"});
        miFila.appendChild(miEstado);
        miEstado = crearElemento("li","Todavia no se ha pedido",{"class":"estadoMensaje"});
        miFila.appendChild(miEstado);
    }
    let miFecha = crearElemento("li",datosSolicitud.fecha,{"class":"fecha"});  
    miFila.appendChild(miFecha);
    let miDescripcion = crearElemento("li",datosSolicitud.descripcion,{"class":"producto"});  
    miFila.appendChild(miDescripcion);
    let miCantidad = crearElemento("li",datosSolicitud.cantidad,{"class":"cantidad"});    
    miFila.appendChild(miCantidad);
    let miUnidad = crearElemento("li",datosSolicitud.unidades,{"class":"unidad"});    
    miFila.appendChild(miUnidad);

    return miFila;
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar(e) {
    recuperarHistorico();
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function recuperarHistorico() {
    let miDiv = document.getElementById("contenedor-historico");
    miDiv.innerHTML = "";
    desde = document.getElementById("inFecha_desde").value;
    hasta = document.getElementById("inFecha_hasta").value;
    hasta += " 23:59:59";

    obtenerSolicitudes(desde, hasta, function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-historico");
        for(let i = 0; i< respuesta.length; i++) {
            console.log(respuesta[i]);
            miDiv.appendChild(dibujarHistorico(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
}

function obtenerSolicitudes(desde,hasta,callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_historicos.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // console.log(JSON.parse(miPeticion.responseText));
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datosSolicitud = {
    "desde" : desde,
    "hasta" : hasta,
    "emailUsuario" : localStorage.getItem("email")
  };
  datosSolicitud = JSON.stringify(datosSolicitud);

//   console.log("datosSolicitud: ",datosSolicitud);
  let datos = "obtenerHistorico="+ datosSolicitud;
  miPeticion.send(datos);
}

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