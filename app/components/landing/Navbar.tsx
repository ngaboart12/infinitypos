"use client"
import React, { useState } from 'react'
import Button from '../reusable/Button'
import Image from 'next/image'
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className=' backdrop-blur-lg bg-white/60 z-40 fixed w-full px-[10px] md:px-[50px] lg:px-[100px] py-[24px] flex flex-row items-center justify-between'>
        <a href='/' className='w-[100px]'>
          <Image width={1000} height={1000} className='w-full' src={`/images/logo.png`} alt='logo' />
        </a>
        <div className='hidden flex-row items-center lg:flex lg:gap-[40px]'>
          <a href="/" className='text-[14px] text-[#01A653] font-[600]'>Home</a>
          <a href="/features" className='text-[14px] text-black font-[600]'>Features</a>
          <a href="/pricing" className='text-[14px] text-black font-[600]'>Pricing</a>
          <a href="#" className='text-[14px] text-black font-[600]'>Contact Us </a>
        </div>
        <div className='hidden lg:flex'>
          <Button href='/auth' background='#01A653' label='Sign In' />
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className=' cursor-pointer flex lg:hidden'>
          {isMenuOpen ? (
            <RiCloseLargeLine />
          ) : (
            <CiMenuBurger size={20} />
          )}
        </div>

      </div>
      <div className={`flex  lg:hidden flex-col ${isMenuOpen ?  "w-[60%]": "w-[0%]" } duration-300  overflow-hidden h-full py-4 fixed bg-[white]/40 backdrop-blur-lg z-40`}>
        <div className='flex flex-col gap-[40px] px-[30px]'>
          <a href='/' className='w-[140px]'>
            <Image width={1000} height={1000} className='w-full' src={`/images/logo.png`} alt='logo' />
          </a>
          <div className='flex flex-col  gap-[20px]'>
            <a href="/" className='text-[14px] text-[#01A653] font-[600]'>Home</a>
            <a href="/features" className='text-[14px] text-black font-[600]'>Features</a>
            <a href="/pricing" className='text-[14px] text-black font-[600]'>Pricing</a>
            <a href="#" className='text-[14px] text-black font-[600]'>Contact Us </a>
          </div>
          <div className='lg:flex'>
            <Button href='/auth' background='#01A653' label='Sign In' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar