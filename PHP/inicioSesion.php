<?php
session_start();

if(isset($_POST['existeEmail'])) {
        existeEmail($_POST['existeEmail']);
}

if(isset($_POST['existeContrasenia'])) {
        existeContrasenia($_POST['existeContrasenia']);
}

if(isset($_POST['iniciarSesion'])) {
    iniciarSesion();
}

function existeEmail($email) {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ?;");
    $resultado -> execute(array($email));
    $existe = $resultado -> fetch();
    // Si existe ese correo envio 1 sino 0
    if($existe) {
        $_SESSION['email'] = $email;
        echo "1";
    } else {
        echo "0";
    }
    return $existe;
}

function existeContrasenia($contrasenia) {
    $contrasenia = hash('sha256', $contrasenia);
    $email = $_SESSION['email'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ? AND password=?;");
    $resultado -> execute(array($email,$contrasenia));
    $existe = $resultado -> fetch();
    // Si existe ese usuario envio 1 sino 0
    if($existe) {
        $_SESSION['contrasenia'] = $contrasenia;
        echo "1";
    } else {
        echo "0";
    }
    return $existe;
}

function iniciarSesion() {
    $email = $_SESSION['email'];
    $contrasenia = $_SESSION['contrasenia'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ? AND password='8e7ab8d9fe3b324acdd1f76735eea350ea61ac24cbd17e5446946e5a4c71d999';");
    $resultado -> execute(array($email));
    $existe = $resultado -> fetch();
    if($existe) {
        session_destroy();
        echo "../Paginas/nueva_contrasenia.html";
    } else {
        $resultado = $conexion -> prepare("SELECT admin FROM usuarios WHERE email = ? AND password=?;");
        $resultado -> execute(array($email, $contrasenia));
        $respuesta = $resultado -> fetch();
        if($respuesta['admin'] == "1") {
            session_destroy();
            echo "../Paginas/admin_inicio.html";
        } else {
            session_destroy();
            echo "../Paginas/usuario_inicio.html";
        }
    }
}
?>