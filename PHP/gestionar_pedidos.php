<?php
if(isset($_POST['obtenerPedidos'])) {
    obtenerPedidos();
}
if(isset($_POST['obtenerUsuario'])) {
    // echo "conectado";
    obtenerUsuario();
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
            'idUsuario' => $fila['fk_usuario'],
            'unidades' => $fila['unidades']
            );
    $pedidos[] = $pedido;
}
    

        

    $jsonString = json_encode($pedidos);
    echo $jsonString;
}
function obtenerUsuario() {
    $idUsuario = $_POST['obtenerUsuario'];

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
        SELECT * FROM usuarios WHERE id = ?;
    ");
    $resultado -> execute(array($idUsuario));

    $fila = $resultado -> fetch();

    $usuario = array(
        'id' => $fila['id'],
        'admin' => $fila['admin'],
        'nombre' => $fila['nombre'],
        'email' => $fila['email'],
        'activo' => $fila['activo'],
        'observaciones' => $fila['observaciones'],
        'telefono' => $fila['telefono']
        );
    

        

    $jsonString = json_encode($usuario);
    echo $jsonString;
}
?>