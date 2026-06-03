import React from 'react';
import TutorCard from '../../components/shared/TutorCard';
import * as motion from "motion/react-client";

export const metadata = {
    title: "All Tutors",
};

const AllTutors = async ({ searchParams }) => {

    const params = await searchParams;
    const searchQuery = (params.search || " ").trim();
    console.log(searchQuery);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors?search=${searchQuery}`, {
        cache: 'no-store'
    })

    const tutors = await res.json();

    return (
        <div className='md:w-4/5 md:mx-auto space-y-4 mx-4 my-10'>

            <h1 className='text-4xl font-bold text-center my-10'>All Tutors</h1>

            <form className='flex gap-3 items-center'>
                <input
                    type='search'
                    name='search'
                    // defaultValue={searchQuery}
                    placeholder='Search tutors by name'
                    className='input input-bordered w-1/2 max-w-xl'
                    aria-label='Search tutors by name'
                />
                <button type='submit' className='btn btn-primary md:w-auto'>Search</button>
            </form>
            
            {/* not working properly but isn't required for the assignment */}
            {/* {searchQuery!== ' ' && (
                <p className='text-sm text-center text-muted-foreground'>
                    Showing results for {searchQuery}
                </p>
            )} */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {tutors.length > 0 ? (
                    tutors.map((tutor, index) => (
                        <motion.div
                            key={tutor._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TutorCard tutor={tutor} />
                        </motion.div>
                    ))
                ) : (
                    <div className='col-span-full py-16'>
                        <p className='text-lg font-medium'>No tutors found.</p>
                        {searchQuery && <p className='text-sm text-muted-foreground'>Try another name or check for any typo</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTutors;
