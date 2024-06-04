import React from 'react';
import GradientTitle from './GradientTitle';
import CheckListItem from './CheckListItem';
import { IconType } from 'react-icons';

const FeatureList: React.FC<{ title: string, features: string[], icon?: IconType }> = ({ title, features, icon: Icon }) => {
    return (
        <div className='flex flex-col gap-3 '>
            <div className='flex justify-start items-center gap-3'>
                {Icon && <Icon className='text-3xl' />}
                <GradientTitle>{title}</GradientTitle>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    features.map((feature, index) => <CheckListItem key={index} title={feature} />)
                }
            </div>
        </div>
    );
};

export default FeatureList;