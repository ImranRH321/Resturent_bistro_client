import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";
import useFoodMenuData from "../../../hooks/useFoodMenuData";

const FoodPopularMenu = () => {
  const [foodMenu] = useFoodMenuData();
  const foodPopular = foodMenu.filter((item) => item.category === "popular");

  return (
    <div className="p-4 my-5">
      <SectionTitle
        smallHeading={"---Check it out---"}
        largeHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <h1>Food popular Data: {foodMenu.length} </h1>
      <div className="grid md:grid-cols-2 gap-8 mx-3">
        {foodPopular.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem}></MenuItemCard>
        ))}
      </div>
      {/*  */}
      <div className="flex justify-center items-center ">
        <button className="mt-4 px-10  btn btn-outline border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default FoodPopularMenu;
