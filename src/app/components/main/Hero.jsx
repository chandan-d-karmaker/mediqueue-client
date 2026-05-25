import Image from 'next/image';
import React from 'react';
import footerBg from '@/assests/WaveLine.svg'
{/* <Image src={footerBg} alt='test' height={100} width={100} className='w-full'></Image> */ }
{/* <Image
    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" alt='slider1' width={300} height={200}
    className="w-full" /> */}

const Hero = () => {
    return (
        <div className="carousel w-full h-96">
            <div id="slide1" className="carousel-item relative w-full shrink-0">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" alt='slider1' width={1200} height={400}
                    className="w-full h-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full shrink-0">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" alt='slider1' width={1200} height={400}
                    className="w-full h-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full shrink-0">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" alt='slider1' width={1200} height={400}
                    className="w-full h-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>

    );
};

export default Hero;