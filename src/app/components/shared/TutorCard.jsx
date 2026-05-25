import Image from 'next/image';
import React from 'react';

const TutorCard = ({tutor}) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <Image src={tutor.imageUrl} alt={tutor.name} width={100} height={100} className='w-full'></Image>
            <h1>{tutor.name}</h1>
            <p>{tutor.subject}</p>
            <p>{tutor.availableTime}</p>
            <p>Season Start Date: {tutor.seasonStartDate}</p>
            <p>Fee: ${tutor.hourlyFee.amount}/hr</p>
            <button className="btn btn-primary btn-wide">Book Now</button>
        </div>
    );
};

export default TutorCard;