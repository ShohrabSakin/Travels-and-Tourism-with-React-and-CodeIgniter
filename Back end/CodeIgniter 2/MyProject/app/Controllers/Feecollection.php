<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Feecollection extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetFeecollections()
    {
    $query = $this->db->query('select * from feecollection');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/feecollection/GetFeecollections
    
    }
    
    public function GetFeecollection()
    {
    $collectionid=$this->request->getGet('collectionid'); //query string
    $query = $this->db->query("select * from feecollection where collectionid='$collectionid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/feecollection/GetFeecollection?collectionid=C1
    
    }
    


    public function DeleteFeecollection()
    {
    $collectionid=$this->request->getVar('collectionid');//query string
    $query = $this->db->query("delete from feecollection where collectionid='$collectionid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/feecollection/DeleteFeecollection?collectionid=C5
    
    }
    
    public function InsertFeecollection()
    
    {  
    
    //$collectionid=$this->request->getGet('collectionid');
    $bookingdate=$this->request->getVar('bookingdate');
    $date=date('Y-m-d');
    $bookid=$this->request->getGet('bookid');
    $Name=$this->request->getVar('Name');
    $amount=$this->request->getGet('amount');
   

    
    
    $query = $this->db->query("insert into feecollection values((select uuid()),'$bookingdate','$date','$bookid','$Name','$amount')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/feecollection/InsertFeecollection?collectionid=C1&date=2023-05-09&bookid=B1&Name=Rahim&amount=50000
    
    }
    
    public function UpdateFeecollection()
    {
    
        $collectionid=$this->request->getGet('collectionid');
        $date=$this->request->getVar('bookingdate');
        $date=$this->request->getVar('date');
        $bookid=$this->request->getGet('bookid');
        $Name=$this->request->getVar('Name');
        $amount=$this->request->getGet('amount');
       
        
   
    
    $query = $this->db->query("update feecollection set collectionid='$collectionid',bookingdate='$bookingdate',date='$date',bookid='$bookid',Name='$Name',amount='$amount' where collectionid='$collectionid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/feecollection/UpdateFeecollection?collectionid=C5&date=2023-05-13&bookid=B5&Name=Rahat&amount=15000
    
    }
}
