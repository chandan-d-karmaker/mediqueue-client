// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';
import React from 'react';

const MyTutorsPage = async () => {

    // const session = await auth.api.getSession({
    //     headers: await headers(), // you need to pass the headers object.
    // });
    // const { id } = session?.user;
    // console.log(id);

    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${id}`)
    // const myTutors = await res.json();
    // console.log(myTutors);

    return (
        <div>
            my added tutors be here
        </div>
    );
};

export default MyTutorsPage;