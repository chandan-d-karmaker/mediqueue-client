'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ tutor }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    const { _id, name } = tutor;
    let { remainingSlots } = tutor;
    // console.log(tutor);

    const handleBooking = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bookingData = Object.fromEntries(formData.entries());

        if (remainingSlots > 0) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            })

            const data = await res.json();
            // console.log(data);
            if (data.insertedId) {
                toast.success("Session Booked successfully!")
                
            }
        } else {
            toast.error("All session booked! No slot available at this moment")
        }

    }
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Session</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex items-center justify-center">
                    {/* form */}
                    <form onSubmit={handleBooking} method="dialog" className="fieldset rounded-box w-sm p-2">
                        <h2 className='text-xl font-medium text-center'>Book Session</h2>
                        <label className="label">Name</label>
                        <input type="text" name='user-name' className="input" placeholder="Name" defaultValue={user?.name} />

                        <label className="label">Phone</label>
                        <input type="text" name='phone' className="input" placeholder="Phone number" />
                        <label className="label">Tutor ID</label>
                        <input type="text" name='tutor-id' className="input" placeholder="Tutor ID" defaultValue={_id} />
                        <label className="label">Tutor Name</label>
                        <input type="text" name='tutor-name' className="input" placeholder="Tutor Name" defaultValue={name} />
                        <label className="label">Student Email</label>
                        <input type="email" name='stud-mail' className="input" placeholder="Your Email" defaultValue={user?.email} />
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className='flex gap-4 mt-4'>
                            <button type='submit' className="btn btn-neutral">Book session</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;