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
        let email = document.getElementById("inEmail").value.toLowerCase();
        console.log(email);
    
        // Compruebo el email
        emailExiste(email, function(respuesta) {
            if(respuesta === "1") {
                let contrasenia = document.getElementById("inContrasenia").value;
                console.log("contraseña: ", contrasenia, " email: ",email);
                contraseniaExiste(contrasenia, function(respuesta) {
                    if(respuesta === "1") {
                        // Y si el login es correcto iniciamos sesion
                        // la dirección de a que página tenemos que ir nos lo entrega el servidor
                        // (El servidor hace la comprobación de si la contraseña es nueva, tenemos que ir
                        // a la pagina de usuario o de admin)
                        iniciarSesion(email, contrasenia);
                        console.log("Login correcto");
                    } else {
                        // 👀 cambiar a aviso
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
        console.log("respuesta email",miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // Convertir los datos a formato JSON y enviar la solicitud
  miPeticion.send("existeEmail=" + email);
}

function contraseniaExiste(contrasenia, callback) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../PHP/inicioSesion.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        console.log("respuesta contraseña",miPeticion.responseText);
        callback(miPeticion.responseText);
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "existeContrasenia=" + contrasenia;
  console.log(datos);
  miPeticion.send(datos);
}

function iniciarSesion(email, contrasenia) {
    let miPeticion = new XMLHttpRequest();

    miPeticion.open("POST", "../PHP/inicioSesion.php", true);

  miPeticion.onreadystatechange = function() {
    if (miPeticion.readyState == 4 && miPeticion.status == 200) {
        // Recupero la ruta de la pagina a la que ir
        console.log("respuesta login",miPeticion.responseText);
        localStorage.setItem('email', email);
        localStorage.setItem('contrasenia', contrasenia);
        window.location.href = miPeticion.responseText;
    }
  };

  miPeticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let datos = "iniciarSesion=2";
  miPeticion.send(datos);
}

function mostrarContrasenia() {
    let contrasenia = document.getElementById("inContrasenia");
    let visualizarContraseña = document.getElementById("visualizarContraseña");
    
    if (visualizarContraseña.checked) {
        contrasenia.type = "text";
    } else {
        contrasenia.type = "password";
    }
}
