<?php
if(isset($_POST['obtenerPedidos'])) {
    obtenerPedidos();
}
if(isset($_POST['obtenerUsuario'])) {
    // echo "conectado";
    obtenerUsuario();
}
if(isset($_POST['obtenerProveedores'])) {
    // echo "conectado";
    obtenerProveedores();
}
if(isset($_POST['actualizarSolicitud'])) {
    // echo "conectado";
    actualizarSolicitud();
}
if(isset($_POST['tramitarSolicitud'])) {
    // echo "conectado";
    tramitarSolicitud();
}

function obtenerPedidos() {
    $fechas = $_POST['obtenerPedidos'];
    $fechas = json_decode($fechas);
    $desde = $fechas->desde;
    $hasta = $fechas->hasta;

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
    SELECT 
        solicitudes.id AS idSolicitud,
        solicitudes.fecha AS fechaSolicitud,
        solicitudes.descripcion AS productoSolicitud,
        solicitudes.cantidad AS cantidadSolicitud,
        solicitudes.unidades AS unidadSolicitud,
        solicitudes.observaciones AS observacionesSolicitud,
        solicitudes.tramitado AS estadoPedido,
        usuarios.id AS idUsuarioSolicitud,
        usuarios.email AS emailUsuarioSolicitud,
        usuarios.telefono AS telefonoUsuarioSolicitud
    FROM solicitudes 
    JOIN usuarios ON solicitudes.fk_usuario = usuarios.id
    WHERE fecha >= ? AND fecha <= ? ORDER BY fk_usuario ASC, fecha DESC;
    ");
    $resultado -> execute(array($desde, $hasta));

    $pedidos = array();
    $usuarioActual = null;
    $nombreActual = null;
    $telefonoActual = null;
    $pedidoUsuario = array();

    while ($fila = $resultado->fetch()) {
        if ($usuarioActual === null) {
            $usuarioActual = $fila['idUsuarioSolicitud'];
            $nombreActual = $fila['emailUsuarioSolicitud'];
            $telefonoActual = $fila['telefonoUsuarioSolicitud'];
            $pedidoUsuario = array(
                'idUsuario' => $usuarioActual,
                'nombreUsuario' => $nombreActual,
                'telefonoUsuario' => $telefonoActual,
                'solicitudes' => array()
                );
        }

        if ($usuarioActual !== $fila['idUsuarioSolicitud']) {
            $pedidos[] = $pedidoUsuario;
            $usuarioActual = $fila['idUsuarioSolicitud'];
            $nombreActual = $fila['emailUsuarioSolicitud'];
            $telefonoActual = $fila['telefonoUsuarioSolicitud'];
            $pedidoUsuario = array(
                'idUsuario' => $usuarioActual,
                'nombreUsuario' => $nombreActual,
                'telefonoUsuario' => $telefonoActual,
                'solicitudes' => array())
                ;
        }

        $pedido = array(
            'idSolicitud' => $fila['idSolicitud'],
            'fecha' => $fila['fechaSolicitud'],
            'producto' => $fila['productoSolicitud'],
            'cantidad' => $fila['cantidadSolicitud'],
            'unidad' => $fila['unidadSolicitud'],
            'observaciones' => $fila['observacionesSolicitud'],
            'estadoPedido' => $fila['estadoPedido'],
        );

        $pedidoUsuario['solicitudes'][] = $pedido;
    }

    // Agregar el último conjunto de solicitudes al array de pedidos
    if ($usuarioActual !== null) {
        $pedidos[] = $pedidoUsuario;
    }
    

        

    $jsonString = json_encode($pedidos);
    echo $jsonString;
}
function obtenerProveedores() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
        SELECT * FROM proveedores;
    ");
    $resultado -> execute();

    $proveedores = array();
    while($fila = $resultado -> fetch()) {
        $proveedor = array(
            'idProveedor' => $fila['id'],
            'nombre' => $fila['descripcion'],
            'telefono' => $fila['telefono'],
            'email' => $fila['email'],
            'direccion' => $fila['direccion'],
            'observaciones' => $fila['observaciones'],
            );
    $proveedores[] = $proveedor;
}
    

        

    $jsonString = json_encode($proveedores);
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

function tramitarSolicitud() {
    // let datosPedido = {
    //     "emailUsuario" : hijos[0].innerHTML.split(": ")[1] ,
    //     "fecha" : hijos[1].innerHTML.split(": ")[1],
    //     "producto" : hijos[2].innerHTML.split(": ")[1],
    //     "cantidad" : hijos[3].innerHTML.split(": ")[1],
    //     "observaciones" : hijos[4].innerHTML.split(": ")[1],
    //     "telefono" : hijos[5].innerHTML.split(": ")[1],
    //     "estado" : hijos[6].innerHTML.split(": ")[1]
    // };
    $datosPedido = $_POST['tramitarSolicitud'];
    $datosPedido = json_decode($datosPedido);
    $email = $datosPedido->emailUsuario;
    $fecha = $datosPedido->fecha;
    $producto = $datosPedido->producto;
    $tramite = $datosPedido->estado;


        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        // $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $resultado = $conexion->prepare("
        UPDATE solicitudes
        SET tramitado = ?
        WHERE fecha = ? AND descripcion = ? AND fk_usuario = (SELECT id FROM usuarios WHERE email = ?);
        ");

        $resultado->execute(array($tramite, $fecha, $producto, $email));
        if($tramite == 0) {
            echo "1";
        } else {
            echo "0";
        }
}
?>