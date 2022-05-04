import React from 'react';
import './Home.scss';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <div>
            <Hero />
            <section>
                <Info />
            </section>
            <section>
                < Banner />
            </section>

        </div>
    )
}

export default Home;