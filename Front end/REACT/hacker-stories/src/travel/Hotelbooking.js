import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/hotelbooking";

var U="http://localhost:8000/Hotelbooking";

function convertDate(inputFormat) {
function pad(s) { return (s < 10) ? '0' + s : s; }
var d = new Date(inputFormat)
return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}




let [globalvariables, setGlobalVariables] = useState({
st: [],
index: 0,

U:"http://localhost/REACT/hacker-stories/"

// U:"http://localhost:8000/Booking"

});
useEffect(() => {
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('vrno');
//console.log(myParam)
$("#vrno").val(myParam);
//deptchange();
display();
}, [])




function display(){
    
// $.get(`${U}/gethotelbooking.php`,{},function(data){
    $.get(`${U}/gethotelbookings`,{},function(data){
data=JSON.parse(data)
globalvariables.st=data;
setData(data);
setData2(globalvariables.st);
});
}

function add(){

let a=$("#bookid").val();
let b=$("#date").val();
let c=$("#fromdate").val();
let d=$("#todate").val();
let e=$("#name").val();
let f=$("#guardian").val();
let g=$("#nid").val();
let h=$("#address").val();
let i=$("#mobile").val();
let j=$("#roomno").val();
let k=$("#regid").val();
let l=$("#picture").val();


// let  url=`${U}/inserthotelbooking.php?bookid=${a}&date=${b}&fromdate=${c}&todate=${d}&name=${e}&guardian=${f}&nid=${g}&address=${h}&mobile=${i}&roomno=${j}&regid=${k}&picture=${l}`;
let  url=`${U}/inserthotelbooking?bookid=${a}&date=${b}&fromdate=${c}&todate=${d}&name=${e}&guardian=${f}&nid=${g}&address=${h}&mobile=${i}&roomno=${j}&regid=${k}&picture=${l}`;
console.log(url);
$.get(url,{},function(data){
// alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

    let a=$("#bookid").val();
    let b=$("#date").val();
    let c=$("#fromdate").val();
    let d=$("#todate").val();
    let e=$("#name").val();
    let f=$("#guardian").val();
    let g=$("#nid").val();
    let h=$("#address").val();
    let i=$("#mobile").val();
    let j=$("#roomno").val();
    let k=$("#regid").val();
    let l=$("#picture").val();

// let url=`${U}/updatehotelbooking.php?bookid=${a}&date=${b}&fromdate=${c}&todate=${d}&name=${e}&guardian=${f}&nid=${g}&address=${h}&mobile=${i}&roomno=${j}&regid=${k}&picture=${l}`;
let url=`${U}/updatehotelbooking?bookid=${a}&date=${b}&fromdate=${c}&todate=${d}&name=${e}&guardian=${f}&nid=${g}&address=${h}&mobile=${i}&roomno=${j}&regid=${k}&picture=${l}`;
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deletehotelbooking.php?bookid=${a}`;
let url=`${U}/deletehotelbooking?bookid=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,c,d,e,f,g,h,i2,j,k,l,i){

$("#bookid").val(a);
$("#date").val(b);
$("#fromdate").val(c);
$("#todate").val(d);
$("#name").val(e);
$("#guardian").val(f);
$("#nid").val(g);
$("#address").val(h);
$("#mobile").val(i2);
$("#roomno").val(j);
$("#regid").val(k);
$("#picture").val(l);


$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");

globalvariables.index=i;
}


function work(){
display();
$("#bookid").val("");
$("#date").val("");
$("#fromdate").val("");
$("#todate").val("");
$("#name").val("");
$("#guardian").val("");
$("#nid").val("");
$("#address").val("");
$("#mobile").val("");
$("#roomno").val("");
$("#regid").val("");
$("#picture").val("");

// $("#picture").val("");



}
function upload(){
var fd = new FormData();

var files = $('#file')[0].files;

// Check file selected or not
if(files.length > 0 ){

fd.append('file',files[0]);

$.ajax({
url:globalvariables.U+'/upload.php',
type:'post',
data:fd,
dataType: 'json',
contentType: false,
processData: false,
success:function(response){
if(response.status == 1){
alert(JSON.stringify(response.name))
var extension = response.extension;
var path = response.path;
$("#picture").val(response.name);
$('.prevel').hide();
if(extension == 'pdf' || extension == 'docx'){
$("#fileprev").attr("href",path);
$("#fileprev").show();
}else{
$("#imgprev").attr("src",path);
$("#imgprev").show();
}

}else{
alert('File not uploaded');
}
}
});
}else{
alert("Please select a file.");
}

}

function onFileChange(event){
let status = false
const file = event.target.files[0];
//alert(file.name)
status = event.target.files.length>0?true:false
if(status==true){
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
document.getElementById("imgprev").src=reader.result;

}
}
}

return(


<div class="container-fluid">

<br/>   <h1 class="text-center" style={{color:"blue"}}> 👨‍💻 Hotel Booking / Check-In Information 📝 </h1> <hr/> 

<div class="row" >
<div class="col-sm-2" >

<div class="form-group">
<label for="bookid" >Booking ID</label>
<input type="text" id="bookid" class="form-control"/>
</div>

<div class="form-group">
<label for="date">Booking Date</label>
<input type="date" id="date" class="form-control"/>
</div>

<div class="form-group">
<label for="fromdate"> From Date </label>
<input type="date" id="fromdate" class="form-control"/>
</div>

<div class="form-group">
<label for="todate"> To Date </label>
<input type="date" id="todate" class="form-control"/>
</div>

<div class="form-group">
<label for="name"> Customer Name </label>
<input type="text" id="name" class="form-control"/>
</div>

<div class="form-group">
<label for="guardian"> Guardian </label>
<input type="text" id="guardian" class="form-control"/>
</div>

{/* <div class="form-group">
<label for="nid">NID</label>
<input type="number" id="nid" class="form-control"/>
</div> */}

<div class="form-group">
<label for="address">Address</label>
<input type="text" id="address" class="form-control"/>
</div>

<div class="form-group">
<label for="mobile">Contact Number</label>
<input type="text" id="mobile" class="form-control"/>
</div>

<div class="form-group">
<label for="roomno">Room Number</label>
<input type="text" id="roomno" class="form-control"/>
</div>

{/* <div class="form-group">
<label for="regid">Registration ID</label>
<input type="text" id="regid" class="form-control"/>
</div> */}

{/* <div class="form-group">
<label for="picture">Picture</label>
<input type="text" id="picture" class="form-control"/>
</div> */}


{/* <div class="form-group">

<input type="file" id="file" name="file" onChange={(event)=>onFileChange(event)} />

<input type="hidden" id="picture" />

<input type="button" class="button" value="Upload" id="but_upload" onClick={()=>upload()}/>

<hr/>

<div style={{marginTop: "40px"}} >


<img src="" class="prevel img-fluid" id="imgprev" width="300" style={{display: "none"}} />


<a href="#" target="_blank" class="prevel" id="fileprev" style={{display: "none"}}>View File</a>
</div>
</div> */}


<div class="form-group">

<div class="btn-group" role="group" aria-label="Basic mixed styles example">

<button type="button" class="btn btn-success" onClick={()=>add()}>Add</button>

<button type="button" class="btn btn-info" onClick={()=>update()}>Update</button>

</div>
</div>

<div class="form-group">
<div id="action"></div>
</div>
</div>

<div class="col-sm-10">

<table class="table table-bordered" style={{textAlign:"center",border:"5px solid blue"}}>

{/* <caption>Total Rows: <span id="tot">{items.total}</span></caption> */}

<thead style={{color:"black",backgroundColor:"lightgreen"}}>

<th>Booking ID</th>
<th>Booking Date</th>
<th>From Date</th>
<th> To Date </th>
<th> Customer Name </th>
<th> Guardian </th>
{/* <th> NID </th> */}
<th> Address </th>
<th> Contact No. </th>
<th> Room No. </th>
{/* <th> Registration ID </th> */}
{/* <th> Picture </th> */}

<th>Booking Status </th>


</thead>

<tbody id="tb" style={{color:"black",fontSize:"large"}}>
{lineitems.map(function(d, index) {
return <tr onClick={()=>show(d.bookid,d.date,d.fromdate,d.todate,d.name,d.guardian,d.nid,d.address,d.mobile,d.roomno,d.regid,d.picture,index)} >

<td>{d.bookid}</td>

<td>{d.date}</td>

 <td>{d.fromdate}</td>

<td>{d.todate}</td>
<td>{d.name}</td>
<td>{d.guardian}</td>
{/* <td>{d.nid}</td> */}
<td>{d.address}</td>
<td>{d.mobile}</td>
<td>{d.roomno}</td>
{/* <td>{d.regid}</td> */}

 {/* <td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td> */}

<td><button type="button"  class="btn btn-success" onClick={()=>remove(d.bookid)} > Successful </button></td>

</tr>

})}

</tbody>

</table>

</div>
</div>

</div>

)
}
export default Items;      
