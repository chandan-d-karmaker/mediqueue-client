'use client';
import React from 'react';
import * as motion from "motion/react-client";

const WhyChoose = () => {
    const features = [
        { title: "Easy Booking", desc: "Book tutors instantly with a smooth and simple interface." },
        { title: "Verified Tutors", desc: "All tutors are verified to ensure quality education." },
        { title: "Flexible Scheduling", desc: "Choose time slots that fit your daily routine." },
        { title: "Affordable Pricing", desc: "Find tutors that match your budget easily." },
    ];

    return (
        <div className='bg-linear-to-tr from-red-100 via-blue-100 to-red-100 dark:from-red-900 dark:via-blue-900 dark:to-red-900 p-10'>
            <h1 className='text-2xl font-semibold text-black text-center mb-10 dark:text-white'>
                Why Choose <i className='font-bold'>MediQueue</i>
            </h1>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        // Vertical animation: starts from below (y: 50) and scaled down
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ 
                            duration: 0.3, 
                            delay: index * 0.3,
                            type: "spring", 
                            stiffness: 100 
                        }}
                        // Interaction: slight pulse when hovering
                        
                        className='px-4 py-6 text-center border-2 border-gray-300 rounded-2xl bg-base-300 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 space-y-4'
                    >
                        <h1 className='text-xl font-semibold mb-4'>{feature.title}</h1>
                        <p className='opacity-75'>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;