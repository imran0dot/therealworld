import React from 'react';
import GradientTitle from './GradientTitle';
import CheckListItem from './CheckListItem';
import { IconType } from 'react-icons';

const FeatureList: React.FC<{title: string, features: string[], icon?: IconType}> = ({title, features, icon: Icon}) => {
    return (
        <div className='flex flex-col gap-3 '>
            {Icon && <Icon />}
            <GradientTitle>{title}</GradientTitle>
            <div className='flex flex-col gap-3'>
                {
                    features.map((feature, index) => <CheckListItem key={index} title={feature} />)
                }
            </div>
        </div>
    );
};

export default FeatureList;