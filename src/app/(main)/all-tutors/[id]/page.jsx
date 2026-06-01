import TutorDetailedCard from '@/app/components/shared/TutorDetailedCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
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

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const tutor = await res.json();
    // console.log(tutor);

    return (
        <TutorDetailedCard tutor={tutor} />
    );
};

export default TutorDetailsPage;