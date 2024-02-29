<?php
if(isset($_POST['obtenerSolicitudes'])) {
    obtenerSolicitudes();
}
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
if(isset($_POST['obtenerEstados'])) {
    // echo "conectado";
    obtenerEstados();
}
if(isset($_POST['obtenerEstado'])) {
    // echo "conectado";
    obtenerEstado();
}
if(isset($_POST['actualizarSolicitud'])) {
    // echo "conectado";
    actualizarSolicitud();
}
if(isset($_POST['tramitarSolicitud'])) {
    // echo "conectado";
    tramitarSolicitud();
}
if(isset($_POST['hacerPedidoObtenerSolicitudes'])) {
    // echo "conectado";
    hacerPedidoObtenerSolicitudes();
}
if(isset($_POST['hacerPedido'])) {
    // echo "conectado";
    hacerPedido();
}
if(isset($_POST['actualizarPedido'])) {
    // echo "conectado";
    actualizarPedido();
}


function hacerPedidoObtenerSolicitudes() {
    $idSolicitudes = $_POST['hacerPedidoObtenerSolicitudes'];
    $idSolicitudes = json_decode($idSolicitudes);

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion ->prepare("SELECT * FROM solicitudes WHERE id = ? and tramitado = 1;");

    $solicitudes = [];
    
    foreach($idSolicitudes as $solicitud) {
        $resultado->execute(array($solicitud));

        if($fila = $resultado -> fetch()) {
            $solicitud = array(
                "idSolicitud" => $fila['id'],
                "fechaSolicitud" => $fila['fecha'],
                "productoSolicitud" => $fila['descripcion'],
                "unidadesSolicitud" => $fila['unidades'],
                "cantidadSolicitud" => $fila['cantidad'],
                "observacionesSolicitud" => $fila['observaciones'],
                "idUsuario" => $fila['fk_usuario']
            );
            $solicitudes[] = $solicitud;
        }
    }

    $jsonString = json_encode($solicitudes);
    echo $jsonString;
}


