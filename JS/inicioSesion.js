window.onload = principal;

function principal()
{
    let botonInicioSesion = document.getElementById("btnInicio_Sesion");
    botonInicioSesion.addEventListener("click", manejadorClickInicioSesion);
}

function manejadorClickInicioSesion(e) {
    let email = document.getElementById("inEmail").value;
    let contrasenia = document.getElementById("inContrasenia").value;
    let valido = false;
    let esNuevaContrasenia = false;


    // Comprobar si el email existe en la BD
    if(emailExiste(email)) {
        //Comprobar si la contraseña es la de ese email
        valido = contraseniaValida(contrasenia);
    }

    if(valido) {
        esNuevaContrasenia = esNuevaContrasenia(contrasenia);        
    }

    if(esNuevaContrasenia) {
        //Ir a la ventana de nueva contraseña
    } else {
        //Ir a la ventana del tipo de Usuario
    }
    console.log("email: ",email, " contraseña:" , contrasenia);
}

function emailExiste(email) {

}

function contraseniaValida(contrasenia) {

}

function esNuevaContrasenia(contrasenia) {
    
}