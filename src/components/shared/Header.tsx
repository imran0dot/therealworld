import React from 'react';
import Menu from '../ui/Menu';
import Container from './Container';
import SimpleButton from '../ui/SimpleButton';

const Header: React.FC = () => {
    return (
        <div className='py-10 sticky z-50 top-0 left-0 w-full'>
            <Container>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div>
                        <Menu />
                    </div>
    
                    <div className='flex justify-end'>
                        <SimpleButton>Log In</SimpleButton>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;