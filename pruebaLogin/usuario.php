<?php
$db = "dwes";
$host = "localhost";
$user = "dwes";
$password = "abc123.";

try {
  $conexion = new PDO("mysql:host=$host;dbname=$db", $user, $password);
  $username = $_POST["email"];
  $pass = $_POST["pass"];

  $query = $conexion->prepare("SELECT * FROM usuarios WHERE usuario = :email AND password = :pass");
  $query->execute(["email" => $username, ":pass" => $pass]);
  $result = $query->fetch(PDO::FETCH_ASSOC);
  echo json_encode($result);
} catch (PDOException $e) {
  echo "Hubo un error: " . $e->getMessage();
}