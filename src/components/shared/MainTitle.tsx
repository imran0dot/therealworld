import React from 'react';
import titleBackground from '../../assets/heading-texture_1heading-texture.webp';

interface Title {
    title: React.ReactNode | string,
    subTitle?: React.ReactNode | string,
}

const MainTitle: React.FC<Title> = ({ title, subTitle }) => {

    const headingStyles = {
        WebkitTextFillColor: 'transparent',
        backgroundImage: `url(${titleBackground})`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    };

    return (
        <div>
            {
                subTitle && <div style={headingStyles} className='bg-white'>{subTitle}</div>
            }
            <div
                style={headingStyles}
                className='
                    font-semibold 
                    uppercase 
                    text-3xl
                    md:text-6xl 
                    bg-white
                    font-secondary
                '
            >{title}</div>
        </div>
    );
};

export default MainTitle;