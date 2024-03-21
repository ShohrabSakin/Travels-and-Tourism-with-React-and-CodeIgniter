<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['collectionid'])  && isset($_GET['date']) && isset($_GET['bookid']) && isset($_GET['Name']) && isset($_GET['amount'])  ){
        $a=new library();	
        $m=$a->db;
        $q="insert into todayfee (collectionid,date,bookid,Name,amount) values('{$_GET['collectionid']}','{$_GET['date']}','{$_GET['bookid']}','{$_GET['Name']}','{$_GET['amount']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/inserttodayfee.php?collectionid=C1&date=2023-05-09&bookid=B1&Name=Iqbal&amount=50000

    ?>