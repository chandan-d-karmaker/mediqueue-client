"use client"
import { signOut, useSession } from '@/lib/auth-client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from 'react-icons/rx';
import NavLink from './Navlink';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
    const { data, isPending } = useSession();
    // console.log(data, isPending);
    const user = data?.user;
   
    return (
        <div className="navbar bg-transparent backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className='font-medium' href={'/'}>Home</NavLink></li>
                        <li><NavLink className='font-medium' href={'/all-tutors'}>Tutors</NavLink></li>
                        {user && (
                            <>
                                <li><NavLink className='font-medium' href={'/add-tutor'}>Add Tutor</NavLink></li>
                                <li><NavLink className='font-medium' href={'/my-tutors'}>My Tutor</NavLink></li>
                                <li><NavLink className='font-medium' href={'/my-bookings'}>My Booked Sessions</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
                <Link href={'/'} className="md:text-3xl text-xl bg-linear-to-r from-red-400 via-green-300 to-blue-500 bg-clip-text text-transparent font-extrabold">MediQueue</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className='font-medium' href={'/'}>Home</NavLink></li>
                    <li><NavLink className='font-medium' href={'/all-tutors'}>Tutors</NavLink></li>
                    {user && (
                        <>
                            <li><NavLink className='font-medium' href={'/add-tutor'}>Add Tutor</NavLink></li>
                            <li><NavLink className='font-medium' href={'/my-tutors'}>My Tutor</NavLink></li>
                            <li><NavLink className='font-medium' href={'/my-bookings'}>My Booked Sessions</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 md:gap-4">
                <ThemeToggle/>
                {
                    isPending &&
                    <div className='flex justify-center items-center'>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>

                }
                {user && <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={user?.image} alt={user?.name} height={100} width={100} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/my-profile'}><RxAvatar />Profile</Link></li>
                        <li><a><CiSettings />Settings</a></li>
                        <li><Link href={'/login'} onClick={() => signOut()}><CgLogOut />Logout</Link></li>
                    </ul>
                </div>
                }
                {
                    !user && <Link href={'/login'} className="btn"><CgLogIn />Login</Link>
                }

            </div>

        </div >
    );
};

export default NavBar;