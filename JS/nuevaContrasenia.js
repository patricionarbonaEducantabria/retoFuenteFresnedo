window.onload = principal;

function principal() {
    let botonConfirmar = document.getElementById("btnConfirmar");
    botonConfirmar.addEventListener("click", enviarDatos);
}

function enviarDatos() {
    let contrasenia = document.getElementById("inContrasenia").value;
    let confirmarContrasenia = document.getElementById("inConfirmarContrasenia").value;

    if (contrasenia && confirmarContrasenia) {
        if (contrasenia !== confirmarContrasenia) {
            alert("Las contraseñas ingresadas no coinciden.");
            return;
        }

        let correoUsuario = localStorage.getItem("email"); // Obtener el correo del localStorage
        if (!correoUsuario) {
            alert("No se encontró el correo del usuario en el almacenamiento local.");
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
        alert("Rellena todos los campos");
    }
}
