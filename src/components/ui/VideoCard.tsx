import React, { useState } from 'react';
import { IconType } from 'react-icons';
import GradientTitle from './GradientTitle';

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
    console.log(video, poster)


    const [isOverlay, setIsOverlay] = useState(true);

    return (
        <div className='p-[2px] group  relative rounded-md '>

            <div className='relative bg-[#111C22] rounded-md overflow-hidden'>

                <div className='absolute transition-all duration-300 w-0 group-hover:w-full h-1 bg-gradient-to-tr from-transparent to-secondary-white top-0 rounded-md'></div>

                <div className='absolute transition-all duration-300 left-0 w-0 group-hover:w-1 h-0 group-hover:h-96 bg-gradient-to-tr from-secondary-white to-transparent top-0 rounded-md'></div>

                <div className='absolute w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 516 300" fill="#fff" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <g clip-path="url(#clip0_850_871)">
                            <g opacity="0.02">
                                <line x1="12.4883" y1="0.000488303" x2="12.4882" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="24.4883" y1="0.000488303" x2="24.4882" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="36.4883" y1="0.000488303" x2="36.4882" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="48.4883" y1="0.000488303" x2="48.4882" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="60.4883" y1="0.000488303" x2="60.4882" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="72.4883" y1="0.000488303" x2="72.4883" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="84.4883" y1="0.000488303" x2="84.4883" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="96.4883" y1="0.000488303" x2="96.4883" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="108.488" y1="0.000488303" x2="108.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="120.488" y1="0.000488303" x2="120.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="132.488" y1="0.000488303" x2="132.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="144.488" y1="0.000488303" x2="144.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="156.488" y1="0.000488303" x2="156.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="168.488" y1="0.000488303" x2="168.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="180.488" y1="0.000488303" x2="180.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="192.488" y1="0.000488303" x2="192.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="204.488" y1="0.000488303" x2="204.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="216.488" y1="0.000488303" x2="216.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="228.488" y1="0.000488303" x2="228.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="240.488" y1="0.000488303" x2="240.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="252.488" y1="0.000488303" x2="252.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="264.488" y1="0.000488303" x2="264.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="276.488" y1="0.000488303" x2="276.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="288.488" y1="0.000488303" x2="288.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="300.488" y1="0.000488303" x2="300.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="312.488" y1="0.000488303" x2="312.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="324.488" y1="0.000488303" x2="324.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="336.488" y1="0.000488303" x2="336.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="348.488" y1="0.000488303" x2="348.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="360.488" y1="0.000488303" x2="360.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="372.488" y1="0.000488303" x2="372.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="384.488" y1="0.000488303" x2="384.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="396.488" y1="0.000488303" x2="396.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="408.488" y1="0.000488303" x2="408.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="420.488" y1="0.000488303" x2="420.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="432.488" y1="0.000488303" x2="432.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="444.488" y1="0.000488303" x2="444.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="456.488" y1="0.000488303" x2="456.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="468.488" y1="0.000488303" x2="468.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="480.488" y1="0.000488303" x2="480.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="492.488" y1="0.000488303" x2="492.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="504.488" y1="0.000488303" x2="504.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                                <line x1="516.488" y1="0.000488303" x2="516.488" y2="780" stroke-width="2" stroke="currentColor"></line>
                            </g>
                            <g opacity="0.02">
                                <line x1="1440" y1="0.500122" x2="-4.37115e-08" y2="0.499996" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="12.5001" x2="-4.37115e-08" y2="12.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="24.5001" x2="-4.37115e-08" y2="24.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="36.5001" x2="-4.37115e-08" y2="36.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="48.4999" x2="-4.37115e-08" y2="48.4998" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="60.4999" x2="-4.37115e-08" y2="60.4998" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="72.5" x2="-4.37115e-08" y2="72.4999" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="84.5" x2="-4.37115e-08" y2="84.4999" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="96.5" x2="-4.37115e-08" y2="96.4999" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="108.5" x2="-4.37115e-08" y2="108.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="120.5" x2="-4.37115e-08" y2="120.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="132.5" x2="-4.37115e-08" y2="132.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="144.5" x2="-4.37115e-08" y2="144.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="156.5" x2="-4.37115e-08" y2="156.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="168.5" x2="-4.37115e-08" y2="168.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="180.5" x2="-4.37115e-08" y2="180.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="192.5" x2="-4.37115e-08" y2="192.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="204.5" x2="-4.37115e-08" y2="204.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="216.5" x2="-4.37115e-08" y2="216.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="228.5" x2="-4.37115e-08" y2="228.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="240.5" x2="-4.37115e-08" y2="240.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="252.5" x2="-4.37115e-08" y2="252.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="264.5" x2="-4.37115e-08" y2="264.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="276.5" x2="-4.37115e-08" y2="276.5" stroke-width="2" stroke="currentColor"></line>
                                <line x1="1440" y1="288.5" x2="-4.37115e-08" y2="288.5" stroke-width="2" stroke="currentColor"></line>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_850_871">
                                <rect width="516" height="300" fill="currentColor"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>


                <div className='min-h-60 gap-4 grid grid-flow-row p-4 transition-all duration-300'>

                    <div><Icon className='text-yellow text-3xl' /></div>

                    <h4>
                        <GradientTitle>{name}</GradientTitle>
                    </h4>

                    <p className={`group-hover:text-white text-secondary-white transition-all duration-300 text-lg`}>{information}</p>
                </div>


                <div className='relative mt-10'>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
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
                            w-3/12 
                            h-20 
                            mx-auto 
                            cursor-pointer 
                            rounded-full
                            '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 70 70" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <g filter="url(#filter0_b_1251_25786)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5833 0C44.133 0 52.7792 3.87115 59.0378 10.1301C65.2957 16.388 69.1667 25.0341 69.1667 34.5837C69.1667 44.1333 65.2955 52.7793 59.0378 59.0379C52.779 65.2957 44.1324 69.1667 34.5833 69.1667C25.0343 69.1667 16.3875 65.2955 10.1289 59.0379C3.87099 52.7792 0 44.1326 0 34.5837C0 25.0347 3.87119 16.388 10.1302 10.1295C16.3882 3.87162 25.0337 0 34.5833 0Z" fill="#F9F9F9" fill-opacity="0.21"></path>
                                    <path d="M10.4248 10.4241L10.4249 10.4241C16.6078 4.24117 25.1486 0.416667 34.5833 0.416667C44.0181 0.416667 52.5595 4.24072 58.7431 10.4248L59.0306 10.1373L58.7431 10.4248C64.9261 16.6077 68.75 25.149 68.75 34.5837C68.75 44.0183 64.9259 52.5596 58.7431 58.7432C52.5594 64.9261 44.0174 68.75 34.5833 68.75C25.1493 68.75 16.6072 64.926 10.4236 58.7432C4.24057 52.5595 0.416667 44.0177 0.416667 34.5837C0.416667 25.1497 4.24076 16.6077 10.4248 10.4241Z" stroke="url(#paint0_linear_1251_25786)" stroke-width="0.833333"></path>
                                </g>
                                <path d="M47.2453 34.5849C47.2453 33.2963 46.6002 32.1283 45.471 31.484L31.3579 23.0268C29.6239 21.9797 27.4062 22.5436 26.3578 24.2752C26.0351 24.839 25.8335 25.4833 25.8335 26.1277V43.0421C25.8335 45.0558 27.4464 46.6667 29.4626 46.6667C30.1077 46.6667 30.7933 46.5055 31.3577 46.1431L45.4709 37.6858C46.6001 37.0415 47.2856 35.8736 47.2453 34.5849Z" fill="white"></path>
                                <defs>
                                    <filter id="filter0_b_1251_25786" x="-8.33333" y="-8.33333" width="85.8334" height="85.8337" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.16667"></feGaussianBlur>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1251_25786"></feComposite>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1251_25786" result="shape"></feBlend>
                                    </filter>
                                    <linearGradient id="paint0_linear_1251_25786" x1="34.5833" y1="0" x2="34.5833" y2="69.1667" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;