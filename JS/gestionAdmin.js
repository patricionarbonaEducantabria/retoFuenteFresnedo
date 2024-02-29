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
            comprobarEsAdmin();
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


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnUsuarios").onclick = function() {
        window.location.href = "../admin/admin_gestionar_usuarios.html";
    };
    
    document.getElementById("btnPedidos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_pedidos.html";
    };
    document.getElementById("btnResiduos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_residuos.html";
    };
    
    document.getElementById("btnProductos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_productos.html";
    };
});
