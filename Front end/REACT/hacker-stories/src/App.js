import React, { Component } from "react";
// import Child1 from "./components/child1";
// import Child2 from "./components/child2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import If1 from "./pages/if1";
import Login from "./login";
import Visitingplaces from "./travel/Visitingplaces";
import Category from "./travel/Category";
import Booking from "./travel/Booking";
import Feecollection from "./travel/Feecollection";
import Searchbooking from "./travel/Searchbooking";
import Collectfee from "./travel/Collectfee";
import Todayfee from "./travel/Todayfee";
import Packages from "./travel/Packages";
import Services from "./travel/Services";
import Services2 from "./travel/Services2";
import Servicepayment from "./travel/Servicepayment";
import Hotels from "./travel/Hotels";
import Hotelbooking from "./travel/Hotelbooking";
import Checkout from "./travel/Checkout";
import Checkoutprint from "./travel/Checkoutprint";
import Vehicles from "./travel/Vehicles";
import Flights from "./travel/Flights";
import Foods from "./travel/Foods";
import Floors from "./travel/Floors";
import Rooms from "./travel/Rooms";



import "./App.css";
class App extends Component {
render() {
    const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
let token=userToken?.success;
if(token==undefined || token.length<10) {
return <Login />
}

return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="blogs" element={<Blogs />} />
<Route path="contact" element={<Contact />} />
<Route path="If1" element={<If1 />} />
<Route path="login" element={<Login />} />
<Route path="visitingplaces" element={<Visitingplaces />} />
<Route path="category" element={<Category />} />
<Route path="booking" element={<Booking/>} />
<Route path="feecollection" element={<Feecollection/>} />
<Route path="searchbooking" element={<Searchbooking/>} />
<Route path="collectfee" element={<Collectfee/>} />
<Route path="todayfee" element={<Todayfee/>} />
<Route path="packages" element={<Packages />} />
<Route path="services" element={<Services />} />
<Route path="services2" element={<Services2 />} />
<Route path="servicepayment" element={<Servicepayment />} />
<Route path="hotels" element={<Hotels />} />
<Route path="hotelbooking" element={<Hotelbooking />} />
<Route path="checkout" element={<Checkout />} />
<Route path="checkoutprint" element={<Checkoutprint />} />
<Route path="vehicles" element={<Vehicles />} />
<Route path="flights" element={<Flights />} />
<Route path="foods" element={<Foods />} />
<Route path="floors" element={<Floors />} />
<Route path="rooms" element={<Rooms />} />




<Route path="*" element={<NoPage />} />
</Route>
</Routes>
</BrowserRouter>
);
}
}
export default App;
