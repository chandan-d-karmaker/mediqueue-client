'use client';
import React, { useEffect, useState } from 'react';
import * as motion from "motion/react-client";
import lightBg from '@/assests/circle-bg-light.svg'
import darkBg from '@/assests/circle-bg-dark.svg'
import Image from 'next/image';
import { useTheme } from 'next-themes';

const WhyChoose = () => {
    const { resolvedTheme } = useTheme();
    const features = [
        { title: "Easy Booking", desc: "Book tutors instantly with a smooth and simple interface." },
        { title: "Verified Tutors", desc: "All tutors are verified to ensure quality education." },
        { title: "Flexible Scheduling", desc: "Choose time slots that fit your daily routine." },
        { title: "Affordable Pricing", desc: "Find tutors that match your budget easily." },
    ];

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        setMounted(true);
    }, []);

    const imageSrc = !mounted ? lightBg : (resolvedTheme === 'dark' ? darkBg : lightBg);

    return (
        <div className='relative'>
            <Image
                src={imageSrc}
                alt="Background"
                loading='eager'
                quality={70}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />

            <div className='p-10 relative z-10 bg-transparent'>
                <h1 className='text-2xl font-semibold text-black text-center mb-10 dark:text-white'>
                    Why Choose <i className='font-bold'>MediQueue</i>
                </h1>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent'>
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

                            className='px-4 py-6 text-center rounded-2xl
                                 bg-white/5 backdrop-blur-sm border border-white/20 
                                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] 
                                    transition-all duration-300 
                                     hover:bg-white/20 dark:hover:bg-black/30 space-y-4 dark:bg-black/20 dark:border-white/10'
                        >
                            <h1 className='text-xl font-semibold mb-4'>{feature.title}</h1>
                            <p className='opacity-75'>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WhyChoose;