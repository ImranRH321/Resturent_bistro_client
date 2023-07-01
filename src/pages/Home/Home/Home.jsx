import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import FoodPopularMenu from '../FoodPopularMenu/FoodPopularMenu';

const Home = () => {
    return (
        <div>
            <h1>MyRoom</h1>
            <Banner></Banner>
            {/* Khavbar  Item */}
            <FoodCategory></FoodCategory>
            <FoodPopularMenu></FoodPopularMenu>
        </div>
    );
};

export default Home;