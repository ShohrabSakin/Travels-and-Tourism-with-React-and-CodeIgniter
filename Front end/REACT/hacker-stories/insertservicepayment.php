<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['serviceid']) && isset($_GET['date']) && isset($_GET['bookid']) && isset($_GET['regid']) && isset($_GET['roomno']) && isset($_GET['servicename']) && isset($_GET['price']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into servicepayment(serviceid,date,bookid,regid,roomno,servicename,price) values('{$_GET['serviceid']}','{$_GET['date']}','{$_GET['bookid']}','{$_GET['regid']}','{$_GET['roomno']}','{$_GET['servicename']}','{$_GET['price']}')";
        $r=$m->query($q);
        if(!$r)	{
            echo "{success:".mysqli_errno($m).", Query: $q}";	
        }
        else{
            echo '{"success":"true","total":"'.$m->affected_rows.'"}';	  
        }	
    }
    else{
            echo '{success:input query string}'; 
    }
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertservicepayment.php?serviceid=S1&date=2023-01-01&bookid=B1&regid=R1&roomno=R1&servicename=Hotel&price=20000

    ?>