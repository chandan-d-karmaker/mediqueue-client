import Image from 'next/image';
import React from 'react';
import bgimg from '@/assets/WaveLine.svg'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='pt-20 relative'>

            <Image
                src={bgimg}
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
                            <h1 className='text-4xl font-bold text-white mb-4'>Skill-Sphere</h1>
                            <p className='opacity-80 max-w-sm'>A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.</p>
                        </div>

                        <div className='flex flex-col items-center text-center md:flex-row md:text-start md:gap-6 lg:gap-20 justify-between gap-10'>
                            <div className='space-y-4'>
                                <h1 className='font-semibold'>Courses</h1>
                                <ul className='space-y-2 opacity-80'>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Integrations</a></li>
                                </ul>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-semibold'>Company</h1>
                                <ul className='space-y-2 opacity-80'>
                                    <li><a href="">About</a></li>
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
                                </ul>
                            </div>

                        </div>

                        <div className='space-y-4 text-center md:text-left'>
                            <h1 className='font-semibold'>Social Links</h1>
                            <div className='flex gap-2 flex-row justify-center md:justify-start text-2xl'>
                                <FaInstagramSquare />
                                <FaFacebookSquare />
                                <FaTwitterSquare />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-4/5 mx-auto mt-4 md:mt-0 pt-7 md:pb-4 pb-0 border-t border-gray-700 flex justify-between items-center text-sm text-gray-400'>

                    <h1 className='text-center'>© 2026 Skill-Sphere. All rights reserved.</h1>
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