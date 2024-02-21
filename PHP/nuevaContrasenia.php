<?php
// Establecer la conexión con la base de datos
$servername = "localhost";
$username = "dwes";
$password = "abc123.";
$dbname = "almacen";

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtener los datos enviados por AJAX
$data = json_decode(file_get_contents("php://input"), true);

// Verificar si se recibieron los datos esperados
if (isset($data['correo'], $data['contrasenia'])) {
    // Obtener el correo electrónico y la nueva contraseña
    $correo = $data['correo'];
    $nuevaContrasenia = $data['contrasenia'];

    // Hash de la nueva contraseña (opcional, pero recomendado)
    $nuevaContraseniaHash = hash('sha256', $nuevaContrasenia);
try {
    // Ejecutar la consulta para actualizar la contraseña
    $resultado = $conexion -> prepare("UPDATE usuarios SET password=? WHERE email=?"); // Ajustar la consulta según tu estructura de base de datos
    $resultado->execute(array($nuevaContraseniaHash, $correo));
}catch (Exception $e) {
    // Manejo de la excepción
    echo "Se ha producido un error: " . $e->getMessage();
}
} else {
    echo "No se recibieron los datos esperados.";
}

// Cerrar la conexión
$conexion->close();
?>
