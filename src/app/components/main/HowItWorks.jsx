'use client';
import React from 'react';
import * as motion from "motion/react-client";

const HowItWorks = () => {
    const steps = [
        { id: 1, title: "Search Tutor", desc: "Browse tutors by subject and availability.", direction: -100 },
        { id: 2, title: "Select Slot", desc: "Choose your preferred date and time.", direction: -100 },
        { id: 3, title: "Book Session", desc: "Confirm booking with one click.", direction: 100 },
        { id: 4, title: "Start Learning", desc: "Join your session and begin learning.", direction: 100 },
    ];

    return (
    
            <div className='bg-base-100 p-10'>
                <h1 className='text-2xl font-semibold text-center mb-10'>How it <i>Works</i> </h1>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: step.direction }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            // Staggering the delay based on the index
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2, // Each card waits 0.2s longer than the last
                                ease: "easeOut"
                            }}
                            className='px-4 py-6 text-center border-2 border-gray-300 rounded-2xl bg-base-200 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1 space-y-4'
                        >
                            <h1 className='text-xl font-semibold text-red-500'>Step {step.id}</h1>
                            <h1 className='text-xl font-semibold'>{step.title}</h1>
                            <p className='text-gray-500'>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
    );
};

export default HowItWorks;