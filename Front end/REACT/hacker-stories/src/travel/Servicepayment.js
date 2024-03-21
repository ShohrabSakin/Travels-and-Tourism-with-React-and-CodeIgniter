import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);
var [bookid, setData3] = useState([]);  // <--- Dropdown Code---> //
var [bookdetails, setData4] = useState([]);
var [servicename, setData5] = useState([]); // <--- Dropdown Code---> //

// var U="http://localhost/REACT/hacker-stories/";

// var U="http://localhost:8080/booking";

var U="http://localhost:8000/Servicepayment";


const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('date')==null){
    $("#date").val(convertDate(new Date()) );
   
    }

    function start(){
      // fetch(`${U}/GetServicepayments`).then(res =>res.json()).then(data => {
      // $("#date").val("GR-"+data.maxvr);
      // });
      }

    let dt=$("#Date").val();
    
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
    
    // $.get(`${U}/getservicepayment.php`,{},function(data){
        $.get(`${U}/getservicepayments`,{},function(data){
    data=JSON.parse(data)
    globalvariables.st=data;
    setData(data);
    setData2(globalvariables.st);
    });


    // <--  Dropdown Code  ----> // 
    $.get(`${U}/gethotelbookid`,{},function(data){
      data=JSON.parse(data)
      setData3(data);
    
      });


      // <--  Dropdown Code  ----> // 
      $.get(`${U}/getservicename`,{},function(data){
        data=JSON.parse(data)
        setData5(data);
      
        });
      
}


function change1(){
  
  let ic=$("#bookid").val();
 
  fetch(`http://localhost:8000/Servicepayment/getrecordsfrombookid?bookid=${ic}`)
  
  .then(response => response.json())
  .then(data => {
  setData4(data); //set all data into items. This variable: items will be sent to html by {items.total}
  })
  .catch(error => {
  // Handle the error
  });
  }


function add(){

let a=$("#serviceid").val();
let b=$("#date").val();
let c=$("#bookid").val();
let d=$("#regid").val();
let e=$("#roomno").val();
let f=$("#servname").val();
let g=$("#price").val();


// alert(`${U}/insertservicepayment?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`);

// let  url=`${U}/insertservicepayment.php?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
let  url=`${U}/insertservicepayment?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
console.log(url);
$.get(url,{},function(data){
// alert(data);
data=JSON.parse(data)
$("#action").html(data.total+" records Inserted");
work();
});


}
function update(){

    let a=$("#serviceid").val();
    let b=$("#date").val();
    let c=$("#bookid").val();
    let d=$("#regid").val();
    let e=$("#roomno").val();
    let f=$("#servname").val();
    let g=$("#price").val();


// let url=`${U}/updateservicepayment.php?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
let url=`${U}/updateservicepayment?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
// alert(url)
$.get(url,{},function(data){
work();
});

}
function remove(i){
let a=i;
// let url=`${U}/deletebooking.php?bookid=${a}`;
let url=`${U}/deleteservicepayment?serviceid=${a}`;
$.get(url,{},function(data){
work();
});
}

function show(a,b,c,d,e,f,g,i){

$("#serviceid").val(a);
$("#date").val(b);
$("#bookid").val(c);
$("#regid").val(d);
$("#roomno").val(e);
$("#servname").val(f);
$("#price").val(g);

// $("#date").val(h);
// $("#chooseDestination").val(i);

$("#imgprev").css("display",'block');
$("#imgprev").attr("src","upload/");

change1();

globalvariables.index=i;
}


function work(){
display();
$("#serviceid").val("");
$("#date").val("");
$("#bookid").val("");
$("#regid").val("");
$("#roomno").val("");
$("#servname").val("");
$("#price").val("");


// $("#chooseGuests").val("");
// $("#date").val("");
// $("#chooseDestination").val("");

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
// alert(JSON.stringify(response.name))
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

<br/>   <h1 class="text-center" style={{color:"blue"}}> 👨‍💻 Service Payment Information 📝 </h1> <hr/> 

<div class="row">
<div class="col-sm-3">

<div class="form-group">
<label for="serviceid">Service ID</label>
<input type="text" id="serviceid" class="form-control"/>
</div>

<div class="form-group">
<label for="date"> Date </label>
<input type="date" id="date" class="form-control"/>
</div> <br/>

<div class="form-group">

    Book ID:  <select id="bookid"  onChange={() =>change1()} onInput={() =>change1()} >

                <option value=""> Select Your  Book ID </option> 
                  {bookid.map((option, index) => (

                <option key={option.bookid} value={option.bookid} style={{backgroundColor:"lightgreen",fontWeight:"bold"}} >{option.bookid}</option> 
        
                                                 ))} 

              </select>


</div> <br/>

{bookdetails.map((bd, index) => (

    <div>

      {/* <div class="form-group">
      <label for="regid"> Registration ID</label>
      <input type="text" id="regid" class="form-control" value={bd.regid}/>
      </div> */}

      <div class="form-group">
      <label for="roomno"> Room No </label>
      <input type="text" id="roomno" class="form-control" value={bd.roomno}/>
      </div>

    </div>

            ))}


<div class="form-group">

{/* <label for="servicename">Service Name </label>
<input type="text" id="servicename" class="form-control"/> */}

    Choose Your Service Name : <br/> <select id="servname">

                    <option value="" > Select Your Services </option> 
                      {servicename.map((option, index) => (

                    <option key={option.servname} value={option.servname} style={{backgroundColor:"lightyellow",fontWeight:"bold"}} >{option.servname}</option> 
            
                                                    ))} 

                  </select>

</div> <br/> 

<div class="form-group">
<label for="price">Price</label>
<input type="text" id="price" class="form-control"/>
</div> <br/>



{/* <div class="form-group">
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

<button type="button" class="btn btn-success" onClick={()=>add()}>Add</button>

<button type="button" class="btn btn-info" onClick={()=>update()}>Update</button>

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

<th>Service ID</th>

<th>Date</th>

<th> Booking ID </th>
{/* <th> Registration ID </th> */}
<th>Room No</th>
<th> Service Name</th>
<th> Price</th>
<th>Service  Status </th>



</thead>

<tbody id="tb" style={{color:"black",fontSize:"large"}}>
{lineitems.map(function(bd, index) {
return <tr onClick={()=>show(bd.serviceid,bd.date,bd.bookid,bd.regid,bd.roomno,bd.servicename,bd.price,index)} >

<td>{bd.serviceid}</td>

<td>{bd.date}</td>

<td>{bd.bookid}</td>
{/* <td>{bd.regid}</td> */}
<td>{bd.roomno}</td>
<td>{bd.servicename}</td>
<td>{bd.price}</td>


 {/* <td><img src={`${globalvariables.U}/upload/${d.picture}`} class="img-fluid"/></td> */}

<td><button type="button"  class="btn btn-success" onClick={()=>remove(bd.serviceid)} > Successful </button></td>

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
