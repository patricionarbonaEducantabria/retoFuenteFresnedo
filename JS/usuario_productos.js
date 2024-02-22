window.onload = principal;

function principal()
{
    recuperarProductos();
}

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("btnCarniceria") != undefined)
    {
        document.getElementById("btnCarniceria").onclick = function() {
            window.location.href = "../usuario/usuario_carniceria.html";
        };
    }
    
    if(document.getElementById("btnPescaderia") != undefined)
    {
        document.getElementById("btnPescaderia").onclick = function() {
            window.location.href = "../usuario/usuario_pescaderia.html";
        };
    }

    if(document.getElementById("btnFruteria") != undefined)
    {
        document.getElementById("btnFruteria").onclick = function() {
            window.location.href = "../usuario/usuario_fruteria.html";
        };
    }

    if(document.getElementById("btnCongelados") != undefined)
    {
        document.getElementById("btnCongelados").onclick = function() {
            window.location.href = "../usuario/usuario_congelados.html";
        };
    }

    if(document.getElementById("btnEconomatoVarios") != undefined)
    {
        document.getElementById("btnEconomatoVarios").onclick = function() {
            window.location.href = "../usuario/usuario_economato_varios.html";
        };
    }

    if(document.getElementById("btnPasteleria") != undefined)
    {
        document.getElementById("btnPasteleria").onclick = function() {
            window.location.href = "../usuario/usuario_pasteleria.html";
        };
    }

    if(document.getElementById("btnCafeteriaRestaurante") != undefined)
    {
        document.getElementById("btnCafeteriaRestaurante").onclick = function() {
            window.location.href = "../usuario/usuario_cafeteria_restaurante.html";
        };
    }

    if(document.getElementById("btnUtilesMateriales"))
    {
        document.getElementById("btnUtilesMateriales").onclick = function() {
            window.location.href = "../usuario/usuario_utiles_materiales.html";
        };
    }

    if(document.getElementById("btnPan") != undefined)
    {
        document.getElementById("btnPan").onclick = function() {
            window.location.href = "../usuario/usuario_pan.html";
        };
    }

    // boton historial pedidos
    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "../usuario/usuario_HistorialPedidos.html";
    };
});

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

function dibujarProductos(datosProducto) {
    let miFila = crearElemento("ul",undefined,{"id":datosProducto.id});
    let foto = crearElemento("li",undefined);    
    foto.appendChild(crearElemento("img",undefined,{"src" : datosProducto.foto, "id":"foto_producto"}));    
    miFila.appendChild(foto);
    let descripcion = crearElemento("li",datosProducto.nombre, {"id":"nombre_producto"});
    miFila.appendChild(descripcion);
    let unidades = crearElemento("li",datosProducto.unidad, {"id":"unidad_producto"});  
    miFila.appendChild(unidades);
    if(datosProducto.observaciones == null) {
        let observaciones = crearElemento("li","sin observaciones", {"id":"observaciones_producto"});    
        miFila.appendChild(observaciones);
    }
    else {
        let observaciones = crearElemento("li",datosProducto.observaciones, {"id":"observaciones_producto"});    
        miFila.appendChild(observaciones);
    }
    // INPUT para introducir cantidad
    let filita_1 = crearElemento("li",undefined);
    let boton_1 = crearElemento("input",undefined,{"type":"number","id":"cantidad_producto","step":"0.001"});
    filita_1.appendChild(boton_1);
    miFila.appendChild(filita_1);
    // Boton Modificar Datos
    let filita_2 = crearElemento("li",undefined);
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"Añadir a la cesta"});
    boton_2.addEventListener("click",manejadorClickAñadirProducto);
    filita_2.appendChild(boton_2);
    miFila.appendChild(filita_2);
    return miFila;
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickAñadirProducto(e)
{
    
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function añadirProductos(callback)
{
    let miPeticion = new XMLHttpRequest;
    miPeticion.open("POST", "../../PHP/usuario_productos.php", true);

    miPeticion.onreadystatechange = function() {
        if(miPeticion.readyState == 4 && miPeticion.status == 200)
        {
            console.log(miPeticion.responseText);
        }
    }

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let datos = "obtenerHistorico="+localStorage.getItem("email");
    
    miPeticion.send(datos);
}

function obtenerProductos(callback)
{
    let miCategoria = document.getElementById("categoria").textContent;
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/usuario_productos.php", true);

    miPeticion.onreadystatechange = function() {
        if(miPeticion.readyState == 4 && miPeticion.status == 200)
        {
            // console.log(miPeticion.responseText);
            callback(miPeticion.responseText);
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let datos = "obtenerProductos=&categoria=" + miCategoria;
    
    miPeticion.send(datos);
}

function recuperarProductos(longitud) {
    let miDiv = document.getElementById("contenedor-productos");
    // vaciamos el div
    // miDiv.innerHTML = "";

    obtenerProductos(function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el JSON
        // let miDiv = document.getElementById("contenedor-productos");
        for(let i = 0; i<respuesta.length; i++)
        {
            miDiv.appendChild(dibujarProductos(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
}