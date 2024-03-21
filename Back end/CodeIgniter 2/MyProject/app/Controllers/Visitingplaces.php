<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Visitingplaces extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetVisitingplaces()
    {
    $query = $this->db->query('select * from visitingplaces');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/visitingplaces/GetVisitingplaces
    
    }
    
    public function GetVisitingplace()
    {
    $visitid=$this->request->getGet('visitid'); //query string
    $query = $this->db->query("select * from visitingplaces where visitid='$visitid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/visitingplaces/GetVisitingplace?visitid=V8
    
    }
    
    public function DeleteVisitingplaces()
    {
    $catid=$this->request->getVar('catid');//query string
    $query = $this->db->query("delete from visitingplaces where catid='$catid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/visitingplaces/DeleteVisitingplaces?catid=C8
    
    }
    
    public function InsertVisitingplaces()
    
    {  
    
    $visitid=$this->request->getGet('visitid');
    $catid=$this->request->getVar('catid');
    $placename=$this->request->getGet('placename');
    $country=$this->request->getVar('country');
    $route=$this->request->getGet('route');
    $picture=$this->request->getVar('picture');

    // $chooseGuests=$this->request->getVar('chooseGuests');
    // $date=$this->request->getVar('date');
    // $chooseDestination=$this->request->getVar('chooseDestination');
    
    $query = $this->db->query("insert into visitingplaces values('$visitid','$catid','$placename','$country','$route','$picture')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/visitingplaces/InsertVisitingplaces?visitid=V1&catid=C6&placename=Sydney&country=Australia&route=By-Air&picture
    
    }
    
    public function UpdateVisitingplaces()
    {
    
        $visitid=$this->request->getGet('visitid');
        $catid=$this->request->getVar('catid');
        $placename=$this->request->getGet('placename');
        $country=$this->request->getVar('country');
        $route=$this->request->getGet('route');
        $picture=$this->request->getVar('picture');


    // $chooseGuests=$this->request->getVar('chooseGuests');
    // $date=$this->request->getVar('date');
    // $chooseDestination=$this->request->getVar('chooseDestination');
    
    $query = $this->db->query("update visitingplaces set visitid='$visitid',catid='$catid',placename='$placename',country='$country',route='$route',picture='$picture'  where catid='$catid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/visitingplaces/UpdateVisitingplaces?visitid=V1&catid=C1&placename=Sydney&country=Australia&route=By-Air&picture
    
    }
}
