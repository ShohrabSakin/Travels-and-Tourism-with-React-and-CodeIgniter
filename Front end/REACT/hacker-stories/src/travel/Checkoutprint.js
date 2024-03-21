import React,{ useState, useEffect } from "react";
import $ from 'jquery';

function Items() {

var [items, setData] = useState([]);
var [lineitems, setData2] = useState([]);
var [bookid, setData3] = useState([]);  // <--- Dropdown Code---> //
var [bookdetails, setData4] = useState([]);



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



    // <--- From date - To date  Code  from sir --->  // 

    function daysdifference(firstDate, secondDate){  
        var startDay = new Date(firstDate);  
        var endDay = new Date(secondDate);  
      
    // Determine the time difference between two dates     
        var millisBetween = startDay.getTime() - endDay.getTime();  
      
    // Determine the number of days between two dates  
        var days = millisBetween / (1000 * 3600 * 24);  
      
    // Show the final number of days between dates     
        return Math.round(Math.abs(days));  
    }  


    // code end here



     


    // var Clickheretoprint=function() {
    //     var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,";
    //     disp_setting+="scrollbars=yes,width=700, height=400, left=100, top=25";
    //     var content_vlue = document.getElementById("content").innerHTML;
    
    //     var docprint="";
    //     docprint=window.open("","",disp_setting);
    //     docprint.document.open();
    //     docprint.document.write('</head><body onLoad="self.print()" style="width: 700px; font-size:11px; font-family:arial; font-weight:normal;">');
    //     docprint.document.write(content_vlue);
    //     docprint.document.close();
    //     docprint.focus();
    
    // }




    function add2(){
        const urlParams = new URLSearchParams(window.location.search);
          const myParam = urlParams.get('bookid');
        let a=myParam;//$("#regid").find('option:selected').val();
        // alert(a);
         //alert(JSON.stringify(registration2))
         let sum=0;
         for (let i = 0; i < lineitems.length; ++i) {
        sum+=Number(lineitems[i].price)

         }

         let totalservice=sum;

        let d=0;
        for (let i = 0; i < bookdetails.length; ++i) {
          //alert(registration2[i].name)
        let b=bookdetails[i].bookid;
        //alert(registration2[i].dis_date)
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
  
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
  
        const formattedToday = mm + '/' + dd + '/' + yyyy;
        let c=formattedToday;//registration2[i].dis_date;//$("#dis_date").val();
        let d=bookdetails[i].fromdate;//$("#fromdate").val();
        let d2=bookdetails[i].todate;
        let f=formattedToday;//$("#todate").val();
        let g=bookdetails[i].roomno;//$("#roomno").val();
         let h=$("#total").val();
        let k=$("#total").val();
        
  
        let l=$("#totalservice").val();
        let m=$("#linetotal").val();
        let n=$("#linediscount").val();
        let o=$("#linenet").val();
        let q=$("#linepaid").val();
        let r=$("#linedue").val();
       
  
  
        let  url=`http://localhost:8000/Checkout/InsertCheckout?bookid=${b}&date=${c}&fromdate=${d}&todate=${d2}&roomno=${g}&price=${$("#price").val()}&day=${h}&total=${k}&totalservice=${totalservice}&linetotal=${m}&linediscount=${n}&linenet=${o}&linepaid=${q}&linedue=${r}`;
        
        console.log(url);
        $.get(url,{},function(data){
        //alert(data);
        data=JSON.parse(data)
        //$("#action").html(data.total+" records Inserted");
        // print();
        });
      }
        
        }



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
        


    // <--  Dropdown Code  ----> // 
    $.get(`http://localhost:8000/Servicepayment/gethotelbookid`,{},function(data){
      data=JSON.parse(data)
      setData3(data);
    
      });

      
}

function changeExtra(a)
{
  $("#linenet").val( Number($("#linetotal").val())-Number($("#linediscount").val())) ;
  $("#linedue").val(Number($("#linenet").val())-Number($("#linepaid").val())) ;
}

