import React from 'react';
import './Home.scss';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <div>
            <Hero />
            <Info />
            < Banner />
        </div>
    )
}

export default Home;