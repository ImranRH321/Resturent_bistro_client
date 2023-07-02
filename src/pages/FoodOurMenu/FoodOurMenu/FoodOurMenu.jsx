import React from "react";
import { Helmet } from "react-helmet-async";
import backgroundImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import PageCover from "../../Shared/PageCover/PageCover";
import useFoodMenuData from "../../../hooks/useFoodMenuData";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import FoodMenuCategory from "./FoodMenuCategory/FoodMenuCategory";

const FoodOurMenu = () => {
  const [foodMenu] = useFoodMenuData();
  const offered = foodMenu.filter((item) => item.category === "offered");
  const dessert = foodMenu.filter((item) => item.category === "offered");
  const pizza = foodMenu.filter((item) => item.category === "offered");
  const salad = foodMenu.filter((item) => item.category === "pizza");
  const drinks = foodMenu.filter((item) => item.category === "drinks");
  const soup = foodMenu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Menu</title>
      </Helmet>
      <h1>Our menu Food servies</h1>
      <PageCover
        coverImg={backgroundImg}
        pageCoverTitle="Food Our Menu"
      ></PageCover>
      {/* offered */}

      <div>
        <SectionTitle
          smallHeading={"---Don't miss---"}
          largeHeading={"TODAY'S OFFER"}
        ></SectionTitle>
        <FoodMenuCategory foodItems={offered}></FoodMenuCategory>
      </div>
      {/* dessert  */}
      <div>
        <PageCover coverImg={dessertImg} pageCoverTitle="DESSERTS"></PageCover>
        <FoodMenuCategory foodItems={dessert}></FoodMenuCategory>
      </div>
      {/* pizza  */}
      <div>
        <PageCover coverImg={pizzaImg} pageCoverTitle="pizza"></PageCover>
        <FoodMenuCategory foodItems={pizza}></FoodMenuCategory>
      </div>
      {/* Salad  */}
      <div>
        <PageCover coverImg={saladImg} pageCoverTitle="Salad"></PageCover>
        <FoodMenuCategory foodItems={salad}></FoodMenuCategory>
      </div>
      {/* soup  */}
      <div>
        <PageCover coverImg={soupImg} pageCoverTitle="Soup"></PageCover>
        <FoodMenuCategory foodItems={soup}></FoodMenuCategory>
      </div>
    </div>
  );
};

export default FoodOurMenu;
