import React from 'react';

const GiantButton: React.FC<{
    children: React.ReactNode | string,
}> = ({
    children
}) => {
        return (
            <div className='flex flex-col items-center gap-5'>

                <div
                    style={{
                        "backgroundImage": "linear-gradient(135deg, #ffcf23, #ff8d3a)"
                    }}
                    className='
                font-secondary
                transition-all
                duration-300
                p-2
                flex
                justify-center
                items-center
                group
                relative
                overflow-hidden
            '>
                    <button className='
                    py-5
                    px-10
                    hover:px-11
                    block
                    bg-dark-yellow-bg
                    text-white
                    text-center 
                    font-secondary
                    font-semibold
                    uppercase
                    transition-all
                    duration-300
                    text-3xl
                    giantButton
        '>
                        <div className='sticky z-20 w-full h-full'>
                            {children}
                        </div>
                    </button>

                    {/* hover effect  */}
                    <div
                        className='
                    opacity-0
                    group-hover:opacity-100
                    absolute
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-yellow
                    bg-opacity-50
                    scale-0
                    group-hover:scale-150
                    transition-all
                    duration-500
                    '></div>
                </div>

                {/* small text  */}
                <p className=' text-secondary-white flex items-center gap-2'>
                    <strong className=' text-white flex justify-center items-center gap-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 19" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M16.5973 5.62013V7.90483L17.4949 7.3209L20.132 5.60534L17.4949 5.03613L16.5973 5.62013Z" fill="currentColor"></path>
                            <path d="M2.80376 9.20634L0.166626 10.9218L9.02189 12.8332L13.2196 10.1026V7.81787L9.02189 10.5485L2.80376 9.20634Z" fill="currentColor"></path>
                            <path d="M13.099 7.15331L4.39936 5.14062L0.166626 7.8941L9.02189 9.80552L13.099 7.15331Z" fill="currentColor"></path>
                            <path d="M20.1319 2.57792L11.2766 0.666504L7.86743 2.88423L16.597 4.87734L20.1319 2.57792Z" fill="currentColor"></path>
                            <path d="M2.80376 12.2373L0.166626 13.9528L9.02189 15.8642L13.2196 13.1333V10.8486L9.02189 13.5793L2.80376 12.2373Z" fill="currentColor"></path>
                            <path d="M16.5973 8.65138V10.9361L20.132 8.63666L17.4948 8.06738L16.5973 8.65138Z" fill="currentColor"></path>
                            <path d="M16.5973 11.7871V14.0717L20.132 11.7723L17.4948 11.2031L16.5973 11.7871Z" fill="currentColor"></path>
                            <path d="M2.80376 15.3728L0.166626 17.0883L9.02189 18.9997L13.2196 16.2691V13.9844L9.02189 16.7151L2.80376 15.3728Z" fill="currentColor"></path>
                        </svg>
                        Access 12+ </strong>  wealth creation methods
                </p>
            </div>
        );
    };

export default GiantButton;