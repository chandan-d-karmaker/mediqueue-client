import React from 'react';
import FeatTutorCard from '../shared/FeatTutorCard';
import * as motion from "motion/react-client";

const AvailableTutors = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feat-tutors`)
    const tutors = await res.json();
    return (
        <div className='md:w-4/5 md:mx-auto space-y-4 mx-4 mb-20'>

            <h1 className='text-4xl font-bold text-center'>Available Tutors</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4'>

                {tutors.map((tutor, index) => (
                    <motion.div
                        key={tutor._id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }} // Staggers each card by 0.1s
                        viewport={{ once: true }}
                    >
                        <FeatTutorCard key={tutor._id} tutor={tutor} />
                    </motion.div>
                    
                ))}
                
            </div>

        </div>
    );
};

export default AvailableTutors;