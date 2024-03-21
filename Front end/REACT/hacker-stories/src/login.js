
import React,{ useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import $ from 'jquery';
import { createBrowserHistory } from "history";
async function loginUser() {
let user=$("#username").val();
let pass=$("#password").val();
// return fetch(`http://localhost/REACT/hacker-stories/checklogin.php?username=${user}&password=${pass}`)

return fetch(`http://localhost/REACT/hacker-stories/checklogin.php?username=${user}&password=${pass}`)

.then(data => data.json())
}
export default function Login({ setToken }) {
const [username, setUserName] = useState();
const [password, setPassword] = useState();
let [flights, setFlights] = useState();
let [flights3, setFlights3] = useState();


let [packages2, setPackages2] = useState();
let [packages, setPackages] = useState([]);
// let [flights2, setFlights2] = useState([]);
let [hotels, setHotels] = useState([]);
let [hotels2, setHotels2] = useState();

let [visitingplaces, setVisitingplaces] = useState();


const handleSubmit = async e => {
e.preventDefault();
const token = await loginUser();
localStorage.setItem('token', JSON.stringify(token));
const history = createBrowserHistory();
//alert(history.location.pathname)
if(history.location.pathname=="/login")
// window.location="http://localhost:4200";

window.location="http://localhost:4200";
else
window.location.reload();
}
useEffect(() => {

  }, [])


function findPackages(){

  // alert(`http://localhost:8000/Packages/getservice2?fromwhere=${$("#fromwhere").val()}&towhere=${$("#towhere").val()}&fromdate=${$("#fromdate").val()}&todate=${$("#todate").val()}`)
 
  // $.get(`http://localhost/REACT/hacker-stories/getservice2.php?fromwhere=${$("#fromwhere").val()}&towhere=${$("#towhere").val()}&fromdate=${$("#fromdate").val()}&todate=${$("#todate").val()}`,{},function(data){

  // $.get(`http://localhost:8080/Packages/getservice2?fromwhere=${$("#fromwhere").val()}&towhere=${$("#towhere").val()}&fromdate=${$("#fromdate").val()}&todate=${$("#todate").val()}`,{},function(data){

  $.get(`http://localhost:8000/Packages/getservice2?fromwhere=${$("#fromwhere").val()}&towhere=${$("#towhere").val()}&fromdate=${$("#fromdate").val()}&todate=${$("#todate").val()}`,{},function(data){

  

    data=JSON.parse(data);
    //alert(JSON.stringify(data)    )
    setPackages(data);   
   // alert(JSON.stringify(packages)) 
    });
}

function getPackages(){
 
  // $.get(`http://localhost/REACT/hacker-stories/getpackages.php`,{},function(data){

  // $.get(`http://localhost:8080/Packages/getpackages`,{},function(data){

  $.get(`http://localhost:8000/Packages/getpackages`,{},function(data){

  

   data=JSON.parse(data);
   setPackages2(data);   
    });
}

function findFlights(){

  // alert(`http://localhost:8000/Flights/getflights2?fromwhere=${$("#fromwhere2").val()}&towhere=${$("#towhere2").val()}&fromdate=${$("#fromdate2").val()}&todate=${$("#todate2").val()}`)

  // $.get(`http://localhost/REACT/hacker-stories/getflights2.php?fromwhere=${$("#fromwhere2").val()}&towhere=${$("#towhere2").val()}&fromdate=${$("#fromdate2").val()}&todate=${$("#todate2").val()}`,{},function(data){

  // $.get(`http://localhost:8080/Flights/getflights2?fromwhere=${$("#fromwhere2").val()}&towhere=${$("#towhere2").val()}&fromdate=${$("#fromdate2").val()}&todate=${$("#todate2").val()}`,{},function(data){

  $.get(`http://localhost:8000/Flights/getflights2?fromwhere=${$("#fromwhere2").val()}&towhere=${$("#towhere2").val()}&fromdate=${$("#fromdate2").val()}&todate=${$("#todate2").val()}`,{},function(data){

    data=JSON.parse(data);
    //alert(JSON.stringify(data)    )
    setFlights(data);   
   // alert(JSON.stringify(flights)) 
    });
}

function getFlights(){
  //  $.get(`http://localhost/REACT/hacker-stories/getflights.php`,{},function(data){

  //  $.get(`http://localhost:8080/Flights/getflights`,{},function(data){

   $.get(`http://localhost:8000/Flights/getflights`,{},function(data){

    data=JSON.parse(data);
    setFlights3(data);   
     });
}


       // N.B--> This code doesnt work properly thats why I just comment this code // 

function findHotels(){ 
  //hotels=[];
  //  alert(`http://localhost/REACT/hacker-stories/gethotels2.php?hotelname=${$("#hotelname").val()}&rating=${$("#rating").val()}`);

  // $.get(`http://localhost/REACT/hacker-stories/gethotels2.php?hotelname=${$("#hotelname").val()}&rating=${$("#rating").val()}`,{},function(data){

  $.get(`http://localhost:8080/Hotels/gethotels2?hotelname=${$("#hotelname").val()}&rating=${$("#rating").val()}`,{},function(data){
    data=JSON.parse(data);
    //alert(JSON.stringify(data)    )
    setHotels(data);   
  //  alert(JSON.stringify(hotels)) 
    });
}


function getHotels(){
  // alert(`http://localhost/REACT/hacker-stories/gethotels.php`)
  
//alert(`http://localhost:8080/Hotels/gethotels`)

  // $.get(`http://localhost/REACT/hacker-stories/gethotels.php`,{},function(data){

  // $.get(`http://localhost:8080/Hotels/gethotels`,{},function(data){

  $.get(`http://localhost:8000/Hotels/gethotels`,{},function(data){

   data=JSON.parse(data);
   setHotels2(data);   
    });
}

function getVisitingplaces(){
  // alert(`http://localhost/REACT/hacker-stories/gethotel.php`)

  // $.get(`http://localhost/REACT/hacker-stories/getvisitingplaces.php`,{},function(data){

  // $.get(`http://localhost:8080/Visitingplaces/getvisitingplaces`,{},function(data){

  $.get(`http://localhost:8000/Visitingplaces/getvisitingplaces`,{},function(data){

   data=JSON.parse(data);
   setVisitingplaces(data);   
    });
}


function add(){

  let a=$("#bookid").val();
  let b=$("#pkgid").val();
  let c=$("#type").val();

  let d=$("#Name").val();
  let e=$("#Number").val();
  let f=$("#NID").val();
  let g=$("#chooseGuests").val();
  let h=$("#date").val();
  let i=$("#chooseDestination").val();
  
  // let  url=`http://localhost/REACT/hacker-stories/insertbooking.php?Name=${d}&Number=${e}&chooseGuests=${g}&date=${h}&chooseDestination=${i}&pkgid=none&type=none&NID=none`;

  // let  url=`http://localhost:8080/Booking/insertbooking?Name=${d}&Number=${e}&chooseGuests=${g}&date=${h}&chooseDestination=${i}&pkgid=none&type=none&NID=none`;

  let  url=`http://localhost:8000/Booking/insertbooking?Name=${d}&Number=${e}&chooseGuests=${g}&date=${h}&chooseDestination=${i}&pkgid=none&type=none&NID=none`;

  console.log(url);
  $.get(url,{},function(data){
  // alert(data);
  data=JSON.parse(data)
  $("#action").html(data.total+" records Inserted");
  $("#out").html("💁‍♂️ Booking Successfully ✅");
  });
  
  }



return(


 <div className="login-wrapper" >



<main className="main" id="top">
      <nav className="navbar navbar-expand-lg  fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll"  style={{backgroundColor:"lightgreen"}}>

        <div className="container"><a className="navbar-brand" href="index.html">  <span className="fw-bold text-primary ms-2">XYZ Travels & Tours</span></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent" >
            <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2"><a className="nav-link fw-medium active" aria-current="page" href="#places" onClick={getVisitingplaces} ><span className="nav-link-icon text-800 me-1 fas fa-map-marker-alt"></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} >Places </span></a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#flights" onClick={getFlights}> <span className="nav-link-icon text-800 me-1 fas fa-plane"></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} >Flights</span></a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#hotels" onClick={getHotels} > <span className="nav-link-icon text-800 me-1 fas fa-hotel"></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} >Hotels</span></a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#activities"><span className="nav-link-icon text-800 me-1 fas fa-bolt"></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} >Activities</span></a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#packages" onClick={getPackages} ><span className="nav-link-icon text-800 me-1 "></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} > 🎁 Packages</span></a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#booking"><span className="nav-link-icon text-800 me-1 "></span><span className="nav-link-text" style={{color:"black",fontSize:"large"}} > 📝 Booking</span></a></li>
            </ul>

            <form>
              {/* <button className="btn text-800 order-1 order-lg-0 me-2" type="button">Support</button> */}
              <button className="btn btn-voyage-outline order-0" type="button" data-bs-toggle="modal" data-bs-target="#basicModal"><span className="text-primary" >Sign in</span></button>
            </form>
          </div>
        </div>
      </nav>
      
      <section className="mt-7 py-0">
        <div className="bg-holder w-50 bg-right d-none d-lg-block" style={{backgroundImage:"url(assets/img/gallery/TC2.jpg)"}}>
        </div>
       

        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-3 text-1000 fw-bold" >Let’s make a tour</h1>
              <h1 className="display-3 text-primary fw-bold">Discover the beauty</h1>

              <div className="pt-5">
                <nav>
                  <div className="nav nav-tabs voyage-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-map-marker-alt"></i></button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> <i className="fas fa-plane"></i></button>
                    {/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> <i className="fas fa-hotel"></i></button> */}
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputAddress1">Address 1</label>
                            <input className="form-control input-box form-voyage-control" id="fromwhere" type="text" placeholder="From where" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-map-marker-alt"></i></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputAddress2">Address 2</label>
                            <input className="form-control input-box form-voyage-control" id="towhere" type="text" placeholder="To where" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-map-marker-alt"> </i></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="fromdate" type="date" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="todate" type="date" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputPersonOne">Person</label>
                            <select className="form-select form-voyage-select input-box" id="inputPersonOne">
                              <option selected="selected">Select Person</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-user"> </i></span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="button"  style={{color:"black"}}  onClick={findPackages} > 🔎 Search Packages</button>
                        </div>

                        <table class="table table-bordered" style={{textAlign:"center",border:"4px solid blue"}}>



                          <thead style={{backgroundColor:"lightgreen",color:"black"}}>

                            {/* <th> Package ID </th> */}
                            <th> Package Name </th>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>From Date</th>
                            <th>To date</th>

                          </thead>

                          <tbody id="tb">
                            {packages.map(function(d, index) {
                            return <tr>

                                      {/* <td style={{color:"black",fontWeight:"bold"}}  >{d.pkgid}</td> */}
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.pkgname}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.destination}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.duration}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.price}</td>
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.fromdate}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.todate}</td>

                                    </tr>

                                                           })}

                          </tbody>

                        </table>
                      </form>
                    </div>

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputAddressThree">Address 1</label>
                            <input className="form-control input-box form-voyage-control" id="fromwhere2" type="text" placeholder="From where" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-map-marker-alt"></i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputAddressFour">Address 2</label>
                            <input className="form-control input-box form-voyage-control" id="towhere2" type="text" placeholder="To where" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-map-marker-alt"> </i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="fromdate2" type="date" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="todate2" type="date" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputPeopleTwo">People</label>
                            <select className="form-select form-voyage-select input-box" id="inputPeopleTwo">
                              <option selected="selected">Select Person</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-user"> </i></span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="button"  style={{color:"black"}} onClick={findFlights} > 🔎  Search Flights  ✈ </button>
                        </div>

                        <table class="table table-bordered" style={{textAlign:"center",border:"4px solid blue"}}>



                          <thead style={{backgroundColor:"lightgreen",color:"black"}}>

                            <th> Flights ID </th>
                            <th> From Where </th>
                            <th>To Where</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Price</th>

                          </thead>

                          <tbody id="tb">
                            {flights && flights.map(function(d, index) {
                            return <tr>

                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.flightid}</td>
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.fromwhere}</td>
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.towhere}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.fromdate}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.todate}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.price}</td>

                                    </tr>

                                                      })}

                          </tbody>

                        </table>
                        
                      </form>
                    </div>

                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="hotelname" type="text" placeholder="Insert Hotel Name" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input className="form-control input-box form-voyage-control" id="rating" type="text" placeholder="Insert Hotel Ratings ⭐" /><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-calendar"></i></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label className="form-label visually-hidden" for="inputPeopleThree">Person</label>
                            <select className="form-select form-voyage-select input-box" id="inputPeopleThree">
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select><span className="nav-link-icon text-800 fs--1 input-box-icon"><i className="fas fa-user"> </i></span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit"  style={{color:"black"}}  onClick={findHotels} > 🔎  Search Hotels 🏦 </button>
                        </div>

                        <table class="table table-bordered" style={{textAlign:"center",border:"4px solid blue"}}>



                          <thead style={{backgroundColor:"lightgreen",color:"black"}}>

                            <th> Hotel ID </th>
                            <th> Hotel Name </th>
                            <th>Price</th>
                            <th>Rating [ ⭐ ]</th>

                          </thead>

                          <tbody id="tb">
                            {hotels.map(function(d, index) {
                            return <tr>

                                      <td style={{color:"black",fontWeight:"bold"}} >{d.hotelid}</td>
                                      <td style={{color:"black",fontWeight:"bold"}} >{d.hotelname}</td>
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.price}</td>
                                      <td style={{color:"black",fontWeight:"bold"}}  >{d.rating}</td>

                                    </tr>

                                                  })}

                          </tbody>

                        </table>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-0 overflow-hidden">

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 px-0"><img className="img-fluid order-md-0 mb-4 h-100 fit-cover" src="assets/img/gallery/hero-section-2.png" alt="..." /></div>
            <div className="col-lg-6 px-0 bg-primary-gradient bg-offcanvas-right">
              <div className="mx-6 mx-xl-8 my-8">
                <div className="align-items-center d-block d-flex mb-5"><img className="img-fluid me-3 me-md-2 me-lg-4" src="assets/img/icons/locations.png" alt="..." />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">Visit the greatest places</h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5"><img className="img-fluid me-3 me-md-2 me-lg-4" src="assets/img/icons/schedule.png" alt="..." />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">Make your own plans.</h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5"><img className="img-fluid me-3 me-md-2 me-lg-4" src="assets/img/icons/save.png" alt="..." />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">Save 50% on your next trip</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   

      </section>
    


      <section id="testimonial">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue"}}>Flash Deals</h5>
            </div>
            <div className="col-12">
              <div className="carousel slide" id="carouselTestimonials" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/maldives.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Mermaid Beach Resort: The most joyful way to spend your holiday</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$200</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$175</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/cinnamon.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$300</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$250</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/dhigu.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Fihalhohi Island Resort: Luxury destination without compromise</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$375</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$300</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/maldives.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Mermaid Beach Resort: The most joyful way to spend your holiday</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$200</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$175</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/cinnamon.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$300</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$250</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/dhigu.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Fihalhohi Island Resort: Luxury destination without compromise</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$375</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$300</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/maldives.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Mermaid Beach Resort: The most joyful way to spend your holiday</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$200</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$175</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/cinnamon.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$300</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$250</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/dhigu.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Fihalhohi Island Resort: Luxury destination without compromise</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$375</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$300</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/maldives.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Mermaid Beach Resort: The most joyful way to spend your holiday</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$200</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$175</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/cinnamon.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$300</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$250</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/dhigu.png" alt="..." />
                          <div className="card-img-overlay ps-0"><span className="badge bg-primary ms-3 me-1 p-2"><i className="fas fa-clock me-1"></i><span>20:04:32:21</span></span><span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1"></i><span>trending</span><i className="fas fa-bolt ms-1"> </i></span></div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-4 text-truncate">Fihalhohi Island Resort: Luxury destination without compromise</h5>
                            <div className="d-flex align-items-center justify-content-start"><span className="text-800 fs--1 me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-900 me-3">Maldives</span><span className="text-800 fs--1 me-2"><i className="fas fa-calendar"></i></span><span className="text-900">4 days</span></div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">$375</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4"><span>$300</span><span className="text-900 fs--1 fw-normal">/Per person</span></h1><span className="badge bg-soft-secondary p-2"><i className="fas fa-tag text-secondary fs--1 me-1"></i><span className="text-secondary fw-normal fs-1">-15%</span></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next                                    </span></button>
                  </div>
                </div>
                <div className="row flex-center">
                  <div className="col-auto position-relative z-index-2">
                    <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                      <li className="active" data-bs-target="#carouselTestimonials" data-bs-slide-to="0"></li>
                      <li data-bs-target="#carouselTestimonials" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselTestimonials" data-bs-slide-to="2"></li>
                      <li data-bs-target="#carouselTestimonials" data-bs-slide-to="3"></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-7 overflow-hidden" id="places">
      <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> ✈ Lets Make A Tour With Popular Places 🏨 🏛 🏫 🏦 </h1>
        <div className="container bg-offcanvas-gray-right">
          <div className="row gx-2 mb-2">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="bg-primary-gradient bg-offcanvas h-100">
                <div className="row g-0 justify-content-end">
                  <div className="col-12">
                    <div className="p-6 py-md-5 px-md-3 py-lg-8 text-light"><img className="mb-5" src="assets/img/icons/icon-location.svg" alt="..." />
                      <h2 className="mb-2 text-light">Popular places</h2>
                      <p>Enjoy the benefits of our packages to the<br className="d-none d-lg-block" />sites where our visitors have more fun. <br className="d-none d-lg-block" />Properly arranged with low costing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                {visitingplaces!=null && visitingplaces.map(function(d, index) {
                  return  <div className="col-sm-6 col-lg-4">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src={`http://localhost/react/hacker-stories/upload/${d.picture}`} height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4 mb-1">
                        <h3 className="fs-1 fs-md-2 text-white"> {d.placename} </h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3"> {d.country} </span>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                  </div>
                          })}


            

            {/* <div className="col-sm-6 col-lg-4">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/kualalumpur.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4 mb-1">
                    <h3 className="fs-1 fs-md-2 text-white">Kuala Lumpur</h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3">10 Packages</span>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

          </div>

          <div className="row g-2">
          
            {/* <div className="col-sm-6 col-lg-4">
              <div className="row g-2">
                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/munich.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4 mb-1">
                        <h3 className="fs-1 fs-md-2 text-white">Munich</h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3">10 Packages</span>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/munich.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4 mb-1">
                        <h3 className="fs-1 fs-md-2 text-white">Munich</h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3">10 Packages</span>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-6 col-lg-4">
              <div className="row g-2">
                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/paris.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4 mb-1">
                        <h3 className="fs-1 fs-md-2 text-white">Paris</h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3">10 Packages</span>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/vienna.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4 mb-1">
                        <h3 className="fs-1 fs-md-2 text-white">Vienna</h3><span className="text-light fs--1 me-1"><i className="fas fa-gift"></i></span><span className="text-light me-3">10 Packages</span>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="col-sm-12 ">
              <div className="bg-secondary-gradient h-100 d-flex align-items-center">
                <div className="text-light p-4 p-sm-6 p-lg-0 px-xxl-6">
                  <p className="fs-1 px-4 mb-6" style={{fontSize:"larger",color:"black",fontWeight:"bold"}}>Wanna travel to the most thrilling spot on the planet ? We've set a bunch of surprises for you.</p><a className="btn btn-lg  fs-2" href="#!" role="button" style={{fontSize:"larger",color:"blue",fontWeight:"bold"}}>Click to view more
                    <svg className="bi bi-arrow-right-circle ms-5" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                    </svg></a>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>


      <section className="py-0 my-7">
        <div className="bg-holder w-50 bg-left  d-none d-lg-block" style={{backgroundImage:"url(assets/img/gallery/sharee.png)",backgroundPosition:"top"}}>
        </div>
     

        <div className="container">
          <div className="row g-0">
            <div className="col-lg-4 order-1 order-lg-0"> </div>
            <div className="col-lg-8 bg-white">
              <div className="carousel slide" id="carouselShare" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/dubai.png" height="600" alt="..." />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Dubai</h2>
                          <p className="fw-normal mb-0">Dubai, a city with many faces, is one of the world's most popular tourist destinations. The Burj Khalifa, the world's highest tower, is located here. The futuristic beauty of new buildings is at the heart of Dubai tourism.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/cinnamon.png" height="600" alt="..." />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Maldives</h2>
                          <p className="fw-normal mb-0">You took beautiful photos of yourself in the Maldives, but cannot find a perfect caption? Don’t worry, as here is a creative list of best captions for the Maldives that will make your pals swoon and compel them to book a flight right away</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="1000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/dhigu.png" height="600" alt="..." />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Italy</h2>
                          <p className="fw-normal mb-0">What is the fatal charm of Italy? What do we find there that can be found nowhere else? I believe it is a certain permission to be human, which other places, other countries, lost long ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/BALI2.jpg" height="600" alt="..." />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Bali</h2>
                          <p className="fw-normal mb-0">Bali is truly a magical place to visit – from all the temples to the beautiful beaches, jaw-dropping waterfalls, rice fields, jungles and the famous Bali Swing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row ps-sm-7 align-items-end">
                  <div className="col-4 col-sm-6 position-relative z-index-2">
                    <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                      <li className="active" data-bs-target="#carouselShare" data-bs-slide-to="0"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="2"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="3"></li>
                    </ol>
                  </div>

                  <div className="col-8 col-sm-6 position-relative z-index-2 text-end"><a className="btn btn-lg text-secondary" href="#" role="button">Read More
                      <svg className="bi bi-arrow-right ms-2" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-7 overflow-hidden" id="packages">
       <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> 💁‍♂️ ✌ Enjoy The Benefits Of Our Packages 🎁 </h1>

        <div className="container bg-offcanvas-gray">
          <div className="row gx-2">

          {packages2!=null && packages2.map(function(d, index) {
            return <div className="col-sm-6 col-lg-4 order-1 order-lg-0 gy-2 gy-lg-0">
            <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src={`http://localhost/react/hacker-stories/upload/${d.picture}`} height="375" alt="..." />
              <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                <div className="mt-auto px-4">
                  <h3 className="fs-1 fs-md-2 text-white"> {d.pkgname}  </h3>
                  <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3"> {d.destination}  </span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light"> {d.duration}  </span></div>
                  <h1 className="my-2 text-light fw-bolder fs-4"><span> Tk. {d.price}  </span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                </div>
              </div><a className="stretched-link" href="#!"></a>
            </div>
            </div>
                   })}

        

            {/* <div className="col-sm-6 col-lg-4 order-2 order-lg-0 gy-2 gy-lg-0">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/beyond-the-blues.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Beyond the Blues</h3>
                    <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3">Maldives</span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light">4 days</span></div>
                    <h1 className="my-2 text-light fw-bolder fs-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

            <div className="col-12 col-lg-4">
              <div className="bg-primary-gradient h-100 bg-offcanvas-right">
                <div className="row g-0 h-100">
                  <div className="col-12 h-100">
                    <div className="d-flex flex-column justify-content-center h-100 text-light ps-4 ps-xl-5 py-5 py-lg-0"><img className="mb-5" src="assets/img/icons/icon-gift-box.svg" width="58" alt="..." />
                      <h2 className="mb-2 text-light">popular Packages</h2>
                      <p>Choose the most popular bundles among <br className="d-none d-xl-block" />our current ones.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/green.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Within the Gren</h3>
                    <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3">Phillipines</span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light">4 days</span></div>
                    <h1 className="my-2 text-light fw-bolder fs-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

            {/* <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/queens-gambit.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Queens Gambit</h3>
                    <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3">London</span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light">4 days</span></div>
                    <h1 className="my-2 text-light fw-bolder fs-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

            {/* <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/canals.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">City of canals</h3>
                    <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3">Maldives</span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light">4 days</span></div>
                    <h1 className="my-2 text-light fw-bolder fs-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

            <div className="col-12 col-lg-8 gy-2 order-3 order-lg-0">
              <div className="bg-secondary-gradient h-100">
                <div className="row h-100">
                  <div className="col-12">
                    <div className="d-flex flex-column flex-center h-100 text-light p-4 p-sm-6 p-md-8 p-lg-0">
                      <p className="fs-1 px-3 mb-5" style={{fontSize:"larger",fontWeight:"bolder",color:"black"}}>Most exclusive packages are ready <br className="d-none d-xl-block" />for you. It's only a click away !</p><a className="btn btn-lg  fs-1" href="#!" role="button" style={{fontSize:"larger",color:"blue",fontWeight:"bold"}}>Click to view more
                        <svg className="bi bi-arrow-right-circle ms-7" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16" style={{color:"blue"}} >
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" ></path>
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/mountain-venture.png" height="375" alt="..." />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Mountain Venture</h3>
                    <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-3">Maldives</span><span className="text-light fs--1 me-1"><i className="fas fa-calendar"></i></span><span className="text-light">4 days</span></div>
                    <h1 className="my-2 text-light fw-bolder fs-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}

          </div>
        </div>
      </section>


      <section className="py-7" id="activities">

        <div className="container">
          <div className="row g-0">
            <div className="col-lg-4 order-1"><img className="w-100 mt-5 mt-lg-0" src="assets/img/gallery/bungee-jumping.png" height="750" alt="..." /></div>
            <div className="col-lg-8">
              <div className="carousel slide" id="carouselActivity" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/activity.png" width="383" alt="..." />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">Participate in activities like</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Bungee Jumping</h2>
                          <p className="fw-normal mb-0 pe-lg-9">Bungee jumping, often known as bungy jumping, is a sport in which a person jumps from a considerable height while attached to a long elastic line. Usually, the pad is built on a high structure like a structure or a crane, a bridge across a steep ravine</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/MOUNTAINHIKE.jpg" width="383" alt="..." />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">Participate in activities like</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Mountain Hiking </h2>
                          <p className="fw-normal mb-0 pe-lg-9">The beautiful thing about hiking is that it's truly an activity everyone can do. Whether you're young or old, an expert or an amateur, there's a trail out there that will be perfect for you. So the next time you're pondering an outdoor adventure </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="1000">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/SKYDIVE.jpg" width="383" alt="..." />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">Participate in activities like</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Sky Diving </h2>
                          <p className="fw-normal mb-0 pe-lg-9">Skydiving provides a unique combination of adrenalin-fuelled exhilaration and perfectly calm tranquillity. While in freefall it's all about the rush -- but once the parachute opens and your heart rate steadies, you'll take a moment to gaze around you and see the whole world in a new light </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row h-100">
                      <div className="col-12"><img className="w-100" src="assets/img/gallery/WATERDIVE.jpg" width="383" alt="..." />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">Participate in activities like</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Scuba Diving </h2>
                          <p className="fw-normal mb-0 pe-lg-9">There’s nothing wrong with enjoying looking at the surface of the ocean itself, except that when you finally see what goes on underwater, you realized that you’ve been missing the whole point of the ocean </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row ps-sm-5 ps-md-0 align-items-end">
                  <div className="col-4 col-sm-6 position-relative z-index-2">
                    <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                      <li className="active" data-bs-target="#carouselShare" data-bs-slide-to="0"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="2"></li>
                      <li data-bs-target="#carouselShare" data-bs-slide-to="3"></li>
                    </ol>
                  </div>
                  <div className="col-8 col-sm-6 position-relative z-index-2 text-end"><a className="btn btn-lg text-secondary" href="#" role="button">Read More
                      <svg className="bi bi-arrow-right ms-2" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" style={{color:"blue"}} ></path>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>
 


      <section className="py-7 overflow-hidden" id="hotels">
      <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> 🏛  🏨 Discover Our Best Hotels to Stay 🏦  🏫  </h1>
        <div className="container bg-offcanvas-gray-right">
          <div className="row gx-2">
            <div className="col-sm-6 col-lg-4">
              <div className="bg-primary-gradient h-100 d-flex align-items-end">
                <div className="row g-0 justify-content-start">
                  <div className="col-xl-9">
                    <div className="p-3 px-lg-4 text-light"><img className="mb-5" src="assets/img/icons/icon-hotel.svg" alt="..." />
                      <h3 className="mb-3 text-light">Discover our best hotels to stay</h3>
                      <p>Bundle tickets to any hotel to save on your whole order. Follow bundle it! method by picking the right hotel accommodation once you add your tickets to your cart.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {hotels2!=null && hotels2.map(function(d, index) {
              return <div className="col-sm-6 col-lg-4">
              <div className="row g-2">
                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src={`http://localhost/react/hacker-stories/upload/${d.picture}`} height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4">
                        <h3 className="fs-1 fs-md-2 text-white"> {d.hotelname} </h3>
                        <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-md-3"> {d.rating} </span></div>
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4"><span> Tk. {d.price}</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                      </div>
                    </div><a className="stretched-link" href="#!"> </a>
                  </div>
                </div>
                </div>
                </div>
                       })}


            

               

             {/* <div className="col-sm-6 col-lg-4">
              <div className="row g-2">
                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/hotel-royal.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4">
                        <h3 className="fs-1 fs-md-2 text-white">Hotel Royal</h3>
                        <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-md-3">Kedewatan, Bali</span></div>
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                      </div>
                    </div><a className="stretched-link" href="#!"> </a>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100 w-100" src="assets/img/gallery/boutique-hotel.png" height="375" alt="..." />
                    <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                      <div className="mt-auto px-4">
                        <h3 className="fs-1 fs-md-2 text-white">The Rin Boutique Hotel</h3>
                        <div className="d-flex align-items-center justify-content-start"><span className="text-light fs--1 me-1"><i className="fas fa-map-marker-alt"></i></span><span className="text-light me-md-3">Bang Lamung, Pattaya</span></div>
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4"><span>$175</span><span className="text-light fs--1 fw-normal">/Per person</span></h1>
                      </div>
                    </div><a className="stretched-link" href="#!"> </a>
                  </div>
                </div>
              </div>
            </div>  */}


            <div className="col-sm-6 col-lg-8 gy-2">
              <div className="bg-secondary-gradient h-100 d-flex align-items-center">
                <div className="text-light py-6">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <p className="fs-1 px-5" style={{color:"black",fontSize:"larger",fontWeight:"bold"}}>In our offers, we have more hotels. Just to make your stay easy for your best interests.</p>
                    </div>
                    <div className="col-12 col-xl-6 text-end"><a className="btn btn-lg  fs-1 fs-sm--1 fs-md-1 px-5" href="#!" role="button" style={{fontSize:"larger",color:"blue",fontWeight:"bold"}}>Click to view more
                        <svg className="bi bi-arrow-right-circle ms-3" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg></a></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


  
      <section className="py-0 pb-8">
        <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> 🤵 👩 Some Of Our Reputed Clients Review 👌  </h1>
        <div className="container-fluid container-lg">
          <div className="row h-100 g-2 justify-content-center">
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100"><img className="img-card h-100" src="assets/img/gallery/blog-1.png" alt="..." />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto"><img src="assets/img/gallery/author-1.png" width="60" alt="..." />
                    <div className="d-flex flex-1 justify-content-around"> <span className="text-900 text-center"><i className="fas fa-heart text-primary"></i><span className="text-900 ms-2">355</span></span><span className="text-900 text-center"><i className="fas fa-eye text-primary"></i><span className="text-900 ms-2">234</span></span><span className="text-900 text-center"><i className="fas fa-share text-primary"></i><span className="text-900 ms-2">14</span></span></div>
                  </div>
                  <h5 className="text-900 mt-3">John Oliver. <span className="fw-normal">5 mins Read. </span></h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">15 Best Day Trips from Portland Oregon</h3>
                  <p className="text-900 mt-3">The structure of the trip blog is only a white canvas to highlight the atmospheric and immersive.</p><a className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward" href="#!" role="button">Read more
                    <svg className="bi bi-arrow-right-short hover-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100"><img className="img-card h-100" src="assets/img/gallery/blog-2.png" alt="..." />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto"><img src="assets/img/gallery/author-2.png" width="60" alt="..." />
                    <div className="d-flex flex-1 justify-content-around"> <span className="text-900 text-center"><i className="fas fa-heart text-primary"></i><span className="text-900 ms-2">35</span></span><span className="text-900 text-center"><i className="fas fa-eye text-primary"></i><span className="text-900 ms-2">23</span></span><span className="text-900 text-center"><i className="fas fa-share text-primary"></i><span className="text-900 ms-2">14</span></span></div>
                  </div>
                  <h5 className="text-900 mt-3">Haley Wilson . <span className="fw-normal">5 mins Read. </span></h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">Famous Roads for Great Drives in California</h3>
                  <p className="text-900 mt-3">I first discovered about famous road in california when I flew with KLM to Europe in 2018.</p><a className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward" href="#!" role="button">Read more
                    <svg className="bi bi-arrow-right-short hover-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100"><img className="img-card h-100" src="assets/img/gallery/blog-3.png" alt="..." />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto"><img src="assets/img/gallery/author-3.png" width="60" alt="..." />
                    <div className="d-flex flex-1 justify-content-around"> <span className="text-900 text-center"><i className="fas fa-heart text-primary"></i><span className="text-900 ms-2">35</span></span><span className="text-900 text-center"><i className="fas fa-eye text-primary"></i><span className="text-900 ms-2">23</span></span><span className="text-900 text-center"><i className="fas fa-share text-primary"></i><span className="text-900 ms-2">14</span></span></div>
                  </div>
                  <h5 className="text-900 mt-3">Jeff Baley. <span className="fw-normal">5 mins Read. </span></h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">7 of the Best Train Trips in Canada</h3>
                  <p className="text-900 mt-3">On this very stunning rail ride from Vancouver to Calgary, take in the stunning vistas andspectacular.</p><a className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward" href="#!" role="button">Read more
                    <svg className="bi bi-arrow-right-short hover-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
       

      </section>
      
      <section className="py-0" id="flights">

        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue"}}> ✈ Flights to Popular Places 🌎 <br/> at the Best Costs </h1>
            </div>
          </div>

          <div className="row g-0 flex-center">

          {flights3!=null && flights3.map(function(d, index) {
           return <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#240D8C", minHeight:"230px"}}>
                <h5 className="text-light">  {d.fromwhere} - {d.towhere}</h5>
                <h6 className="text-light fw-normal fs-0">From Tk. {d.price}</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
          })}

            {/* <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#3011BB", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#4914DC", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#6213D2", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#4611BC", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#7013CE", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#4611BC", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#6213D2", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#240D8C", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#4914DC", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#3011BB", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div className="d-flex flex-column justify-content-center px-3" style={{backgroundColor:"#4611BC", minHeight:"230px"}}>
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6><i className="fas fa-arrow-right text-light mt-4"></i><a className="stretched-link" href="#!"></a>
              </div>
            </div> */}
          </div>
        </div>
       

      </section>
                     
      <section>
      <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> 👨‍💻 Go for Booking 📝 </h1>
          <div className="second-page-heading" id="booking">
          
              <div className="container">
             
              <div className="row">
                  <div className="col-lg-12">
                  {/* <h4>Book Prefered Deal Here</h4> */}
                  {/* <h2>Make Your Reservation</h2> */}

                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida</p> */}

                  {/* <div className="main-button"><a href="about.html">Discover More</a></div> */}

                  </div>
              </div>
              </div>
          </div>

          <div className="more-info reservation-info">
              <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-sm-6">
                  <div className="info-item">
                      <i className="fa fa-phone"></i>
                      <h4>Make a Phone Call</h4>
                      <a href="#" style={{fontWeight:"bold"}}>+123 456 789 (0)</a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                  <div className="info-item">
                      <i className="fa fa-envelope"></i>
                      <h4>Contact Us via Email</h4>
                      <a href="#" style={{fontWeight:"bold"}} >xyztravels@email.com</a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                  <div className="info-item">
                      <i className="fa fa-map-marker"></i>
                      <h4>Visit Our Offices</h4>
                      <a href="#" style={{fontWeight:"bold"}}>24th Street North Avenue London, UK</a>
                  </div>
                  </div>
              </div>
              </div>
          </div>

          <div className="reservation-form">
              <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                  <div id="map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameborder="0" style={{border:"0",borderTopLeftRadius:"23px",borderTopRightRadius:"23px"}} allowfullscreen=""></iframe>
                  </div>
                  </div>
                  <div className="col-lg-12"  style={{fontWeight:"bold",fontSize:"large",color:"black"}}>
                  <form id="reservation-form" name="gs" method="submit" role="search" action="#" >
                      <div className="row">
                      <div className="col-lg-12">
                          <h4>Make Your Booking Through This Form</h4>
                      </div>
                      <div className="col-lg-6" >
                          <fieldset >
                              <label for="Name" className="form-label" >Your Name</label>
                              <input type="text" id="Name" name="Name" className="Name" placeholder=" 💁‍♂️ Insert Your Name" autocomplete="on" required style={{color:"black",fontWeight:"bold"}}/>
                          </fieldset>
                      </div>
                      <div className="col-lg-6">
                          <fieldset>
                              <label for="Number" className="form-label">Your Phone Number</label>
                              <input type="text" id="Number"  name="Number" className="Number" placeholder=" 📞 Insert Your Number" autocomplete="on" required style={{color:"black",fontWeight:"bold"}}/>
                          </fieldset>
                      </div>
                      <div className="col-lg-6">
                          <fieldset>
                              <label for="chooseGuests" className="form-label">Number Of Guests</label>
                              <select name="Guests" id="chooseGuests"  className="form-select" aria-label="Default select example" style={{backgroundColor:"white",color:"black"}}>
                                  <option selected>Choose from below</option>
                                  <option type="checkbox" name="option1" value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4+">4+</option>
                              </select>
                          </fieldset>
                      </div>
                      <div className="col-lg-6">
                          <fieldset>
                              <label for="date" className="form-label">Check In Date</label>
                              <input type="date"  id="date" name="date" className="date" required/>
                          </fieldset>
                      </div>
                      <div className="col-lg-12">
                          <fieldset>
                              <label for="chooseDestination" className="form-label">Choose Your Destination</label>
                              <select name="Destination" id="chooseDestination"  className="form-select" aria-label="Default select example" style={{backgroundColor:"white",color:"black"}}>
                                  <option selected>Switzerland, Lausanne</option>
                                  <option value="Italy, Roma">Italy, Rome</option>
                                  <option value="France, Paris">France, Paris</option>
                                  <option value="Engaland, London">Engaland, London</option>
                                  <option value="Switzerland, Lausanne">Switzerland, Lausanne</option>
                              </select>
                          </fieldset>
                      </div>
                      <div className="col-lg-12">                        
                          <fieldset>
                              <button className="btn btn-secondary" type="button" style={{color:"black",fontWeight:"bold",fontSize:"large",backgroundColor:"orange"}}  onClick={add} > Make Your Booking Now</button>
                          </fieldset> <br/>

                          <div id="out" style={{fontWeight:"bold",fontSize:"larger",textAlign:"center",color:"blue" }}>
                       
                           </div>
                      </div>
                      </div>
                  </form>
                  </div>

                  
              </div>
              </div>
          </div>

      </section>
        


      <section>
        <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style={{color:"blue",textAlign:"center"}}> 💁‍♂️ You Can get more info by Our App 📱 </h1>
        <div className="bg-holder" style={{backgroundImage:"url(assets/img/gallery/cta-bg.png)",backgroundPosition:"center",backgroundSize:"cover"}}>
        </div>
      

        <div className="container">
          <div className="row flex-center">
            <div className="col-lg-6 text-center"><img className="mb-5 mb-lg-0" src="assets/img/gallery/cta-mobile.png" alt="..." /></div>
            <div className="col-lg-6 text-center">
              <h1 className="fs-6 pe-xxl-10" style={{color:"blue"}}>Get the app</h1>
              <div className="mt-4 pe-xxl-10"><a href="https://play.google.com/store/apps" target="_blank"><img className="me-3" src="assets/img/gallery/google-play.png" width="170" alt="..." /></a><a href="https://www.apple.com/app-store/" target="_blank"> <img src="assets/img/gallery/app-store.png" width="170" alt="..." /></a></div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-0 overflow-hidden">

        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-4 col-lg-6">
              <div className="py-7">  <span className="fw-bold fs-4 text-primary ms-2"> ✈ XYZ Travels & Tours 🌎 </span>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2"><a className="text-800 fw-bold text-decoration-none" href="#!">News</a></li>
                  <li className="mb-2"><a className="text-800 fw-bold text-decoration-none" href="#!">Terms &amp; Conditions</a></li>
                  <li className="mb-2"><a className="text-800 fw-bold text-decoration-none" href="#!">Privacy</a></li>
                  <li className="mb-2"><a className="text-800 fw-bold text-decoration-none" href="#!">About Us</a></li>
                  <li className="mb-2"><a className="text-800 fw-bold text-decoration-none" href="#!">FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-8 col-lg-6 bg-primary-gradient bg-offcanvas-right">
              <div className="p-3 py-7 p-md-7">
                <p className="text-light"><i className="fas fa-phone-alt me-3"></i><span className="text-light" style={{fontWeight:"bold"}}>+3930219390</span></p>
                <p className="text-light"><i className="fas fa-envelope me-3"></i><span className="text-light" style={{fontWeight:"bold"}} >xyztravels@gmail.com</span></p>
                <p className="text-light"><i className="fas fa-map-marker-alt me-3"></i><span className="text-light lh-lg" style={{fontWeight:"bold"}} >333, Lorem Street, Albania, Alifornia<br/>United States of America</span></p>
                <div className="mt-6"><a href="#!"> <img className="me-3" src="assets/img/icons/facebook.svg" alt="..." /></a><a href="#!"> <img className="me-3" src="assets/img/icons/twitter.svg" alt="..." /></a><a href="#!"> <img className="me-3" src="assets/img/icons/instagram.svg" alt="..." /></a></div>
                <p className="mt-3 text-light text-center text-md-start"> Made with&nbsp;
                  <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#EB6453" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                  </svg>&nbsp;by&nbsp;<a className="text-light" href="https://themewagon.com/" target="_blank">ThemeWagon </a>
                </p>
              </div>
            </div>
          </div>
        </div>
       

      </section>
    


    </main>




    <div className="modal" id="basicModal" tabindex="-1" >

