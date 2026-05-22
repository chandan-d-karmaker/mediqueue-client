'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const LoginPage = () => {

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            ...userData,

            callbackURL: '/',
        });
        console.log("Login user data:", { data, error })

        if (error) {
            setError(error.message);
            return;
        } else {
            toast.success("Logged in successfully!")
        }
        window.location.href = '/'

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className="fieldset bg-linear-to-tl from-red-50 via-blue-50 to-red-100 border-base-300 rounded-box w-xs border p-4">

                {
                    error && <div className="alert alert-error rounded-lg text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{error}</span>
                    </div>
                }

                <div className='my-5 text-center'>
                    <h2 className='text-xl font-medium mb-2'>Welcome back</h2>
                    <p className='text-[16px]'>login to get full access</p>
                </div>

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <label className="input validator w-full relative">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        required
                        placeholder="Password"

                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-70 hover:opacity-100"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </label>


                <button className="btn btn-neutral my-4">Login</button>
                <p className='text-center text-[16px]'>New here? <Link href="/signup" className="text-blue-500">Register here</Link></p>

                <div className="divider">OR</div>

                <div
                    className="btn flex gap-2 items-center justify-center border p-2 rounded-sm text-[16px] text-blue-500"
                >
                    {" "}
                    <FaGoogle /> continue with google
                </div>
            </form>
        </div>
    );
};

export default LoginPage;