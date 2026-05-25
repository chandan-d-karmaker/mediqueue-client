import Image from 'next/image';
import React from 'react';
import footerBg from '@/assests/WaveLine.svg'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='pt-20 relative'>
            
            <Image
                src={footerBg}
                alt="Background"
                loading='eager'
                quality={70}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />

            <div className='mx-4 relative z-10'>
                <div className='w-4/5 mx-auto text-white'>

                    <div className='flex flex-col space-y-5 md:flex-row justify-between md:gap-10'>

                        <div className='flex flex-col items-center text-center md:text-start md:items-start'>
                            <h1 className='text-4xl bg-linear-to-r from-red-400 via-green-300 to-blue-500 bg-clip-text text-transparent font-extrabold  mb-4'>MediQueue</h1>
                            <p className='max-w-sm'>MediQueue is a tutor booking web application where students can register, log in,
                                browse available tutors, and book online learning sessions based on subject and time
                                availability. The system generates digital session tokens for each booking and allows
                                users to manage their scheduled classes efficiently.
                            </p>
                        </div>

                        <div className='flex flex-col items-center text-center md:flex-row md:text-start md:gap-6 lg:gap-20 justify-between gap-10'>
                            <div className='space-y-4'>
                                <h1 className='font-semibold'>Courses</h1>
                                <ul className='space-y-2 opacity-80'>
                                    <li><a href="">All Courses</a></li>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Integrations</a></li>
                                </ul>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-semibold'>Company</h1>
                                <ul className='space-y-2 opacity-80'>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Teachers</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Careers</a></li>
                                </ul>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-semibold'>Resources</h1>
                                <ul className='space-y-2 opacity-80'>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">FAQ</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className='space-y-4 text-center flex flex-col items-center justify-center md:text-left'>
                            <h1 className='font-semibold'>Social Links</h1>
                            <div className='flex gap-2 flex-row justify-center md:justify-start text-2xl'>
                                <FaInstagramSquare />
                                <FaFacebookSquare />
                                <FaTwitterSquare />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-4/5 mx-auto mt-4 md:mt-0 pt-7 md:pb-4 pb-0 border-t-2 flex justify-between items-center text-sm text-gray-400'>

                    <h1 className='text-center'>© 2026 Mediqueue. All rights reserved.</h1>
                    <div className='md:flex gap-5 hidden'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;