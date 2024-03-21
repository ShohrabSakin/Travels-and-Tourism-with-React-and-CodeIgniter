<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['roomno']) && isset($_GET['floorid']) && isset($_GET['title']) && isset($_GET['price']) && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into rooms(roomno,floorid,title,price,picture) values('{$_GET['roomno']}','{$_GET['floorid']}','{$_GET['title']}','{$_GET['price']}','{$_GET['picture']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertrooms.php?roomno=R1&floorid=F1&title=Super Delux&price=20000&picture=

    ?>