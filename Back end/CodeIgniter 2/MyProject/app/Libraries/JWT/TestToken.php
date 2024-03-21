<?php
require_once 'AuthModule.php';
$auth = new AuthModule();

// Generate a token for a user ID
$userId = $_GET['userid'];
$pass = $_GET['pass'];
if(isset($_GET['userid']) && isset($_GET['pass']) ){
$token = $auth->generateToken($userId,$pass);
echo "<h2>Generated token: $token</h2>";

// Validate a token
$isValid = $auth->validateToken($token);
echo "Is valid token: " . ($isValid ? 'true' : 'false') . "<br/>";

// Get the user ID from a token
$userId = $auth->getUserIdFromToken($token);
echo "User Details from token: $userId";
}
else{
    echo "Input Query string";
}
?>
