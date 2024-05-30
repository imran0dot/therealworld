import React from 'react';
import Hero from '../components/base/Hero';
import LastChance from '../components/base/LastChance';
import OneYear from '../components/base/OneYear';
import Faq from '../components/base/Faq';
import StudentReview from '../components/base/StudentReview';
import CreationMethods from '../components/base/CreationMethods';
import NewSkills from '../components/shared/NewSkills';
import AskYourself from '../components/base/AskYourself';
import ExclusiveFeatures from '../components/base/ExclusiveFeatures';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <LastChance />
            <OneYear />
            <StudentReview />
            <CreationMethods />
            <NewSkills />
            <ExclusiveFeatures />
            <AskYourself />
            <Faq />
        </div>
    );
};

export default Home;