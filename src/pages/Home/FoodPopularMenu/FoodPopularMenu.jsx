import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const FoodPopularMenu = () => {
  const [foodMenuItem, setFoodMenuItem] = useState([]);
  useEffect(() => {
    fetch("/foodMenuData.json")
      .then((res) => res.json())
      .then((data) => {
        const foodPopular = data.filter((item) => item.category === "popular");
        setFoodMenuItem(foodPopular);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        smallHeading={"---Check it out---"}
        largeHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <h1>Food Data: {foodMenuItem.length} </h1>
      <div className="grid md:grid-cols-2 gap-8 mx-3">
           {
            foodMenuItem.map((menuItem) => <MenuItemCard key={menuItem._id} menuItem={menuItem}></MenuItemCard>) 
           }
      </div>
    </div>
  );
};

export default FoodPopularMenu;
