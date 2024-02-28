document.addEventListener("DOMContentLoaded", function() {

    
    let imagenesEnlacesw = document.getElementById("cards_landscape_wrap-2").querySelectorAll("a");
    for(let i = 0 ; i< imagenesEnlacesw.length;i++){
        imagenesEnlacesw[i].onclick = function(){
            seccion = this.querySelector("h6").innerHTML;
            console.log(seccion);
            sessionStorage.setItem("categoria",seccion);

            window.location.href = "../usuario/usuario_carniceria.html";
        }
    }

    document.getElementById("btnHistorialPedidos").onclick = function() {
        window.location.href = "../usuario/usuario_HistorialPedidos.html";
    };

});

