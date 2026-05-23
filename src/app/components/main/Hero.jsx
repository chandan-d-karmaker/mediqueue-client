import Image from 'next/image';
import React from 'react';
import footerBg from '@/assests/WaveLine.svg'
{/* <Image src={footerBg} alt='test' height={100} width={100} className='w-full'></Image> */ }
{/* <Image
    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" alt='slider1' width={300} height={200}
    className="w-full" /> */}

const Hero = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
            <Image
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" alt='slider1' width={300} height={200}
                className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default Hero;