<?php
if(isset($_POST['existeEmail'])) {
    existeEmail($_POST['existeEmail']);
}

if(isset($_POST['existeContrasenia'])) {
    existeContrasenia($_POST['existeContrasenia'], $_POST['email']);
}

if(isset($_POST['iniciarSesion'])) {
    iniciarSesion($_POST['contrasenia'], $_POST['email']);
}

function existeEmail($email) {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> query("SELECT * FROM usuarios WHERE email = '$email';");
    $existe = $resultado -> fetch();
    // Si existe ese correo envio 1 sino 0
    if($existe) {
        echo "1";
    } else {
        echo "0";
    }
    return $existe;
}

function existeContrasenia($contrasenia,$email) {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> query("SELECT * FROM usuarios WHERE email = '$email' AND password='$contrasenia';");
    $existe = $resultado -> fetch();
    // Si existe ese usuario envio 1 sino 0
    if($existe) {
        echo "1";
    } else {
        echo "0";
    }
    return $existe;
}

function iniciarSesion($contrasenia,$email) {
    // Primero compruebo si esta puesta la contraseña por defecto
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> query("SELECT * FROM usuarios WHERE email = '$email' AND password='contraseña123';");
    $existe = $resultado -> fetch();
    // Si existe ese usuario envio 1 sino 0
    if($existe) {
        echo "../Paginas/nueva_contrasenia.html";
    } else {
        $resultado = $conexion -> query("SELECT admin FROM usuarios WHERE email = '$email' AND password='$contrasenia';");
        $respuesta = $resultado -> fetch();
        if($respuesta['admin'] == "1") {
            echo "../Paginas/admin_inicio.html";
        } else {
            echo "../Paginas/usuario_inicio.html";
        }
    }
    return $existe;
}
?>