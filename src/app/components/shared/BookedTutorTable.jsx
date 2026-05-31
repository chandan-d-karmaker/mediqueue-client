'use client'

import React from 'react';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";
import toast from 'react-hot-toast';

const BookedTutorTable = ({ booking }) => {
    console.log(booking);

    const cancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${booking._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await res.json();
        console.log(data);
        if (data.modifiedCount > 0) {
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
                <tbody>
                    {/* row */}
                    <tr>
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
                            <button className='btn' onClick={cancelBooking}>
                                <MdCancel />
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default BookedTutorTable;