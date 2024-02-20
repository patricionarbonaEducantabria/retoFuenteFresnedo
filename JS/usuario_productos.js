window.onload = principal;

function principal()
{
    recuperarProductos();
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

function dibujarProductos(datosProducto) {
    let miFila = crearElemento("ul",undefined,{"id":datosProducto.id});
    let descripcion = crearElemento("li",datosProducto.descripcion);
    miFila.appendChild(descripcion);
    let unidades = crearElemento("li",datosProducto.fk_unidades);  
    miFila.appendChild(unidades);
    let observaciones = crearElemento("li",datosProducto.observaciones);    
    miFila.appendChild(observaciones);
    let foto = crearElemento("li",datosProducto.foto);    
    miFila.appendChild(foto);
    // // Boton Modificar Datos
    // let filita = crearElemento("li",undefined);
    // let boton = crearElemento("input",undefined,{"type":"button","value":"Modificar Datos"});
    // boton.addEventListener("click",manejadorClickModificar);
    // filita.appendChild(boton);
    // miFila.appendChild(filita);
    return miFila;
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