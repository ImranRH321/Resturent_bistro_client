import React from "react";
import { Outlet } from "react-router-dom";

const Imran = () => {
  // https://i.ibb.co/PzYBT2Q/legand.png
  return (
   <article>
     <div
      style={{ height: "500px" }}
      className={`relative bg-[url('https://i.ibb.co/PzYBT2Q/legand.png')]`}
    >
      {/* <Outlet></Outlet> */}
      <h1 className="text-dark absolute top-40 text-5xl text-center">
        Codding Life Imran leaning FrontEnd DEveloper{" "}
      </h1>
    </div>
    {/* next code  */}
     {/* Imran Dashboard   */}
     <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Imran Power Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>OKe Then Go </a></li>
      <li><a>Programer </a></li>
      <li><a>Javascript</a></li>
      <li><a>React Quesiton </a></li>
      <li><a>same Question add </a></li>
      <li><a>Daily Target </a></li>
      <li><a>Go Tome </a></li>
    </ul>
  
  </div>
</div>
{/* end ds */}
   </article>
  );
};

export default Imran;
