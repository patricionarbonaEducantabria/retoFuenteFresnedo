<?php

    if(isset($_POST['productos']))
    {
        obtenerProductos();
    }

    // funcion para listar los productos 
    function obtenerProductos()
    {
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        $productosJSON = $_POST['productos'];
        $productos = json_decode($productosJSON, true);
        
        $resultado = $conexion -> prepare("SELECT 
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

        // PROBLEMA DEL ARRAY LO PASA COMO STRING
        print_r($productos);
        
        for($i =0; $i < $productos; $i++)
        {
            $resultado -> execute($productos[$i]['id']);
            $pedido = array();
            while($fila = $resultado -> fetch()) {
                $pedido = array(
                    'id' => $fila['id'],
                    'nombre' => $fila['descripcion'],
                    'unidad' => $fila['unidad_descripcion'],
                    'observaciones' => $fila['observaciones'],
                    'foto' => $fila['foto']
                );
                $datos[] = $pedido;
            }
        }

        $jsonString = json_encode($datos);
        print_r($datos);
        echo $jsonString;
    }
?>