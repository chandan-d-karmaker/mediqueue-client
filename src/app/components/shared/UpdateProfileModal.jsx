'use client'
import React from 'react';
import { authClient } from "@/lib/auth-client";
import toast from 'react-hot-toast';

const UpdateProfileModal = () => {

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.updateUser({
            ...userData
        });
        const DURATION = 1000;
        if (!error) {
            toast.success("Profile updated successfully!", {
                DURATION: DURATION,
            })
            document.getElementById('update_profile_modal').close();
            setTimeout(() => {
                window.location.reload();
            }, DURATION);
        }
    };

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => document.getElementById('update_profile_modal').showModal()}
            >
                Edit Profile
            </button>
            <dialog id="update_profile_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 overflow-hidden">
                    <form onSubmit={handleUpdate} className="fieldset bg-base-100 p-6">
                        <legend className="fieldset-legend text-lg font-bold">Update Information</legend>

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input name='image' type="text" className="input w-full" placeholder="photo url" />

                        <div className="modal-action">
                            <button type="button" className="btn btn-ghost" onClick={() => document.getElementById('update_profile_modal').close()}>Cancel</button>
                            <button type="submit" className="btn btn-neutral">Update info</button>
                        </div>
                    </form>
                </div>
                {/* Backdrop to close modal when clicking outside */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>

    );
};

export default UpdateProfileModal;