<?php
if(isset($_POST['obtenerHistorico'])) {
    obtenerHistorico();
}

// Listar los usuarios
function obtenerHistorico() {
    $datosSolicitud = $_POST['obtenerHistorico'];
    $datosSolicitud = json_decode($datosSolicitud);
    $desde = $datosSolicitud->desde;
    $hasta = $datosSolicitud->hasta;
    $usuario = $datosSolicitud->emailUsuario;

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("SELECT * FROM solicitudes 
    where 
        fecha <= ? AND fecha <= ?
        AND
        fk_usuario = (SELECT id FROM usuarios WHERE email = ?);");
    $resultado -> execute(array($desde, $hasta,$usuario));
    $datos = array();
    while($fila = $resultado -> fetch()) {
        $solicitud = array(
            'id' => $fila['id'],
            'idUsuario' => $fila['idUsuario'],
            'fecha' => $fila['fecha'],
            'descripcion' => $fila['descripcion'],
            'unidades' => $fila['unidades'],
            'cantidad' => $fila['cantidad'],
            'observaciones' => $fila['observaciones'],
            'tramitado' => $fila['tramitado']
        );

        $datos[] = $usuario;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}

?>