<?php
// if(isset($_POST['usuario'])) {
//     echo "Hola ".$_POST['usuario']." te saludo usando ajax";
// } else {
//     echo "Hola desde ajax";
// }

// Para devolver un dato en formato JSON hacemos lo siguiente

$json = array(
    array(
        "id" => "1",
        "nombre" => "manolo"
    ),
    array(
        "id" => "2",
        "nombre" => "pepe"
    )
);



// Convierto el objeto a formato json y lo envio
$jsonString = json_encode($json);
echo $jsonString;
?>