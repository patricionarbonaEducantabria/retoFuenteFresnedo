<?php


    if(isset($_POST['obtenerProductos']))
    {
        obtenerProductos();
    }

    // Listar los productos
    function obtenerProductos() {
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT p.descripcion AS producto, u.descripcion AS unidad FROM productos AS p
        JOIN productos_categoria AS pc ON p.id = pc.fk_producto JOIN categorias AS c ON pc.fk_categoria = c.id
        JOIN unidades AS u ON p.fk_unidades = u.id WHERE c.descripcion = ?");
        $resultado -> execute(array($_POST['categoria']));
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $productos = array(
                'id' => $fila['id'],
                'nombre' => $fila['descripcion'],
                'unidades' => $fila['fk_unidades'],
                'cantidad' => $fila['unidad'],
                'observaciones' => $fila['observaciones'],
                'foto' => $fila['foto']
            );

            $datos[] = $productos;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }
?>