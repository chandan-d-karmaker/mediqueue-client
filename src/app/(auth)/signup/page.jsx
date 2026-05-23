"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import loginImg from '@/assests/Welcome.svg'

const SignupPage = () => {

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // used signin to register
    // must check before submit
    // use google signup here

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            ...userData,

            callbackURL: '/',
        });
        console.log("Register user data:", { data, error })


        if (error) {
            setError(error.message);
            console.error(error.message);
            return;
        } else {
            toast.success("Redirecting to login page");
        }
        // callbackURL not working, so I've to manually redirect
        window.location.href = '/login'

    }

    return (
        <div className='flex md:justify-between justify-center items-center h-full'>

            <form onSubmit={handleSubmit} className="fieldset bg-linear-to-r from-red-100 via-blue-100 to-white-200 min-w-xs border border-base-300 md:border-0 p-4">

                {
                    error && <div className="alert alert-error rounded-lg text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{error}</span>
                    </div>
                }

                <div className='my-6 text-center'>
                    <h2 className='text-xl font-medium mb-2'>Register Now</h2>
                    <p className='text-[16px]'>and explore the full site</p>
                </div>



                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Photo URL</label>
                <input name='image' type="text" className="input" placeholder="Photo URL" />

                <label className="label">Password</label>
                <label className="input validator relative">
                    <FaKey/>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        required
                        placeholder="Password"
                        minLength="6"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                        className="pr-10"
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
                <p className="validator-hint hidden">
                    Must be more than 6 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>

                <button className="btn btn-neutral my-4">Register</button>
                <p className='text-center text-[16px]'>Already registered? <Link href="/login" className="text-blue-500">Login here</Link></p>

                <div className="divider">OR</div>

                <div
                    className="btn flex gap-2 items-center justify-center border p-2 rounded-sm text-blue-500"
                >
                    {" "}
                    <FaGoogle /> continue with google
                </div>
            </form>

            <Image src={loginImg} className='hidden md:flex' alt='image-login' height={800} width={800}></Image>


        </div>
    );
};

export default SignupPage;