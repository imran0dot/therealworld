import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import image1 from '../../assets/img/TRW-feature-03_1TRW-feature-03.webp'
import image2 from '../../assets/img/TRW-feature-01_1TRW-feature-01.webp'
import image3 from '../../assets/img/TRW-feature-02_1TRW-feature-02.webp'
import ExclusiveFeaturesCard from '../shared/ExclusiveFeaturesCard';

const ExclusiveFeatures: React.FC = () => {

    const ExclusiveFeaturesList = [
        {
            image: image1,
            title: 'STEP-BY-STEP LEARNING',
            features: [
                "<strong class=text-white>Easy to follow program for financial success </strong>",
                "New high income skills constantly added ",
                "Learn with our hyper advanced application",
            ]
        },
        {
            image: image2,
            title: 'DAILY LIVE SESSIONS',
            features: [
                "<strong class=text-white>Daily live sessions with millionaire coaches </strong>",
                "<p>Scale from <strong class=text-white> Zero to $10k/month  </strong> as fast as possible</p>",
                "<p>Get a <strong class=text-white>step-by-step </strong> plan for success</p>",
            ]
        },
        {
            image: image3,
            title: 'AN EXCLUSIVE COMMUNITY',
            features: [
                "<p>Mentors are <strong>hyper-successful</strong> experts in their field</p>",
                "<p>Get <strong class=text-white>mentored every step</strong> of your journey</p>",
                "<p>Network with <strong class=text-white>113,000+ students</strong></p>",
            ]
        }
    ];

    return (
        <div>
            <Container>
                <div className='text-center'>
                    <MainTitle
                        title="YOU WILL GET ACCESS TO"
                        subTitle="EXCLUSIVE FEATURES" />
                </div>

                <div className='mx-10 mt-20 flex flex-col gap-4'>
                    {ExclusiveFeaturesList.map((item, index) => <ExclusiveFeaturesCard key={index} item={item} />)}
                </div>
            </Container>

        </div>
    );
};

export default ExclusiveFeatures;