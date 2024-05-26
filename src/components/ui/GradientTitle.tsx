import React from 'react';

const GradientTitle: React.FC<{children: React.ReactNode | string}> = ({children}) => {
    const style = {
        "WebkitTextFillColor": 'transparent',
        "backgroundImage": "linear-gradient(165deg, rgb(255, 255, 255) 2%, rgba(255, 255, 255, 0.2))",
        "unicode-bidi": 'isolate',
    }
    return (
        <div style={style} className='bg-clip-text font-extrabold font-secondary uppercase text-2xl '>
            {children}
        </div>
    );
};

export default GradientTitle;