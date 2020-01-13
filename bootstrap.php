<?php
define('API_URL', 'http://127.0.0.1:8000/api');

require __DIR__ . '/vendor/autoload.php';

//Token recebido na autenticação...
$token = '';

//Busca session code PagSeguro da API...
$client = new GuzzleHttp\Client();
$response = $client->request('GET', API_URL . '/checkout/session/', [
    'headers' => [
        'Authorization' => 'Bearer ' . $token
    ]
]);

$sessionToken = (json_decode($response->getBody()))->data->session_code;