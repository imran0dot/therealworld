import React from 'react';
import oneYearBanner from '../../../src/assets/ano_defaced_1.webp'
import MainTitle from '../shared/MainTitle';
import GiantButton from '../ui/GiantButton';
import { motion } from 'framer-motion'


const OneYear: React.FC = () => {
    return (
        <div
            className='
                  flex
                  flex-col-reverse
                  lg:flex-row
                  justify-between
                  my-10
                  gap-10
                  lg:gap-0
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
                mx-10
                lg:mx-0
                lg:ml-20
                justify-center
                '>
                <div
                    className=' lg:w-7/12 flex flex-col gap-10'
                >

                    {/* heading  */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 100 }}>
                        <MainTitle
                            title='IT DOESN’T TAKE 10 YEARS'
                            subTitle={<p className='text-secondary-dark'>ONE YEAR IS ALL YOU NEEDK </p>}
                        />
                    </motion.div>

                    {/* info  */}
                    <div className='flex flex-col gap-10'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='text-secondary-white text-xl'>
                            You can get rich with just one year of focus...
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='text-secondary-white text-xl'>
                            <strong className='text-white'>But only </strong>
                            if you invest focus in the right business models using the right information.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='text-secondary-white text-xl'>
                            In The Real World you will get access to multimillionaire professors who will give you a step-by-step path to reach your goals as fast as humanly possible.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='flex justify-start text-left'>
                            <GiantButton>Join The Real World</GiantButton>
                        </motion.div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OneYear;