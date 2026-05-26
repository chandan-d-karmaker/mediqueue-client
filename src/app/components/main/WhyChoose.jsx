import React from 'react';

const WhyChoose = () => {
    return (
        <div className='bg-linear-to-tr from-red-100 via-blue-100 to-red-100 p-10'>
            <h1 className='text-2xl font-semibold text-center mb-10'>Why Choose <i className='font-bold'>MediQueue</i></h1>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-transparent transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1'>
                    <h1 className='text-xl font-semibold mb-4'>Easy Booking</h1>
                    <p className='text-gray-500'>Book tutors instantly with a smooth and simple interface.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300 rounded-2xl bg-transparent transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1'>
                    <h1 className='text-xl font-semibold mb-4'>Verified Tutors</h1>
                    <p className='text-gray-500'>All tutors are verified to ensure quality education.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-transparent transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1'>
                    <h1 className='text-xl font-semibold mb-4'>Flexible Scheduling</h1>
                    <p className='text-gray-500'>Choose time slots that fit your daily routine.</p>
                </div>
                <div className='px-4 py-6 text-center border-2 border-gray-300  rounded-2xl bg-transparent transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1'>
                    <h1 className='text-xl font-semibold mb-4'>Affordable Pricing</h1>
                    <p className='text-gray-500'>Find tutors that match your budget easily.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;