<div className="modal-dialog" >

<div className="modal-content" style={{backgroundColor:"lightyellow",borderRadius:"40px",border:"4px solid magenta"}}>

    <div className="modal-header">

        {/* <button type="button" data-bs-dismiss="modal" aria-hidden="true"> 
            
          &times;
        
        </button> */}

        <h2 className="modal-title" id="myModalLabel" style={{textAlign: "center",fontWeight: "bolder",color:"blue"}}>
            
            &nbsp; ✈ XYZ Travels & Tourism 🌎
        
        </h2>

    </div>

    <div className="modal-body">

        {/* <h4>  Before you sign in please read our Terms & Condition </h4> */}

        <form onSubmit={handleSubmit}>

            <h3 style={{textAlign: "center",backgroundColor: "orange",margin: "auto",borderRadius: "20px",fontWeight: "bold"}}> 
                
              Welcome To Your Account
            
            </h3> <br/>

            <label for="inputEmail" className="sr-only">
                
                Email address 
            
            </label>

             <input type="text" id="username" onChange={e => setUserName(e.target.value)} className="form-control" placeholder="💁‍♂️ Insert Your Username" required style={{fontWeight: "bolder"}}/> <br/>
            

            <label for="inputpassword" className="sr-only">
                
                Password
            
            </label>

            <input type="password" id="password" onChange={e => setPassword(e.target.value)}  className="form-control" placeholder="🔐 🔑 🗝️ Insert Your Password" required style={{fontWeight: "bolder"}}/>  <br/>
            

            <div className="checkbox">

                <label>

                    <input type="checkbox" value="remember-me" /> Show Password

                </label>

            </div> <br/>

            <button className="btn btn-lg btn-success btn-block" type="submit" style={{width:"450px"}}>
                
              Log in
            
            </button>

        </form>

    </div>

    {/* <div className="modal-footer">

        <button type="button" className="btn btn-lg btn-primary"  data-bs-dismiss="modal"> 
            
            Sign Up 
        
        </button>

        <button type="button" className="btn btn-lg btn-primary"  data-bs-dismiss="modal">
            
            Close 
        
        </button>

    </div> */}

</div>

</div>

</div>





 </div>


)
}

Login.propTypes = {
setToken: PropTypes.func.isRequired
};
