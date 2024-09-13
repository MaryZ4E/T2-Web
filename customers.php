<?php

http_response_code(200);

$customers = [
    ["id"=>2, "name"=>"Maria","address"=>"Av:Tec #1","phone"=>"5646431"],
    ["id"=>3, "name"=>"Alejandro","address"=>"Av:Tec #2","phone"=>"5646431"],
    ["id"=>4, "name"=>"Faty","address"=>"Av:Tec #3","phone"=>"5646431"],
    ["id"=>5, "name"=>"Dulce","address"=>"Av:Tec #4","phone"=>"5646431"],
    ["id"=>6, "name"=>"Jair","address"=>"Av:Tec #5","phone"=>"5646431"],
];


header("Content-type: aplication/html");
echo json_encode($customers);
?>
