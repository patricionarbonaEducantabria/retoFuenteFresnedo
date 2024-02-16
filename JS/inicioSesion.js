window.onload = principal;

function principal()
{
    let botonInicioSesion = document.getElementById("btnInicio_Sesion");
    botonInicioSesion.addEventListener("click", manejadorClickInicioSesion);
}

function manejadorClickInicioSesion(e) {
    comprobarInicioSesion(e);
}

function comprobarInicioSesion(e) {
    // Compruebo que los campos esten rellenados
    let rellenados = false;
    rellenados = document.getElementById("inContrasenia").value;
    if(rellenados) {
        rellenados = document.getElementById("inEmail").value;
    }

    // Si estan rellenados empiezo a comprobar si existe los datos del usuario
    if(rellenados) {
        let email = document.getElementById("inEmail").value;
        console.log(email);
    
        // Compruebo el email
        emailExiste(email, function(respuesta) {
            if(respuesta === "1") {
                let contrasenia = document.getElementById("inContrasenia").value;
                console.log("contraseña: ", contrasenia, " email: ",email);
                contraseniaExiste(contrasenia, email, function(respuesta) {
                    if(respuesta === "1") {
                        console.log("Login correcto");
                        
                    } else {
                        console.log("Login incorrecto");
                    }
                });
            } else {
                // 👀 cambiar a aviso
                console.log("Correo Incorrecto");
            }
        });
    }
}

function emailExiste(email, callback) {
    // Creo el objeto para tratar la peticion Ajax
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../PHP/inicioSesion.php", true);

  // Configurar la función de retorno de llamada
  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // Devuelvo la respuesta del servidor a la funcion de arriba
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Convertir los datos a formato JSON y enviar la solicitud
  miPeticion.send("existeEmail=" + email);
}

function contraseniaExiste(contrasenia, email, callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../PHP/inicioSesion.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "existeContrasenia=" + contrasenia +"&email=" + email;
  console.log(datos);
  miPeticion.send(datos);
}