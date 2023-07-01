import React from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "../FoodCategory/FoodCategory";
import FoodPopularMenu from "../FoodPopularMenu/FoodPopularMenu";
import FoodFeatured from "../FoodFeatured/FoodFeatured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <h1>MyRoom</h1>
      <Banner></Banner>
      {/* Khavbar  Item */}
      <FoodCategory></FoodCategory>
      <FoodPopularMenu></FoodPopularMenu>
      <FoodFeatured></FoodFeatured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
