<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Your API URL and JWT token
$apiUrl = "https://api.homeq.se/api/v3/cards/";

// Prepare the request payload
$data = array(
  "company" => 429
);

$options = array(
  "http" => array(
    "header" => "Content-Type: application/json\r\n",
    "method" => "POST",
    "content" => json_encode($data)
  )
);

$context = stream_context_create($options);
$response = file_get_contents($apiUrl, false, $context);

if ($response === FALSE) {
  http_response_code(500);
  echo json_encode(array("error" => "Failed to fetch listings"));
} else {
  echo $response;
}
