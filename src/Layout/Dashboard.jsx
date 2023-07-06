import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
//
const Dashboard = () => {
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li>
            <Link>
              {" "}
              <FaHome></FaHome> user home
            </Link>
          </li>
          <li>
            <Link>
              {" "}
              <FaCalendar></FaCalendar> Reservations
            </Link>
          </li>
          <li>
            <Link>
              {" "}
              <FaWallet></FaWallet> payment history
            </Link>
          </li>
          <li>
            <Link>
              {" "}
              <FaShoppingCart></FaShoppingCart> MyCart
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">
              {" "}
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link to="/ourMenu">Our Menu</Link>
          </li>
          <li>
            <Link to="/orderFood/salad">Our Order</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
