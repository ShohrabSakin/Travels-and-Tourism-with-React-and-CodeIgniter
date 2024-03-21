<?php
header( 'Content-Type: text/html; charset=utf-8' );
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
    session_start();
    require_once 'AuthModule.php';
    $auth = new AuthModule();

    //Array to store validation errors
    $errmsg_arr = array();
    
    //Validation error flag
    $errflag = false;
    
    //Connect to mysql server
    $conn = mysqli_connect('localhost','root',"",'pathology');
    if(!$conn) {
        die('Failed to connect to server: ' . mysqli_error());
    }
    //Sanitize the POST values
    $login = ($_GET['username']);
    $password = ($_GET['password']);
    
    //Input Validations
    if($login == '') {
        $errmsg_arr[] = 'Username missing';
        $errflag = true;
    }
    if($password == '') {
        $errmsg_arr[] = 'Password missing';
        $errflag = true;
    }
    
    
    $qry="SELECT * FROM user WHERE username='$login' AND password='$password'";
    $result=mysqli_query($conn,$qry);
    
    //Check whether the query was successful or not
    if($result) {
        if(mysqli_num_rows($result) > 0) {
            //Login Successful
            $member = mysqli_fetch_assoc($result);
            $_SESSION['SESS_MEMBER_ID'] = $member['id'];
            $_SESSION['SESS_FIRST_NAME'] = $member['name'];
            $_SESSION['SESS_LAST_NAME'] = $member['position'];
            $token = $auth->generateToken($login,$password);
            echo "{\"jwt\":\"$token\"}";
            exit();
        }else {
            //Login failed
            //header("location: index.php");
            echo '{"jwt":"sorry"}';
            exit();
        }
    }else {
        die("Query failed");
    }
?>
