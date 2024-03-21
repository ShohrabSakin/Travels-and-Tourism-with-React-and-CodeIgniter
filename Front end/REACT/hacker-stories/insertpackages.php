<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['pkgid']) && isset($_GET['pkgname']) && isset($_GET['destination']) && isset($_GET['duration']) && isset($_GET['price']) && isset($_GET['picture']) && isset($_GET['type']) && isset($_GET['fromwhere']) && isset($_GET['towhere']) && isset($_GET['fromdate']) && isset($_GET['todate']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into packages(pkgid,pkgname,destination,duration,price,picture,type,fromwhere,towhere,fromdate,todate) values('{$_GET['pkgid']}','{$_GET['pkgname']}','{$_GET['destination']}','{$_GET['duration']}','{$_GET['price']}','{$_GET['picture']}','{$_GET['type']}','{$_GET['fromwhere']}','{$_GET['towhere']}','{$_GET['fromdate']}','{$_GET['todate']}' )";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertpackages.php?pkgid=P1&pkgname=Adventure&destination=Spain&duration=3-Days&price=1000&picture&type=Seasonal&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02

    ?>