'use client'
import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

const BookedTutorTable = ({ booking }) => {
    console.log(booking);

    const { tutorName, subject, userMail, status, userName, imageUrl } = booking;

    const cancleBooking = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${booking._id}`, {
            method: "PATCH",
            headers: {
                'content-type':'application/json'
            }
        })

        const data = await res.json();
        // console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Booking Canceled Successfully!');
            window.location.reload();
        } else {
            toast.error("Failed to cancel! Try again later! ")
        }
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
                <tbody className="hover:bg-base-200">
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <Image src={imageUrl} alt="Avatar Tailwind CSS Component" width={100} height={100} />
                                    </div>
                                </div>
                                <div>
                                    {/* name and subject */}
                                    <div className="font-bold text-md">{tutorName}</div>
                                    <div className="text-sm opacity-50">{subject}</div>
                                </div>
                            </div>
                        </td>

                        {/* student name */}
                        <td>
                            <p className="text-md font-semibold">{userName}</p>
                        </td>
                       
                        {/* remaining slots */}
                        <td className="font-semibold text-md">{userMail}</td>

                         {/* status */}
                        <td><span className="font-bold badge badge-warning text-md">{status}</span></td>
                       
                        <th className='flex gap-2'>
                            <button className='btn' onClick={cancleBooking}>
                                X
                            </button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default BookedTutorTable;