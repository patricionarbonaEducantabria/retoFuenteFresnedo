<?php
if(isset($_POST['obtenerHistorico'])) {
    obtenerHistorico();
}

// Listar los usuarios
function obtenerHistorico() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM solicitudes");
    $resultado -> execute();
    $datos = array();
    while($fila = $resultado -> fetch()) {
        $usuario = array(
            'id' => $fila['id'],
            'fecha' => $fila['fecha'],
            'descripcion' => $fila['descripcion'],
            'unidades' => $fila['unidades'],
            'cantidad' => $fila['cantidad'],
            'tramitado' => $fila['tramitado']
        );

        $datos[] = $usuario;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}

?>