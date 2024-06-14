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
import GiantButton from '../ui/GiantButton';
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
// import { useGSAP } from '@gsap/react';




const StepByStep: React.FC = () => {
    const arrowRef = useRef(null);
    const parentRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const arrow = arrowRef.current;
        const parent = parentRef.current as HTMLDivElement | null;

        if (arrow && parent) {
            gsap.to(arrow, {
                y: parent.clientHeight * 1.02,
                // translateY: parent.clientHeight,
                ease: "power1.inOut",
                duration: 5,
                scrollTrigger: {
                    trigger: arrow,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.05,
                    markers: false
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
                    className='bg-center flex flex-col gap-20 md:items-center relative w-full mt-20 min-h-screen '
                    style={{ backgroundImage: `url('https://www.jointherealworld.com/revamp/images/cubes-bg.svg')` }}>


                    <div
                    className='overflow-hidden flex flex-col gap-20 md:items-center relative'
                        ref={parentRef}>
                        {/* box one  */}
                        <div>
                            <Container>
                                <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                                    <div className='relative flex justify-center items-center'>
                                        <img className='z-20' src={ImageOne} alt="" />
                                        <div className='w-72 h-20 opacity-30 bg-yellow absolute rotate-45 blur-3xl'></div>
                                    </div>
                                    <div className='md:px-10'>
                                        <FeatureList
                                            icon={FaGraduationCap}
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
                                <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                                    <div className='relative flex justify-center items-center'>
                                        <img className='z-20' width={'80%'} src={ImageTwo} alt="" />
                                        <div className='w-20 h-20 left-20 top-20 opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                        <div className='w-20 h-20 trans opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                    </div>
                                    <div className='md:px-10'>
                                        <FeatureList
                                            icon={FaUsers}
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
                                <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                                    <div className='relative flex justify-center items-center'>
                                        <img className='z-20' width={'80%'} src={ImageThree} alt="" />
                                        <div className='w-20 h-20 left-20 top-20 opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                        <div className='w-20 h-20 trans opacity-30 bg-yellow absolute z-10 blur-3xl'></div>
                                    </div>
                                    <div className='md:px-10'>
                                        <FeatureList
                                            icon={FaUserTie}
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

                        <div className='absolute h-full w-[3px] bg-gradient-to-b from-transparent to-white ml-[9px] md:ml-0'></div>

                    <div
                        ref={arrowRef}
                        className='absolute flex flex-col justify-start items-center top-0 bottom-0 h-full'>
                        <img className='top-0 object-scale-down z-20 ' src={arrowSVG} alt="" />
                        <div className='absolute h-full w-[3px] bg-secondary-dark '></div>
                    </div>
                    </div>


                    
                </div>
            </div>


            <div className='mt-20'>
                {/* button  */}
                <GiantButton smallText>Join The Real World</GiantButton>
            </div>
        </div>
    );
};

export default StepByStep;