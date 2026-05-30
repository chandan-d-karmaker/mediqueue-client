'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import CalendarIcon from './DatePicker';
import "react-datepicker/dist/react-datepicker.css";

const TutorUpdateModal = ({ tutor }) => {

    const {_id, name, imageUrl, subject, availablity, hourlyFee, remainingSlots, institution, experience, location, mode} = tutor;

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log('user id', user?.id);

    // let { remainingSlots } = tutor;
    // console.log(tutor);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bookingData = Object.fromEntries(formData.entries());
        const bookingDataWihId = {
            ...bookingData,
            userId: user?.id
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDataWihId)
        })

        const data = await res.json();
        console.log(data);
        if (data.modifiedCount > 0) {
            toast.success("Tutor information updated successfully!");
            const modal = document.getElementById(`modal-${_id}`);
            if (modal) {
                modal.close();
            }

        } else {
            toast.error(data.error || "Failed to update tutor information. Please try again.");
            const modal = document.getElementById(`modal-${_id}`);
            if (modal) {
                modal.close();
            }
        }
        window.location.reload();

    }
    return (
        <div>
            <button className="btn btn-primary btn-outline btn-md" onClick={() => document.getElementById(`modal-${_id}`).showModal()}><FaEdit /></button>
            <dialog id={`modal-${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-2">

                    {/* form */}
                    <form onSubmit={handleUpdate} className="fieldset rounded-box p-2">

                        <legend className="text-xl font-semibold text-center">Update Tutor Information</legend>
                        
                        <label className="label">Tutor Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Name" />

                        <label className="label">Photo</label>
                        <input type="text" name='imageUrl' defaultValue={imageUrl} className="input w-full" placeholder="Photo URL (imgbb-link upload)" />

                        <label className="label">Select subject</label>
                        <select defaultValue={subject} name='subject'   className="select w-full">
                            <option>Select a subject</option>
                            <option>Physics</option>
                            <option>Mathematics</option>
                            <option>Biology</option>
                            <option>English</option>
                            <option>ICT</option>
                            <option>Chemistry</option>
                            <option>Accounting</option>
                            <option>General Science</option>
                            <option>Economics</option>
                            <option>Higher Mathematics</option>
                        </select>

                        <label className="label">Available Days and Available time slot</label>
                        <input type="text" name='availablity' defaultValue={availablity} className="input w-full" placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM" />

                        <label className="label">Hourly Fee</label>
                        <input type="text" name='hourlyFee' defaultValue={hourlyFee} className="input w-full" placeholder="Hourly fee in TAKA" />

                        <label className="label">Total Slot</label>
                        <input type='number' name='remainingSlots' defaultValue={remainingSlots} className="input w-full" placeholder="total seat available" />

                        <label className="label">Session Start Date</label>
                        <CalendarIcon />

                        <label className="label">Institution</label>
                        <input type="text" name='institution' defaultValue={institution} className="input w-full" placeholder="Example: Dhaka University" />

                        <label className="label">Experience</label>
                        <input type="text" name='experience' defaultValue={experience} className="input w-full" placeholder="2/3 years o teaching experience" />

                        <label className="label">Location</label>
                        <input type="text" name='location' defaultValue={location} className="input w-full" placeholder="(Area/City)" />

                        <label className="label">Teaching mode</label>
                        <select defaultValue={mode} name='mode' className="select w-full">
                            <option>Select a mode</option>
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Both</option>
                        </select>

                        <div className='flex gap-4 mt-2'>
                            <button type='submit' className="btn btn-primary">Update Information</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default TutorUpdateModal;