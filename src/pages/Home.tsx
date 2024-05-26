import React from 'react';
import Hero from '../components/base/Hero';
import LastChance from '../components/base/LastChance';
import OneYear from '../components/base/OneYear';
import Faq from '../components/base/Faq';
import StudentReview from '../components/base/StudentReview';
import CreationMethods from '../components/base/CreationMethods';
import NewSkills from '../components/shared/NewSkills';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <LastChance />
            <OneYear />
            <CreationMethods />
            <NewSkills />
            <StudentReview />
            <Faq />
        </div>
    );
};

export default Home;