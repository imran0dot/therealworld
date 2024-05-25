import React from 'react';
import Hero from '../components/base/Hero';
import LastChance from '../components/base/LastChance';
import OneYear from '../components/base/OneYear';
import Faq from '../components/base/Faq';
import StudentReview from '../components/base/StudentReview';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <LastChance />
            <OneYear />
            <StudentReview />
            <Faq />
        </div>
    );
};

export default Home;