import React from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log("location->", location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes('singup'); 
  

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
