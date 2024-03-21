import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/packages";

var U="http://localhost:8000/Packages";

function convertDate(inputFormat) {
function pad(s) { return (s < 10) ? '0' + s : s; }
var d = new Date(inputFormat)
return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}




let [globalvariables, setGlobalVariables] = useState({
st: [],
index: 0,

U:"http://localhost/REACT/hacker-stories/"

// U:"http://localhost:8000/Packages"


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
// $.get(`${U}/getpackages.php`,{},function(data){
    $.get(`${U}/getpackages`,{},function(data){
data=JSON.parse(data)
globalvariables.st=data;
setData(data);
setData2(globalvariables.st);
});
}

function add(){

let a=$("#pkgid").val();
let b=$("#pkgname").val();
let c=$("#destination").val();
let d=$("#duration").val();
let f=$("#price").val();
let g=$("#picture").val();

let h=$("#type").val();
let i=$("#fromwhere").val();
let j=$("#towhere").val();
let k=$("#fromdate").val();
let l=$("#todate").val();



// let  url=`${U}/insertpackages.php?pkgid=${a}&pkgname=${b}&destination=${c}&duration=${d}&price=${f}&picture=${g}&type=${h}&fromwhere=${i}&towhere=${j}&fromdate=${k}&todate=${l}`;
let  url=`${U}/insertpackages?pkgid=${a}&pkgname=${b}&destination=${c}&duration=${d}&price=${f}&picture=${g}&type=${h}&fromwhere=${i}&towhere=${j}&fromdate=${k}&todate=${l}`;
console.log(url);
$.get(url,{},function(data){
alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

    let a=$("#pkgid").val();
    let b=$("#pkgname").val();
    let c=$("#destination").val();
    let d=$("#duration").val();
    let f=$("#price").val();
    let g=$("#picture").val();

    let h=$("#type").val();
    let i=$("#fromwhere").val();
    let j=$("#towhere").val();
    let k=$("#fromdate").val();
    let l=$("#todate").val();


// let url=`${U}/updatepackages.php?pkgid=${a}&pkgname=${b}&destination=${c}&duration=${d}&price=${f}&picture=${g}&type=${h}&fromwhere=${i}&towhere=${j}&fromdate=${k}&todate=${l}`;
let url=`${U}/updatepackages?pkgid=${a}&pkgname=${b}&destination=${c}&duration=${d}&price=${f}&picture=${g}&type=${h}&fromwhere=${i}&towhere=${j}&fromdate=${k}&todate=${l}`;
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deletepackages.php?pkgid=${a}`;
let url=`${U}/deletepackages?pkgid=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,c,d,f,g,h,i,j,k,l){

$("#pkgid").val(a);
$("#pkgname").val(b);
$("#destination").val(c);
$("#duration").val(d);
$("#price").val(f);
$("#picture").val(g);

$("#type").val(h);
$("#fromwhere").val(i);
$("#towhere").val(j);
$("#fromdate").val(k);
$("#todate").val(l);

$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");
globalvariables.index=i;
}


function work(){
display();
$("#pkgid").val("");
$("#pkgname").val("");
$("#destination").val("");
$("#duration").val("");
$("#price").val("");

// $("#picture").val("");

$("#type").val("");
$("#fromwhere").val("");
$("#towhere").val("");
$("#fromdate").val("");
$("#todate").val("");

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

<h1 class="text-center">Visiting Packages</h1>

<div class="row">
<div class="col-sm-2">

<div class="form-group">
<label for="pkgid">Package ID</label>
<input type="text" id="pkgid" class="form-control"/>
</div>

<div class="form-group">
<label for="pkgname">Packages</label>
<input type="text" id="pkgname" class="form-control"/>
</div>

<div class="form-group">
<label for="destination">Destination</label>
<input type="text" id="destination" class="form-control"/>
</div>

<div class="form-group">
<label for="duration">Duration</label>
<input type="text" id="duration" class="form-control"/>
</div>

<div class="form-group">
<label for="price">Price</label>
<input type="text" id="price" class="form-control"/>
</div>

<div class="form-group">
<label for="type">Type</label>
<input type="text" id="type" class="form-control"/>
</div>

<div class="form-group">
<label for="fromwhere">From Where</label>
<input type="text" id="fromwhere" class="form-control"/>
</div>

<div class="form-group">
<label for="towhere">To Where</label>
<input type="text" id="towhere" class="form-control"/>
</div>

<div class="form-group">
<label for="fromdate">From Date</label>
<input type="date" id="fromdate" class="form-control"/>
</div>

<div class="form-group">
<label for="todate">To Date</label>
<input type="date" id="todate" class="form-control"/>
</div>




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

<th>Package ID</th>
<th>Packages</th>
 {/* <th>Destination</th> */}
{/* <th>Duration</th> */}
<th>Price</th>
<th>Picture</th>

<th>Type</th>
<th>From Where</th>
<th>To Where</th>
<th>From Date</th>
<th>To Date</th>

<th>Action</th>

</thead>

<tbody id="tb">

{lineitems.map(function(d, index) {
return <tr onClick={()=>show(d.pkgid,d.pkgname,d.destination,d.duration,d.price,d.picture,d.type,d.fromwhere,d.towhere,d.fromdate,d.todate,index)} >
<td>{d.pkgid}</td>
<td>{d.pkgname}</td>
{/* <td>{d.destination}</td> */}
{/* <td>{d.duration}</td> */}
<td>{d.price}</td>

{/* <td>{d.Details}</td>
<td>{d.Amount}</td> */}

<td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td>

<td>{d.type}</td>
<td>{d.fromwhere}</td>
<td>{d.towhere}</td>
<td>{d.fromdate}</td>
<td>{d.todate}</td>


<td><button type="button"  class="btn btn-danger" onClick={()=>remove(d.pkgid)} > Remove </button></td>

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
