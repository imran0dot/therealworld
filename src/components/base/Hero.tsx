import React from 'react';
import heroImage from '../../../src/assets/hero-bg_1hero-bg.webp'
import Logo from '../ui/Logo';
import MainTitle from '../shared/MainTitle';
import ContainerSmall from '../shared/ContainerSmall';
import GiantButton from '../ui/GiantButton';
import HeroVideo from '../ui/HeroVideo';
import { motion } from 'framer-motion'

const Hero: React.FC = () => {

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            style={{ "backgroundImage": `url(${heroImage})` }}
            className='min-h-screen md:-mt-28 -mt-10'
        >
            <ContainerSmall>

                {/* logo  */}
                <div
                    className='justify-center mx-auto'>
                    <p className='text-center text-secondary-white uppercase text-[10px]'>The Real World</p>
                    <Logo />
                </div>

                {/* title  */}
                <div
                    className='
                    flex 
                    text-center 
                    flex-col
                    mt-5
                    '>
                    <MainTitle title="MONEY MAKING IS A SKILL" />
                    <span
                        className='
                        text-lg
                        md:text-2xl
                        text-white
                        '
                    >We will teach you how to master it.</span>
                </div>


                {/* video box  */}
                <div>
                    <HeroVideo />
                </div>


                {/* button  */}
                <div className='mt-10'>
                    <GiantButton smallText>Join thereal world</GiantButton>
                </div>

            </ContainerSmall>
        </motion.div>
    );
};

export default Hero;