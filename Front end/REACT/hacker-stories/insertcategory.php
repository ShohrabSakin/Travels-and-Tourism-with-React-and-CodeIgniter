<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['catid']) && isset($_GET['catname']) && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into category(catid,catname,picture) values('{$_GET['catid']}','{$_GET['catname']}','{$_GET['picture']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertcategory.php?catid=C1&catname=Adventure&picture

    ?>