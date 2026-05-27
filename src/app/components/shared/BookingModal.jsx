'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ tutor }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log('user id', user?.id);

    const { _id, name } = tutor;
    // let { remainingSlots } = tutor;
    // console.log(tutor);

    const handleBooking = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bookingData = Object.fromEntries(formData.entries());
        const bookingDataWihId = {
            ...bookingData,
            userId: user?.id
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDataWihId)
        })

        const data = await res.json();
        console.log(data);
        if (data.insertedId) {
            toast.success("Session Booked successfully!");
            const modal = document.getElementById('my_modal_5');
            if (modal) {
                modal.close();
            }

        } else {
            toast.error(data.message)
            const modal = document.getElementById('my_modal_5');
            if (modal) {
                modal.close();
            }
        }
        window.location.reload();

    }
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Session</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* form */}
                    <form onSubmit={handleBooking} className="fieldset rounded-box p-2">
                        <h2 className='text-xl font-medium text-center'>Book Session</h2>
                        <label className="label">Name</label>
                        <input type="text" name='user-name' className="input w-full" placeholder="Name" defaultValue={user?.name} />

                        <label className="label">Phone</label>
                        <input type="text" name='phone' className="input w-full" placeholder="Phone number" />
                        <label className="label">Tutor ID</label>
                        <input type="text" name='tutor-id' className="input w-full" placeholder="Tutor ID" defaultValue={_id} />
                        <label className="label">Tutor Name</label>
                        <input type="text" name='tutor-name' className="input w-full" placeholder="Tutor Name" defaultValue={name} />
                        <label className="label">Student Email</label>
                        <input type="email" name='stud-mail' className="input w-full" placeholder="Your Email" defaultValue={user?.email} />

                        <div className='flex gap-4 mt-4'>
                            <button type='submit' className="btn btn-neutral">Book session</button>
                        </div>
                    </form>
                    <form method="dialog" className='p-2 flex justify-start'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;