<?php
if(isset($_POST['obtenerPedidos'])) {
    obtenerPedidos();
}
if(isset($_POST['obtenerUsuario'])) {
    // echo "conectado";
    obtenerUsuario();
}
if(isset($_POST['actualizarSolicitud'])) {
    // echo "conectado";
    actualizarSolicitud();
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

function actualizarSolicitud() {
    $datosPedido = $_POST['actualizarSolicitud'];
$datosPedido = json_decode($datosPedido);
$fecha = $datosPedido->fecha;
$producto = $datosPedido->producto;
$email = $datosPedido->emailUsuario;
$cantidad = $datosPedido->cantidad;

try {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $resultado = $conexion->prepare("
        UPDATE solicitudes
        SET cantidad = ?
        WHERE fecha = ? AND descripcion = ? AND fk_usuario = (SELECT id FROM usuarios WHERE email = ?);
    ");

    $resultado->execute(array($cantidad, $fecha, $producto, $email));

    // Manejo del resultado o respuesta al cliente si es necesario
    echo "1";
} catch (PDOException $e) {
    // Manejo de errores
    echo "0";
}
}
?>