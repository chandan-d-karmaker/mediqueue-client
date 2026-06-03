'use client'
import CalendarIcon from '@/app/components/shared/DatePicker';
import { useSession } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { div } from 'motion/react-client';


const AddTutorForm = ({ token }) => {
    const { data: session } = useSession();
    // console.log(session);
    const user = session?.user;
    // console.log('Add user ID: ', user?.id);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTutor = Object.fromEntries(formData.entries());
        const newTutorData = {
            ...newTutor,
            userID: user?.id
        }
        // console.log(newTutorData);

        const res = await fetch('http://localhost:5000/all-tutors', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newTutorData)
        })

        const data = await res.json();
        console.log(data);
        const DURATION = 1000;
        if (data.insertedId) {
            toast.success("Tutor added successfully!", {
                DURATION: DURATION,
            })
            setTimeout(() => {
                window.location.reload();
            }, DURATION);
        }

    }

    return (
        <div className='md:w-4/5 md:mx-auto mx-4 my-10 flex items-center justify-center'>
            <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 animate__animated  animate__backInDown">
                <legend className="text-xl font-semibold text-center">Add a Tutor</legend>

                <label className="label">Tutor Name</label>
                <input type="text" name='name' className="input w-full" placeholder="Name" />

                <label className="label">Photo</label>
                <input type="text" name='imageUrl' className="input w-full" placeholder="Photo URL (imgbb-link upload)" />
                <button
                    type="button"
                    className="link text-start link-info text-xs"
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                    How to get a link?
                </button>
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
                    <option>Offline</option>
                    <option>Both</option>
                </select>

                <button type='submit' className='btn btn-primary'>Add Tutor</button>
            </form>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">How to add an image</h3>
                    <p className="py-4">Follow these steps to get a direct image link:</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Go to <a href="https://imgbb.com/" target="_blank" className="link link-primary">ImgBB</a>.</li>
                        <li>Click the <strong>Start Uploading</strong> button and select your image.</li>
                        <li>Once uploaded, change the dropdown menu to <strong>HTML full linked</strong> or <strong>Direct links</strong>.</li>
                        <li>Copy the URL provided and paste it into our form field.</li>
                    </ol>
                </div>
            </dialog>
        </div>
    );
};

export default AddTutorForm;