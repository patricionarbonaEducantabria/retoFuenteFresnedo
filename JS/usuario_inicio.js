setInterval(circuloCesta, 1000);
comprobarExisteEmail();

function circuloCesta() {
    productos = localStorage.getItem("productos");
    productos = JSON.parse(productos);
    cantidad = Object.keys(productos).length;
    console.log(cantidad);
    // circuloPuto = document.getElementById('circulo').style;
    // circuloPuto.content = cantidad;
    $('#circulo').attr("title", cantidad);
}

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


function botonAdmin() {
    miEmail = localStorage.getItem("email");

    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../../PHP/redireccion.php", true);

    miPeticion.onreadystatechange = function() {
        if (miPeticion.readyState == 4 && miPeticion.status == 200) {
            console.log("es admin: ",miPeticion.responseText);
            // callback(miPeticion.responseText);
            if(miPeticion.responseText !== "0") {
                // console.log(miPeticion.responseText);
                // console.log(document.getElementsByClassName('dropdown-menu'));
                document.getElementsByClassName('dropdown-menu')[0].innerHTML += miPeticion.responseText;
            } 
        }
    };

    miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "botonAdmin=" + miEmail;
    console.log(datos);
    miPeticion.send(datos);
}

document.addEventListener("DOMContentLoaded", function() {

    botonAdmin();
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

