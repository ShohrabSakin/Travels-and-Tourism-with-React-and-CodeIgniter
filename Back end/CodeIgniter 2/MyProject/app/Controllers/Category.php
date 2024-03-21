<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Category extends BaseController
{
    public $db;
    function __construct(){
    $this->db = db_connect();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    public function GetCategorys()
    {
    $query = $this->db->query('select * from category');
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/dept/getdepts
    
    }
    
    public function GetCategory()
    {
    $catid=$this->request->getGet('catid'); //query string
    $query = $this->db->query("select * from category where catid='$catid'");
    $result = $query->getResultArray();
    echo json_encode($result);
    
    // http://localhost:8080/dept/getdept?departmentcode=5
    
    }
    
    public function DeleteCategory()
    {
    $catid=$this->request->getVar('catid');//query string
    $query = $this->db->query("delete from category where catid='$catid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    //http://localhost:8080/dept/deletedept?departmentcode=5
    
    }
    
    public function InsertCategory()
    
    {  
    
    $catid=$this->request->getGet('catid');
    $catname=$this->request->getVar('catname');
    $picture=$this->request->getGet('picture');

   
    $query = $this->db->query("insert into category values('$catid','$catname','$picture')");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    //http://localhost:8080/dept/insertdept?departmentcode=61&departmentname=Pent&company=DEF&show=1&smalldept=S&smallnamesl=20
    
    }
    
    public function UpdateCategory()
    {
    
        $catid=$this->request->getGet('catid');
        $catname=$this->request->getVar('catname');
        $picture=$this->request->getGet('picture');

 
    
    $query = $this->db->query("update category set catid='$catid',catname='$catname',picture='$picture'  where catid='$catid'");
    if(!empty($query))
    $result["success"]="true";
    else
    {
    $result["success"]="false";
    }
    echo json_encode($result);
    
    //http://localhost:8080/dept/updatedept?departmentcode=61&departmentname=Pent&company=DEF&show=0&smalldept=P&smallnamesl=21
    
    }
}
