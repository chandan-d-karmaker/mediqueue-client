import React from 'react';
import BookingModal from './BookingModal';
import Image from 'next/image';
import BackButton from './BackButton';


const TutorDetailedCard = ({ tutor }) => {
    return (
        <div className='md:w-4/5 md:mx-auto mx-4 mb-10 mt-5 '>
            <BackButton />
            <div className="rounded-lg p-4 space-y-2 bg-base-200 shadow-sm border border-base-300  md:flex flex-row gap-4 items-center md:justify-start justify-center">
                <Image src={tutor.imageUrl} alt={tutor.name} width={100} height={100} className='w-full md:w-100 h-70 rounded-lg border'></Image>
                <div className='space-y-2 text-center md:text-start'>
                    <h1 className='text-2xl font-semibold'>{tutor.name}</h1>
                    <p className='text-md opacity-75'>{tutor.subject}</p>
                    <p className='text-md'>{tutor.availableTime}</p>
                    <p className='text-md'><span className='font-semibold'>Institution:</span> {tutor.institution}</p>
                    <p className='text-md'><span className='font-semibold'>Experience:</span> {tutor.experience}</p>
                    <p className='text-md'><span className='font-semibold'>Location:</span> {tutor.location}</p>
                    <p className='text-md'><span className='font-semibold'>Mode:</span> {tutor.mode}</p>
                    <p className='text-md'><span className='font-semibold'>Available day & time slot:</span> {tutor.availablity}</p>
                    <p className='text-md'><span className='font-semibold'>Remaining slots:</span> {tutor.remainingSlots}</p>
                    <p className='text-md'><span className='font-semibold'>Session Start Date:</span> {tutor.sessionStartDate}</p>
                    <p className='text-md'><span className='font-semibold'>Hourly Fee:</span> {tutor.hourlyFee}Tk</p>
                    <BookingModal tutor={tutor} />
                </div>

            </div>
        </div>
    );
};

export default TutorDetailedCard;