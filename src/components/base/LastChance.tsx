import React from 'react';
import lastChangeBanner from '../../../src/assets/understand-image_1understand-image.webp'
import MainTitle from '../shared/MainTitle';
import { motion } from 'framer-motion'

const LastChance: React.FC = () => {
    return (
        <div
            className='
                flex
                flex-col
                lg:flex-row
                gap-10
            '
        >
            {/* 1st box  */}
            <div className='flex flex-col items-end justify-center w-full'>
                <div className=' mx-10 lg:mx-0 lg:pl-28 flex flex-col gap-10'>
                    {/* title  */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 100 }}
                    >
                        <MainTitle
                            title='2024 IS YOURLAST CHANCE'
                            subTitle={<p className='text-secondary-dark'>A STEP-BY-STEP PATH</p>}
                        />
                        <div className='w-5/12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 401 19" fill="#33393F" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M371.114 14.5879C356.956 14.4239 342.795 14.3973 328.638 14.0584C317.286 13.7895 305.941 12.9212 294.572 12.7021C284.746 12.5134 274.853 12.4237 265.084 13.0849C244.566 14.4584 224.138 16.6073 203.604 17.8806C193.72 18.4905 184.073 17.1673 174.479 14.1835C158.831 9.31868 142.521 11.3903 126.508 13.6528C117.163 14.9684 107.898 16.5721 98.5536 17.8003C90.257 18.8907 82.9 17.6939 76.2293 13.1328C69.5094 8.53377 60.7654 9.55652 52.9146 10.8519C41.5047 12.7181 30.3343 15.3988 19.1003 17.8416C12.0603 19.3712 5.73181 18.2362 1.5034 13.5162C0.110289 11.9638 0.49359 8.97074 1.42924 7.02072C1.82056 6.20094 6.37687 5.5418 7.99589 6.2225C13.1669 8.39314 17.7316 7.00974 22.5743 5.99174C36.8196 2.9969 51.1006 -0.222348 66.1447 0.913621C71.0211 1.28235 76.5553 2.19576 80.3157 4.32508C87.9518 8.65999 95.8621 7.95226 104.091 6.98596C118.271 5.31426 132.388 3.31714 146.615 1.93323C157.202 0.90683 167.581 2.01373 177.705 5.09104C190.394 8.93494 203.767 8.14066 216.91 7.15635C238.876 5.51239 260.737 2.85555 282.746 1.77412C294.905 1.17808 307.267 3.13225 319.564 3.51201C335.993 4.01456 352.444 4.03028 368.892 4.39567C377.373 4.58134 385.903 4.81755 394.31 5.63934C396.665 5.86645 400.076 8.0292 400.555 9.69585C401.529 13.0543 397.493 13.2449 394.138 13.3434C386.482 13.592 378.826 13.8654 371.169 14.1389C371.168 14.2888 371.149 14.4385 371.131 14.5756L371.114 14.5879Z" fill="currentColor" fillOpacity="0.18"></path>
                            </svg>
                        </div>
                    </motion.div>

                    {/* content  */}
                    <div className='flex flex-col gap-10 w-full'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='text-secondary-white text-xl'>
                            The world will change forever in 2024.
                            They are developing more ways to <strong className='text-white'>trap you.</strong>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 100 }}
                            className='text-secondary-white text-xl'>
                            AI is taking jobs, and Central Bank Digital Currencies are just around the corner.
                        </motion.p>


                        <motion.strong 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 100 }} className='text-white text-xl'>What have you been doing to prepare?</motion.strong>

                        <motion.strong className='text-secondary-white text-xl'>
                            You must understand, it’s now or never.
                        </motion.strong>
                    </div>

                </div>
            </div>

            {/* 2nd box  */}
            <div className='flex justify-end lg:w-10/12'>
                <img src={lastChangeBanner} alt='lastChangeBanner' className='w-full object-cover' />
            </div>
        </div>
    );
};

export default LastChance;