import React from "react";
import { Link } from "react-router-dom";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const FoodMenuCategory = ({ foodItems ,foodNameTitle}) => {
  return (
    <div className="my-5">
      <div className="grid md:grid-cols-2 gap-8 mx-3">
        {foodItems.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem}></MenuItemCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/orderFood/${foodNameTitle}`}>
          <button className=" mt-4 btn btn-outline border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodMenuCategory;
