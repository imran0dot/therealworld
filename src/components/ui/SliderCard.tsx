import React from 'react';

interface TSliderCard {
    cardInfo: {
        videoUrl: string,
        name: string,
        number: string | number,
        flug: string,
        income: string,
    }
}

const SliderCard: React.FC<TSliderCard> = ({ cardInfo }) => {
    const { name, number, income} = cardInfo;
    return (
        <div>
        {/* video  */}
                <div className='p-[30%] relative border border-gray-400 border-opacity-20'>
                                <iframe
                                    src={`https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=0&title=0&byline=0&portrait=0&`}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    allow="autoplay; fullscreen; picture-in-picture;"
                                    allowFullScreen
                                ></iframe>
                </div>

                {/* informations  */}
                <div className='mt-10'>
                    <h4 className='text-2xl'><strong>{name}</strong> - {number}</h4>

                    <h3 className='text-3xl inline-block font-extrabold font-secondary text_money'>
                        <span className='font-thin'>$ </span>
                        {income} k
                        <span className='font-thin'> + /month</span>
                    </h3>

                </div>
            </div>
    );
};

export default SliderCard;