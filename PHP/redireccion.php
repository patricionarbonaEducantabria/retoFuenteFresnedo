<?php
if(isset($_POST['comprobarExisteEmail'])) {
    comprobarExisteEmail();
}
if(isset($_POST['comprobarEsAdmin'])) {
    comprobarEsAdmin();
}


function comprobarExisteEmail() {
    $email = $_POST['comprobarExisteEmail'];

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion ->prepare("SELECT * FROM usuarios WHERE email = ?;");

    $resultado->execute(array($email));
    if($resultado->fetch()) {
        echo "1";
    } else {
        echo "0";
    }
    // echo "tu vieja";

}
function comprobarEsAdmin() {
    $email = $_POST['comprobarEsAdmin'];

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion ->prepare("SELECT * FROM usuarios WHERE email = ? AND admin = 1;");

    $resultado->execute(array($email));
    if($resultado->fetch()) {
        echo "1";
    } else {
        echo "0";
    }
}
?>