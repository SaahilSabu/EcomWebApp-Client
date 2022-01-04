import React from "react";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Slider from "../components/Slider.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (<div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <NewArrival/>
    <Newsletter/>
    <Footer/>
  </div>);
};

export default Home;
