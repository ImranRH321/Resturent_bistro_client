import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';

const Home = () => {
    return (
        <div>
            <h1>MyRoom</h1>
            <Banner></Banner>
            {/* Khavbar  Item */}
            <FoodCategory></FoodCategory>
        </div>
    );
};

export default Home;