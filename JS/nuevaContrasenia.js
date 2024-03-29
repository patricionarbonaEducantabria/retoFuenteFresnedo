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

function principal() {
    let botonConfirmar = document.getElementById("btnConfirmar");
    botonConfirmar.addEventListener("click", enviarDatos);

    document.addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es Enter (código de tecla 13)
        if (event.key === 'Enter') {
            // Disparar el evento click en el botón de Iniciar sesión
            botonConfirmar.click();
        }
    });

    let checkboxMostrar = document.getElementById("visualizarContraseña");
    checkboxMostrar.addEventListener("change", mostrarContrasenas);
}

function mostrarContrasenas() {
    let inputContrasenia = document.getElementById("inContrasenia");
    let inputConfirmarContrasenia = document.getElementById("inConfirmarContrasenia");
    let checkboxMostrar = document.getElementById("visualizarContraseña");

    if (checkboxMostrar.checked) {
        inputContrasenia.type = "text";
        inputConfirmarContrasenia.type = "text";
    } else {
        inputContrasenia.type = "password";
        inputConfirmarContrasenia.type = "password";
    }
}
function comprobarContrasenia(contrasenia) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&#¡.])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    return regex.test(contrasenia);
}

function enviarDatos() {
    let contrasenia = document.getElementById("inContrasenia").value;
    let confirmarContrasenia = document.getElementById("inConfirmarContrasenia").value;
    let correoUsuario = localStorage.getItem("email"); // Obtener el correo del localStorage
    document.getElementById("errorNuevaContrasenia").innerHTML= "";
    document.getElementById("errorConfirmarContrasenia").innerHTML= "";
    document.getElementById("rellenadoCampos").innerHTML= "";

    if (contrasenia && confirmarContrasenia) {
        // Validar la nueva contraseña con la expresión regular
        if (!comprobarContrasenia(contrasenia)) {
            document.getElementById("errorNuevaContrasenia").innerHTML= "La nueva contraseña no cumple con los requisitos de seguridad.";
            return;
        }

        // Verificar si las contraseñas ingresadas coinciden
        if (contrasenia !== confirmarContrasenia) {
            document.getElementById("errorConfirmarContrasenia").innerHTML= "Las contraseñas ingresadas no coinciden.";
            return;
        }
        // Crear objeto con los datos a enviar
        let datos = {
            "correo": correoUsuario,
            "contrasenia": contrasenia
        };

        // Enviar datos al servidor mediante AJAX
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "../PHP/nuevaContrasenia.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Redirigir a la página de inicio
                    window.location.href = "../index.html"; // Cambia la ruta según la ubicación de tu página de inicio
                } else {
                    // Manejo de errores en la respuesta del servidor
                    console.error("Error al actualizar la contraseña:", xhr.statusText);
                    // Aquí puedes mostrar un mensaje de error o realizar otras acciones necesarias
                }
            }
        };
        xhr.send(JSON.stringify(datos));
    } else {
        document.getElementById("rellenadoCampos").innerHTML= "No se han rellenado todos los campos";
    }
}

