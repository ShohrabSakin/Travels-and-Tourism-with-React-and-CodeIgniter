<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array(); 
    include("library.php");
    if(  isset($_GET['bookid']) && isset($_GET['date']) && isset($_GET['fromdate']) && isset($_GET['todate']) && isset($_GET['name']) && isset($_GET['guardian']) && isset($_GET['nid']) && isset($_GET['address']) && isset($_GET['mobile']) && isset($_GET['roomno']) && isset($_GET['regid']) && isset($_GET['picture']) ){
        $a=new library();	
        $m=$a->db;
        $q="update hotelbooking set bookid='{$_GET['bookid']}',date='{$_GET['date']}',fromdate='{$_GET['fromdate']}',todate='{$_GET['todate']}',name='{$_GET['name']}',guardian='{$_GET['guardian']}',nid ='{$_GET['nid']}',address='{$_GET['address']}',mobile='{$_GET['mobile']}',roomno='{$_GET['roomno']}',regid='{$_GET['regid']}',picture='{$_GET['picture']}'  where bookid='{$_GET['bookid']}'";
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

       // Run the service by:  http://localhost/REACT/hacker-stories/updatehotelbooking.php?bookid=B1&date=2023-06-05&fromdate=2023-02-02&todate=2023-03-03&name=Ahil&guardian=3&nid=3&address=Chittagong&mobile=012&roomno=R1&regid=R1&picture

    ?>