<?php
if(isset($_POST['obtenerUsuarios'])) {
    obtenerUsuarios();
}
if(isset($_POST['cambiaEstado'])) {
    cambiaEstado();
}
if(isset($_POST['cambiaCargo'])) {
    cambiaCargo();
}
if(isset($_POST['reiniciaContrasenia'])) {
    reiniciaContrasenia();
}
if(isset($_POST['modificarDatos'])) {
    modificarDatos();
}

// Listar los usuarios
function obtenerUsuarios() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM usuarios WHERE email != ?;");
    $resultado -> execute(array($_POST['email']));
    $datos = array();
    while($fila = $resultado -> fetch()) {
        $usuario = array(
            'nombre' => $fila['nombre'],
            'email' => $fila['email'],
            'telefono' => $fila['telefono'],
            'cargo' => $fila['admin'],
            'estado' => $fila['activo'],
            'id' => $fila['id'],
        );

        $datos[] = $usuario;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}

// Habilitar/Deshabilitar
function cambiaEstado(){
    $email = $_POST['cambiaEstado'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT activo FROM usuarios WHERE email = ?;");
    $resultado -> execute(array($email));
    $estado = $resultado -> fetch();
    if($estado['activo'] == '1') {
        $resultado = $conexion -> prepare("UPDATE usuarios SET activo = 0 WHERE email = ?;");
        $resultado -> execute(array($email));
    } else {
        $resultado = $conexion -> prepare("UPDATE usuarios SET activo = 1 WHERE email = ?;");
        $resultado -> execute(array($email));
    }
}

// Cambiar Cargo
function cambiaCargo(){
    $email = $_POST['cambiaCargo'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT admin FROM usuarios WHERE email = ?;");
    $resultado -> execute(array($email));
    $estado = $resultado -> fetch();
    if($estado['admin'] == '1') {
        $resultado = $conexion -> prepare("UPDATE usuarios SET admin = 0 WHERE email = ?;");
        $resultado -> execute(array($email));
    } else {
        $resultado = $conexion -> prepare("UPDATE usuarios SET admin = 1 WHERE email = ?;");
        $resultado -> execute(array($email));
    }
}

// Reiniciar Contraseña
function reiniciaContrasenia(){
    $email = $_POST['reiniciaContrasenia'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("UPDATE usuarios SET password = ? WHERE email = ?;");
    $contrasenia = hash('sha256', 'contraseña123');
    $resultado -> execute(array($contrasenia, $email));
}

// Modificar Datos
function modificarDatos(){
    $emailID = $_POST['modificarDatos'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare(
        "UPDATE usuarios 
        SET
        nombre = ?,
        email = ?,
        telefono = ?
        WHERE
        email = ?;");
    $resultado -> execute(array($nombre, $email, $telefono, $emailID));
}

?>