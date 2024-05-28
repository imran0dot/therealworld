import React, { useState } from 'react';
import { IconType } from 'react-icons';
import GradientTitle from './GradientTitle';
import chackbgSVG from '../../assets/svg-images/svgexport-1.svg'
import playBtn from '../../assets/play-btn.png'
import thambnail from '../../assets/video-thumb/thumb_1.jpg'

interface VideoCardType {
    cardDetails: {
        icon: IconType,
        name: string,
        information: string,
        video?: string,
        poster?: string,
    }
}

const VideoCard: React.FC<VideoCardType> = ({ cardDetails }) => {
    const { icon: Icon, name, information, video, poster } = cardDetails;
    const [isOverlay, setIsOverlay] = useState(true);

    return (

        <div className='pb-0 group relative rounded-sm overflow-hidden mb-10'>
            <div className='bg-[#111C22] bg-opacity-30 group-hover:bg-opacity-100 transition-all duration-500 overflow-hidden rounded-sm'>

                {/* info related  */}
                <div
                    style={{ backgroundImage: `url(${chackbgSVG})` }}
                    className='relative'>

                    <div className=' bg-gradient-to-l from-transparent via-secondary-white to-transparent rounded-sm absolute w-0  group-hover:w-full h-[1px] left-0 top-0 scale-100 transition-all duration-500 '>
                    </div>

                    <div className=' bg-gradient-to-t from-transparent via-secondary-white to-transparent rounded-sm absolute  w-[1px] h-0  group-hover:h-72 left-0 top-0 scale-100 transition-all duration-500'>
                    </div>

                    <div
                        className='min-h-60 gap-4 grid grid-flow-row p-4 transition-all duration-300 relative'
                    >
                        <Icon className='text-yellow text-3xl' />
                        <GradientTitle>{name}</GradientTitle>

                        <p className={`group-hover:text-white text-secondary-white transition-all duration-300 text-1xl`}>{information}</p>
                    </div>
                </div>


                {/* video related  */}
                {isOverlay ?

                    <div 
                    style={{backgroundImage: `url(${thambnail})`}}
                    className='h-60 w-full flex justify-center items-center mt-5'>
                        {/* video overlay  */}

                            <img
                                onClick={() => setIsOverlay(!isOverlay)}
                                src={playBtn} alt='play'
                                className='w-2/12' />
                    </div>

                    :
                    <div className='relative mt-5'>
                        <div className='h-60 relative'>
                            <iframe
                                src={`https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                allow="autoplay; fullscreen; picture-in-picture;"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                }
            </div>

        </div >
    );
};

export default VideoCard;