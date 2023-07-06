import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../hooks/userCart";
//
const Dashboard = () => {
  const { carts } = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu  p-4 w-80 h-full ">
          {/* Sidebar content here */}

          <li>
            <NavLink to="/home">
              {" "}
              <FaHome></FaHome> user home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              {" "}
              <FaCalendar></FaCalendar> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink>
              {" "}
              <FaWallet></FaWallet> payment history
            </NavLink>
          </li>
          <li >
            <NavLink to="/dashboard/mycart">
              {" "}
              <FaShoppingCart></FaShoppingCart>
             <p className="flex"><span> MyCart</span> <span className="border ms-5 badge badge-sm indicator-item">
                {carts.length || 0}
              </span></p>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourMenu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/salad">Our Order</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
