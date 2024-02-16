<?php
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