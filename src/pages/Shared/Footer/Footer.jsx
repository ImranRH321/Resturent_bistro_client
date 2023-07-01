import React from "react";

const Footer = () => {
  return (
    <footer className="md:grid grid-cols-3 bg-slate-600 mt-12">
      <div className="col-span-2 text-right me-7 bg-black text-white p-4">
        <div className="content">
        <h3 className="text-3xl">CONTACT US</h3>
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>+88 123456789</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
      <div className="col-span-2 bg-orange-200 p-4">
        <h3 className="text-3xl">Follow US</h3>
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>Join us on social media</p>
        <div className="iconDiv">
            a , b ,c
        </div>
      </div>
      <div className="col-span-4 text-center ">
        <p className="capitalize bg-dark text-white py-2 px-1 ">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer> 
  );
};

export default Footer;
