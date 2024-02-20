<?php
if(isset($_POST['Buscar'])) {
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
            'estado' => $fila['tramitado'],
            'descripcion' => $fila['descripcion'],
            'cantidad' => $fila['cantidad'],
            'unidades' => $fila['unidades'],
        );

        $datos[] = $usuario;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}

?>