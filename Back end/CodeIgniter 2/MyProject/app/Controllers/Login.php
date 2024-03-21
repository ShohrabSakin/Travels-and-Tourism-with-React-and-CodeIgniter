<?php

namespace App\Controllers;

use App\Libraries\JWT\AuthModule;

class Login extends BaseController
{
    public $db;
function __construct(){
$this->db = db_connect();
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
}

public function checklogin()
{
$arr=array();
$auth = new AuthModule();
$username=$this->request->getGet('username'); //query string
$password=$this->request->getGet('password');
$query = $this->db->query("select * from user where username='$username'and password='$password'");
$result = $query->getResultArray();
foreach($result as $row){
$token = $auth->generateToken($username,$password);
$arr["success"]=$token;
}
echo json_encode($arr);
}

}
