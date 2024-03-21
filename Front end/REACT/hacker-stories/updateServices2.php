<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['id']) && isset($_GET['name']) && isset($_GET['description']) && isset($_GET['price']) ){
        $a=new library();	
        $m=$a->db;
        $q="update services2 set id='{$_GET['id']}',name='{$_GET['name']}',description='{$_GET['description']}',price='{$_GET['price']}' where id='{$_GET['id']}'";
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
          
      // Run the service by:  http://localhost/REACT/hacker-stories/updateServices2.php?id=S1&name=Hotels&description=Luxury-Hotels&price=20000

    ?>