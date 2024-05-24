import React from 'react';

const SimpleButton: React.FC<{
    children: React.ReactNode | string,
}> = ({
    children
}) => {
        return (
            <button className='
                py-4
                px-8
                border
                border-secondary-border
                text-secondary-white
                uppercase
                hover:bg-white
                hover:border-white
                hover:text-primary-background
                transition-all
                font-bold
                font-secondary
                z-50
                
            '>
                {children}
            </button>
        );
    };

export default SimpleButton;