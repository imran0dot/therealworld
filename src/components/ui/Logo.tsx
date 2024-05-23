import React from 'react';
import logo from '../../../src/assets/the-real-world-logo_1the-real-world-logo.webp'

const Logo:React.FC = () => {
    return (
        <div>
            <img src={logo} alt='logo' />
        </div>
    );
};

export default Logo;