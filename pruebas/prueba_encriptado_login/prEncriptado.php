<?php
// if(isset($_POST['existeEmail'])) {
//     existeEmail($_POST['existeEmail']);
// }

// if(isset($_POST['existeContrasenia'])) {
//     existeContrasenia($_POST['existeContrasenia'], $_POST['email']);
// }

// if(isset($_POST['iniciarSesion'])) {
//     iniciarSesion($_POST['contrasenia'], $_POST['email']);
// }

// function existeEmail($email) {
//     $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
//     $resultado = $conexion -> query("SELECT * FROM usuarios WHERE email = '$email';");
//     $existe = $resultado -> fetch();
//     // Si existe ese correo envio 1 sino 0
//     if($existe) {
//         echo "1";
//     } else {
//         echo "0";
//     }
//     return $existe;
// }

// function existeContrasenia($contrasenia,$email) {
//     $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
//     $resultado = $conexion -> query("SELECT * FROM usuarios WHERE email = '$email' AND password='$contrasenia';");
//     $existe = $resultado -> fetch();
//     // Si existe ese usuario envio 1 sino 0
//     if($existe) {
//         echo "1";
//     } else {
//         echo "0";
//     }
//     return $existe;
// }

// function iniciarSesion($contrasenia,$email) {
//     $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
//     $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email = ? AND password='contraseña123';");
//     $resultado -> execute(array($email));
//     $existe = $resultado -> fetch();
//     if($existe) {
//         echo "../Paginas/nueva_contrasenia.html";
//     } else {
//         $resultado = $conexion -> prepare("SELECT admin FROM usuarios WHERE email = ? AND password=?;");
//         $resultado -> execute(array($email, $contrasenia));
//         $respuesta = $resultado -> fetch();
//         if($respuesta['admin'] == "1") {
//             echo "../Paginas/admin_inicio.html";
//         } else {
//             echo "../Paginas/usuario_inicio.html";
//         }
//     }
// }



if (!isset($_SESSION['token'])):
    $token = md5(uniqid(rand(), TRUE));
    $_SESSION['token'] = $token;
    echo "puta";
else:
    echo "puta";
    $token = $_SESSION['token'];
endif;


?>