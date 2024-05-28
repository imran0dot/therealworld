import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import VideoCard from '../ui/VideoCard';
import { FaAngular } from 'react-icons/fa';

const CreationMethods: React.FC = () => {

    const cardInfos = [
        {
            "icon": FaAngular,
            "name": "E-COMMERCE",
            "information": "Imagine launching a store overnight and tapping into the global marketplace by morning. E-Commerce is your gateway to rapid retail success.",
            "video": "https://vimeo.com/123456789",
            "poster": "https://example.com/poster1.jpg"
        },
        {
            "icon": FaAngular,
            "name": "COPYWRITING",
            "information": "Words are your warriors, and every sentence is a strategy. Master the craft of copywriting with us, and you'll learn to turn prose into profit.",
            "video": "https://vimeo.com/987654321",
            "poster": "https://example.com/poster2.jpg"
        },
        {
            "icon": FaAngular,
            "name": "CONTENT CREATION + AI",
            "information": "We live in a digital age. There are websites worth more than skyscrapers. Videos worth more than houses. We will teach you how to create valuable digital assets and how to sell them.",
            "video": "https://vimeo.com/112233445",
            "poster": "https://example.com/poster3.jpg"
        },
        {
            "icon": FaAngular,
            "name": "CRYPTO INVESTING",
            "information": "The Bull Run is making its rounds again early 2024. You need to be equipped. We cut through the complexity and get you to the core of crypto, where strategic investments meet swift returns.",
            "video": "https://vimeo.com/223344556",
            "poster": "https://example.com/poster4.jpg"
        },
        {
            "icon": FaAngular,
            "name": "CRYPTO TRADING",
            "information": "Take advantage of the bull run and master the art of crypto trading in the Crypto Trading campus, where we empower you to navigate the markets with precision.",
            "video": "https://vimeo.com/334455667",
            "poster": "https://example.com/poster5.jpg"
        },
        {
            "icon": FaAngular,
            "name": "STOCKS",
            "information": "Stock trading is no longer the walled garden of the wealthy. We bring the market to your fingertips, teaching you to make profitable investment decisions.",
            "video": "https://vimeo.com/445566778",
            "poster": "https://example.com/poster6.jpg"
        },
        {
            "icon": FaAngular,
            "name": "BUSINESS",
            "information": "The Real World's business training is about mastering the art of leadership and scaling operations.",
            "video": "https://vimeo.com/556677889",
            "poster": "https://example.com/poster7.jpg"
        },
        {
            "icon": FaAngular,
            "name": "CLIENT ACQUISITION + SM CAMPUS",
            "information": "Acquire, retain, and grow your client base with strategies that are as effective as they are explosive in the Client Acquisition + SM Campus.",
            "video": "https://vimeo.com/667788990",
            "poster": "https://example.com/poster8.jpg"
        },
        {
            "icon": FaAngular,
            "name": "FITNESS",
            "information": "The Real World approach to fitness focuses on sculpting a disciplined, resilient character, not just a strong physique.",
            "video": "https://vimeo.com/778899001",
            "poster": "https://example.com/poster9.jpg"
        }
    ]


    return (
        <div>
            <Container>
                <div className='text-center'>
                    <MainTitle
                        subTitle="THE REAL WORLD CAMPUSES"
                        title="10+ WEALTH CREATION METHODS"
                    />
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-10'>
                    {cardInfos.map(card => <VideoCard key={card.name} cardDetails={card} />)}
                </div>
            </Container>
        </div>
    );
};

export default CreationMethods;