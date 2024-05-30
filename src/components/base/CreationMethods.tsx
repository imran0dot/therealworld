import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import VideoCard from '../ui/VideoCard';

// import video cart icons 
import icon1 from '../../assets/svg-images/svgexport-26.svg'
import icon2 from '../../assets/svg-images/svgexport-28.svg'
import icon3 from '../../assets/svg-images/svgexport-29.svg'
import icon4 from '../../assets/svg-images/svgexport-30.svg'
import icon6 from '../../assets/svg-images/svgexport-31.svg'
import icon7 from '../../assets/svg-images/svgexport-32.svg'
import icon8 from '../../assets/svg-images/svgexport-33.svg'
import icon9 from '../../assets/svg-images/svgexport-34.svg'


// video thumbnail import
import thumb1 from '../../assets/video-thumb/thumb_1.jpg'
import thumb2 from '../../assets/video-thumb/thumb_2.jpg'
import thumb3 from '../../assets/video-thumb/thumb_3.jpg'
import thumb4 from '../../assets/video-thumb/thumb_4.jpg'
import thumb5 from '../../assets/video-thumb/thumb_5.jpg'
import thumb6 from '../../assets/video-thumb/thumb_6.jpg'
import thumb7 from '../../assets/video-thumb/thumb_7.jpg'
import thumb8 from '../../assets/video-thumb/thumb_8.jpg'
import thumb9 from '../../assets/video-thumb/thumb_9.jpg'

const CreationMethods: React.FC = () => {

    const cardInfos = [
        {
            "icon": icon1,
            "name": "E-COMMERCE",
            "information": "Imagine launching a store overnight and tapping into the global marketplace by morning. E-Commerce is your gateway to rapid retail success.",
            "video": "https://vimeo.com/123456789",
            "poster": thumb1
        },
        {
            "icon": icon2,
            "name": "COPYWRITING",
            "information": "Words are your warriors, and every sentence is a strategy. Master the craft of copywriting with us, and you'll learn to turn prose into profit.",
            "video": "https://vimeo.com/987654321",
            "poster": thumb2
        },
        {
            "icon": icon3,
            "name": "CONTENT CREATION + AI",
            "information": "We live in a digital age. There are websites worth more than skyscrapers. Videos worth more than houses. We will teach you how to create valuable digital assets and how to sell them.",
            "video": "https://vimeo.com/112233445",
            "poster": thumb3
        },
        {
            "icon": icon4,
            "name": "CRYPTO INVESTING",
            "information": "The Bull Run is making its rounds again early 2024. You need to be equipped. We cut through the complexity and get you to the core of crypto, where strategic investments meet swift returns.",
            "video": "https://vimeo.com/223344556",
            "poster": thumb4
        },
        {
            "icon": icon4,
            "name": "CRYPTO TRADING",
            "information": "Take advantage of the bull run and master the art of crypto trading in the Crypto Trading campus, where we empower you to navigate the markets with precision.",
            "video": "https://vimeo.com/334455667",
            "poster": thumb5
        },
        {
            "icon": icon6,
            "name": "STOCKS",
            "information": "Stock trading is no longer the walled garden of the wealthy. We bring the market to your fingertips, teaching you to make profitable investment decisions.",
            "video": "https://vimeo.com/445566778",
            "poster": thumb6
        },
        {
            "icon": icon7,
            "name": "BUSINESS",
            "information": "The Real World's business training is about mastering the art of leadership and scaling operations.",
            "video": "https://vimeo.com/556677889",
            "poster": thumb7
        },
        {
            "icon": icon8,
            "name": "CLIENT ACQUISITION + SM CAMPUS",
            "information": "Acquire, retain, and grow your client base with strategies that are as effective as they are explosive in the Client Acquisition + SM Campus.",
            "video": "https://vimeo.com/667788990",
            "poster": thumb8
        },
        {
            "icon": icon9,
            "name": "FITNESS",
            "information": "The Real World approach to fitness focuses on sculpting a disciplined, resilient character, not just a strong physique.",
            "video": "https://vimeo.com/778899001",
            "poster": thumb9
        }
    ]


    return (
        <div className='my-28'>
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