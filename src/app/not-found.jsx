import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import error from '@/assests/Error-404.svg';

const NotFound = () => {
    return (
        <div>
            <div className="grid min-h-screen place-items-center bg-white px-6 py-16 sm:py-18 lg:px-8">
                <div className="text-center">
                    <Image src={error} alt='not found' width={400} height={400}></Image>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline hover:focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Go back home
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;