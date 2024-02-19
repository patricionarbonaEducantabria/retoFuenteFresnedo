document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    document.getElementById("btnConfirmar").addEventListener("click", function() {
        var contrasenia = document.getElementById("inContrasenia").value;
        var confirmarContrasenia = document.getElementById("inconfirmarContrasenia").value;

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

        // Si todas las validaciones pasan, enviar el formulario
        document.getElementById("loginForm").submit();
    });
});
