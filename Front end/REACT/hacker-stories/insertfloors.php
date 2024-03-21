<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['id']) && isset($_GET['name']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into floors(id,name) values('{$_GET['id']}','{$_GET['name']}')";
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
    
    // Run the service by:  http://localhost/REACT/hacker-stories/insertfloors.php?id=F1&name=1st-floor

    ?>