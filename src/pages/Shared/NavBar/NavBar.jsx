import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useCart from "../../../hooks/userCart";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutButton = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .then((error) => console.log(error.message));
  };

  // Cart
  const { carts } = useCart();
  // TODO: aLL CART added item

  const headersMenu = (
    <>
      <li>
        <Link className="hover:text-warning" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-warning"  to="/contact">CONTACT us</Link>
      </li>
      <li>
        <Link className="hover:text-warning" to="/dashboard">DASHBOARD</Link>
      </li>
      <li>
        <Link className="hover:text-warning" to="/ourMenu">Our Menu</Link>
      </li>
      <li>
        <Link className="hover:text-warning" to="/orderFood/salad">Our Shop</Link>
      </li>
      <li>
        <Link className="hover:text-warning" to="/secret">Secret</Link>
      </li>

      <li>
        <Link className="hover:text-warning" to="/dashboard/mycart">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart></FaShoppingCart>
              <span className="badge badge-sm indicator-item">
                {carts.length || 0}
              </span>
            </div>
          </label>
        </Link>
      </li>

      {user ? (
        <>
          <span>{user?.displayName}</span> <br />
          <button onClick={logOutButton} className="btn btn-error btn-sm">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <div className="flex gap-2 justify-center items-center">
              <Link to="/login">Login</Link>
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <button className="btn btn-primary">Button</button>
      <div className="navbar fixed z-10 bg-[#171619] text-white border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Small Devices */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {headersMenu}
            </ul>
          </div>
          {/* logo */}
          <div>
            <h1 className="md:text-2xl">BISTRO BOSS</h1>
            <p>
              <small className="md:text-1xl">Restaurant</small>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Large Devices */}
          <ul className="menu menu-horizontal px-1">{headersMenu}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
