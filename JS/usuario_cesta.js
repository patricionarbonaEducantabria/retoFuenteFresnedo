window.onload = principal;

function principal() 
{
    recuperarPedido();
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
    // Boton Realizar Pedido de la cesta
    if(document.getElementById("btnPedido") != undefined)
    {
        document.getElementById("btnPedido").onclick = manejadorClickRealizarPedido;
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
    let miFila = crearElemento("ul",undefined, {"id" : datosProducto.id});
    let filita = crearElemento("li",undefined);
    let papelera = crearElemento("input",undefined,{"type":"button","value":"AQUI VA LA PAPELERA","id":"btnPapelera"});
    filita.appendChild(papelera);
    miFila.appendChild(filita);
    let foto = crearElemento("li",undefined);    
    foto.appendChild(crearElemento("img",undefined,{"src" : datosProducto.foto, "id":"foto_producto"}));   
    miFila.appendChild(foto);
    let descripcion = crearElemento("li",datosProducto.nombre, {"id":"nombre_producto"});
    miFila.appendChild(descripcion);
    let filita_1 = crearElemento("li",undefined);
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"-", "id":"btnRestar"});
    // cantidad tipo input para poder cambiar el valor a mano
    let cantidad =  crearElemento("input",undefined,{
        "type" : "text",
        "id":"cantidad_producto" + datosProducto.id,
        "placeholder" : datosProducto.cantidad,
        "value" : datosProducto.cantidad
    });
    let boton_3 = crearElemento("input",undefined,{"type":"button","value":"+", "id":"btnSumar"});
    // eventos de botones e input
    cantidad.addEventListener("input",manejadorInputCantidad);
    papelera.addEventListener("click",manejadorClickPapelera);
    boton_2.addEventListener("click",manejadorClickRestar);
    boton_3.addEventListener("click",manejadorClickSumar);
    filita_1.appendChild(boton_2);
    filita_1.appendChild(cantidad);
    filita_1.appendChild(boton_3);
    miFila.appendChild(filita_1);
    let unidades = crearElemento("li",datosProducto.unidad, {"id":"unidad_producto"});  
    miFila.appendChild(unidades);    
    // todos los productos van a tener observaciones
    let observaciones = crearElemento("li",datosProducto.observaciones, {"id":"observaciones_producto"});    
    miFila.appendChild(observaciones);
    return miFila;
}

function enviarProductos(callback)
{
    // enviar a PHP
    let miPeticion = new XMLHttpRequest();

    miPeticion.onreadystatechange = function () {
        if(miPeticion.readyState == 4 && miPeticion.status == 200) {
            // console.log(miPeticion.responseText);
            callback(miPeticion.responseText);
        }   
    }

    miPeticion.open("POST","../../PHP/usuario_cesta.php",true);
    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let productos = localStorage.getItem('productos');
    miPeticion.send("productos=" + productos);
}

function recuperarPedido(longitud)
{
    let miDiv = document.getElementById("contenedor-productos");
    // vaciamos el div
    // miDiv.innerHTML = "";

    enviarProductos(function(respuesta) {
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

function validarInputNumeros(elemento) {
    let regex = /^(\d+|\d*\.\d+)$/;
    let valor = elemento.value;
    console.log(valor);
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

function crearPedido() {
    // enviar a PHP
    let miPeticion = new XMLHttpRequest();

    miPeticion.onreadystatechange = function () {
        if(miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log(miPeticion.responseText);
        }   
    }

    miPeticion.open("POST","../../PHP/usuario_cesta.php",true);
    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let productos = localStorage.getItem('productos');
    let observaciones = document.getElementById("inObservaciones");
    if(observaciones.value === '') {
        observaciones.value = observaciones.placeholder;
    }
    
    let misDatos = {
        "email" : localStorage.getItem("email"),
        "productos" : JSON.parse(productos),
        "observaciones" : observaciones.value
    };
    misDatos = JSON.stringify(misDatos);
    miPeticion.send("crearPedido=" + misDatos);
}

function manejadorInputCantidad() {
    validarInputNumeros(this);
}
function manejadorClickSumar() {
    let inputCantidad = this.previousSibling;
    let cantidad = inputCantidad.value;
    inputCantidad.value = parseFloat(cantidad) + 1;
}
function manejadorClickRestar() {
    let inputCantidad = this.nextSibling;
    let cantidad = parseFloat(inputCantidad.value);
    if(cantidad > 0) {
        inputCantidad.value = cantidad - 1;
    }
}
function manejadorClickPapelera() {
    let ulProducto = this.parentElement.parentElement;
    let idProducto = ulProducto.id;
    let productosString = localStorage.getItem("productos");
    let productosJSON = JSON.parse(productosString); 
    

    // Eliminar el producto
    delete productosJSON[idProducto];

    // Actualizar los productos
    productosString = JSON.stringify(productosJSON);
    localStorage.setItem("productos", productosString);
    ulProducto.remove();
}
function manejadorClickRealizarPedido() {
    let ulProductos = document.getElementById("contenedor-productos").querySelectorAll("ul");
    let productosString = localStorage.getItem("productos");
    let productosJSON = JSON.parse(productosString); 
    for(let i = 0; i < ulProductos.length;i++) {
        let producto = ulProductos[i];
        let idProducto = producto.id;
        let cantidadNueva = producto.querySelector("#cantidad_producto" + producto.id).value;
        // en caso de que el usuario haya dejado el campo como 23.
        if(cantidadNueva.substr(-1) === ".") {
            cantidadNueva = cantidadNueva.slice(0,-1);
        }

        // actualizar el localStorage
        productosJSON[idProducto].cantidad = cantidadNueva;
        productosString = JSON.stringify(productosJSON);
        localStorage.setItem("productos", productosString);
        localStorage.removeItem("productos");
    }
    crearPedido();
    recuperarPedido();
}