import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import SliderCard from '../ui/SliderCard';
import sliderPlaceholder from '../../assets/img/nox_1nox.webp'


const Slider: React.FC = () => {
    const swiperRef = useRef(null);

    const sliderInfo = [
        {
            videoUrl: "https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&",
            name: "Nox",
            number: 35,
            flug: "",
            income: "200",
            poster: sliderPlaceholder
        },
        {
            videoUrl: "https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&",
            name: "Nox",
            number: 35,
            flug: "",
            income: "200",
            poster: sliderPlaceholder
        },
        {
            videoUrl: "https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=1&title=0&byline=0&portrait=0&",
            name: "Nox",
            number: 35,
            flug: "",
            income: "200",
            poster: sliderPlaceholder
        }
    ]



    return (
        <div className='relative left-right-shadow'>

            <div
                className='my-20 md:mx-52 '>

                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1.6}
                    navigation
                    initialSlide={1}
                    // loop
                    centeredSlides
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        sliderInfo.map((cardInfo, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SliderCard cardInfo={cardInfo} />
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>


            {/* <div className='absolute top-0 bottom-0 right-0 w-[10%] border z-10 bg-gradient-to-l from-primary-background to-transparent'></div>

            <div className='absolute top-0 bottom-0 left-0 w-[10%] z-10 bg-gradient-to-r from-primary-background to-transparent'></div> */}
        </div>
    );
};

export default Slider;