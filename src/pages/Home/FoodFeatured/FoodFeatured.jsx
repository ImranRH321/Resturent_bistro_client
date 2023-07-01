import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./FoodFeatured.css";

const FoodFeatured = () => {
  return (
    <section id="idFeature" className="py-5 bg-fixed">
      <SectionTitle
        smallHeading={"---Check it out---"}
        largeHeading={"FROM OUR MENU"}
      ></SectionTitle>

      <div  className=" md:flex justify-center items-center mx-12">
        <img className="w-[300px] ml-12" src={featureImg} alt="" />
        <div className="md:ml-12">
          <h1 className="fw-bolder text-white text-2xl uppercase">March 20, 2023</h1>
          <h2 className="fw-bolder text-white text-2xl uppercase">WHERE CAN I GET SOME?</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-4 btn btn-outline border-b-4">Order Now text-white</button>
        </div>
      </div>
    </section>
  );
};

export default FoodFeatured;
