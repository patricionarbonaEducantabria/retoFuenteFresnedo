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

function dibujarHistorico(datosUsuario) {
    let miFila = crearElemento("div",undefined,{"id":datosUsuario.id,"class":"parent"});
    if(datosUsuario.tramitado == 1){
        miEstado = crearElemento("p",undefined,{"id":"circle","class":"div1"})
        miFila.appendChild(miEstado);
        miEstado = crearElemento("p","Tramitado",{"class":"div2"})
        miFila.appendChild(miEstado);
    }else if(datosUsuario.tramitado == 0){
        let miEstado = crearElemento("p",undefined,{"id":"circle2","class":"div1"})
        miFila.appendChild(miEstado);
        miEstado = crearElemento("p","En tramite",{"class":"div2"})
        miFila.appendChild(miEstado);
    }
    let miDescripcion = crearElemento("p",datosUsuario.descripcion,{"class":"div3"});  
    miFila.appendChild(miDescripcion);
    let miCantidad = crearElemento("p",datosUsuario.cantidad,{"class":"div4"});    
    miFila.appendChild(miCantidad);
    let miUnidad = crearElemento("p",datosUsuario.unidades,{"class":"div5"});    
    miFila.appendChild(miUnidad);

    return miFila;
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickBuscar(e) {
    buscadorFecha();
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function recuperarHistorico() {
    let miDiv = document.getElementById("contenedor-historico");
    miDiv.innerHTML = "";
    if(typeof(desde) === "undefined" && typeof(hasta) === "undefined") {
        // valores por defecto de fechas
        desde = document.getElementById("inFecha_desde").value;
        hasta = document.getElementById("inFecha_hasta").value;
    }
 obtenerSolicitudes(desde, hasta, function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-historico");
        for(let i = 0; i< respuesta.length; i++) {
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
        // console.log(miPeticion.responseText);
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

  console.log("datosSolicitud: ",datosSolicitud);
  let datos = "obtenerHistorico="+ datosSolicitud;
  miPeticion.send(datos);
}

function buscadorFecha(){

    let miDiv = document.getElementById("contenedor-historico");
    miDiv.innerHTML = "";

 obtenerSolicitudes(function(respuesta) {
        respuesta = JSON.parse(respuesta);

let miDiv = document.getElementById("contenedor-historico");

//recupero los valores de los input date (yyyy-mm-dd)

let fechaHace = document.getElementById("fecha_desde").value;
let fechaHasta = document.getElementById("fecha_hasta").value

            if(fechaHace !== "" && fechaHasta !== ""){
                //filtro el array por fecha 
                muestra = respuesta.filter( n=> n.fecha > fechaHace && n.fecha <= fechaHasta)
                //recorro el array para crear los elementos

                for(let i = 0; i< muestra.length; i++){
                    miDiv.appendChild(dibujarHistorico(muestra[i]));
                    console.error("salta la primera");     
                }
               
            }else if(fechaHasta === ""){
                muestra = respuesta.filter(n => n.fecha > fechaHace);
                console.warn(muestra);
                for(let i = 0; i< muestra.length; i++){
                    miDiv.appendChild(dibujarHistorico(muestra[i]));
                    console.error("salta la segunda");
                }
            }
        
    document.body.appendChild(miDiv);
    });
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