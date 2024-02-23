<?php
if(isset($_POST['obtenerProductos'])) {
    obtenerProductos();
}
if(isset($_POST['modificarProducto'])) {
    // modificarProducto();
}
if(isset($_POST['addProducto'])) {
    addProducto();
}

// Listar los usuarios
function obtenerProductos() {
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');

    // Recupero la informacion del producto
    $resultado = $conexion -> prepare("
    SELECT
    productos.id AS producto_id,
    productos.descripcion AS producto_descripcion,
    unidades.descripcion AS unidad_descripcion,
    productos.observaciones AS producto_observaciones,
    productos.foto AS producto_foto
FROM productos
INNER JOIN unidades ON productos.fk_unidades = unidades.id
ORDER BY productos.id;

    ");
    $resultado -> execute();

    $datos = array();
    while($fila = $resultado -> fetch()) {

        // obtengo las categorias del producto
        $categoriasSQL = $conexion->prepare("
        SELECT 
        categorias.descripcion AS categoria
        FROM productos_categoria
        JOIN categorias ON productos_categoria.fk_categoria = categorias.id
        WHERE productos_categoria.fk_producto = ?;
        ");
        $categoriasSQL->execute(array($fila['producto_id']));

        // Listo las categorias de ese producto y las almaceno en un array
        $categorias = array();
        while ($categoria = $categoriasSQL->fetch()) {
            $categorias[] = $categoria['categoria'];
        }


        // obtengo los residuos del producto
        $residuosSQL = $conexion->prepare("
        SELECT 
        residuos.descripcion AS residuo
        FROM productos_residuos
        JOIN residuos ON productos_residuos.fk_residuos = residuos.id
        WHERE productos_residuos.fk_producto = ?;
        ");
        $residuosSQL->execute(array($fila['producto_id']));

        // Listo las categorias de ese producto y las almaceno en un array
        $residuos = array();
        while ($residuo = $residuosSQL->fetch()) {
            $residuos[] = $residuo['residuo'];
        }


        $producto = array(
        'id' => $fila['producto_id'],
        'nombre' => $fila['producto_descripcion'],
        'unidades' => $fila['unidad_descripcion'],
        'residuos' => $residuos,
        'observaciones' => $fila['producto_observaciones'],
        'foto' => $fila['producto_foto'],
        'categorias' => $categorias // Utilizo el array de categorías
        );

        $datos[] = $producto;
    }

    $jsonString = json_encode($datos);
    echo $jsonString;

}




// Modificar Producto
function modificarProducto(){
    $productoID = $_POST['modificarDatos'];
    $producto = $_POST['nombre'];
    $foto = $_POST['foto'];
    $unidadesID = $_POST['unidades'];
    $observaciones = $_POST['observaciones'];
    $residuosID = $_POST['residuos'];
    $categoriaID = $_POST['categorias'];
    $conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
    
    
    // ACTUALIZAR PRODUCTO_RESIDUOS
    // va dentro de un while cuando se añada mas de un residuo(recibiremos un json)
    // lo que recibimos de los residuos es su id
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // actualizo la tabla producto_residuos
    $resultado = $conexion -> prepare("
    UPDATE productos_residuos
    SET fk_residuos = ?
    WHERE id = ?;
    ");
    $resultado -> execute(array($residuosID, $productoID));
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    // ACTUALIZAR PRODUCTOS_CATEGORIA
    // va dentro de un while cuando se añada mas de una categoria(recibiremos un json)
    // lo que recibimos de las categorias es su id
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // actualizo la tabla producto_categoria
    $resultado = $conexion -> prepare("
        UPDATE productos_categoria
        SET fk_categoria = ?
        WHERE id = ?;
    ");
    $resultado -> execute(array($categoriaID, $productoID));
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


    // ACTUALIZAR PRODUCTO
    // lo que recibimos de las unidades es su id, solo puede tener una unidad
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // actualizo la tabla producto_categoria
    $resultado = $conexion -> prepare("
        UPDATE productos
        SET descripcion = ?, 
        fk_unidades = ?,
        observaciones = ?,
        foto = ?
        WHERE id = ?;
    
    ");
    $resultado -> execute(array($producto, $unidadesID, $observaciones, $foto, $productoID));
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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