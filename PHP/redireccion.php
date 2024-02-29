<?php
if(isset($_POST['comprobarExisteEmail'])) {
    comprobarExisteEmail();
}
if(isset($_POST['comprobarEsAdmin'])) {
    comprobarEsAdmin();
}
if(isset($_POST['botonAdmin'])) {
    botonAdmin();
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
function botonAdmin() {
    $email = $_POST['botonAdmin'];

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion ->prepare("SELECT * FROM usuarios WHERE email = ? AND admin = 1;");
    
    $resultado->execute(array($email));
    if($resultado->fetch()) {
        echo '<li><a class="dropdown-item" href="../admin/admin_gestion.html">Ir a administrador</a></li>';
    } else {
        echo "0";
    }
}


// <li><a class="dropdown-item" href="../usuario/usuario_inicio.html">Ir a usuario</a></li>
?>