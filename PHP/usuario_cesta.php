<?php

    if(isset($_POST['productos']))
    {
        obtenerProductos();
    }
    if(isset($_POST['crearPedido']))
    {
        crearPedido();
    }

    // funcion para listar los productos 
    function obtenerProductos() {
        // Establecer conexión con la base de datos
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        
        // Obtener el string JSON de productos enviado desde el cliente y convertirlo a un array PHP
        $productosJSON = $_POST['productos'];
        $productos = json_decode($productosJSON, true);
        
        // Consulta SQL para obtener los productos según sus IDs
        $resultado = $conexion->prepare("SELECT 
            p.id AS id,
            p.descripcion AS descripcion,
            u.descripcion AS unidad_descripcion,
            p.observaciones AS observaciones,
            p.foto AS foto
        FROM 
            productos p
        INNER JOIN 
            unidades u ON p.fk_unidades = u.id
        INNER JOIN 
            productos_categoria pc ON p.id = pc.fk_producto
        INNER JOIN 
            categorias c ON pc.fk_categoria = c.id 
        WHERE 
            p.id = ?;");
    
        // Array para almacenar los datos de los productos
        $datos = array();
        
        // Iterar sobre los IDs de los productos recibidos
        foreach($productos as $productoID) {
            // print_r($productoID["id"]);
            // Ejecutar la consulta para cada ID de producto
            $resultado->execute(array($productoID["id"]));
            
            // Obtener los datos del producto y agregarlos al array $datos
            while($fila = $resultado->fetch()) {
                $pedido = array(
                    'id' => $fila['id'],
                    'nombre' => $fila['descripcion'],
                    'cantidad' => $productoID["cantidad"],
                    'unidad' => $fila['unidad_descripcion'],
                    'observaciones' => $fila['observaciones'],
                    'foto' => $fila['foto']
                );
                $datos[] = $pedido;
            }
        }
    
        // Convertir el array $datos a formato JSON y enviarlo al cliente
        $jsonString = json_encode($datos);
        echo $jsonString;
    }

    function crearPedido() {
        // Establecer conexión con la base de datos
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        date_default_timezone_set('Europe/Madrid');
        $fecha = date('Y-m-d H:i');

        // Obtener el string JSON de productos enviado desde el cliente y convertirlo a un array PHP
        $productosJSON = $_POST['crearPedido'];
        $productos = json_decode($productosJSON, true);
        $usuario = $productos['email'];
        $observaciones = $productos['observaciones'];
        $productos = $productos['productos'];

        // Mi Json en php
        // {
        //     "email":"patricio@example.com",
        //     "productos":{
        //         "6":{"id":6,"cantidad":"25"},
        //         "9":{"id":9,"cantidad":"23"}
        //     }
        // }

        // Insertar las solicitudes de producto en SOLICITUDES
        
        try {
            $resultado = $conexion->prepare("
                INSERT INTO solicitudes 
                (fecha, descripcion, unidades, cantidad, observaciones, fk_usuario, tramitado)
                VALUES (
                    ?,
                    (SELECT descripcion FROM productos WHERE id = ?),
                    (SELECT unidades.descripcion 
                        FROM productos 
                        JOIN unidades ON productos.fk_unidades = unidades.id 
                        WHERE productos.id = ?),
                    ?,
                    ?,
                    (SELECT id FROM usuarios WHERE email = ?), 0
                );
            ");
        
            foreach ($productos as $productoID => $producto) {
                $cantidad = $producto['cantidad'];
        
                $resultado->execute(array($fecha, $productoID, $productoID, $cantidad, $observaciones, $usuario));
            }
        
            echo 1; // Éxito
        } catch (Exception $e) {
            echo 0; // Error
        }
        
        

        

    }
?>