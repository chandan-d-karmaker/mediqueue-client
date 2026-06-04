'use client'
import React from 'react';
import Link from 'next/link';

const SearchFilter = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <form className='flex flex-col md:flex-row gap-3 items-center justify-center'>
                <div className='flex flex-col'>
                    <label className='label'>Search Tutor</label>
                    <input
                        type='search'
                        name='search'
                        placeholder='Search tutors by name'
                        className='input input-bordered max-w-xl'
                        aria-label='Search tutors by name'
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='label'>Session Start Date</label>
                    <input type="date" className="input" name='startDate' />
                </div>

                <div className='flex flex-col'>
                    <label className='label'>Session End Date</label>
                    <input type="date" className="input" name='endDate' />
                </div>

                <div className='flex gap-2 mt-5'>
                    <button type='submit' className='btn btn-primary btn-md'>Search</button>
                    <button type='button' className='btn btn-secondary btn-md'>
                        <Link href='/all-tutors'>Reset Filters</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchFilter;