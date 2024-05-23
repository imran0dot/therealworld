import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { MenuType } from '../shared/Footer';
import MenuList from './MenuList';

const Menu: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const menuItems: MenuType[] = [
        {
            link: "#",
            name: "Interviews"
        },
        {
            link: "#",
            name: "Features"
        },
        {
            link: "#",
            name: "Student wins"
        },
        {
            link: "#",
            name: "TRW Campuses"
        },
        {
            link: "#",
            name: "FAQ"
        }
    ];

    return (
        <div
            className='relative'>
            {/* menu hamburger  */}
            <div
                onClick={() => setOpen(!isOpen)}
                className='text-white flex justify-start items-center cursor-pointer'>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    easing="ease-in" />

                <p className='uppercase font-semibold'>Menu</p>
            </div>

            <div className={`
            ${isOpen ?
                    'translate-x-0 opacity-100'
                    :
                    '-translate-x-3 opacity-0'
                }
                bg-primary-background 
                border 
                flex flex-col
                border-secondary-background 
                fixed
                w-[400px]
                mt-5
                transition-all
                duration-300
                p-5
                border-opacity-70`}>
                {
                    menuItems.map((menuItem: MenuType) => <MenuList
                        key={menuItem.name}
                        link={menuItem.link as string}
                        name={menuItem.name as string}
                    />)
                }
            </div>
        </div>
    );
};

export default Menu;