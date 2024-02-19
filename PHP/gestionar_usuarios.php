<?php
if(isset($_POST['obtenerUsuarios'])) {
    obtenerUsuarios();
}

function obtenerUsuarios() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM usuarios;");
    $resultado -> execute();
    $datos = array();
    while($fila = $resultado -> fetch()) {
        $usuario = array(
            'nombre' => $fila['nombre'],
            'email' => $fila['email'],
            'telefono' => $fila['telefono'],
            'cargo' => $fila['admin'],
            'estado' => $fila['activo'],
        );

        $datos[] = $usuario;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}
?>