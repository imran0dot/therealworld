import React from 'react';
import pricingBG from '../../assets/img/pricing-bg.webp'
import MainTitle from '../shared/MainTitle';
import SimpleButton from '../ui/SimpleButton';
import clockSVG from '../../assets/svg-images/svgexport-43.svg'
import handSVG from '../../assets/svg-images/svgexport-47.svg'
import dollerSVG from '../../assets/svg-images/svgexport-49.svg'
import dollerCutSVG from '../../assets/svg-images/svgexport-48.svg'
import dollerWithTxtSVG from '../../assets/svg-images/svgexport-51.svg'
import GradientTitle from '../ui/GradientTitle';
import { FaCheck } from "react-icons/fa";
import ContainerSmall from '../shared/ContainerSmall';
import GiantButton from '../ui/GiantButton';

const Pricing: React.FC = () => {
    return (
        <div className='min-h-screen bg-center bg-cover' style={{ backgroundImage: `url(${pricingBG})` }}>
            <ContainerSmall>
                <div className='text-center'>
                    <MainTitle title="THE CHOICE IS YOURS" subTitle="WE CAN ONLY SHOW YOU THE DOOR" />
                </div>

                {/* pricing box  */}

                <div className='grid md:grid-cols-2 gap-10 my-10 w-10/12 mx-auto'>
                    {/* pricing one  */}
                    <div className='relative flex flex-col justify-center items-center text-center backdrop-blur-md py-10  shadow-sm'>
                        <div className='flex flex-col gap-10'>
                            {/* icon  */}
                            <div className='flex  flex-col justify-center items-center gap-2'>
                                <img src={clockSVG} alt="" />
                                <GradientTitle>DO NOTHING</GradientTitle>
                                <p className='text-lg text-secondary-white'>Watch Netflix</p>
                            </div>
                            <div className='border-b border-b-slate-400 border-opacity-25' />
                            <h3 className='text-secondary-white text-3xl'>Lose 9 hours a day</h3>
                            <ol className='flex flex-col gap-3 text-secondary-white'>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Work for someone else (8h a day)
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Stay stagnant
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Work a 9-5
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Pay $35,000 for University
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Stay unfulfilled
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Hang around losers
                                </li>
                            </ol>
                        </div>

                        {/* button  */}
                        <SimpleButton
                            customClass=''
                            solid>Remain an Employee</SimpleButton>
                    </div>

                    {/* pricing two  */}
                    <div className='relative flex flex-col justify-center items-center text-center backdrop-blur-md py-10 border-[1px] border-slate-500 border-opacity-30 shadow-sm  hover:-translate-y-5 transition-all duration-300 group overflow-hidden'>
                        <div className='flex flex-col gap-10'>
                            {/* icon  */}
                            <div className='flex  flex-col justify-center items-center gap-2'>
                                <img src={handSVG} alt="" />
                                <GradientTitle>Take Action</GradientTitle>
                                <p className='text-white font-bold text-lg'>Start Earning Today</p>
                            </div>
                            <div className='border-b border-b-slate-400 border-opacity-25' />
                            <div className='flex gap-3'>
                                <img src={dollerCutSVG} alt="" />
                                <img src={dollerSVG} alt="" />
                            </div>

                            <ol className='flex flex-col gap-3 text-white'>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Step-by-step lessons
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    12+ wealth creation methods
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Access to millionaire mentors
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Connect with 113,000+ others
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    No experience needed
                                </li>
                                <li className='flex items-center gap-2'> <FaCheck className='text-lg' />
                                    Custom-made learning app
                                </li>
                            </ol>


                            <div className='border-b border-b-slate-400 border-opacity-25' />
                            <div className='flex flex-col gap-2 text-start'>
                                <p>Cancel anytime, risk-free</p>
                                <img src={dollerWithTxtSVG} alt="" />
                                <p>Lock in your price before it increases</p>
                            </div>
                            <div className='absolute bottom-0 blur-3xl left-0 right-0 h-36 bg-yellow opacity-0 group-hover:opacity-30 transition-all duration-300'></div>
                        </div>

                        {/* button  */}
                        <div className='mt-5'>
                            <GiantButton small>Join The Real World</GiantButton>
                        </div>
                    </div>
                </div>

            </ContainerSmall>
        </div>
    );
};

export default Pricing;