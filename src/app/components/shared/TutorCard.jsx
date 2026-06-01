import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from "motion/react-client";

const TutorCard = async ({ tutor }) => {
    const { session, user } = await auth.api.getSession({
        headers: await headers()
    });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.1,
                scale: { type: "spring", visualDuration: 0.1, bounce: 0.5 },
            }}
            

            className="rounded-lg p-4 space-y-1 bg-base-100 shadow-sm border-2 border-base-300 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1"
        >
            <Image 
                src={tutor.imageUrl} 
                alt={tutor.name} 
                width={100} 
                height={100} 
                className='w-full h-50 rounded-lg border'
            />
            <h1 className='text-xl font-semibold'>{tutor.name}</h1>
            <p className='text-md opacity-75'>{tutor.subject}</p>
            <p className='text-md'>Season Start Date: {tutor.sessionStartDate} </p>
            <p className='text-xl font-semibold'>Fee: {tutor.hourlyFee}Tk/hr</p>
            <Link href={`/all-tutors/${tutor._id}`} className="btn btn-primary w-full">
                Book Session
            </Link>
        </motion.div>
    );
};

export default TutorCard;