import React from 'react';

const SimpleButton: React.FC<{
    children: React.ReactNode | string,
    solid?: boolean,
    customClass?: string
}> = ({
    children,
    solid,
    customClass,
}) => {
    const classes = solid ? 'border border-transparent hover:border-white py-3 px-10  m-10 text-white block bg-secondary-dark duration-300 transition-all' + customClass : 'py-4 px-8 border border-secondary-border text-secondary-white uppercase hover:bg-white hover:border-white hover:text-primary-background transition-all font-bold font-secondary z-50' + customClass

        return (
            <button className={classes} >
                {children}
            </button>
        );
    };

export default SimpleButton;