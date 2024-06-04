import React from 'react';

interface TSliderCard {
    cardInfo: {
        videoUrl: string,
        name: string,
        number: string | number,
        flug: string,
        income: string,
    }
}

const SliderCard: React.FC<TSliderCard> = ({ cardInfo }) => {
    const {videoUrl, name, number, flug, income} = cardInfo;
    return (
        <div>
            ${videoUrl + name + number + income + flug}
        </div>
    );
};

export default SliderCard;