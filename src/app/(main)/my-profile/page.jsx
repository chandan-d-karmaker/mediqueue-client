import UpdateProfileModal from '@/app/components/shared/UpdateProfileModal';
import { auth } from '@/lib/auth';
import { title } from 'motion/react-client';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userName = session?.user?.name || "User";

  return {
    title: `${userName}'s Profile`,
    description: `View and edit profile settings for ${userName}`,
  };
}

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
    });
    // console.log(session);
    const user = session?.user;
    console.log(user);


    // add a better loading state later
    if (!user) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>;
    }
    return (
        <div className='animate__animated animate__backInDown my-10'>
            {
                user ? <div className='flex flex-col items-center justify-center space-y-4 text-center bg-linear-to-tr from-red-100 via-blue-100 to-red-100 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 md:w-1/2 md:mx-auto p-8 rounded-2xl mx-4'>

                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={100}
                        height={100}
                        className='rounded-full w-25 h-25'
                    />
                    <p className='font-medium'>Name: {user?.name}</p>
                    <p className='font-medium'>Email: {user?.email}</p>

                    <div>
                        <UpdateProfileModal/>
                    </div>
                </div> : <div className=' flex items-center justify-center h-screen'>
                    <h2 className='text-2xl rounded-2xl font-medium bg-base-200 p-10 text-center'>Please login first</h2>
                </div>
            }
        </div>
    );
};

export default ProfilePage;