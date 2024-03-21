import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/visitingplaces";

var U="http://localhost:8000/Visitingplaces";

function convertDate(inputFormat) {
function pad(s) { return (s < 10) ? '0' + s : s; }
var d = new Date(inputFormat)
return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}




let [globalvariables, setGlobalVariables] = useState({
st: [],
index: 0,

U:"http://localhost/REACT/hacker-stories/"

// U:"http://localhost:8000/Visitingplaces"

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
    // alert(`${U}/getvisitingplaces.php`)
// $.get(`${U}/getvisitingplaces.php`,{},function(data){
    $.get(`${U}/getvisitingplaces`,{},function(data){
data=JSON.parse(data)
globalvariables.st=data;
setData(data);
setData2(globalvariables.st);
});
}

function add(){

let a=$("#visitid").val();
let b=$("#catid").val();
let c=$("#placename").val();
let d=$("#country").val();
let f=$("#route").val();
let g=$("#picture").val();

// let  url=`${U}/insertvisitingplaces.php?visitid=${a}&catid=${b}&placename=${c}&country=${d}&route=${f}&picture=${g}`;
let  url=`${U}/insertvisitingplaces?visitid=${a}&catid=${b}&placename=${c}&country=${d}&route=${f}&picture=${g}`;
console.log(url);
$.get(url,{},function(data){
alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

let a=$("#visitid").val();
let b=$("#catid").val();
let c=$("#placename").val();
let d=$("#country").val();
let f=$("#route").val();
let g=$("#picture").val();

// let url=`${U}/updatevisitingplaces.php?visitid=${a}&catid=${b}&placename=${c}&country=${d}&route=${f}&picture=${g}`;
let url=`${U}/updatevisitingplaces?visitid=${a}&catid=${b}&placename=${c}&country=${d}&route=${f}&picture=${g}`;
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deletevisitingplaces.php?catid=${a}`;
let url=`${U}/deletevisitingplaces?catid=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,c,d,f,g,i){

$("#visitid").val(a);
$("#catid").val(b);
$("#placename").val(c);
$("#country").val(d);
$("#route").val(f);
$("#picture").val(g);

$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");
globalvariables.index=i;
}


function work(){
display();
$("#visitid").val("");
$("#catid").val("");
$("#placename").val("");
$("#country").val("");
$("#route").val("");

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

<h1 class="text-center"> Visting Places </h1>

<div class="row">
<div class="col-sm-2">

<div class="form-group">
<label for="visitid">Visit ID</label>
<input type="text" id="visitid" class="form-control"/>
</div>

<div class="form-group">
<label for="catid">Category ID</label>
<input type="text" id="catid" class="form-control"/>
</div>

<div class="form-group">
<label for="placename">Location</label>
<input type="text" id="placename" class="form-control"/>
</div>

<div class="form-group">
<label for="country">Country</label>
<input type="text" id="country" class="form-control"/>
</div>

<div class="form-group">
<label for="route">Route</label>
<input type="text" id="route" class="form-control"/>
</div>

{/* <div class="form-group">
<label for="Details">Picture</label>
<input type="text" id="Details" class="form-control"/>
</div>

<div class="form-group">
<label for="Amount">Amount</label>
<input type="number" id="Amount" class="form-control"/>
</div> */}

<div class="form-group">
<input type="file" id="file" name="file" onChange={(event)=>onFileChange(event)} />
<input type="hidden" id="picture" />

<input type="button" class="button" value="Upload" id="but_upload" onClick={()=>upload()}/>

<hr/>
<div style={{marginTop: "40px"}} >


<img src="" class="prevel img-fluid" id="imgprev" width="300" style={{display: "none"}} />


<a href="#" target="_blank" class="prevel" id="fileprev" style={{display: "none"}}>View File</a>
</div>
</div>


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

<table class="table table-bordered">

<caption>Total Rows: <span id="tot">{items.total}</span></caption>

<thead>

<th>Visit ID</th>
<th>Category ID</th>
<th>Location</th>
<th>Country</th>
<th>Route</th>
<th>Picture</th>

<th>Action</th>

</thead>

<tbody id="tb">

{lineitems.map(function(d, index) {
return <tr onClick={()=>show(d.visitid,d.catid,d.placename,d.country,d.route,d.picture,index)} >
<td>{d.visitid}</td>
<td>{d.catid}</td>
<td>{d.placename}</td>
<td>{d.country}</td>
<td>{d.route}</td>

{/* <td>{d.Details}</td>
<td>{d.Amount}</td> */}

<td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td>

<td><button type="button"  class="btn btn-danger" onClick={()=>remove(d.catid)} > Remove </button></td>

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
