import React from 'react';
import Menu from '../ui/Menu';
import MaxWidth from '../../MaxWidth';
import SimpleButton from '../ui/SimpleButton';

const Header: React.FC = () => {
    return (
        <div className='py-10'>
            <MaxWidth>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div>
                        <Menu />
                    </div>
                    {/* <div className='justify-center w-4/12 mx-auto'>
                        <p className='text-center text-secondary-white uppercase text-[10px]'>The Real World</p>
                        <Logo />
                    </div> */}
                    <div className='flex justify-end'>
                        <SimpleButton>Log In</SimpleButton>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default Header;