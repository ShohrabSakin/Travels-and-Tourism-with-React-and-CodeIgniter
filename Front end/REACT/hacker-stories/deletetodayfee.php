<?php
    header( 'Content-Type: text/html; charset=utf-8' );
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    $arr=array();
    include("library.php");
    if( isset($_GET['collectionid']) ){
    $a=new library();
    $m=$a->db;
    $q="delete from todayfee where collectionid='{$_GET['collectionid']}'";
    $r=$m->query($q);
    if(!$r) {
    echo "{success:".mysqli_errno($m).", Query: $q}";
    }
    else{
    echo '{"success":"true"}';
    }

    }
    else{
    echo '{success:input query string}';
    }

  //Run the service by:  http://localhost/REACT/hacker-stories/deletetodayfee.php?collectionid=C4

?>
