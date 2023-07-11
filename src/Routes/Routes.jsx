import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import FoodOurMenu from "../pages/FoodOurMenu/FoodOurMenu/FoodOurMenu";
import OrderFoodShop from "../pages/OrderFoodShop/OrderFoodShop/OrderFoodShop";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import MangeItems from "../pages/Dashboard/MangeItems/MangeItems";
import Imran from "../Layout/Imran";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "ourMenu", element: <FoodOurMenu></FoodOurMenu> },
      { path: "orderFood/:category", element: <OrderFoodShop></OrderFoodShop> },
      { path: "login", element: <Login></Login> },
      { path: "singup", element: <SingUp></SingUp> },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            {" "}
            <Secret></Secret> {/* // Todo: under of secret Route // */}
          </PrivateRoute>
        ),
      },
    ],
  },
  //
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        {/* Todo: check user login or register Can Onley Access user  */}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "mycart", element: <MyCart></MyCart> },
      { path: "payment", element: <Payment></Payment> },
      { path: "userhome", element: <UserHome></UserHome> },
      
      // Admin Route
      { path: "adminhome", element: <AdminRoute><AdminHome></AdminHome></AdminRoute> },      
      
      { path: "allusers", element: <AdminRoute><AllUsers></AllUsers></AdminRoute> },      
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <MangeItems></MangeItems>
          </AdminRoute>
        ),
      },
    ],
  },
  // TODO: IRMAN PERSONAL LAYOUT BIGBOOS ONLY MY SECOUR ADMIN.
  {
    path: "imran",
    element: <Imran></Imran>,
  },
]);
