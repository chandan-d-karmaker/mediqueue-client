'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return <Link href={href} className={`${isActive? 'font-bold border-b-4 rounded-none border-blue-500' : ''} ${className}`}>{children}</Link>
};

export default NavLink;