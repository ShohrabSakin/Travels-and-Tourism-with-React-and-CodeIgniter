<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['serviceid']) && isset($_GET['date']) && isset($_GET['bookid']) && isset($_GET['regid']) && isset($_GET['roomno']) && isset($_GET['servicename']) && isset($_GET['price'])  ){
        $a=new library();	
        $m=$a->db;
        $q="update servicepayment set serviceid='{$_GET['serviceid']}',date='{$_GET['date']}',bookid='{$_GET['bookid']}',regid='{$_GET['regid']}',roomno='{$_GET['roomno']}',servicename='{$_GET['servicename']}',price='{$_GET['price']}'  where serviceid='{$_GET['serviceid']}'";
        $r=$m->query($q);
        //echo($q);
        if(!$r)	{
            echo "{success:".mysqli_errno($m).", Query: $q}";		
        }
        else{
            echo '{success:true}';	  
        }
	
        }
        else{
            echo '{success:input query string}'; 
        }
//Run the service by:  http://localhost/REACT/hacker-stories/updateservicepayment.php?serviceid=S1&date=2023-01-01&bookid=B1&regid=R1&roomno=R1&servicename=Hotel&price=20000

    ?>