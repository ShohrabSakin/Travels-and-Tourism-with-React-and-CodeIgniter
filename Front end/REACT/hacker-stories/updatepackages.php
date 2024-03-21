<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['pkgid']) && isset($_GET['pkgname']) && isset($_GET['destination']) && isset($_GET['duration']) && isset($_GET['price'])  && isset($_GET['picture']) && isset($_GET['type']) && isset($_GET['fromwhere']) && isset($_GET['towhere']) && isset($_GET['fromdate']) && isset($_GET['todate'])   ){
        $a=new library();	
        $m=$a->db;
        $q="update packages set pkgid='{$_GET['pkgid']}',pkgname='{$_GET['pkgname']}',destination='{$_GET['destination']}',duration='{$_GET['duration']}',price='{$_GET['price']}',picture='{$_GET['picture']}',type='{$_GET['type']}',fromwhere='{$_GET['fromwhere']}',towhere='{$_GET['towhere']}',fromdate='{$_GET['fromdate']}',todate='{$_GET['todate']}'   where pkgid='{$_GET['pkgid']}'";
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
//Run the service by:  http://localhost/REACT/hacker-stories/updatepackages.php?pkgid=P1&pkgname=Adventure&destination=Spain&duration=3-Days&price=1000&picture&type=Seasonal&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02

    ?>