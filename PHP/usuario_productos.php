<?php


    if(isset($_POST['obtenerProductos']))
    {
        obtenerProductos();
    }

    // Listar los productos
    function obtenerProductos() {
        $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
        $resultado = $conexion -> prepare("SELECT p.* FROM productos p INNER JOIN productos_categoria pc ON p.id = pc.fk_producto
        INNER JOIN categorias c ON pc.fk_categoria = c.id WHERE c.descripcion = ?;");
        $resultado -> execute(array($_POST['categoria']));
        $datos = array();
        while($fila = $resultado -> fetch()) {
            $productos = array(
                'id' => $fila['id'],
                'nombre' => $fila['descripcion'],
                'unidades' => $fila['fk_unidades'],
                'observaciones' => $fila['observaciones'],
                'foto' => $fila['foto'],
            );

            $datos[] = $productos;
        }

        $jsonString = json_encode($datos);
        echo $jsonString;
    }
?>