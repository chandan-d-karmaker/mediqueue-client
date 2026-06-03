import React from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';

const DeleteAlert = ({ tutor, token }) => {
    console.log(tutor);
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${tutor._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        console.log(data);
        const DURATION = 1000;
        if (data.deletedCount > 0) {
            toast.success(`${tutor.name} deleted successfully!`, {
                DURATION: DURATION,
            });
            setTimeout(() => {
                window.location.reload();
            }, DURATION);
        } else {
            toast.error("Failed to delete tutor.");
        }
    };
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-warning tooltip" data-tip="Delete Tutor" onClick={() => document.getElementById(`modal-${tutor._id}`).showModal()}><MdDeleteForever /></button>
            <dialog id={`modal-${tutor._id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Are you sure you want to delete this tutor?</h3>
                    <p className="py-2 font-normal text-center">This action cannot be undone.</p>
                    <div className="modal-action w-full flex justify-center">
                        <button className="btn btn-error w-full text-white" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DeleteAlert;