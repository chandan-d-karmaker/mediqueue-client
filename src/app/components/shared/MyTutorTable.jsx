import Image from 'next/image';
import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyTutorTable = ({ tutor }) => {
    const { name, subject, sessionStartDate, hourlyFee, remainingSlots, availablity, imageUrl } = tutor;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Availability</th>
                        <th>Hourly Fee</th>
                        <th>Total Slots</th>
                        <th>Registration Date</th>
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
                                    <div className="font-bold text-md">{name}</div>
                                    <div className="text-sm opacity-50">{subject}</div>
                                </div>
                            </div>
                        </td>

                        {/* availability */}
                        <td>
                            <p className="text-md font-semibold">{availablity}</p>
                        </td>

                        {/* hourly fee */}
                        <td><span className="font-bold text-md">{hourlyFee}</span> TK</td>
                        {/* remaining slots */}
                        <td className="font-semibold text-md">{remainingSlots}</td>
                        {/* session start date */}
                        <td>{sessionStartDate}</td>
                        <th className='flex gap-2'>
                            <button className="btn btn-warning btn-md"><MdDeleteForever /></button>
                            <button className="btn btn-ghost btn-md"><FaEdit /></button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyTutorTable;