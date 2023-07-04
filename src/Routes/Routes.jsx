import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import FoodOurMenu from "../pages/FoodOurMenu/FoodOurMenu/FoodOurMenu";
import OrderFoodShop from "../pages/OrderFoodShop/OrderFoodShop/OrderFoodShop";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

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
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
