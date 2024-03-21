import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/booking";

var U="http://localhost:8000/Floors";

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
    
// $.get(`${U}/getfloors.php`,{},function(data){
    $.get(`${U}/getfloors`,{},function(data){
data=JSON.parse(data)
globalvariables.st=data;
setData(data);
setData2(globalvariables.st);
});
}

function add(){

let a=$("#id").val();
let b=$("#name").val();


// let  url=`${U}/insertfloors.php?id=${a}&name=${b}`;
let  url=`${U}/insertfloors?id=${a}&name=${b}`;
console.log(url);
$.get(url,{},function(data){
alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

    let a=$("#id").val();
    let b=$("#name").val();

   

// let url=`${U}/updatefloors.php?id=${a}&name=${b}`;
let url=`${U}/updatefloors?id=${a}&name=${b}`;
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deletefloors.php?id=${a}}`;
let url=`${U}/deletefloors?id=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,i){

$("#id").val(a);
$("#name").val(b);



$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");

globalvariables.index=i;
}


function work(){
display();
$("#id").val("");
$("#name").val("");



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

<br/>   <h1 class="text-center" style={{color:"blue"}}>  Floors Details Information 📝 </h1> <hr/> 

<div class="row">
<div class="col-sm-3">

<div class="form-group">
<label for="id">Floor ID</label>
<input type="text" id="id" class="form-control"/>
</div>  <br/>

<div class="form-group">
<label for="name"> Located Floor </label>
<input type="text" id="name" class="form-control"/>
</div> <br/>

{/* <div class="form-group">
<label for="type"> Type </label>
<input type="text" id="type" class="form-control"/>
</div>

<div class="form-group">
<label for="Name"> Customer Name</label>
<input type="text" id="Name" class="form-control"/>
</div>

<div class="form-group">
<label for="Number">Contact Number</label>
<input type="text" id="Number" class="form-control"/>
</div>

<div class="form-group">
<label for="NID">NID</label>
<input type="text" id="NID" class="form-control"/>
</div>

<div class="form-group">
<label for="chooseGuests">Choose Guests</label>
<input type="number" id="chooseGuests" class="form-control"/>
</div>

<div class="form-group">
<label for="date">Date</label>
<input type="date" id="date" class="form-control"/>
</div>

<div class="form-group">
<label for="chooseDestination">Choose Destination</label>
<input type="text" id="chooseDestination" class="form-control"/>
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

<button type="button" class="btn btn-success btn-lg" onClick={()=>add()}>Add</button>

<button type="button" class="btn btn-info btn-lg" onClick={()=>update()}>Update</button>

</div>
</div>

<div class="form-group">
<div id="action"></div>
</div>
</div>

<div class="col-sm-9">

<table class="table table-bordered" style={{textAlign:"center",border:"5px solid blue"}}>

{/* <caption>Total Rows: <span id="tot">{items.total}</span></caption> */}

<thead style={{color:"black",backgroundColor:"lightgreen"}}>

<th>Floor ID</th>

 <th> Located Floor </th>


<th>Floor Status </th>



</thead>

<tbody id="tb" style={{color:"black",fontSize:"large"}}>
{lineitems.map(function(d, index) {
return <tr onClick={()=>show(d.id,d.name,index)} >

<td>{d.id}</td>

<td>{d.name}</td>

{/* <td>{d.pkgid}</td>
<td>{d.type}</td>
<td>{d.Name}</td>

 <td>{d.Number}</td>

<td>{d.NID}</td>
<td>{d.chooseGuests}</td>
<td>{d.date}</td>
<td>{d.chooseDestination}</td>


 {/* <td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td> */}

<td><button type="button"  class="btn btn-success btn-lg" onClick={()=>remove(d.id)} > Available ✔  </button></td>

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
