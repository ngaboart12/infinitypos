import Image from 'next/image'
import React from 'react'

const POSUpgradeBanner = () => {
    return (
        <div className='w-full relative '>
            <div className='w-full h-full absolute ' >
                <Image src={`/images/FeatureSection.png`} width={1000} height={1000} className='w-full h-full     object-cover' alt='fetaure section' />

            </div>
            <div className='px-[10px] z-10 relative w-full md:px-[50px] lg:px-[100px] py-6 flex flex-col lg:flex-row gap-[20px] items-center'>
                <div className='w-full lg:w-1/2 items-start '>
                    <div className='w-full p-14'>
                        <Image src={`/images/featureSection2.png`} width={1000} height={1000} className='w-[90%]     object-cover' alt='fetaure section' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px]'>
                    <h1 className='text-[32px] text-white font-[700] max-w-[500px] leading-[50px]'>Upgrade Your Business with Our Cutting - Edge POS Solution</h1>
                    <span className='text-[14px] text-[#FAFAFA]'>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</span>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <a href="" className='px-[32px]  py-[10px] bg-[white] text-[#323B49] text-[14px] font-[500] rounded-[4px]'>Get Started</a>
                        <a href="" className='px-[32px]  py-[10px]  bg-[#01A653] text-[white] text-[14px] font-[500] rounded-[4px]'>Purchase Now</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default POSUpgradeBanner