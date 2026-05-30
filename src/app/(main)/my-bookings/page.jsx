import BookedTutorTable from '@/app/components/shared/BookedTutorTable';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
    });
    const { id } = session?.user;
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${id}`)
    const myBookings = await res.json();
    // console.log(myBookings);

    return (
        <div className='md:w-4/5 md:mx-auto space-y-4 mx-4 my-10'>
            <h1 className='text-4xl font-bold text-center mb-5'>My Bookings</h1>
            <div>
                {
                    myBookings.length == 0 && <div className='flex flex-col items-center justify-center space-y-4 p-10 bg-base-300 rounded-lg'>
                        <h1 className='text-2xl font-bold text-center opacity-75'>No Bookings</h1>
                        <p className='text-center'>You haven&apos;t booked any sessions yet. Please book a session to see your bookings here.</p>
                    </div>
                }
                {
                    myBookings.map((booking) => <BookedTutorTable key={booking._id} booking={booking} />)
                }

            </div>

        </div>
    );
};

export default MyBookingPage;