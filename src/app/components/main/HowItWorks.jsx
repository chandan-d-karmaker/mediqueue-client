import React from 'react';

const HowItWorks = () => {
    return (
        <div className='bg-base-100 p-10'>
            <h1 className='text-2xl font-semibold text-center mb-10'>How it <i>Works</i> </h1>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-base-200 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1 space-y-4'>
                    <h1 className='text-xl font-semibold text-red-500'>Step 1</h1>
                    <h1 className='text-xl font-semibold'>Search Tutor</h1>
                    <p className='text-gray-500'>Browse tutors by subject and availability.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300 rounded-2xl bg-base-200 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1 space-y-4'>
                    <h1 className='text-xl font-semibold text-red-500'>Step 2</h1>
                    <h1 className='text-xl font-semibold'>Select Slot</h1>
                    <p className='text-gray-500'>Choose your preferred date and time.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-base-200 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1 space-y-4'>
                    <h1 className='text-xl font-semibold text-red-500'>Step 3</h1>
                    <h1 className='text-xl font-semibold'>Book Session</h1>
                    <p className='text-gray-500'>Confirm booking with one click.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-base-200 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1 space-y-4'>
                    <h1 className='text-xl font-semibold text-red-500'>Step 4</h1>
                    <h1 className='text-xl font-semibold'>Start Learning</h1>
                    <p className='text-gray-500'>FJoin your session and begin learning.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;