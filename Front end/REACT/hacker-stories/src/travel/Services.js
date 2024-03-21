import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/services";

var U="http://localhost:8000/Services";

function convertDate(inputFormat) {
function pad(s) { return (s < 10) ? '0' + s : s; }
var d = new Date(inputFormat)
return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}




let [globalvariables, setGlobalVariables] = useState({
st: [],
index: 0,
U:"http://localhost/REACT/hacker-stories/"
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
// $.get(`${U}/getservices.php`,{},function(data){
    $.get(`${U}/getservices`,{},function(data){
data=JSON.parse(data)
globalvariables.st=data;
setData(data);
setData2(globalvariables.st);
});
}

function add(){

let a=$("#servid").val();
let b=$("#servname").val();
let c=$("#picture").val();

// let d=$("#country").val();
// let f=$("#route").val();
// let g=$("#picture").val();

// let  url=`${U}/insertservices.php?servid=${a}&servname=${b}&picture=${c}`;
let  url=`${U}/insertservices?servid=${a}&servname=${b}&picture=${c}`;
console.log(url);
$.get(url,{},function(data){
alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

    let a=$("#servid").val();
    let b=$("#servname").val();
    let c=$("#picture").val();


// let d=$("#country").val();
// let f=$("#route").val();
// let g=$("#picture").val();

// let url=`${U}/updateservices.php?servid=${a}&servname=${b}&picture=${c}`;
let url=`${U}/updateservices?servid=${a}&servname=${b}&picture=${c}`;
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deleteservices.php?servid=${a}`;
let url=`${U}/deleteservices?servid=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,c,i){

$("#servid").val(a);
$("#servname").val(b);
$("#picture").val(c);

// $("#country").val(d);
// $("#route").val(f);
// $("#picture").val(g);

$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");
globalvariables.index=i;
}


function work(){
display();
$("#servid").val("");
$("#servname").val("");

// $("#placename").val("");

// $("#country").val("");
// $("#route").val("");

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

<br/>    <h1 class="text-center" style={{color:"blue"}}> 💁‍♂️ Our 24/7 Services </h1> <hr/> 

<div class="row">
<div class="col-sm-2">

<div class="form-group" >
<label for="servid" >Service ID</label>
<input type="text" id="servid" class="form-control"/>
</div> <br/>

<div class="form-group">
<label for="servname">Services</label>
<input type="text" id="servname" class="form-control"/>
</div> <br/>

{/* <div class="form-group">
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
</div> */}

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

<table class="table table-bordered" style={{textAlign:"center",border:"5px solid blue"}}>

{/* <caption>Total Rows: <span id="tot">{items.total}</span></caption> */}

<thead style={{color:"black",backgroundColor:"lightgreen"}}>

<th>Service ID</th>
<th>Services</th>

{/* <th>Location</th>
<th>Country</th>
<th>Route</th> */}

<th>Picture</th>

<th>Status</th>

</thead>

<tbody id="tb" style={{color:"black",fontSize:"large"}}>

{lineitems.map(function(d, index) {
return <tr onClick={()=>show(d.servid,d.servname,d.picture,index)} >

<td>{d.servid}</td>

<td>{d.servname}</td>

{/* <td>{d.placename}</td>

<td>{d.country}</td>
<td>{d.route}</td> */}

{/* <td>{d.Details}</td>
<td>{d.Amount}</td> */}

<td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td>

<td><button type="button"  class="btn btn-success" onClick={()=>remove(d.servid)} > Available </button></td>

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
