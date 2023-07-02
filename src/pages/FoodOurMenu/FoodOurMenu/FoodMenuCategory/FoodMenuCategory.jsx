import React from "react";
import MenuItemCard from "../../../Shared/MenuItemCard/MenuItemCard";
import PageCover from "../../../Shared/PageCover/PageCover";

const FoodMenuCategory = ({ foodItems }) => {
  return (
    <div className="my-5">
      <div className="grid md:grid-cols-2 gap-8 mx-3">
        {foodItems.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default FoodMenuCategory;
