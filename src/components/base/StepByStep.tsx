import React, { useEffect, useRef } from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import ImageOne from '../../assets/img/step-path-01.webp'
import ImageTwo from '../../assets/img/step-path-02.webp'
import ImageThree from '../../assets/img/step-path-03.webp'
import FeatureList from '../ui/FeatureList';

import arrowSVG from '../../assets/svg-images/svgexport-23.svg'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const StepByStep: React.FC = () => {
    const arrowRef = useRef(null);
    const parentRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const arrow = arrowRef.current;
        const parent = parentRef.current as HTMLDivElement | null;

        // GSAP animation
        if (arrow && parent) {
            // GSAP animation
            gsap.to(arrow, {
                y: parent.clientHeight,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: arrow,
                    start: "top bottom",
                    // end: "bottom top",
                    scrub: 0.05,
                    markers: true
                }
            });
        }
    }, []);


    return (
        <div>
            <div className='relative flex flex-col justify-center items-center'>
                <div className='text-center'>
                    <MainTitle
                        subTitle="A STEP-BY-STEP PATH                        "
                        title={<>TOOLS TO MAXIMISE <br /> YOUR INCOME</>} />
                </div>

                <div
                    ref={parentRef}
                    className='bg-center flex flex-col gap-20 items-center relative w-full mt-20 overflow-hidden min-h-screen'
                    style={{ backgroundImage: `url('https://www.jointherealworld.com/revamp/images/cubes-bg.svg')` }}>


                    {/* box one  */}
                    <div>
                        <Container>
                            <div className='grid grid-cols-2 px-10'>
                                <div className='relative flex justify-center items-center'>
                                    <img className='z-20' width={'80%'} src={ImageOne} alt="" />
                                    <div className='w-20 h-20 left-20 top-20 opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                    <div className='w-20 h-20 trans opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                </div>
                                <div className='px-10'>
                                    <FeatureList
                                        title='VITAL LIFE LESSONS'
                                        features={
                                            [
                                                'World-class custom built learning applicatio',
                                                'Scale from <strong class=text-white>Zero to $10k/month</strong> as fast as possible',
                                                'Master skills you need to <strong class=text-white>maximize your income/month</strong>'
                                            ]}
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>


                    {/* box two  */}
                    <div>
                        <Container>
                            <div className='grid grid-cols-2 px-10'>
                                <div className='relative flex justify-center items-center'>
                                    <img className='z-20' width={'80%'} src={ImageTwo} alt="" />
                                    <div className='w-20 h-20 left-20 top-20 opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                    <div className='w-20 h-20 trans opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                </div>
                                <div className='px-10'>
                                    <FeatureList
                                        title='VITAL LIFE LESSONS'
                                        features={
                                            [
                                                'World-class custom built learning applicatio',
                                                'Scale from <strong class=text-white>Zero to $10k/month</strong> as fast as possible',
                                                'Master skills you need to <strong class=text-white>maximize your income/month</strong>'
                                            ]}
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>

                    {/* box three  */}
                    <div>
                        <Container>
                            <div className='grid grid-cols-2 px-10'>
                                <div className='relative flex justify-center items-center'>
                                    <img className='z-20' width={'80%'} src={ImageThree} alt="" />
                                    <div className='w-20 h-20 left-20 top-20 opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                    <div className='w-20 h-20 trans opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                </div>
                                <div className='px-10'>
                                    <FeatureList
                                        title='VITAL LIFE LESSONS'
                                        features={
                                            [
                                                'World-class custom built learning applicatio',
                                                'Scale from <strong class=text-white>Zero to $10k/month</strong> as fast as possible',
                                                'Master skills you need to <strong class=text-white>maximize your income/month</strong>'
                                            ]}
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>


                        <div className='absolute h-full w-[5px] bg-gradient-to-b from-transparent to-white'></div>
                        <img
                            ref={arrowRef} className='absolute top-0 w-10 object-scale-down' src={arrowSVG} alt="" />
                </div>

            </div>
        </div>
    );
};

export default StepByStep;