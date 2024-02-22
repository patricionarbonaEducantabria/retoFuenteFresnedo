window.onload = principal;

function principal() {

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