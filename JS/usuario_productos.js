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
            // comprobarEsAdmin();
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
    // document.getElementById("errores").innerHTML = "";
    popUpAñadido();
    popUpError();
    
    categoriaSeleccionada = sessionStorage.getItem("categoria");
    recuperarProductos(categoriaSeleccionada);

    window.onscroll = function() {
        scrollFunction();
    }; 
    setInterval(circuloCesta, 1000);
}

function circuloCesta() {
    productos = localStorage.getItem("productos");
    productos = JSON.parse(productos);
    cantidad = Object.keys(productos).length;
    console.log(cantidad);
    // circuloPuto = document.getElementById('circulo').style;
    // circuloPuto.content = cantidad;
    $('#circulo').attr("title", cantidad);
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("btnCarniceria") != undefined)
    {
        document.getElementById("btnCarniceria").onclick = function() {
            // window.location.href = "../usuario/usuario_carniceria.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }
    
    if(document.getElementById("btnPescaderia") != undefined)
    {
        document.getElementById("btnPescaderia").onclick = function() {
            // window.location.href = "../usuario/usuario_pescaderia.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnFruteria") != undefined)
    {
        document.getElementById("btnFruteria").onclick = function() {
            // window.location.href = "../usuario/usuario_fruteria.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnCongelados") != undefined)
    {
        document.getElementById("btnCongelados").onclick = function() {
            // window.location.href = "../usuario/usuario_congelados.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnEconomatoVarios") != undefined)
    {
        document.getElementById("btnEconomatoVarios").onclick = function() {
            // window.location.href = "../usuario/usuario_economato_varios.html";
            categoria = this.value;
            // console.log(categoria);
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnPasteleria") != undefined)
    {
        document.getElementById("btnPasteleria").onclick = function() {
            // window.location.href = "../usuario/usuario_pasteleria.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnCafeteriaRestaurante") != undefined)
    {
        document.getElementById("btnCafeteriaRestaurante").onclick = function() {
            // window.location.href = "../usuario/usuario_cafeteria_restaurante.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnUtilesMateriales"))
    {
        document.getElementById("btnUtilesMateriales").onclick = function() {
            // window.location.href = "../usuario/usuario_utiles_materiales.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

    if(document.getElementById("btnPanaderia") != undefined)
    {
        document.getElementById("btnPanaderia").onclick = function() {
            // window.location.href = "../usuario/usuario_pan.html";
            categoria = this.value;
            recuperarProductos(categoria);
        };
    }

});

function dibujarModalError(idModal, titulo,elementosCuerpo,elementosFooter) {
    let miDiv = crearElemento("div",undefined,{"id":"modal-" +idModal, "class": "modal"});
    let modalDialog = crearElemento("div",undefined,{"class": "modal-dialog"});
    let modalContent = crearElemento("div",undefined, {"class": "modal-content"});
    // Contenido Header
    let modalHeader = crearElemento("div",undefined, {"class": "modal-header"});
    let modalTitulo = crearElemento("h1", titulo, {"class" : "modal-title"});
    // let modalCierre = crearElemento("button",undefined,{
    //     "type" : "button",
    //     "class" : "btn-close",
    //     "data-bs-dismiss" : "modal",
    //     "aria-label" : "Close"
    // });
    modalHeader.appendChild(modalTitulo);
    // modalHeader.appendChild(modalCierre);
    // Contenido Body
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // let modalBody = crearElemento("div",undefined, {"class": "modal-body"});

    if(elementosCuerpo !== undefined) {
        modalBody.appendChild(elementosCuerpo);
    }

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Contenido footer
    // let modalFooter = crearElemento("div",undefined, {"class": "modal-footer"});
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
    // modalContent.appendChild(modalBody);
    // modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    miDiv.appendChild(modalDialog);

    return miDiv;
}

function popUpAñadido() {
    idModal = "Popup-add";
    tituloModal = "Producto añadido";
    miModal = dibujarModalError(idModal,tituloModal);
    document.body.appendChild(miModal);
}
function popUpError(){
    idModal = "Popup-error";
    tituloModal = "Introduce una cantidad";
    miModal = dibujarModalError(idModal,tituloModal);
    document.body.appendChild(miModal);
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
    let miFila = crearElemento("ul",undefined);
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
    let caja_texto = crearElemento("input",undefined,{"type":"text","id":"cantidad_"+datosProducto.id,"step":"0.001", "min":"0"});
    caja_texto.addEventListener("input",manejadorInputCantidad);
    filita_1.appendChild(caja_texto);
    miFila.appendChild(filita_1);
    // Boton Modificar Datos
    let filita_2 = crearElemento("li",undefined);
    let boton_2 = crearElemento("input",undefined,{"type":"button","value":"Añadir a la cesta"});
    let parrafo = crearElemento("p","",{"id":"errores_"+datosProducto.id});
    boton_2.addEventListener("click", function() {
        manejadorClickAñadirProducto(datosProducto.id);
    });
    filita_2.appendChild(boton_2);
    filita_2.appendChild(parrafo);
    miFila.appendChild(filita_2);
    return miFila;
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

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓MANEJADORES ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function manejadorClickAñadirProducto(idProducto)
{
    let miCantidad = document.getElementById("cantidad_"+idProducto).value;
    if (miCantidad === "" || miCantidad === null) 
    {
        $("#modal-Popup-error").modal('show');
        setTimeout(function() {
            $("#modal-Popup-error").modal('hide');
            }, 700);
    } 
    else 
    {
        $("#modal-Popup-add").modal('show');
        
        // ESTILO MENSAJE DE ERRORES
        almacenarProductos(idProducto, miCantidad);
        
        // Desaparecer el mensaje después de 2 segundos (2000 milisegundos)
        setTimeout(function() {
        $("#modal-Popup-add").modal('hide');
        }, 700);
    }
}
function manejadorInputCantidad() {
    validarInputNumeros(this);
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ MANEJADORES ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function almacenarProductos(idProducto, miCantidad)
{
    // console.log("ID: "+idProducto);
    // console.log("Cantidad: "+miCantidad);
    // verificimos si existe productos en el localStorage
    let productos;
    if (localStorage.getItem('productos') !== null && localStorage.getItem('productos') !== undefined) 
    {
        productos = JSON.parse(localStorage.getItem('productos'));
    }
    else 
    {
        productos = {};
    }

    // verificamos si el producto ya existe en el objeto 'productos'
    if(productos.hasOwnProperty(idProducto))
    {
        // sumamos
        productos[idProducto].cantidad = parseInt(productos[idProducto].cantidad) + parseInt(miCantidad);
    }
    else 
    {
        productos[idProducto] = {
            id : idProducto,
            cantidad : miCantidad
        };
    }

    // Almacenamos el objeto
    localStorage.setItem('productos', JSON.stringify(productos));
    // para que el cajon de texto vuelve a esta vacio
    document.getElementById("cantidad_"+idProducto).value = "";
}

function obtenerProductos(categoria,callback)
{
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST","../../PHP/usuario_productos.php", true);

    miPeticion.onreadystatechange = function() {
        if(miPeticion.readyState == 4 && miPeticion.status == 200)
        {
            // console.log(miPeticion.responseText);
            callback(miPeticion.responseText);
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let datos = "obtenerProductos=&categoria=" + categoria;
    
    miPeticion.send(datos);
}

function recuperarProductos(categoria) {
    let miDiv = document.getElementById("contenedor-productos");
    // vaciamos el div
    miDiv.innerHTML = "";
    

    obtenerProductos(categoria,function(respuesta) {
        respuesta = JSON.parse(respuesta);
        // recorro el JSON
        // let miDiv = document.getElementById("contenedor-productos");
        let h1Categoria = crearElemento("h1",categoria);
        miDiv.appendChild(h1Categoria);
        console.log(typeof(categoria));
        // document.getElementById("categoria").innerHTML = categoria;
        for(let i = 0; i<respuesta.length; i++)
        {
            miDiv.appendChild(dibujarProductos(respuesta[i]));
        }
        document.body.appendChild(miDiv);
    });
}