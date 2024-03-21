<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['bookid'])  && isset($_GET['pkgid']) && isset($_GET['type']) && isset($_GET['Name']) && isset($_GET['Number'])  && isset($_GET['NID']) && isset($_GET['chooseGuests']) && isset($_GET['date'])  && isset($_GET['chooseDestination']) ){
        $a=new library();	
        $m=$a->db;
        $q="update booking set bookid='{$_GET['bookid']}', pkgid='{$_GET['pkgid']}',type='{$_GET['type']}',Name='{$_GET['Name']}',Number='{$_GET['Number']}',NID='{$_GET['NID']}', chooseGuests='{$_GET['chooseGuests']}',date='{$_GET['date']}',chooseDestination='{$_GET['chooseDestination']}'  where bookid='{$_GET['bookid']}'";
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
//Run the service by:  http://localhost/REACT/hacker-stories/updatebooking.php?bookid=B1&pkgid=P1&type=Personal&Name=Abir&Number=0791756441&NID=N1&chooseGuests=3&date=2023-09-05&chooseDestination=Switzerland

    ?>