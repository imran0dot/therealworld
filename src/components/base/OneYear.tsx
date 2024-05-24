import React from 'react';
import oneYearBanner from '../../../src/assets/ano_defaced_1.webp'
import MainTitle from '../shared/MainTitle';
import GiantButton from '../ui/GiantButton';

const OneYear: React.FC = () => {
    return (
        <div
            className='
                grid
                grid-cols-2
                justify-between
            '
        >
            {/* 1st box  */}
            <div className=''>
                <img src={oneYearBanner} alt='lastChangeBanner' className='w-full' />
            </div>


            {/* 2nd box  */}
            <div className='
                flex
                flex-col
                items-start
                ml-20
                justify-center
                '>
                <div
                    className='w-7/12 flex flex-col gap-10'
                >

                    {/* heading  */}
                    <div>
                        <MainTitle
                            title='IT DOESN’T TAKE 10 YEARS'
                            subTitle={<p className='text-secondary-dark'>ONE YEAR IS ALL YOU NEEDK </p>}
                        />
                    </div>

                    {/* info  */}
                    <div className='flex flex-col gap-10'>
                        <p className='text-secondary-white text-xl'>
                            You can get rich with just one year of focus...
                        </p>

                        <p className='text-secondary-white text-xl'>
                            <strong className='text-white'>But only </strong>
                            if you invest focus in the right business models using the right information.
                        </p>

                        <p className='text-secondary-white text-xl'>
                            In The Real World you will get access to multimillionaire professors who will give you a step-by-step path to reach your goals as fast as humanly possible.
                        </p>
                        <div className='flex justify-start text-left'>
                            <GiantButton>Join The Real World</GiantButton>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OneYear;