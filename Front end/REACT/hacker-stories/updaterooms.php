<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if(   isset($_GET['roomno']) && isset($_GET['floorid']) && isset($_GET['title']) && isset($_GET['price']) && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="update rooms set roomno='{$_GET['roomno']}',floorid='{$_GET['floorid']}',title='{$_GET['title']}',price='{$_GET['price']}',picture='{$_GET['picture']}' where roomno='{$_GET['roomno']}'";
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

        // Run the service by:  http://localhost/REACT/hacker-stories/updaterooms.php?roomno=R1&floorid=F1&title=Super Delux&price=20000&picture=

    ?>