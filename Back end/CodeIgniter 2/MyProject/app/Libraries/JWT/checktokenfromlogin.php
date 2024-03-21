<?php
require_once 'AuthModule.php';
$auth = new AuthModule();


// Generate a token for a user ID
$token = $_GET['token'];
if(isset($_GET['token'])){
$userId = $auth->getUserIdFromToken($token);
echo "User Details from token: $userId";
}
else{
echo "Input Query string";
}
?>
