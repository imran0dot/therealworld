import React from 'react';
import Hero from '../components/base/Hero';
import LastChance from '../components/base/LastChance';
import OneYear from '../components/base/OneYear';
import Faq from '../components/base/Faq';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <LastChance />
            <OneYear />
            <Faq />
        </div>
    );
};

export default Home;