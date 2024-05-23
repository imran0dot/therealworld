import React from 'react';
import logo from '../../../src/assets/the-real-world-logo_1the-real-world-logo.webp'

const Logo:React.FC = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-28' />
        </div>
    );
};

export default Logo;