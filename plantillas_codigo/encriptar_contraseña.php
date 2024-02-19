<?php
$conexion = new PDO('mysql:host=localhost;dbname=almacen', 'dwes', 'abc123.');
// Insertar usuario Alberto
$resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (1, 'Alberto', 'alberto@example.com', ?, 1, 'Observaciones sobre el admin', '987654321');");
$resultado -> execute(array(hash('sha256', 'contraseña123')));

// Insertar usuario Pablo
$resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (1, 'Pablo', 'pablo@example.com', ?, 1, 'Observaciones sobre el admin', '987654321');");
$resultado -> execute(array(hash('sha256', 'contraseña123')));

// Insertar usuario Cristian
$resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (1, 'Cristian', 'cristian@example.com', ?, 1, 'Observaciones sobre el admin', '987654321');");
$resultado -> execute(array(hash('sha256', 'contraseña123')));

// Insertar usuario Patricio
$resultado = $conexion -> prepare("INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (1, 'Patricio', 'patricio@example.com', ?, 1, 'Observaciones sobre el admin', '987654321');");
$resultado -> execute(array(hash('sha256', 'contraseña123')));
?>