import TutorDetailedCard from '@/app/components/shared/TutorDetailedCard';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`);
    const tutor = await res.json();
    // console.log(tutor);

    return (
        <TutorDetailedCard tutor={tutor}/>
    );
};

export default TutorDetailsPage;