function obtenerSolicitudes() {
    $fechas = $_POST['obtenerSolicitudes'];
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
function obtenerPedidos() {
    $fechas = $_POST['obtenerPedidos'];
    $fechas = json_decode($fechas);
    $desde = $fechas->desde;
    $hasta = $fechas->hasta;

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $pedidos = [];

    try {
        // Comenzar una transacción
        $conexion->beginTransaction();

        // Preparar y ejecutar la consulta para obtener fechas y pedidos
        $consulta = $conexion->prepare("
        SELECT
        pedidos.fecha AS fecha,
        pedidos.fk_usuario AS idUsuario,
        usuarios.email AS usuario,
        linea_pedido.descripcion AS producto,
        linea_pedido.cantidad AS cantidad,
        linea_pedido.unidades AS unidades,
        linea_pedido.observaciones AS observaciones,
        estados.descripcion AS estado,
        pedidos.id AS idPedido,
        proveedores.descripcion AS nombreProveedor,
        proveedores.telefono AS telefonoProveedor
        FROM pedidos
        JOIN usuarios ON pedidos.fk_usuario = usuarios.id
        JOIN linea_pedido ON pedidos.id = linea_pedido.fk_pedido
        JOIN estados ON pedidos.fk_estado = estados.id
        JOIN proveedores ON pedidos.fk_proveedor = proveedores.id
        WHERE pedidos.fecha >= ? AND pedidos.fecha <= ?
        ORDER BY pedidos.fecha DESC, pedidos.fk_usuario;
        ");
        $consulta->execute([$desde, $hasta]);

        // Procesar los resultados
        while ($fila = $consulta->fetch()) {
            $fecha = $fila['fecha'];
            $idUsuario = $fila['idUsuario'];
            $usuario = $fila['usuario'];

            // Agregar el usuario y sus pedidos al array de pedidos por fecha
            if (!isset($pedidos[$fecha])) {
                $pedidos[$fecha] = [];
            }

            // Agregar el usuario y sus pedidos al array de pedidos por usuario
            if (!isset($pedidos[$fecha][$idUsuario])) {
                $pedidos[$fecha][$idUsuario] = [
                    'idUsuario' => $idUsuario,
                    'usuario' => $usuario,
                    'pedidos' => [],
                ];
            }

            // Agregar el pedido al array de pedidos del usuario
            $pedidos[$fecha][$idUsuario]['pedidos'][] = [
                'idPedido' => $fila['idPedido'],
                'producto' => $fila['producto'],
                'cantidad' => $fila['cantidad'],
                'unidades' => $fila['unidades'],
                'observaciones' => $fila['observaciones'],
                'estado' => $fila['estado'],
                'proveedor' => [
                    "nombre" => $fila['nombreProveedor'],
                    "telefono" => $fila['telefonoProveedor'],
                ]
            ];
        }

        // Confirmar la transacción
        $conexion->commit();

        $json_resultado = json_encode($pedidos);
        echo $json_resultado;
    } catch (PDOException $e) {
        // Si hay un error, deshacer la transacción
        $conexion->rollBack();
        echo "error";
    }
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
function obtenerEstados() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
        SELECT * FROM estados;
    ");
    $resultado -> execute();

    $estados = array();
    while($fila = $resultado -> fetch()) {
        $estado = array(
            'idEstado' => $fila['id'],
            'estado' => $fila['descripcion'],
            'observaciones' => $fila['observaciones'],
            );
    $estados[] = $estado;
}
    

        

    $jsonString = json_encode($estados);
    echo $jsonString;
}
function obtenerEstado() {
    $idPedido = $_POST['obtenerEstado'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    $resultado = $conexion -> prepare("
        SELECT estados.descripcion AS estado FROM pedidos
        JOIN estados ON pedidos.fk_estado = estados.id 
        WHERE pedidos.id = ?;
    ");
    $resultado -> execute(array($idPedido));

    $fila = $resultado->fetch();

    $estado = $fila['estado'];

    echo $estado;
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
    $idSolicitud = $datosPedido->id;
    $cantidadSolicitud = $datosPedido->cantidad;

    try {
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $resultado = $conexion->prepare("
            UPDATE solicitudes
            SET cantidad = ?
            WHERE id = ?;
        ");

        $resultado->execute(array($cantidadSolicitud, $idSolicitud));

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
    $idSolicitud = $_POST['tramitarSolicitud'];



    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    try {

        // Comenzar una transacción
        $conexion->beginTransaction();

        // Consulta para actualizar el campo tramitado
        $update_sql = "UPDATE solicitudes
                    SET tramitado = CASE WHEN tramitado = 1 THEN 0 ELSE 1 END
                    WHERE id = ?";

        // Preparar y ejecutar la consulta de actualización
        $resultado = $conexion->prepare($update_sql);
        $resultado->execute(array($idSolicitud));

        // Consulta para obtener el nuevo valor de tramitado
        $select_sql = "SELECT tramitado FROM solicitudes WHERE id = ?";
        
        // Preparar y ejecutar la consulta de selección
        $resultado = $conexion->prepare($select_sql);
        $resultado->execute(array($idSolicitud));

        // Obtener el resultado
        $nuevo_valor_tramitado = $resultado->fetchColumn();

        // Confirmar la transacción
        $conexion->commit();

        echo $nuevo_valor_tramitado;
    } catch (PDOException $e) {
        // Si hay un error, deshacer la transacción
        $conexion->rollBack();
        echo "error";
    }


}
function hacerPedido() {
    // datosPedido.push({
    //     "idUsuario" : idUsuario,
    //     "idSolicitud" : idSolicitud,
    //     "producto" : productoSolicitud,
    //     "cantidad" : cantidadSolicitud,
    //     "unidades" : unidadesSolicitud,
    //     "observaciones" : observacionesSolicitud,
    //     "idProveedor" : idProveedorSolicitud
    // });
    // Obtengo el array de pedidos
    $pedidos = $_POST['hacerPedido'];
    $pedidos = json_decode($pedidos);

    date_default_timezone_set('Europe/Madrid');
    $fechaHoy = date('Y-m-d');


    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    try {

        // Comenzar una transacción
        $conexion->beginTransaction();


        $resultado = $conexion->prepare("INSERT INTO pedidos (fecha, fk_proveedor, fk_estado, fk_usuario, observaciones) 
        VALUES (? , ? ,?, ?, ?);
        ");

        $pedidoSQL = $conexion->prepare("INSERT INTO linea_pedido 
        (fk_pedido, descripcion, cantidad, unidades, observaciones) 
        VALUES (?, ?, ?, ?, ?);
        ");

        foreach($pedidos as $solicitud) {
            $idProveedor = $solicitud->idProveedor;
            $idUsuario = $solicitud->idUsuario;
            $observaciones = $solicitud->observaciones;

            $resultado->execute(array($fechaHoy, $idProveedor, 1, $idUsuario, $observaciones));

            $idUltimoPedido = $conexion->lastInsertId();

            $producto = $solicitud->producto;
            $cantidad = $solicitud->cantidad;
            $unidades = $solicitud->unidades;
            $observaciones = $solicitud->observaciones;

            $pedidoSQL->execute(array($idUltimoPedido, $producto, $cantidad, $unidades, $observaciones));
        }

        // Confirmar la transacción
        $conexion->commit();

        echo "1";
    } catch (PDOException $e) {
        // Si hay un error, deshacer la transacción
        $conexion->rollBack();
        echo "0";
    }


}
function actualizarPedido() {

    $pedido = $_POST['actualizarPedido'];
    $pedido = json_decode($pedido);
    $idPedido = $pedido->idPedido;
    $idEstado = $pedido->idEstado;

    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    try {

        // Comenzar una transacción
        $conexion->beginTransaction();


        $resultado = $conexion->prepare("UPDATE pedidos
        SET fk_estado = ?
        WHERE id = ?;        
        ");

        $resultado->execute(array($idEstado, $idPedido));

        // Confirmar la transacción
        $conexion->commit();

        echo "1";
    } catch (PDOException $e) {
        // Si hay un error, deshacer la transacción
        $conexion->rollBack();
        echo "0";
    }


}
?>