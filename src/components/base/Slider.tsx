import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Container from '../shared/Container';


const Slider: React.FC = () => {
    const swiperRef = useRef(null);




    return (
        <div className='my-20'>
            <Container>

                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1.5}
                    navigation
                    loop
                    centeredSlides
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide>
                        <div className='h-[500px] w-full border-4 border-white text-9xl'>hello1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full border-4 border-yellow text-9xl'>hello2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full border-4 border-gold text-9xl'>hello3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full border-4 border-gold text-9xl'>hello4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full border-4 border-gold text-9xl'>hello5</div>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </div>
    );
};

export default Slider;