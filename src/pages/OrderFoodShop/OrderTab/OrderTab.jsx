import React from "react";
import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({foodItems}) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 mx-12 mt-8">
      {foodItems.map((foodItem) => (
        <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
