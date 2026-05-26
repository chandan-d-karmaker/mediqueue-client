import React from 'react';

const WhyChoose = () => {
    return (
        <div className='bg-linear-to-tr from-red-50 via-blue-50 to-red-100 p-10'>
            <h1 className='text-2xl font-semibold text-center mb-10'>Why Choose <i className='font-bold'>MediQueue</i></h1>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='p-4 text-center border border-base-100 rounded-2xl bg-base-300'>
                    <h1 className='text-xl font-semibold mb-4'>Easy Booking</h1>
                    <p className=''>Book tutors instantly with a smooth and simple interface.</p>
                </div>
                <div className='p-4 text-center border border-base-100 rounded-2xl bg-base-300'>
                    <h1 className='text-xl font-semibold mb-4'>Verified Tutors</h1>
                    <p>All tutors are verified to ensure quality education.</p>
                </div>
                <div className='p-4 text-center border border-base-100 rounded-2xl bg-base-300'>
                    <h1 className='text-xl font-semibold mb-4'>Flexible Scheduling</h1>
                    <p>Choose time slots that fit your daily routine.</p>
                </div>
                <div className='p-4 text-center border border-base-100 rounded-2xl bg-base-300'>
                    <h1 className='text-xl font-semibold mb-4'>Affordable Pricing</h1>
                    <p>Find tutors that match your budget easily.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;