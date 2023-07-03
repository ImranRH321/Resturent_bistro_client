import React from "react";

const FoodCard = ({ foodItem }) => {
  const { name, recipe, image, category, price } = foodItem;
  console.log(name, image);
  return (
    <div className="card border-t-3 bg-base-100 shadow-xl">
      <figure>
        {/* <img src={image} alt="Shoes" className="rounded-xl" /> */}
        {/* now found img  */}
        <img
          classNam="relative"
          src="https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay_2829-6482.jpg?size=626&ext=jpg&ga=GA1.2.1654904121.1675528469&semt=ais"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="absolute top-0 bg-black text-white mt-4 right-0 mr-5">
        Price: ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-outline border-b-orange-300 py-2">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
