import React from 'react';
import workImageBanner from '../../../src/assets/work-image_1work-image.webp'
import MainTitle from '../shared/MainTitle';

const AskYourself: React.FC = () => {
    return (
        <div
            className='
                flex
                flex-col
                lg:flex-row
                gap-10
                py-20
            '
        >
            {/* 1st box  */}
            <div className='flex flex-col items-end justify-center w-full'>
                <div className='lg:w-8/12 mx-10 lg:mx-0 lg:pl-20 flex flex-col gap-10'>
                    {/* title  */}
                    <div>
                        <MainTitle
                            title='ARE YOU PREPARED TO WORK HARD?'
                            fontSize='text-3xl md:text-[55px]'
                            subTitle={<p className='text-secondary-dark'>ASK YOURSELF </p>}
                        />
                    </div>

                    {/* content  */}
                    <div className='flex flex-col gap-10 w-full'>
                        <p className='text-secondary-white text-xl'>
                            <strong className='text-white'>Money-making is a skill.</strong>
                            Like every other skill it can be learned, and the speed at which it is learned depends on the effort you put in, your coaches and the learning environment you are taught in.
                        </p>

                        <p className='text-secondary-white text-xl'>
                            <strong className='text-white'>Our coaches use the business models they teach,</strong>
                            they know what it takes to be profitable, and they are the first to identify and utilize new disruptive technologies and strategies whenever they appear.
                        </p>


                        <strong className='text-white text-xl'>There is no better place on the planet to learn how to make money online today.</strong>
                    </div>

                </div>
            </div>

            {/* 2nd box  */}
            <div className='flex justify-end lg:w-10/12'>
                <img src={workImageBanner} alt='workImageBanner' className='w-full object-cover' />
            </div>
        </div>
    );
};

export default AskYourself;