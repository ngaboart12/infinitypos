import Image from 'next/image'
import React from 'react'

const PromoBanner = () => {
    return (
        <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] py-20 flex flex-col lg:flex-row gap-[100px] '>
            <div className='w-full lg:W-1/2 flex flex-col gap-[20px]'>
                <h1 className='text-[26px] text-black font-[700] text-center lg:text-start'>Whether you’re starting small or going big, Toast is built for you
                </h1>
                <div className='w-full '>
                <Image src={`/images/poshom.png`} width={1000} height={1000} className='w-[90%] h-full object-cover' alt='fetaure section' />
                </div>
            </div>
            <div className='w-full lg:W-1/2 flex flex-col '>
            <div className='flex flex-col gap-[16px] border-b py-4'>
                <h1 className='text-[16px] font-[700] text-black text-center lg:text-start'>New Business Opening</h1>
                <span className='text-[14px] text-[#323B49] font-[400] text-center lg:text-start'>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed </span>
                <a href="" className='text-[12px] text-[#01A653] text-center lg:text-start'>Learn More</a>
            </div>
            <div className='flex flex-col gap-[16px] border-b py-4'>
                <h1 className='text-[16px] font-[700] text-black text-center lg:text-start'>New Business Opening</h1>
                <span className='text-[14px] text-[#323B49] font-[400]  text-center lg:text-start'>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed </span>
                <a href="" className='text-[12px] text-[#01A653] text-center lg:text-start'>Learn More</a>
            </div>
            <div className='flex flex-col gap-[16px] border-b py-4'>
                <h1 className='text-[16px] font-[700] text-black text-center lg:text-start'>New Business Opening</h1>
                <span className='text-[14px] text-[#323B49] font-[400] text-center lg:text-start '>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed </span>
                <a href="" className='text-[12px] text-[#01A653] text-center lg:text-start'>Learn More</a>
            </div>

            </div>
        </div>
    )
}

export default PromoBanner