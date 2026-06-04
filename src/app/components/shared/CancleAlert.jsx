import React from 'react';
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md';

const CancleAlert = ({booking, token}) => {

    const cancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${booking._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`

            }
        })

        const data = await res.json();
        console.log(data);
        const DURATION = 1000;
        if (data.modifiedCount > 0) {
            toast.success(`Booking for ${booking.tutorName} Canceled Successfully!`, {
                duration: DURATION,
            });

            setTimeout(() => {
                window.location.reload();
            }, DURATION);
        } else {
            toast.error("Tutor is already canceled! Please book another tutor.");
        }
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-warning tooltip" data-tip="Edit Tutor" onClick={() => document.getElementById(`delete-modal-${booking._id}`).showModal()}><MdCancel /></button>
            <dialog id={`delete-modal-${booking._id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Are you sure you want to Cancle booking for tutor?</h3>
                    <p className="py-2 font-normal text-center">This action cannot be undone.</p>
                    <div className="modal-action w-full flex justify-center">
                        <button className="btn btn-error w-full text-white" onClick={cancelBooking}>Cancel Booking</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CancleAlert;
