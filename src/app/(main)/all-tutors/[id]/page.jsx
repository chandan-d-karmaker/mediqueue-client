import BookingModal from '@/app/components/shared/BookingModal';
import Image from 'next/image';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`);
    const tutor = await res.json();
    console.log(tutor);
    return (
        <div className="md:w-4/5 mx-auto my-20 rounded-lg p-4 space-y-2 bg-base-100 shadow-sm border-2 border-red-50  md:flex flex-row gap-4 items-center md:justify-start justify-center">
            <Image src={tutor.imageUrl} alt={tutor.name} width={100} height={100} className='w-full md:w-100 h-70 rounded-lg border'></Image>
            <div className='space-y-2 text-center md:text-start'>
                <h1 className='text-2xl font-semibold'>{tutor.name}</h1>
                <p className='text-md text-[#555]'>{tutor.subject}</p>
                <p className='text-md'>{tutor.availableTime}</p>
                <p className='text-md'>Institution: {tutor.institution}</p>
                <p className='text-md'>Experience: {tutor.experience}</p>
                <p className='text-md'>Location: {tutor.location}</p>
                <p className='text-md'>Mode: {tutor.mode}</p>
                <p className='text-md'>Available day & time slot: {tutor.availability.days[0]} - {tutor.availability.days.at(-1)} {tutor.availability.timeSlot}</p>
                <p className='text-md'>Remaining slots: {tutor.remainingSlots}</p>
                <p className='text-md'>Season Start Date: {new Date(tutor.sessionStartDate).toLocaleDateString()}</p>
                <p className='text-md'>Hourly Fee: ৳{tutor.hourlyFee.amount}</p>
                <BookingModal tutor={tutor}/>
            </div>

        </div>
    );
};

export default TutorDetailsPage;