import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorCard = ({tutor}) => {
    return (
        <div className="rounded-lg p-4 space-y-1  bg-base-100 shadow-sm border-2 border-red-50 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1">
            <Image src={tutor.imageUrl} alt={tutor.name} width={100} height={100} className='w-full h-50 rounded-lg border'></Image>
            <h1 className='text-xl font-semibold'>{tutor.name}</h1>
            <p className='text-md text-[#555]'>{tutor.subject}</p>
            <p className='text-md'>{tutor.availableTime}</p>
            <p className='text-md'>Season Start Date: {tutor.sessionStartDate} </p>
            <p className='text-xl font-semibold'>Fee: {tutor.hourlyFee}Tk/hr</p>
            <Link href={`/all-tutors/${tutor._id}`} className="btn btn-primary w-full">
                Book Session
            </Link>
            
        </div>
    );
};

export default TutorCard;