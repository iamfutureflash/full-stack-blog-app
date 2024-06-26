import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-24'>
            <div className='social flex gap-2 flex-1'>
                <Image src={"/facebook.png"} alt='facebook' width={24} height={24} />
                <Image src={"/instagram.png"} alt='instagram' width={24} height={24} />
                <Image src={"/tiktok.png"} alt='tiktok' width={24} height={24} />
                <Image src={"/youtube.png"} alt='youtube' width={24} height={24} />
            </div>
            <div className='logo flex-1 text-center font-bold text-4xl'>lamablog</div>
            <div className='links flex gap-5 flex-1 text-xl'>
                <ThemeToggle />
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar;