import React, { useState } from "react";
import PageCover from "../../Shared/PageCover/PageCover";
import orderShopBannerImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFoodMenuData from "../../../hooks/useFoodMenuData";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* order page */
const OrderFoodShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [foodMenu] = useFoodMenuData();

  
  const salad = foodMenu.filter((item) => item.category === "salad");
  const dessert = foodMenu.filter((item) => item.category === "dessert");
  const pizza = foodMenu.filter((item) => item.category === "pizza");
  const drinks = foodMenu.filter((item) => item.category === "drinks");
  const soup = foodMenu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boos || Order Food</title>
      </Helmet>
      <PageCover
        coverImg={orderShopBannerImg}
        pageCoverTitle={"OUR SHOP"}
      ></PageCover>
      {/* Just See finaly delete4d is prolbem small */}
      <h1>TabIndex: {tabIndex}</h1>
      <h1>category: {category}</h1>
      <h1>initialIndex: {initialIndex}</h1>

      {/*Tab ==================*/}
      <section className="my-10 ">
        <Tabs selectedIndex={initialIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center border-spacing-0">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>dessert</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            <OrderTab foodItems={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <OrderTab foodItems={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
            <OrderTab foodItems={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
            <OrderTab foodItems={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
            <OrderTab foodItems={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default OrderFoodShop;
