<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if(  isset($_GET['flightid']) && isset($_GET['fromwhere']) && isset($_GET['towhere']) && isset($_GET['fromdate']) && isset($_GET['todate']) && isset($_GET['price']) ){
        $a=new library();	
        $m=$a->db;
        $q="update flights set flightid='{$_GET['flightid']}',fromwhere='{$_GET['fromwhere']}',towhere='{$_GET['towhere']}',fromdate='{$_GET['fromdate']}',todate='{$_GET['todate']}',price='{$_GET['price']}' where flightid='{$_GET['flightid']}'";
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
//Run the service by:  http://localhost/REACT/hacker-stories/updateflights.php?flightid=F1&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02&price=20000

    ?>