function change1(){
  
  let ic=$("#bookid").val();
 
  



  fetch(`http://localhost:8000/Servicepayment/getrecordsfrombookid?bookid=${ic}`)
  .then(response => response.json())
  .then(data => {
//alert(data[0].roomno)
    

  setData4(data); //set all data into items. This variable: items will be sent to html by {items.total}
  fetch('http://localhost:8000/Rooms/getroom?roomno='+ data[0].roomno)
        .then(response => response.json())
        .then(data2 => { 
            

            $.get(`${U}/getservicepayment?bookingid=${ic}`,{},function(data3){
                let amt=0;
                data3=JSON.parse(data3)
                globalvariables.st=data3;
                setData(data3);
                setData2(globalvariables.st);
                for(let d in data3){
                    // alert(data3[d].price)
                    amt+=Number(data3[d].price);
                }
                $("#day").val(daysdifference(data[0].fromdate,data[0].todate) )
           $("#price").val(data2[0].price) ;
        //    $("#day").val(daysdifference(data[0].admitdate,new Date()) )
            $("#total").val(data2[0].price*$("#day").val()) ;
                $("#linetotal").val(amt+Number($("#total").val()));
                });



        //    $("#totalM").val(tm) ;
        //    $("#totalS").val(ts) ;
        //    $("#totalO").val(to) ;
        //    $("#totalV").val(tv) ;
           //alert(introText)
           //alert(tv+tm+to+ts+Number(data2[0].price*$("#day").val())+Number($("#totalE").val()))
        //    $("#totalAll").val(tv+tm+to+ts+Number(data2[0].price*$("#day").val())+Number($("#totalE").val())) ;

        //    $("#net").val($("#totalAll").val()-$("#dis").val()) ;
           
        //setData2(data);
        })
        .catch(error => {
        });
  
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


//alert(`${U}/insertservicepayment?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`);

// let  url=`${U}/insertservicepayment.php?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
let  url=`${U}/insertservicepayment?serviceid=${a}&date=${b}&bookid=${c}&regid=${d}&roomno=${e}&servicename=${f}&price=${g}`;
console.log(url);
$.get(url,{},function(data){
//alert(data);
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
alert(url)
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



// 
return(


<div class="container-fluid" >

   
   
 {/* <button  style={{float:"right"}} className="btn btn-success btn-mini" onClick={Clickheretoprint} >Print</button> */}

 {/* <button  style={{float:"right"}} className="btn btn-success btn-mini" onClick={print} >Print</button> */}

 

 <br/>   <h1 class="text-center" style={{color:"blue"}}> 🏛🏫🏦 Hotel  Check-Out  Bills 📝 </h1> <hr/> 


    <div class="row" style={{textAlign:"center",fontSize:"large",fontWeight:"bold"}}> 

        <div class="col-lg-12"> 
         
            <div class="form-group">

                 
              Book ID : <select id="bookid" onChange={() =>change1()} onInput={() =>change1()} >

                            <option value=""> Select Your  Book ID </option> 
                         
                             {bookid.map((option, index) => (

                             <option key={option.bookid} value={option.bookid} style={{backgroundColor:"lightgreen",fontWeight:"bold"}} >{option.bookid}</option> 

                                 ))} 

                        </select>

             </div>

         </div>


    </div> <br/>

    {bookdetails.map((bd, index) => (

            <div>

                <div class="row" style={{textAlign:"center",fontSize:"large",fontWeight:"bold"}}> 

                    <div class="col-lg-6"> 
                
                        <div class="form-group">

                          <label for="bookid">Booking ID</label> &nbsp;

                          <input type="text" id="bookid" value={bd.bookid}   />
                    

                        </div>

                    </div>

                

                    <div class="col-lg-6"> 
            
                        <div class="form-group">

                         <label for="date" > Date</label> 

                         <input type="text" id="date" style={{marginLeft:"50px"}}  value={bd.date} />
        

                        </div>

                    </div>


                </div> <br/>




                <div class="row" style={{textAlign:"center",fontSize:"large",fontWeight:"bold"}}> 

                    <div class="col-lg-6"> 
                
                        <div class="form-group">

                         <label for="fromdate"> From Date </label> &nbsp;

                         <input type="text" id="fromdate" value={bd.fromdate} />
                    

                        </div>

                    </div>

                

                    <div class="col-lg-6"> 
            
                        <div class="form-group">

                         <label for="todate"> To Date </label>  &nbsp;

                          <input type="text" id="todate" value={bd.todate}  />
        

                        </div>

                    </div>


                </div> <br/>



                <div class="row" style={{textAlign:"center",fontSize:"large",fontWeight:"bold"}}> 

                    <div class="col-lg-6"> 
                
                        <div class="form-group">

                         <label for="roomno">Room Number</label> &nbsp;

                         <input type="text" id="roomno" value={bd.roomno} />
                    

                        </div>

                    </div>

                

                    <div class="col-lg-6"> 
            
                        <div class="form-group">

                          <label for="price"> Price</label>  &nbsp;

                          <input type="text" id="price"  />
        

                        </div>

                    </div>


                </div> <br/>

            </div>                      ))} 

                <div class="row" style={{textAlign:"center",fontSize:"large",fontWeight:"bold"}}> 

                    <div class="col-lg-6"> 
                
                        <div class="form-group">

                         <label for="day">Day  of stay </label> &nbsp;

                         <input type="text" id="day"  />
                    

                        </div>

                    </div>

                

                    <div class="col-lg-6"> 
            
                        <div class="form-group">

                          <label for="total"> Total </label>  &nbsp;

                          <input type="text" id="total"  />
        

                        </div>

                    </div>


                </div> <hr/> 

                <br/>   <h3 class="text-center" style={{color:"blue"}}> 👨‍💻 Service  Payment Voucher 📝 </h3> <hr/> 


                <div class="row"> 

                    <div class="col-lg-12"> 

                            
                        <table class="table table-bordered" style={{textAlign:"center",border:"5px solid blue"}}>

                            {/* <caption>Total Rows: <span id="tot">{items.total}</span></caption> */}

                            <thead style={{color:"black",backgroundColor:"lightgreen"}}>

                                <th>SL No</th>
                                <th>Service ID</th>
                                <th>Date</th>
                                <th>Room No</th>
                                <th> Service Name</th>
                                <th> Price</th>
                                <th>Service  Status </th>



                            </thead>

                            <tbody id="tb" style={{color:"black",fontSize:"large"}}>
                                {lineitems.map(function(bd, index) {
                                return <tr>

                                 <td>{index+1}</td>
                                <td>{bd.serviceid}</td>

                                <td>{bd.date}</td>

                                <td>{bd.roomno}</td>
                                <td>{bd.servicename}</td>
                                <td>{bd.price}</td>

                                <td><button type="button"  class="btn btn-success" onClick={()=>remove(bd.serviceid)} > Successful </button></td>

                                </tr>

                                })}

                            </tbody>


                            <tfoot>
                                <tr>
                                <td colspan="5" style={{textAlign : "right",color:"black"}}>Total</td>
                                <td><input type="text" name="linetotal" id="linetotal" className="form-control" style={{color:"black",fontWeight:"bold"}}/></td>
                                </tr>
                                <tr>
                                <td colspan="5" style={{textAlign : "right",color:"black"}}>Discount</td>
                                <td><input type="text" name="linediscount" id="linediscount" className="form-control"  onChange={(e) => changeExtra(e.target.value)}  style={{color:"black",fontWeight:"bold"}}/></td>
                                </tr>
                                <tr>
                                <td colspan="5" style={{textAlign : "right",color:"black"}}>Net</td>
                                <td><input type="text" name="linenet" id="linenet" className="form-control" style={{color:"black",fontWeight:"bold"}} /></td>
                                </tr>
                                <tr>
                                <td colspan="5" style={{textAlign : "right",color:"black"}}>Paid</td>
                                <td><input type="text" name="linepaid" id="linepaid" className="form-control"  onChange={(e) => changeExtra(e.target.value)} style={{color:"black",fontWeight:"bold"}}/></td>
                                </tr>
                                <tr>
                                <td colspan="5" style={{textAlign : "right",color:"black"}}>Due</td>
                                <td><input type="text" id="linedue" className="form-control" style={{color:"black",fontWeight:"bold"}} /></td>
                                </tr>

                            </tfoot>

                        </table>

                     </div>

        

                </div> 


                <div class="d-grid gap-2 col-12 mx-auto">

                    <button type="button" class="btn btn-danger btn-lg" style={{fontSize:"larger"}}  onClick={()=>add2()} > Check  Out   </button> 

                </div>  <br/>


                


</div>

)
}
export default Items;      
