import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import About from "../About/About";
// import Contact from "../Contact/Contact";
// import Portfolio from "../Portfolio/Portfolio";
// import Start from "../Start/Start";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        <Navbar /> 
       <Outlet/>
        <Footer />
      </div>
    );
}
