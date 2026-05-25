import Image from 'next/image';
import React from 'react';
import slider1 from '@/assests/slide-pic-1.jpg'
import slider2 from '@/assests/slide-pic-2.jpg'
import slider3 from '@/assests/slide-pic-3.jpg'

const Hero = () => {
    return (
        <div className="carousel w-full h-96 mb-20">
            <div id="slide1" className="carousel-item relative w-full shrink-0">
                <Image
                    src={slider1} alt='slider1' width={1200} height={400}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform justify-center items-center space-y-4">
                    <h1 className='text-4xl font-semibold text-center text-white'>Tutor Booking Made Easy</h1>
                    <p className='text-xl text-center text-white'>MediQueue simplify the process of booking tutors and saves significant time</p>
                    <div>
                        <button className='btn btn-primary'>Book Now</button>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full shrink-0">
                <Image
                    src={slider2} alt='slider2' width={1200} height={400}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform justify-center items-center space-y-4">
                    <h1 className='text-4xl font-semibold text-center text-white'>Find and book the right tutor instantly</h1>
                    <p className='text-xl text-center text-white'>Browse tutors and book session effortlessly from our online platform</p>
                    <div>
                        <button className='btn btn-primary'>Find Tutor</button>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full shrink-0">
                <Image
                    src={slider3} alt='slider3' width={1200} height={400}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform justify-center items-center space-y-4">
                    <h1 className='text-4xl font-semibold text-center text-white'>Effiecient Schedualing for Better Learing</h1>
                    <p className='text-xl text-center text-white'>Manage Appointment and ensure smooth communication between student and tutor through Mediqueue</p>
                    <div>
                        <button className='btn btn-primary'>Explore Now</button>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Hero;