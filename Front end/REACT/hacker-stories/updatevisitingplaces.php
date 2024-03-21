<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['visitid']) && isset($_GET['catid']) && isset($_GET['placename']) && isset($_GET['country']) && isset($_GET['route']) && isset($_GET['picture'])){
        $a=new library();	
        $m=$a->db;
        $q="update visitingplaces set visitid='{$_GET['visitid']}',catid='{$_GET['catid']}',placename='{$_GET['placename']}',country='{$_GET['country']}',route='{$_GET['route']}',picture='{$_GET['picture']}'   where catid='{$_GET['catid']}'";
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
//Run the service by:  http://localhost/REACT/hacker-stories/updatevisitingplaces.php?visitid=V1&catid=C1&placename=Sydney&country=Australia&route=By-Air&picture

    ?>