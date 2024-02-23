<?php


    if(isset($_POST['obtenerProductos']))
    {
        obtenerProductos();
    }

    // if(isset($_POST['añadirProducto']))
    // {
    //     añadirProductos();
    // }

    // Listar los productos
    function obtenerProductos() {
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT 
            p.id,
            p.descripcion,
            u.descripcion AS unidad_descripcion,
            p.observaciones,
            p.foto
        FROM 
            productos p
        INNER JOIN 
            unidades u ON p.fk_unidades = u.id
        INNER JOIN 
            productos_categoria pc ON p.id = pc.fk_producto
        INNER JOIN 
            categorias c ON pc.fk_categoria = c.id 
        WHERE 
            c.descripcion = ?");
        $resultado -> execute(array($_POST['categoria']));
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $productos = array(
                'id' => $fila['id'],
                'nombre' => $fila['descripcion'],
                'unidad' => $fila['unidad_descripcion'],
                'observaciones' => $fila['observaciones'],
                'foto' => $fila['foto']
            );

            $datos[] = $productos;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }

    // function añadirProductos()
    // {
    //     $id_producto = $_POST['id_producto'];
    //     $cantidad = $_POST['cantidad_producto'];

    //     $productos = array();
    //     $encontrado = false;

    //     foreach ($productos as &$producto) 
    //     {
    //         // Si el ID del producto coincide, sumar la cantidad
    //         if ($producto['id'] == $id_producto) 
    //         {
    //             $producto['cantidad'] += $cantidad;
    //             $encontrado = true;
    //         }
    //     }
    
    //     // Si el producto no se encontró en el array, agregarlo
    //     if (!$encontrado) 
    //     {
    //         $nuevo_producto = array(
    //             'id' => $id_producto,
    //             'cantidad' => $cantidad
    //         );
    //         $productos[] = $nuevo_producto;
    //     }

    //     $jsonString = json_encode($productos);
    //     echo $jsonString;
    // }
?>