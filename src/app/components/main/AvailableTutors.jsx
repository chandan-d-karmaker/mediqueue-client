import React from 'react';
import TutorCard from '../shared/TutorCard';

const AvailableTutors = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`)
    const tutors = await res.json();
    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center'>Available Tutors</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {tutors.map((tutor) => (
                    <TutorCard key={tutor._id} tutor={tutor} />
                ))}
            </div>
        </div>
    );
};

export default AvailableTutors;