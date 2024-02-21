window.onload = principal;

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

        // Imprimir los datos a enviar en la consola
        console.log("Datos a enviar al servidor:", datos);

        // Enviar datos al servidor mediante AJAX
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "../PHP/nuevaContrasenia.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(datos));
    } else {
        document.getElementById("rellenadoCampos").innerHTML= "No se han rellenado todos los campos";
    }
}
