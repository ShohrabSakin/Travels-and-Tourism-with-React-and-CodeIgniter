<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if(   isset($_GET['collectionid'])    && isset($_GET['date']) && isset($_GET['bookid']) && isset($_GET['Name']) && isset($_GET['amount']) ){
        $a=new library();	
        $m=$a->db;
        $q="update todayfee set collectionid='{$_GET['collectionid']}',date='{$_GET['date']}',bookid='{$_GET['bookid']}',Name='{$_GET['Name']}',amount='{$_GET['amount']}' where collectionid='{$_GET['collectionid']}'";
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
     //Run the service by: http://localhost/REACT/hacker-stories/updatetodayfee.php?collectionid=C4&date=2023-08-12&bookid=B4&Name=Ahil&amount=80000

    ?>