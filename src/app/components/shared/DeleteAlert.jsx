import React from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';

const DeleteAlert = ({ tutor }) => {
    console.log(tutor);
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${tutor._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
        if (data.deletedCount > 0) {

            toast.success("Tutor deleted successfully!");
            window.location.reload();
        } else {
            toast.error("Failed to delete tutor.");
        }
    };
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_3').showModal()}><MdDeleteForever /></button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">This action cannot be undone.</p>
                    <div className="modal-action">
                        <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DeleteAlert;