import React from 'react';
import Container from './Container';
import MainTitle from './MainTitle';
import dollerSvg from '../../assets/svg-images/svgexport-36.svg'
import infoPatternSVG from '../../assets/svg-images/svgexport-37.svg'
import infoPatternbellow1SVG from '../../assets/svg-images/svgexport-38.svg'
import infoPatternbellow2SVG from '../../assets/svg-images/svgexport-41.svg'
import vsSVG from '../../assets/svg-images/svgexport-40.svg'
import fourtyNineSVG from '../../assets/svg-images/svgexport-42.svg'
import GiantButton from '../ui/GiantButton';

const NewSkills: React.FC = () => {
    return (
        <div className='my-20'>
            <Container>
                <div className='flex flex-col text-center gap-7 text-lg'>
                    <div className='flex justify-center gap-2'>
                        <img src={dollerSvg} />
                        <MainTitle title="NEW SKILLS REGULARLY ADDED" fontSize='text-3xl' />
                    </div>

                    <p className='text-secondary-white'>When a new technology revolutionizes an industry,</p>
                    <strong>The Real World will be the first and only place to teach you how to take advantage of it.</strong>
                    <p className='text-secondary-white'>Our students receive the latest information at 8am every day.</p>
                </div>


                <div className='mt-28'>
                    {/* title  */}
                    <div className='text-center mb-10'>
                        <MainTitle subTitle="YOU MUST CHOOSE" title="TWO PATHS LIE BEFORE YOU" />
                    </div>

                    {/* video */}
                    <div>
                        <div className='relative pb-[40%] mt-0 h-0'>
                            <iframe
                                src={`https://player.vimeo.com/video/742590921?h=592e908dec&autoplay=0&title=0&byline=0&portrait=0&`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                allow="autoplay; fullscreen; picture-in-picture;"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>


                    {/* svg pattern with info  */}
                    <div>
                        <div className='flex justify-center md:w-8/12 mx-auto px-5 '>
                            <img src={infoPatternSVG} className='w-full' />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {/* box one  */}
                            <div className='flex flex-col justify-center'>
                                <img className='h-20 mt-5' src={infoPatternbellow1SVG} />
                                <div className='flex flex-col gap-3 text-center items-center mt-3'>
                                    <p>FAIL TO ACHIEVE</p>
                                    <h5 className='font-bold text-4xl'>Stay stagnant</h5>
                                    <p className='text-secondary-white text-lg'>Follow the conventional route, investing years into a job you don’t care about, for a boss you don’t like, for a mediocre payment, just so you can retire in 50 years.</p>
                                    <button className='p-5 bg-secondary-background text-lg'>Remain an Employee</button>
                                </div>
                            </div>

                            {/* box two  */}
                            <div className='flex justify-center items-center'>
                                <img src={vsSVG} />
                            </div>

                            {/* box three  */}
                            <div className='flex flex-col justify-center'>
                                <img className='h-20 mt-5' src={infoPatternbellow2SVG} />

                                <div className='flex flex-col gap-3 text-center items-center mt-3'>
                                    <p className='text-yellow'>PAY</p>
                                    <img src={fourtyNineSVG} alt="" />
                                    <p className='text-white text-lg'>Immediately tap into a reservoir of cutting-edge knowledge, positioning yourself at the vanguard of innovation and fast-tracking your path to wealth.</p>
                                    <GiantButton small>Join the real world</GiantButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default NewSkills;