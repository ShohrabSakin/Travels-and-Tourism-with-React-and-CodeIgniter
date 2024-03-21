<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['bookid']) && isset($_GET['date']) && isset($_GET['fromdate']) && isset($_GET['todate']) && isset($_GET['roomno']) && isset($_GET['price']) && isset($_GET['day']) && isset($_GET['total']) && isset($_GET['totalservice']) && isset($_GET['linetotal']) && isset($_GET['linediscount']) && isset($_GET['linenet'])  && isset($_GET['linepaid'])  && isset($_GET['linedue'])  ){
        $a=new library();	
        $m=$a->db;
        $q="insert into checkout(bookid,date,fromdate,todate,roomno,price,day,total,totalservice,linetotal,linediscount,linenet,linepaid,linedue) values('{$_GET['bookid']}','{$_GET['date']}','{$_GET['fromdate']}','{$_GET['todate']}','{$_GET['roomno']}','{$_GET['price']}','{$_GET['day']}','{$_GET['total']}','{$_GET['totalservice']}','{$_GET['linetotal']}','{$_GET['linediscount']}','{$_GET['linenet']}','{$_GET['linepaid']}','{$_GET['linedue']}')";
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
    
    // Run the service by:  http://localhost/REACT/hacker-stories/insertcheckout.php?bookid=B10&date=2023-06-05&fromdate=2023-02-02&todate=2023-03-03&roomno=R1&price=20000&day=1&total=100&totalservice=200&linetotal=300&linediscount=50&linenet=250&linepaid=260&linedue=400

    ?>