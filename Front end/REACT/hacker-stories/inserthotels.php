<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['hotelid']) && isset($_GET['hotelname']) && isset($_GET['price']) && isset($_GET['rating'])  && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into hotels(hotelid,hotelname,price,rating,picture) values('{$_GET['hotelid']}','{$_GET['hotelname']}','{$_GET['price']}','{$_GET['rating']}','{$_GET['picture']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/inserthotels.php?hotelid=H1&hotelname=Radisson&price=50000&rating=5-Star&picture

    ?>