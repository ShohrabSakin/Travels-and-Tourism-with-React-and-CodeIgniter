<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Packages extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetPackages()
    {
    $query = $this->db->query('select * from packages');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/packages/GetPackages
    
    }
    
    public function GetPackage()
    {
    $pkgid=$this->request->getGet('pkgid'); //query string
    $query = $this->db->query("select * from packages where pkgid='$pkgid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/packages/GetPackage?pkgid=P9
    
    }

    public function GetService2()
    {
    $fromwhere=$this->request->getGet('fromwhere'); //query string
    $towhere=$this->request->getGet('towhere');
    $fromdate=$this->request->getGet('fromdate');
    $todate=$this->request->getGet('todate');
    $query = $this->db->query("select * from packages where fromwhere='$fromwhere' and towhere='$towhere' and fromdate>='$fromdate' and todate<='$todate' order by pkgid");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/packages/GetService2?fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02
    
    }
    
    public function DeletePackages()
    {
    $pkgid=$this->request->getVar('pkgid');//query string
    $query = $this->db->query("delete from packages where pkgid='$pkgid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/packages/DeletePackages?pkgid=P9
    
    }
    
    public function InsertPackages()
    
    {  
    
    $pkgid=$this->request->getGet('pkgid');
    $pkgname=$this->request->getVar('pkgname');
    $destination=$this->request->getGet('destination');
    $duration=$this->request->getVar('duration');
    $price=$this->request->getGet('price');
    $picture=$this->request->getVar('picture');
    $type=$this->request->getVar('type');
    $fromwhere=$this->request->getVar('fromwhere');
    $towhere=$this->request->getVar('towhere');
    $fromdate=$this->request->getVar('fromdate');
    $todate=$this->request->getVar('todate');

    
    $query = $this->db->query("insert into packages values('$pkgid','$pkgname','$destination','$duration','$price','$picture','$type','$fromwhere','$towhere','$fromdate','$todate')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/packages/InsertPackages?pkgid=P1&pkgname=Adventure&destination=Spain&duration=3-Days&price=1000&picture&type=Seasonal&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02
    
    }
    
    public function UpdatePackages()
    {
    
        $pkgid=$this->request->getGet('pkgid');
        $pkgname=$this->request->getVar('pkgname');
        $destination=$this->request->getGet('destination');
        $duration=$this->request->getVar('duration');
        $price=$this->request->getGet('price');
        $picture=$this->request->getVar('picture');
        $type=$this->request->getVar('type');
        $fromwhere=$this->request->getVar('fromwhere');
        $towhere=$this->request->getVar('towhere');
        $fromdate=$this->request->getVar('fromdate');
        $todate=$this->request->getVar('todate');
    
    
    $query = $this->db->query("update packages set pkgid='$pkgid',pkgname='$pkgname',destination='$destination',duration='$duration',price='$price',picture='$picture',type='$type',fromwhere='$fromwhere',towhere='$towhere' ,fromdate='$fromdate',todate='$todate' where pkgid='$pkgid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/packages/UpdatePackages?pkgid=P1&pkgname=Adventure&destination=Spain&duration=3-Days&price=1000&picture&type=Seasonal&fromwhere=Paris&towhere=London&fromdate=2023-05-09&todate=2023-06-02
    }
}
