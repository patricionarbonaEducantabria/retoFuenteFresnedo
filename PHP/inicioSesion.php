<?php
if(isset($_POST['existeEmail'])) {
    existeEmail($_POST['existeEmail']);
}

if(isset($_POST['existeContrasenia'])) {
    existeContrasenia($_POST['existeContrasenia'], $_POST['email']);
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
?>