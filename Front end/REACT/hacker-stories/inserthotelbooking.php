<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if( isset($_GET['bookid']) && isset($_GET['date']) && isset($_GET['fromdate']) && isset($_GET['todate']) && isset($_GET['name']) && isset($_GET['guardian']) && isset($_GET['nid']) && isset($_GET['address']) && isset($_GET['mobile']) && isset($_GET['roomno']) && isset($_GET['regid']) && isset($_GET['picture'])  ){
        $a=new library();	
        $m=$a->db;
        $q="insert into hotelbooking(bookid,date,fromdate,todate,name,guardian,nid,address,mobile,roomno,regid,picture) values('{$_GET['bookid']}','{$_GET['date']}','{$_GET['fromdate']}','{$_GET['todate']}','{$_GET['name']}','{$_GET['guardian']}','{$_GET['nid']}','{$_GET['address']}','{$_GET['mobile']}','{$_GET['roomno']}','{$_GET['regid']}','{$_GET['picture']}')";
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
    
    // Run the service by:  http://localhost/REACT/hacker-stories/inserthotelbooking.php?bookid=B1&date=2023-06-05&fromdate=2023-02-02&todate=2023-03-03&name=Ahil&guardian=3&nid=3&address=Chittagong&mobile=012&roomno=R1&regid=R1&picture

    ?>