<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['fdid']) && isset($_GET['fdname']) && isset($_GET['price']) && isset($_GET['rating'])  && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into foods(fdid,fdname,price,rating,picture) values('{$_GET['fdid']}','{$_GET['fdname']}','{$_GET['price']}','{$_GET['rating']}','{$_GET['picture']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertfoods.php?fdid=F1&fdname=Pizza&price=300&rating=5-Star&picture

    ?>