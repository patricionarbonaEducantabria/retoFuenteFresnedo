<?php
if(isset($_POST['obtenerPedidos'])) {
    obtenerPedidos();
}

function obtenerPedidos() {
    $fechas = $_POST['obtenerPedidos'];
    $fechas = json_decode($fechas);
    $desde = $fechas->desde;
    $hasta = $fechas->hasta;

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
        SELECT * FROM solicitudes WHERE fecha >= ? AND fecha <= ? ORDER BY fecha ASC;
    ");
    $resultado -> execute(array($desde, $hasta));

    $pedidos = array();
    while($fila = $resultado -> fetch()) {
        $pedido = array(
            'idSolicitud' => $fila['id'],
            'tramitado' => $fila['tramitado'],
            'fecha' => $fila['fecha'],
            'producto' => $fila['descripcion'],
            'cantidad' => $fila['cantidad'],
            'observaciones' => $fila['observaciones'],
            'idUsuario' => $fila['fk_usuario']
            );
    $pedidos[] = $pedido;
}
    

        

    $jsonString = json_encode($pedidos);
    echo $jsonString;
}
?>