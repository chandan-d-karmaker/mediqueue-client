import React from 'react';
import TutorCard from '../../components/shared/TutorCard';

const AllTutors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors`)
    const tutors = await res.json();
    return (
        <div className='md:w-4/5 md:mx-auto space-y-4 mx-4 my-10'>

            <h1 className='text-4xl font-bold text-center'>All Tutors</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4'>

                {tutors.map((tutor) => (
                    <TutorCard key={tutor._id} tutor={tutor} />
                ))}

            </div>

        </div>
    );
};

export default AllTutors;