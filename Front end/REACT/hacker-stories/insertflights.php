<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['flightid']) && isset($_GET['fromwhere']) && isset($_GET['towhere']) && isset($_GET['fromdate']) && isset($_GET['todate']) && isset($_GET['price']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into flights(flightid,fromwhere,towhere,fromdate,todate,price) values('{$_GET['flightid']}','{$_GET['fromwhere']}','{$_GET['towhere']}','{$_GET['fromdate']}','{$_GET['todate']}','{$_GET['price']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertflights.php?flightid=F1&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02&price=20000

    ?>