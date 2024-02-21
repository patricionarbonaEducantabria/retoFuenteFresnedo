window.onload = principal;

function principal()
{
    // miDiv.appendChild(dibujarUsuario());
    // document.body.appendChild(miDiv);

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

function recuperarHistorico(longitud) {
    let miDiv = document.getElementById("contenedor-historico");
    miDiv.innerHTML = "";

 obtenerSolicitudes(function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el json
        let miDiv = document.getElementById("contenedor-historico");
        for(let i = 0; i< respuesta.length; i++) {
            miDiv.appendChild(dibujarHistorico(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
}

function obtenerSolicitudes(callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/gestionar_historicos.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // console.log(miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "obtenerHistorico="+localStorage.getItem("email");
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