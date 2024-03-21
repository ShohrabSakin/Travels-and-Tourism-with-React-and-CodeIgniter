import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);

// var U="http://localhost/REACT/hacker-stories/";

var U="http://localhost:8000/feecollection";

function convertDate(inputFormat) {
function pad(s) { return (s < 10) ? '0' + s : s; }
var d = new Date(inputFormat)
return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}




let [globalvariables, setGlobalVariables] = useState({
st: [],
index: 0,

U:"http://localhost:8000/Todayfee"

});

useEffect(() => {
const urlParams = new URLSearchParams(window.location.search);
const a = urlParams.get('bookid');
const b = urlParams.get('date');
const c = urlParams.get('mobile');
const d = urlParams.get('name');
const e = urlParams.get('destination');
//console.log(myParam)
$("#bookid").val(a);
$("#date").val(b);
//alert(c)
$("#mobile").val(c);
$("#Name").val(d);
$("#chooseDestination").val(e);
//deptchange();
display();
}, [])




            function display(){
                // alert(`${U}/getfeecollections`)
            $.get(`${U}/getfeecollections`,{},function(data){
            data=JSON.parse(data)
            globalvariables.st=data;
            setData(data);
            setData2(globalvariables.st);
            });
            }



            // function add(){

            // let a=$("#collectionid").val();
            // let b=$("#date").val();
            // let c=$("#bookid").val();
            // let d=$("#Name").val();
            // let e=$("#amount").val();


            // // let  url=`${U}/insertfeecollection?collectionid=${a}&date=${b}&bookid=${c}&Name=${d}&amount=${e}`;
            // let  url=`${U}/insertfeecollection?collectionid=${a}&date=${b}&bookid=${c}&Name=${d}&amount=${e}`;
            // console.log(url);
            // $.get(url,{},function(data){
            // // alert(data);
            // data=JSON.parse(data)
            // $("#action").html(data.total+" records Inserted");
            // work();
            // });


            // }


        // function update(){

        //     let a=$("#collectionid").val();
        //     let b=$("#date").val();
        //     let c=$("#bookid").val();
        //     let d=$("#Name").val();
        //     let e=$("#amount").val();

        // // let url=`${U}/updatefeecollection?collectionid=${a}&date=${b}&bookid=${c}&Name=${d}&amount=${e}`;
        // let url=`${U}/updatefeecollection?collectionid=${a}&date=${b}&bookid=${c}&Name=${d}&amount=${e}`;
        // $.get(url,{},function(data){
        // work();
        // });

        // }



        // function remove(i){
        // let a=i;
        // // let url=`${U}/deletefeecollection?collectionid=${a}`;
        // let url=`${U}/deletefeecollection?collectionid=${a}`;
        // $.get(url,{},function(data){
        // work();
        // });
        // }


        // function show(a,b,c,d,e,i){

        // $("#collectionid").val(a);
        // $("#date").val(b);
        // $("#bookid").val(c);
        // $("#Name").val(d);
        // $("#amount").val(e);


        // $("#imgprev").css("display",'block');
        // $("#imgprev").attr("src","upload/");
        // globalvariables.index=i;
        // }


        // function work(){
        // display();
        // $("#collectionid").val("");
        // $("#date").val("");
        // $("#bookid").val("");

        // $("#Name").val("");

        // $("#amount").val("");


        // // $("#picture").val("");

        // }



        // function upload(){
        // var fd = new FormData();

        // var files = $('#file')[0].files;

        // // Check file selected or not
        // if(files.length > 0 ){

        // fd.append('file',files[0]);

        // $.ajax({
        // url:globalvariables.U+'/upload.php',
        // type:'post',
        // data:fd,
        // dataType: 'json',
        // contentType: false,
        // processData: false,
        // success:function(response){
        // if(response.status == 1){
        // alert(JSON.stringify(response.name))
        // var extension = response.extension;
        // var path = response.path;
        // $("#picture").val(response.name);
        // $('.prevel').hide();
        // if(extension == 'pdf' || extension == 'docx'){
        // $("#fileprev").attr("href",path);
        // $("#fileprev").show();
        // }else{
        // $("#imgprev").attr("src",path);
        // $("#imgprev").show();
        // }

        // }else{
        // alert('File not uploaded');
        // }
        // }
        // });
        // }else{
        // alert("Please select a file.");
        // }

        // }



    // function onFileChange(event){
    // let status = false
    // const file = event.target.files[0];
    // //alert(file.name)
    // status = event.target.files.length>0?true:false
    // if(status==true){
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    // document.getElementById("imgprev").src=reader.result;

    // }
    // }
    // }


function InsertAmount(){

    //let a=$("#collectionid").val();
    let b=$("#date").val();
    let c=$("#bookid").val();
    let d=$("#Name").val();
    let e=$("#amount").val();
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    
    let  url=`${U}/insertfeecollection?bookingdate=${b}&bookid=${c}&Name=${d}&amount=${e}`;
   
    $.get(url,{},function(data){

        window.location=`/todayfee?today=${today}`
        
        });

}

return(


<div class="container-fluid" >

<h1 class="text-center" style={{color:"blue"}}> Booking Payment Entries </h1> 

<div class="row" style={{textAlign:"center",fontSize:"large"}}>
<div class="col-sm-12">

<div class="form-group">
<label for="date" style={{fontSize:"larger"}}>Date</label>
<input type="label" id="date" style={{border:"5px solid blue",marginLeft:"110px"}} />
</div> <br/>

<div class="form-group">
<label for="bookid" style={{fontSize:"larger"}}>Booking ID</label>
<input type="label" id="bookid" style={{border:"5px solid blue",marginLeft:"65px"}} />
</div> <br/>

<div class="form-group">
<label for="Name" style={{fontSize:"larger"}}>Customer Name</label>
<input type="label" id="Name" style={{border:"5px solid blue",marginLeft:"20px"}} />
</div> <br/>

<div class="form-group">
<label for="Number" style={{fontSize:"larger"}}>Contact Number</label>
<input type="label" id="mobile" style={{border:"5px solid blue",marginLeft:"20px"}} />
</div> <br/>

<div class="form-group">
<label for="chooseDestination" style={{fontSize:"larger"}} >Destination</label>
<input type="label" id="chooseDestination" style={{border:"5px solid blue",marginLeft:"50px"}} />
</div> <br/>

<div class="form-group">
<label for="amount" style={{fontSize:"larger"}} >Amount</label>
<input type="text" id="amount" style={{border:"5px solid blue",marginLeft:"80px"}}  />
</div> <br/>

<div class="d-grid gap-2 col-6 mx-auto">

  <button type="button" class="btn btn-success" onClick={()=>InsertAmount()} > Collect </button> 

</div>  <br/> <br/>

{/* <div class="form-group">
<label for="price">Price</label>
<input type="text" id="price" class="form-control"/>
</div> */}

{/* <div class="form-group">
<label for="Amount">Amount</label>
<input type="number" id="Amount" class="form-control"/>
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


{/* <div class="form-group">
<div class="btn-group" role="group" aria-label="Basic mixed styles example">

<button type="button" class="btn btn-success" onClick={()=>add()}>Add</button>

<button type="button" class="btn btn-info" onClick={()=>update()}>Update</button>

</div>
</div> */}

<div class="form-group">
<div id="action"></div>
</div>
</div>



</div>

</div>

)
}
export default Items;      
