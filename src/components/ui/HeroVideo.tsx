import React, { useEffect, useState } from 'react';
import Batch from './Batch';
import VimeoPlayer from '@vimeo/player';



const HeroVideo: React.FC = () => {
    const [isOverlay, setIsOverlay] = useState(true);
    // const [isVideoFinished, setIsVideoFinished] = useState(false);


    useEffect(() => {
        // Add event listener to detect when the iframe finishes
        const iframe = document.getElementById('vimeo-video-iframe') as HTMLElement;

        const player = new VimeoPlayer(iframe);
        if (iframe && player) {
          iframe.addEventListener('load', () => {
            player.on('ended', () => {
            //   setIsVideoFinished(true);
              console.log('ended')
            });
          });
        }
    
        // Cleanup function
        return () => {
          // Remove event listener when component unmounts
          if (player) {
            player.off('ended');
          }
        };
      }, []);

    return (
        <div
            className='
                        border 
                        border-secondary-white
                        border-opacity-10
                        p-2
                        mt-10
                        bg-secondary-background
                        relative
                    '
        >

            <div className='relative pb-[53%] mt-0 h-0'>
                <iframe
                    id="vimeo-video-iframe"
                    src={`https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&${isOverlay ? 'muted=1' : 'muted=0'}`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allow="autoplay; fullscreen; picture-in-picture;"
                    allowFullScreen
                ></iframe>
            </div>

            {/* video overlay  */}
            <div
                onClick={() => setIsOverlay(false)}
                className={`
                        absolute 
                        justify-center
                        items-center
                        bg-primary-background 
                        bg-opacity-60 
                        top-0 
                        left-0 
                        bottom-0 
                        right-0
                        ${!isOverlay ? 'hidden' : 'flex'
                    }
                        `}>
                <div
                    className='
                            w-1/12 
                            h-20 
                            mx-auto 
                            cursor-pointer 
                            rounded-full
                            '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 70 70" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <g filter="url(#filter0_b_1251_25786)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.5833 0C44.133 0 52.7792 3.87115 59.0378 10.1301C65.2957 16.388 69.1667 25.0341 69.1667 34.5837C69.1667 44.1333 65.2955 52.7793 59.0378 59.0379C52.779 65.2957 44.1324 69.1667 34.5833 69.1667C25.0343 69.1667 16.3875 65.2955 10.1289 59.0379C3.87099 52.7792 0 44.1326 0 34.5837C0 25.0347 3.87119 16.388 10.1302 10.1295C16.3882 3.87162 25.0337 0 34.5833 0Z" fill="#F9F9F9" fillOpacity="0.21"></path>
                            <path d="M10.4248 10.4241L10.4249 10.4241C16.6078 4.24117 25.1486 0.416667 34.5833 0.416667C44.0181 0.416667 52.5595 4.24072 58.7431 10.4248L59.0306 10.1373L58.7431 10.4248C64.9261 16.6077 68.75 25.149 68.75 34.5837C68.75 44.0183 64.9259 52.5596 58.7431 58.7432C52.5594 64.9261 44.0174 68.75 34.5833 68.75C25.1493 68.75 16.6072 64.926 10.4236 58.7432C4.24057 52.5595 0.416667 44.0177 0.416667 34.5837C0.416667 25.1497 4.24076 16.6077 10.4248 10.4241Z" stroke="url(#paint0_linear_1251_25786)" strokeWidth="0.833333"></path>
                        </g>
                        <path d="M47.2453 34.5849C47.2453 33.2963 46.6002 32.1283 45.471 31.484L31.3579 23.0268C29.6239 21.9797 27.4062 22.5436 26.3578 24.2752C26.0351 24.839 25.8335 25.4833 25.8335 26.1277V43.0421C25.8335 45.0558 27.4464 46.6667 29.4626 46.6667C30.1077 46.6667 30.7933 46.5055 31.3577 46.1431L45.4709 37.6858C46.6001 37.0415 47.2856 35.8736 47.2453 34.5849Z" fill="white"></path>
                        <defs>
                            <filter id="filter0_b_1251_25786" x="-8.33333" y="-8.33333" width="85.8334" height="85.8337" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.16667"></feGaussianBlur>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1251_25786"></feComposite>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1251_25786" result="shape"></feBlend>
                            </filter>
                            <linearGradient id="paint0_linear_1251_25786" x1="34.5833" y1="0" x2="34.5833" y2="69.1667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>


            <Batch
                title='+$152,138'
                subTitle='Content creation'
                right={'-right-28'}
                top={'top-20'}
                isGold />

            <Batch
                title='+$152,138'
                subTitle='Content creation'
                left={'-left-28'}
                bottom='bottom-20'
            />
        </div>
    )
}

export default HeroVideo;