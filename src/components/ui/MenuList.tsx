import React from 'react';
import { MenuType } from '../shared/Footer';

const MenuList: React.FC<MenuType> = ({
    link,
    name
}) => {
    return (
        <a
            href={link}
            className='
            p-4 
            text-white
            bg-primary-background 
            pl-5
            hover:pl-10
            transition-all
            duration-500
            border-b
            border-secondary-background 
            border-opacity-10
            [&:nth-last-child(-n+1)]:border-none
            '>
            {name}
        </a>
    );
};

export default MenuList;