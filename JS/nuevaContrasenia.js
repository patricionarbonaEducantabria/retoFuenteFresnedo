document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&#¡.])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    document.getElementById("btnConfirmar").addEventListener("click", function() {
        let contrasenia = document.getElementById("inContrasenia").value;
        let confirmarContrasenia = document.getElementById("inConfirmarContrasenia").value;

            // Si estan rellenados empiezo a comprobar si existe los datos del usuario
            if(contrasenia && confirmarContrasenia) {
            // Validar la nueva contraseña con la expresión regular
            if (!regex.test(contrasenia)) {
                alert("La nueva contraseña no cumple con los requisitos de seguridad.");
                return;
            }

            // Verificar si las contraseñas ingresadas coinciden
            if (contrasenia !== confirmarContrasenia) {
                alert("Las contraseñas ingresadas no coinciden.");
                return;
            }
        }else {
            alert("Rellena todos los campos");
            return;
        }
        // Si todas las validaciones pasan, enviar el formulario
        document.getElementById("loginForm").submit();
    });
});
