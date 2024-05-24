import React, { useState } from 'react';
import { BiArrowFromTop } from 'react-icons/bi';

interface AccordionType {
    heading: string;
    content: React.ReactNode;
}


const Accordion: React.FC<AccordionType> = ({ heading, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* heading  */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-between p-5 bg-secondary-background'>
                <h4 className='text-xl text-white'>{heading}</h4>
                <div className={`text-white text-4xl transition-all duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}> <BiArrowFromTop /></div>
            </div>

            {/* content */}
            <div className={`
            text-xl 
            overflow-hidden
            duration-300
            transition-all
            ${isOpen ? 'h-40' : 'h-0'}
            `}>
                <div className={`p-10 
                 flex 
                 flex-col 
                text-secondary-white 
                bg-secondary-hover-background 
                gap-5 
    `}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;