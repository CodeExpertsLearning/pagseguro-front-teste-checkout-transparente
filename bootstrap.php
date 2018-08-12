<?php
define('API_URL', 'http://127.0.0.1:8000/api/v1');

require __DIR__ . '/vendor/autoload.php';

$token = 'eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl0sInVzZXJuYW1lIjoibmFuZG9rc3Ryb0BnbWFpbC5jb20iLCJpYXQiOjE1MzM0MTczMzksImV4cCI6MTUzMzQyMDkzOX0.Z4WHd9VRQNaLCaSIWinjhXB9bYD4uqAe3Uas1PuyZegJM5SQevcRYUpqSFK6ZaemTWPFNUTgWjCI0s45DKFTs2IBdpKYivRzmA6MaegzR4Kj8y1kT5KTQhcyt0KFKL4E0ym8R3WijM8jqqrfM5SGY8mmcxA2MLf2MVwzyTTjOE1IhxxULUhdnQBCSMhNMtDRRoqhua8gnwzl6pjUS9fWPbB7jDwKWWyTnOrWuOLDZTjRmQCCCO6Es6T3gXlDj_mUvfBTAx1WHZjd8Q1NWP4VvkQLNmMOzI3inubTBkwzTce1s9VFzAHHzBnY-1DkRQbiQc9il3sz0T4wwFZQkl4kgbjnO8M0MAHygJQKwXNPDuxLF-Oq4Vs-DMnwTemTDZIp41BHayKi0VtGlNIx4s-MTbhVh54K1yOhvKpFt50ntNQKZGu2S0M2jQnyYhGaLrkuIi3lZ61UpwOc9iOOr1lw9Eft-ykwe-3VG736VA--a9BWh--Rd1iRA-YDvwHLPbqjLi0gvxRamBW5v4DQUS1gCvFDvLY-w1A1TY3jOAi-T0gTBD1F9ajEpK4rBTl-qT-X9H1EPOj8aIjrJxW0eEsRuGvtDWq0tfjvwusViKBkCt1EQsRS9frdGpiPVifu7Oxvpb3ACNlzMQXcva08gDfKwXN2oeDet3-FRgH0XMOlzfo';

$client = new GuzzleHttp\Client();
$response = $client->request('GET', API_URL . '/checkout/session', [
    'headers' => [
        'Authorization' => 'Bearer ' . $token
    ]
]);

$sessionToken = (json_decode($response->getBody()))->session_id;