"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { CiMenuBurger } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';

const DashNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='w-full p-4 bg-[#ffffff] border-b-[1px] flex flex-row items-center justify-between px-[10px] md:px-[50px] lg:px-[100px]'>
                <a href='/' className='w-[100px]'>
                    <Image width={1000} height={1000} className='w-full' src={`/images/logo.png`} alt='logo' />
                </a>
                <div className=' hidden sm:flex flex-row gap-[40px] items-center'>
                    <a href="#" className='font-[400] text-[#01A653] text-[14px]'>Dashboard</a>
                    <a href="#" className='font-[400] text-[#000000] text-[14px]'>Upgrade</a>
                    <a href="#" className='font-[400] text-[#000000] text-[14px]'>Pricing</a>
                </div>
                <div className=' hidden sm:flex p-2 px-4 rounded-[4px] gap-[10px]  flex-row items-center cursor-pointer bg-red-500'>
                    <AiOutlineLogout color='white' />
                    <span className='text-white text-[12px]'>Log Out</span>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className=' cursor-pointer flex lg:hidden'>
                    {isMenuOpen ? (
                        <RiCloseLargeLine />
                    ) : (
                        <CiMenuBurger size={20} />
                    )}
                </div>
            </div>
            <div className={`flex  lg:hidden flex-col ${isMenuOpen ? "w-[60%]" : "w-[0%]"} duration-300  overflow-hidden h-full py-4 fixed bg-[white]/40 backdrop-blur-lg z-40`}>
                <div className='flex flex-col gap-[40px] px-[30px]'>
                    <a href='/' className='w-[140px]'>
                        <Image width={1000} height={1000} className='w-full' src={`/images/logo.png`} alt='logo' />
                    </a>
                    <div className='flex flex-col  gap-[20px]'>
                        <a href="#" className='font-[400] text-[#01A653] text-[14px]'>Dashboard</a>
                        <a href="#" className='font-[400] text-[#000000] text-[14px]'>Upgrade</a>
                        <a href="#" className='font-[400] text-[#000000] text-[14px]'>Pricing</a>
                    </div>
                    <div className=' hidden sm:flex p-2 px-4 rounded-[4px] gap-[10px]  flex-row items-center cursor-pointer bg-red-500'>
                        <AiOutlineLogout color='white' />
                        <span className='text-white text-[12px]'>Log Out</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashNavbar