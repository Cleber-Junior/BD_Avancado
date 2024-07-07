<?php
$data = array(
    "nome" => "Ciclano",
    "email" => "ciclano@ifsul.edu.br"
);

$curl = curl_init("https://cleberbdsavancado-default-rtdb.firebaseio.com/users.json");
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_POST  => true,
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "Content-Type: application/json",
        'Content-Length: ' . strlen(json_encode($data)),
        "x-api-key: AIzaSyBq5coVSrWgOEgxo4zFk7Ngt6b-VpJ0B8g"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
    echo "Codigo de erro #:" . $err;
} else {
    echo $response;
}