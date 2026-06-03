'use client'
import React from 'react';
import Link from 'next/link';

const SearchFilter = () => {
    return (
        <div className="flex flex-col md:flex-row items-end justify-center gap-3">
            <form className='flex flex-col md:flex-row gap-3 items-end justify-center'>

                <div className='flex flex-col'>
                    <label className='label'>Search Tutor</label>
                    <input
                        type='search'
                        name='search'
                        // defaultValue={searchQuery}
                        placeholder='Search tutors by name'
                        className='input input-bordered w-1/2 max-w-xl'
                        aria-label='Search tutors by name'
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='label'>Select Session Start Date</label>
                    <input type="date" className="input" name='startDate' />
                </div>
                <div className='flex flex-col'>
                    <label className='label'>Select Session End Date</label>
                    <input type="date" className="input" name='endDate' />
                </div>

                {/* search and reset button not aligning perfecting */}
                <div className='flex items-end justify-end'>
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
            <button className='btn btn-secondary'>
                <Link href='/all-tutors'>
                    Reset Filters
                </Link>
            </button>
        </div>
    );
};

export default SearchFilter;