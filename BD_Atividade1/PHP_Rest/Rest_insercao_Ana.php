<?php

$data = array(
    "nome" => "Ana",
    "idade" => 23
);
$curl = curl_init("https://cleberbdsavancado-default-rtdb.firebaseio.com/users/Cliente3.json");
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "Content-Type: application/json",
        "X-Firebase-ETag: true",
        'Content-Length: ' . strlen(json_encode($data)),
        //"x-api-key: seu_token_aqui"
    ),
));


$response = curl_exec($curl);
print_r($response);


$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}