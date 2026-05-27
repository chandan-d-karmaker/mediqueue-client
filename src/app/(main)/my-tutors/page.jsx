'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';

const MyTutorsPage = () => {

    const { data: session } = useSession();
    const { id } = session?.user;
    // console.log(user);

    
    return (
        <div>
            
        </div>
    );
};

export default MyTutorsPage;