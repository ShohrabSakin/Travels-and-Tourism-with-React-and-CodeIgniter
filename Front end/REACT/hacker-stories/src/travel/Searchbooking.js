import React,{ useState, useEffect } from "react";
import $ from 'jquery';
function Doctorcommission() {
const [items, setData] = useState([]);
const [doctorid, setData2] = useState([]);
const [options, setData3] = useState([]);


function click1(){

let d1=$("#d1").val(); //convertDate($("#d1").val());

let d2=$("#d2").val(); //convertDate($("#d2").val());


fetch(`http://localhost:8000/Booking/SearchBooking?d1=${d1}&d2=${d2}`)

.then(response => response.json())
.then(data => {
setData(data);//set all data into items. This variable: items will be sent to html by {items.total}
})
.catch(error => {
// Handle the error
});
}

function collectFee(a,b,c,d,f){



  window.location=`/collectfee?bookid=${a}&date=${b}&mobile=${c}&name=${d}&destination=${f}`;

  }



  var Clickheretoprint=function()
{
  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,";
  disp_setting+="scrollbars=yes,width=700, height=400, left=100, top=25";
  var content_vlue = document.getElementById("content").innerHTML;

  var docprint="";
  docprint=window.open("","",disp_setting);
  docprint.document.open();
  docprint.document.write('</head><body onLoad="self.print()" style="width: 700px; font-size:11px; font-family:arial; font-weight:normal;">');
  docprint.document.write(content_vlue);
  docprint.document.close();
  docprint.focus();

}


return(
<div className="container-fluid">


<div style={{marginTop: "-19px", marginBottom: "21px"}}>
<a  href="index.php"><button className="btn btn-primary btn-lg" style={{float: "none"}}>  Back</button>
<button  type="button" style={{float:"right"}} className="btn btn-success btn-lg" onClick={Clickheretoprint} > Print</button></a>
</div>
<form>
<br/> <h1 style={{textAlign:"center",color:"blue"}}> 🔎 💁‍♂️ Search Booking 📝 👨‍💻 </h1> 

<div style={{textAlign: "center"}}>
  
<strong>

  

<br/>
<br/>
From : <input type="date" style={{width: "223px", padding:"14px"}} id="d1" name="d1" className="tcal"  />
To: <input type="date" style={{width: "223px", padding:"14px"}}  id="d2" name="d2" className="tcal"  />
<button className="btn btn-info" style={{width: "123px", height:"35px", marginTop:"-8px",marginLeft:"8px"}} type="button" onClick={click1} > Search</button>
</strong></div>
</form>


<div className="content" id="content">
<div style={{fontWeight:"bold", textAlign:"center",fontSize:"14px",marginBottom: "15px"}}>

</div> <br/> 


<table className="table table-bordered" id="resultTable" data-responsive="table" style={{textAlign: "center",border:"5px solid blue"}}>

<thead style={{color:"black",backgroundColor:"lightgreen"}}>

  <tr>

    <th width="10%"> Book ID </th>
    <th width="10%"> Date </th>
    <th width="10%"> Contact Number </th>
    <th width="10%"> Customer Name </th>
    <th width="10%"> Destination </th>
    <th width="10%"> Action </th>


  </tr>

</thead>

<tbody style={{color:"black",fontSize:"large"}}>


{items.map(function(item,i) {
return <tr className="record" >
   
<td>{item.bookid}</td>
<td>{item.date}</td>
<td>{item.Number}</td>
<td>{item.Name}</td>
<td>{item.chooseDestination}</td>

<td><button type="button"  class="btn btn-success" onClick={()=>collectFee(item.bookid,item.date,item.Number,item.Name,item.chooseDestination)} > Collect Fee </button></td>




</tr>
})}



</tbody>


</table>
</div>




</div>
);
}


export default Doctorcommission;
