<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if(   isset($_GET['pkgid']) && isset($_GET['type']) && isset($_GET['Name']) && isset($_GET['Number'])  && isset($_GET['NID']) && isset($_GET['chooseGuests']) && isset($_GET['date'])  && isset($_GET['chooseDestination']) ){
        $a=new library();	
        $m=$a->db;
        $q="insert into booking(bookid,pkgid,type,Name,Number,NID,chooseGuests,date,chooseDestination) values( (SELECT uuid()),'{$_GET['pkgid']}','{$_GET['type']}','{$_GET['Name']}','{$_GET['Number']}','{$_GET['NID']}','{$_GET['chooseGuests']}','{$_GET['date']}','{$_GET['chooseDestination']}')";
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
    
    //Run the service by:  http://localhost/REACT/hacker-stories/insertbooking.php?bookid=B1&pkgid=P1&type=Personal&Name=Abir&Number=0791756441&NID=N1&chooseGuests=3&date=2023-09-05&chooseDestination=Switzerland

    //Run the service by:  http://localhost/REACT/hacker-stories/insertbooking.php?Name=Maher&Number=1245&chooseGuests=3&date=2023-09-05&chooseDestination=Thailand&pkgid=none&type=none&NID=none

    ?>