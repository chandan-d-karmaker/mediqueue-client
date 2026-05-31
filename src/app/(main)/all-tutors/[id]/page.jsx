import TutorDetailedCard from '@/app/components/shared/TutorDetailedCard';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`);
    const tutor = await res.json();

    return {
        title: tutor.name,
        description: tutor.subject,
    };
}

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`);
    const tutor = await res.json();
    // console.log(tutor);

    return (
        <TutorDetailedCard tutor={tutor} />
    );
};

export default TutorDetailsPage;