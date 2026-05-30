import MyTutorTable from '@/app/components/shared/MyTutorTable';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyTutorsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
    });
    const { id } = session?.user;
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${id}`)
    const myTutors = await res.json();
    console.log(myTutors);

    return (
        <div className='md:w-4/5 md:mx-auto space-y-4 mx-4 my-10'>
            <h1 className='text-4xl font-bold text-center mb-5'>My Tutors</h1>
            <div>
                {
                    myTutors.length == 0 && <div className='flex flex-col items-center justify-center space-y-4 p-10 bg-base-300 rounded-lg'>
                        <h1 className='text-2xl font-bold text-center opacity-75'>No Tutors Booked</h1>
                        <p className='text-center'>You haven&apos;t booked any tutors yet. Please book a session to see your tutors here.</p>
                    </div>
                }
                {
                    myTutors.map((tutor) => <MyTutorTable key={tutor._id} tutor={tutor}  />)
                }
            </div>
        </div>
    );
};

export default MyTutorsPage;