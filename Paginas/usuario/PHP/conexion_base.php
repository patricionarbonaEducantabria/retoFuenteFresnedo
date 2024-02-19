<?php
    // conexion a la base de datos
    $host = "localhost";
    $user = "dwes";
    $password = "abc123.";
    $database = "almacen";

    try 
    {
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        $conn = new PDO("mysql:host=$host;dbname=$database",$user,$password,$opciones);
        // control de excepciones
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        echo $e->getCode();
        // mensaje de error
        $mensaje = $e->getMessage();
        echo "Error en la conexion: ".$mensaje;
        exit();
    }
?>