'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

const BackButton = () => {
    const router = useRouter();
    return (
        <div>
            <button className='btn btn-primary btn-circle mb-5' onClick={()=>router.back()}>
                <IoArrowBack />
            </button>
        </div>
    );
};

export default BackButton;