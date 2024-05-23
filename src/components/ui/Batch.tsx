import React from 'react';

const Batch:
    React.FC<{
        title: string,
        subTitle: string,
        isGold?: boolean,
        top?: string,
        bottom?: string,
        left?: string,
        right?: string,

    }> = ({
        title,
        subTitle,
        isGold,
        top,
        bottom,
        left,
        right
    }) => {
        return (
            <div className={`
            hidden
            md:flex
            flex-col
            items-center
            text-secondary-white
            bg-secondary-background
            border
            border-t-2
            border-secondary-white
            p-3
            px-10
            text-center
            rounded-full
            hover:bg-secondary-hover-background
            backdrop-blur-sm
            transition-all
            absolute
            z-10
            ${top}
            ${bottom}
            ${left}
            ${right}
        `}>
                <span className={`uppercase text-[10px] ${isGold && 'text-gold'}`}>
                    {subTitle}
                </span>
                <span className='text-lg font-extrabold text-white font-secondary'>
                    {title}
                </span>
            </div>
        );
    };

export default Batch;