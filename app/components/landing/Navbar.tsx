import React from 'react'
import Button from '../reusable/Button'

const Navbar = () => {
  return (
    <div className=' backdrop-blur-lg bg-white/60 z-40 fixed w-full px-[10px] md:px-[50px] lg:px-[100px] py-[24px] flex flex-row items-center justify-between'>
        <div className='font-[800]'>LOGO</div>
        <div className='hidden flex-row items-center lg:flex lg:gap-[40px]'>
            <a href="/" className='text-[14px] text-[#01A653] font-[600]'>Home</a>
            <a href="/features" className='text-[14px] text-black font-[600]'>Features</a>
            <a href="/pricing" className='text-[14px] text-black font-[600]'>Pricing</a>
            <a href="#" className='text-[14px] text-black font-[600]'>Contact Us </a>
        </div>
        <div>
         <Button href='/auth' background='#01A653' label='Sign In' />
        </div>
    </div>
  )
}

export default Navbar