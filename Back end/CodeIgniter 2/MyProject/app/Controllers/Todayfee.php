<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Todayfee extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    
    
    public function GetTodayfees()
    {
    $today=$this->request->getGet('today'); //query string
    $query = $this->db->query("select * from feecollection where date='$today'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/todayfee/GetTodayfee?collectionid=C1
    
    }
    


    public function DeleteTodayfee()
    {
    $collectionid=$this->request->getVar('collectionid');//query string
    $query = $this->db->query("delete from todayfee where collectionid='$collectionid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/todayfee/DeleteTodayfee?collectionid=C5
    
    }
    
    public function InsertTodayfee()
    
    {  
    
    $collectionid=$this->request->getGet('collectionid');
    $date=$this->request->getVar('date');
    // $date=date('Y-m-d');
    $bookid=$this->request->getGet('bookid');
    $Name=$this->request->getVar('Name');
    $amount=$this->request->getGet('amount');
   

    
    
    $query = $this->db->query("insert into todayfee values('$collectionid','$date','$bookid','$Name','$amount')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/todayfee/InsertTodayfee?collectionid=C1&date=2023-05-09&bookid=B1&Name=Rahim&amount=50000
    
    }
    
    public function UpdateTodayfee()
    {
    
        $collectionid=$this->request->getGet('collectionid');
        // $date=$this->request->getVar('bookingdate');
        $date=$this->request->getVar('date');
        $bookid=$this->request->getGet('bookid');
        $Name=$this->request->getVar('Name');
        $amount=$this->request->getGet('amount');
       
        
   
    
    $query = $this->db->query("update todayfee set collectionid='$collectionid',date='$date',bookid='$bookid',Name='$Name',amount='$amount' where collectionid='$collectionid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/todayfee/UpdateTodayfee?collectionid=C5&date=2023-05-13&bookid=B5&Name=Rahat&amount=15000
    
    }
}
