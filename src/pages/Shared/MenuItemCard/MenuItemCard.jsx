import React from "react";

const MenuItemCard = ({ menuItem }) => {
  const { name, recipe, image, category , price } = menuItem;
  console.log(image);
  return (
    <section className="flex items-center space-x-4">
      {/* <img src={image} alt="" /> */}
      <img
        className="w-[100px]"
         style={{borderRadius: `0px 200px 200px 200px`}}
        src="https://img.freepik.com/free-photo/tasty-top-view-sliced-pizza-italian-traditional-round-pizza_90220-1357.jpg?size=626&ext=jpg&ga=GA1.2.1654904121.1675528469&semt=ais"
        alt=""
      />
      <div>
        <h1>{name}------------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-primary"> ${price}</p>
    </section>
  );
};

export default MenuItemCard;
