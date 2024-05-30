import React from 'react';
import GradientTitle from '../ui/GradientTitle';
import CheckListItem from '../ui/CheckListItem';

interface TExclusiveFeaturesCard {
    item: {
        image: string,
        title: string,
        features: string[]
    }
}


const ExclusiveFeaturesCard: React.FC<TExclusiveFeaturesCard> = ({ item }) => {
    const {
        image,
        title,
        features,
    } = item;

    return (
        <div className='grid md:grid-cols-2 justify-center items-center gap-10 p-2 md:p-5 border-[3px] border-slate-500 border-opacity-20 hover:border-secondary-white transition-all bg-gray-900 bg-opacity-15 duration-300 md:w-11/12 mx-auto relative overflow-hidden'>
            <div className='md:w-10/12 relative flex flex-col'>
                <div className='w-32 h-10 bg-yellow bg-opacity-50 blur-3xl absolute'></div>
                <img src={image} alt="" />
                <div className='w-32 h-10 bg-yellow bg-opacity-50 blur-3xl absolute right-0 bottom-0'></div>
            </div>

            <div className='flex flex-col gap-3 '>
                <GradientTitle>{title}</GradientTitle>
                <div className='flex flex-col gap-3'>
                    {
                        features.map((feature, index) => <CheckListItem key={index} title={feature} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default ExclusiveFeaturesCard;