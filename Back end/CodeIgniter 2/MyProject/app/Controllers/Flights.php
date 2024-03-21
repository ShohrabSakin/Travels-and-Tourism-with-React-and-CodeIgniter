<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Flights extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetFlights()
    {
    $query = $this->db->query('select * from flights');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/flights/GetFlights
    
    }
    
    public function GetFlight()
    {
    $flightid=$this->request->getGet('flightid'); //query string
    $query = $this->db->query("select * from flights where flightid='$flightid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/flights/GetFlight?flightid=F10
    
    }
    
    public function GetFlights2()
    {
    $fromwhere=$this->request->getGet('fromwhere'); //query string
    $towhere=$this->request->getGet('towhere');
    $fromdate=$this->request->getGet('fromdate');
    $todate=$this->request->getGet('todate');
    $query = $this->db->query("select * from flights where fromwhere='$fromwhere' and towhere='$towhere' and fromdate>='$fromdate' and todate<='$todate' order by flightid");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/flights/GetFlights2?fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02
    
    }


    public function DeleteFlights()
    {
    $flightid=$this->request->getVar('flightid');//query string
    $query = $this->db->query("delete from flights where flightid='$flightid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/flights/DeleteFlights?flightid=F10
    
    }
    
    public function InsertFlights()
    
    {  
    
    $flightid=$this->request->getGet('flightid');
    $fromwhere=$this->request->getVar('fromwhere');
    $towhere=$this->request->getGet('towhere');
    $fromdate=$this->request->getVar('fromdate');
    $todate=$this->request->getGet('todate');
    $price=$this->request->getVar('price');

    
    
    $query = $this->db->query("insert into flights values('$flightid','$fromwhere','$towhere','$fromdate','$todate','$price')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/flights/InsertFlights?flightid=F1&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02&price=20000
    
    }
    
    public function UpdateFlights()
    {
    
        $flightid=$this->request->getGet('flightid');
        $fromwhere=$this->request->getVar('fromwhere');
        $towhere=$this->request->getGet('towhere');
        $fromdate=$this->request->getVar('fromdate');
        $todate=$this->request->getGet('todate');
        $price=$this->request->getVar('price');
   
    
    $query = $this->db->query("update flights set flightid='$flightid',fromwhere='$fromwhere',towhere='$towhere',fromdate='$fromdate',todate='$todate',price='$price' where flightid='$flightid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/flights/UpdateFlights?flightid=F1&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02&price=20000
    
    }
}
