'use client'

import React from 'react';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";

const BookedTutorTable = ({ myBookings, cancelBooking }) => {
    console.log(myBookings);

    const cancelbookingWraper = async ()=>{
        'use server'

        return cancelBooking(booking._id);
    } 
  

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tutor Name</th>
                        <th>Student Name</th>
                        <th>Student Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        myBookings.map((booking) => <tr key={booking._id} className="hover:bg-base-200">
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <Image src={booking.imageUrl} alt="Avatar Tailwind CSS Component" width={100} height={100} />
                                    </div>
                                </div>
                                <div>
                                    {/* name and subject */}
                                    <div className="font-bold text-md">{booking.tutorName}</div>
                                    <div className="text-sm opacity-50">{booking.subject}</div>
                                </div>
                            </div>
                        </td>

                        {/* student name */}
                        <td>
                            <p className="text-md font-semibold">{booking.userName}</p>
                        </td>

                        {/* remaining slots */}
                        <td className="font-semibold text-md">{booking.userMail}</td>

                        {/* status */}
                        <td><span className="font-bold badge badge-warning text-md">{booking.status}</span></td>

                        <th>
                            <button className='btn' onClick={()=>cancelbookingWraper(booking._id)}>
                                <MdCancel />
                            </button>
                        </th>
                    </tr>)
                    }
                    
                </tbody>

            </table>
        </div>
    );
};

export default BookedTutorTable;