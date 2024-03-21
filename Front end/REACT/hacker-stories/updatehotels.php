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
        $q="update hotels set hotelid='{$_GET['hotelid']}',hotelname='{$_GET['hotelname']}',price='{$_GET['price']}',rating='{$_GET['rating']}',picture='{$_GET['picture']}'   where hotelid='{$_GET['hotelid']}'";
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
//Run the service by:  http://localhost/REACT/hacker-stories/updatehotels.php?hotelid=H1&hotelname=Radisson&price=50000&rating=5-Star&picture

    ?>