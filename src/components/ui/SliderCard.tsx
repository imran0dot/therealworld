import React, { useState } from 'react';
import playBtn from '../../assets/svg-images/svgexport-6.svg'

interface TSliderCard {
    cardInfo: {
        videoUrl: string,
        name: string,
        number: string | number,
        flug: string,
        income: string,
        poster: string
    }
}

const SliderCard: React.FC<TSliderCard> = ({ cardInfo }) => {
    const { name, number, income, poster } = cardInfo;
    const [overlay, setOverlay] = useState(true);
    return (
        <div>
            {/* video  */}
            <div className='relative border border-gray-400 border-opacity-20'>
                {overlay ?
                    <div className='w-full flex justify-center items-center relative'>
                        <img
                            onClick={() => setOverlay(false)}
                            src={playBtn}
                            alt="play button"
                            className='absolute cursor-pointer' />
                        <img src={poster} alt="" />
                    </div> :
                    <div className='p-[30%] relative border border-gray-400 border-opacity-20'>
                        <iframe
                            src={`https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&`}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            allow="autoplay; fullscreen; picture-in-picture;"
                            allowFullScreen
                        ></iframe>

                    </div>
                }
            </div>

            {/* informations  */}
            <div className='mt-10'>
                <h4 className='text-2xl'><strong>{name}</strong> - {number}</h4>

                <h3 className='text-3xl inline-block font-extrabold font-secondary text_money'>
                    <span className='font-thin text-sm inline-block'>$ </span>
                    <span className='inline-block mx-2'> {income} k</span>
                    <span className='font-thin text-sm inline-block'> + /month</span>
                </h3>

            </div>
        </div>
    );
};

export default SliderCard;