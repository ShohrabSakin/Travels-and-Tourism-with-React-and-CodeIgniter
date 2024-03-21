<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Booking extends BaseController
{
    public $db;
function __construct(){
$this->db = db_connect();
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
}
public function GetBookings()
{
$query = $this->db->query('select * from booking');
$result = $query->getResultArray();
echo json_encode($result);

// http://localhost:8080/booking/GetBookings

}

public function GetBooking()
{
$bookid=$this->request->getGet('bookid'); //query string
$query = $this->db->query("select * from booking where bookid='$bookid'");
$result = $query->getResultArray();
echo json_encode($result);

// http://localhost:8080/booking/GetBooking?bookid=B3

}

public function SearchBooking()
{
$d1=$this->request->getGet('d1'); //query string
$d2=$this->request->getGet('d2');

$query = $this->db->query("select * from booking where date between '$d1' and '$d2'");
$result = $query->getResultArray();
echo json_encode($result);

// http://localhost:8080/booking/SearchBooking?

}

public function DeleteBooking()
{
$bookid=$this->request->getVar('bookid');//query string
$query = $this->db->query("delete from booking where bookid='$bookid'");
if(!empty($query))
$result["success"]="true";
else
{
$result["success"]="false";
}
echo json_encode($result);

// http://localhost:8080/booking/DeleteBooking?bookid=B3

}

public function InsertBooking()

{  

$bookid=$this->request->getGet('bookid');
$pkgid=$this->request->getVar('pkgid');
$type=$this->request->getGet('type');
$Name=$this->request->getVar('Name');
$Number=$this->request->getGet('Number');
$NID=$this->request->getVar('NID');
$chooseGuests=$this->request->getVar('chooseGuests');
$date=$this->request->getVar('date');
$chooseDestination=$this->request->getVar('chooseDestination');

$query = $this->db->query("insert into booking(bookid,pkgid,type,Name,Number,NID,chooseGuests,date,chooseDestination) values((SELECT uuid()),'$pkgid','$type','$Name','$Number','$NID','$chooseGuests','$date','$chooseDestination')");
if(!empty($query))
$result["success"]="true";
else
{
$result["success"]="false";
}
echo json_encode($result);

// http://localhost:8080/booking/InsertBooking?bookid=B1&pkgid=P1&type=Personal&Name=Abir&Number=0791756441&NID=N1&chooseGuests=3&date=2023-09-05&chooseDestination=Switzerland

}

public function UpdateBooking()
{

$bookid=$this->request->getGet('bookid');
$pkgid=$this->request->getVar('pkgid');
$type=$this->request->getGet('type');
$Name=$this->request->getVar('Name');
$Number=$this->request->getGet('Number');
$NID=$this->request->getVar('NID');
$chooseGuests=$this->request->getVar('chooseGuests');
$date=$this->request->getVar('date');
$chooseDestination=$this->request->getVar('chooseDestination');

$query = $this->db->query("update booking set bookid='$bookid',pkgid='$pkgid',type='$type',Name='$Name',Number='$Number',NID='$NID',chooseGuests='$chooseGuests',date='$date',chooseDestination='$chooseDestination'  where bookid='$bookid'");
if(!empty($query))
$result["success"]="true";
else
{
$result["success"]="false";
}
echo json_encode($result);

// http://localhost:8080/booking/UpdateBooking?bookid=B1&pkgid=P1&type=Personal&Name=Abir&Number=0791756441&NID=N1&chooseGuests=3&date=2023-09-05&chooseDestination=Switzerland

}

}
