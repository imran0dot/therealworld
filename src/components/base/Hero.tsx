import React from 'react';
import heroImage from '../../../src/assets/hero-bg_1hero-bg.webp'
import Logo from '../ui/Logo';
import MainTitle from '../shared/MainTitle';
import ContainerSmall from '../shared/ContainerSmall';
import GiantButton from '../ui/GiantButton';
import Batch from '../ui/Batch';

const Hero: React.FC = () => {

    // const style = {
    //     "backgroundImage": `url(${heroImage})`
    // }

    return (
        <div
            style={{ "backgroundImage": `url(${heroImage})` }}
            className='min-h-screen md:-mt-20 -mt-10'
        >
            <ContainerSmall>

                {/* logo  */}
                <div className='justify-center mx-auto'>
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
                <div
                    className='
                        border 
                        border-secondary-white
                        border-opacity-10
                        h-[300px]
                        md:h-[500px]
                        p-2
                        mt-10
                        bg-secondary-background
                        relative
                    '
                >
                    <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/IIQIb1w_vqM?si=XmItWQbtiz-zQgiR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


                    <Batch
                        title='+$152,138'
                        subTitle='Content creation'
                        right={'-right-28'}
                        top={'top-20'}
                        isGold />

                    <Batch
                        title='+$152,138'
                        subTitle='Content creation'
                        left={'-left-28'}
                        bottom='bottom-20'
                        isGold />
                </div>


                {/* button  */}
                <div
                    className='
                        mt-10
                    '
                >
                    <GiantButton>Join thereal world</GiantButton>
                </div>

            </ContainerSmall>
        </div>
    );
};

export default Hero;