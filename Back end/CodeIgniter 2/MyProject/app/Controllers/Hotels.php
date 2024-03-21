<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Hotels extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetHotels()
    {
    $query = $this->db->query('select * from hotels');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/hotels/GetHotels
    
    }
    
    public function GetHotel()
    {
    $hotelid=$this->request->getGet('hotelid'); //query string
    $query = $this->db->query("select * from hotels where hotelid='$hotelid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/hotels/GetHotel?hotelid=H8
    
    }

    public function GetHotels2()
    {
    $hotelname=$this->request->getGet('hotelname'); //query string
    $rating=$this->request->getGet('rating');
    $query = $this->db->query("select * from hotels where hotelname='$hotelname' and rating='$rating' order by hotelid");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/hotels/GetHotels2?hotelname=Radisson Blu&rating=5-Star
    
    }
    
    public function DeleteHotels()
    {
    $hotelid=$this->request->getVar('hotelid');//query string
    $query = $this->db->query("delete from hotels where hotelid='$hotelid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/hotels/DeleteHotels?hotelid=H8
    
    }
    
    public function InsertHotels()
    
    {  
    
    $hotelid=$this->request->getGet('hotelid');
    $hotelname=$this->request->getVar('hotelname');
    $price=$this->request->getGet('price');
    $rating=$this->request->getVar('rating');
    $picture=$this->request->getGet('picture');


    
    $query = $this->db->query("insert into hotels values('$hotelid','$hotelname','$price','$rating','$picture')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/hotels/InsertHotels?hotelid=H1&hotelname=Radisson&price=50000&rating=5-Star&picture
    
    }
    
    public function UpdateHotels()
    {
    
        $hotelid=$this->request->getGet('hotelid');
        $hotelname=$this->request->getVar('hotelname');
        $price=$this->request->getGet('price');
        $rating=$this->request->getVar('rating');
        $picture=$this->request->getGet('picture');


    
    $query = $this->db->query("update hotels set hotelid='$hotelid',hotelname='$hotelname',price='$price',rating='$rating',picture='$picture' where hotelid='$hotelid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    // http://localhost:8080/hotels/UpdateHotels?hotelid=H1&hotelname=Radisson&price=50000&rating=5-Star&picture
    
    }
}
