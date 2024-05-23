import React from 'react';
import { IconType } from 'react-icons';

const IconTitle: React.FC<{
    icon: IconType,
    title: string
}> = ({
    icon: Icon,
    title
}) => {

        const style = {
            "WebkitTextFillColor": 'transparent',
            "backgroundImage": "linear-gradient(165deg, #fff 35%, rgba(255, 255, 255, .2))"
        }

        return (
            <div className='
                flex 
                items-center
                gap-2
            '>
                <div className='
                    text-white
                    text-7xl
                    flex
                    justify-center
                    items-center
                '><Icon /></div>
                <h3
                    style={style}
                    className='
                    text-3xl
                    font-semibold
                    bg-clip-text
                    font-secondary
                    uppercase
                    leading-[1.2]
                '>{title}</h3>
            </div>
        );
    };

export default IconTitle;