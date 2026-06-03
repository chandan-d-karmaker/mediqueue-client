import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center md:w-4/5 md:mx-auto mx-4 my-20 '>
            <div className="flex w-full flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-10 w-28"></div>
                    <div className="skeleton h-10 w-full"></div>
                    <div className="skeleton h-10 w-full"></div>
                </div>
        </div>
    );
};

export default loading;