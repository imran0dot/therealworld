import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import ImageOne from '../../assets/img/step-path-01.webp'
import ImageTwo from '../../assets/img/step-path-02.webp'
import ImageThree from '../../assets/img/step-path-03.webp'
import FeatureList from '../ui/FeatureList';

const StepByStep: React.FC = () => {
    return (
        <div>
            <div className='relative flex flex-col justify-center items-center'>
                <div className='text-center'>
                    <MainTitle
                        subTitle="A STEP-BY-STEP PATH                        "
                        title={<>TOOLS TO MAXIMISE <br /> YOUR INCOME</>} />
                </div>

                <div
                    className='bg-center flex flex-col gap-20 items-center relative w-full mt-20'
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


                    <div className='absolute top-0 bottom-0 w-[1px] bg-slate-200'></div>
                </div>

            </div>
        </div>
    );
};

export default StepByStep;