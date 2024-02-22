<?php
if(isset($_POST['obtenerProductos'])) {
    obtenerProductos();
}
if(isset($_POST['modificarProducto'])) {
    modificarProducto();
}
if(isset($_POST['addProducto'])) {
    addProducto();
}

// Listar los usuarios
function obtenerProductos() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("
    SELECT productos.id AS producto_id, 
    productos.descripcion AS producto_descripcion, 
    unidades.descripcion AS unidad_descripcion, 
    productos.observaciones AS producto_observaciones, 
    productos.foto AS producto_foto, 
    categorias.descripcion AS categoria_descripcion,
    residuos.descripcion AS residuo_descripcion
FROM productos
INNER JOIN unidades ON productos.fk_unidades = unidades.id
LEFT JOIN productos_categoria ON productos.id = productos_categoria.fk_producto
LEFT JOIN categorias ON productos_categoria.fk_categoria = categorias.id
LEFT JOIN productos_residuos ON productos.id = productos_residuos.fk_producto
LEFT JOIN residuos ON productos_residuos.fk_residuos = residuos.id
ORDER BY categorias.descripcion;

    ");
    $resultado -> execute();

    $datos = array();
    while($fila = $resultado -> fetch()) {
        $producto = array(
            'id' => $fila['producto_id'],
            'nombre' => $fila['producto_descripcion'],
            'unidades' => $fila['unidad_descripcion'],
            'residuos' => $fila['residuo_descripcion'],
            'observaciones' => $fila['producto_observaciones'],
            'foto' => $fila['producto_foto'],
            'categorias' => $fila['categoria_descripcion']
        );

        $datos[] = $producto;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;
}




// Modificar Producto
function modificarProducto(){
    $emailID = $_POST['modificarDatos'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare(
        "UPDATE usuarios 
        SET
        nombre = ?,
        email = ?,
        telefono = ?
        WHERE
        email = ?;");
    $resultado -> execute(array($nombre, $email, $telefono, $emailID));
}

function addProducto() {
    $cargo = $_POST['cargo'];
    if($cargo == "Admin") {
        $cargo = 1;
    } else {
        $cargo = 0;
    }
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasenia = hash('sha256', 'contraseña123');
    $telefono = $_POST['telefono'];


    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    $resultado = $conexion -> prepare("INSERT INTO usuarios 
    (admin, nombre, email, password, activo, observaciones, telefono)
    VALUES (
        ?, ?, ?, ?, 1, 'Observaciones sobre el admin', ?);");
$resultado -> execute(array($cargo,$nombre,$email,$contrasenia,$telefono));
}

?>