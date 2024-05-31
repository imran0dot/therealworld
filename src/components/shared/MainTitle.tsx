import React from 'react';
import titleBackground from '../../assets/heading-texture_1heading-texture.webp';

interface Title {
    title: React.ReactNode | string,
    subTitle?: React.ReactNode | string,
    fontSize?: string,
    gradient?: boolean
}

const MainTitle: React.FC<Title> = ({ title, subTitle, fontSize, gradient }) => {

    const headingStyles = {
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    };

    const gradientStyle = {
        "backgroundImage": `url(${titleBackground}), linear-gradient(125deg, #fff 85%, rgba(255, 255, 255, 0))`,
    };

    const isGradient = gradient ? gradientStyle : {
        backgroundImage: `url(${titleBackground})`,
    };

    return (
        <div>
            {
                subTitle && <div style={headingStyles} className='bg-white'>{subTitle}</div>
            }
            <div
                style={{ ...headingStyles, ...isGradient }}
                className={`
                font-semibold 
                uppercase 
                ${fontSize ? fontSize : 'text-3xl md:text-6xl '}
                leading-tight
                bg-white
                font-secondary
                
                `}

            >{title}</div>
        </div>
    );
};

export default MainTitle;