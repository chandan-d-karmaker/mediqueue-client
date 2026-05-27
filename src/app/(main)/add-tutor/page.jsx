'use client'
import CalendarIcon from '@/app/components/shared/DatePicker';
import { useSession } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AddTutorPage = () => {

    const { data, isPending } = useSession();
    console.log(data, isPending);
    const user = data?.user;
    console.log('user: ', user.id);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTutor = Object.fromEntries(formData.entries());
        const newTutorData = {
            ...newTutor,
            userID: user.id
        }
        console.log(newTutorData);

        const allRes = await fetch('http://localhost:5000/all-tutors', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutor)
        })

        const Alldata = await allRes.json();
        console.log(Alldata);

        if (Alldata.insertedId) {
            toast.success("Tutor added successfully!")
            // redirect('all-tutors')
        }
        

    }


    return (
        <div className='md:w-4/5 md:mx-auto mx-4 my-10 flex items-center justify-center'>
            <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                <legend className="text-xl font-semibold text-center">Add a Tutor</legend>

                <label className="label">Tutor Name</label>
                <input type="text" name='name' className="input w-full" placeholder="Name" />

                <label className="label">Photo</label>
                <input type="text" name='imageUrl' className="input w-full" placeholder="Photo URL (imgbb-link/postimage upload)" />

                <label className="label">Select subject</label>
                <select defaultValue="Select a subject" name='subject' className="select w-full">
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
                <input type="text" name='availablity' className="input w-full" placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM" />

                <label className="label">Hourly Fee</label>
                <input type="text" name='hourlyFee' className="input w-full" placeholder="Hourly fee in TAKA" />

                <label className="label">Total Slot</label>
                <input type='number' name='remainingSlots' className="input w-full" placeholder="total seat available" />

                <label className="label">Session Start Date</label>
                <CalendarIcon />

                <label className="label">Institution</label>
                <input type="text" name='institution' className="input w-full" placeholder="Example: Dhaka University" />

                <label className="label">Experience</label>
                <input type="text" name='experience' className="input w-full" placeholder="2/3 years o teaching experience" />

                <label className="label">Location</label>
                <input type="text" name='location' className="input w-full" placeholder="(Area/City)" />

                <label className="label">Teaching mode</label>
                <select defaultValue="Select a mode" name='mode' className="select w-full">
                    <option>Select a mode</option>
                    <option>Online</option>
                    <option>Online</option>
                    <option>Both</option>
                </select>

                <button type='submit' className='btn btn-primary'>Add Tutor</button>
            </form>
        </div>
    );
};

export default AddTutorPage;