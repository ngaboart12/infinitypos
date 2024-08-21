import Image from 'next/image'
import React from 'react'
import StatsOverview from '../components/landing/StatsOverview'
import FeauterSection from '../components/landing/FeauterSection'
import PromoBanner from '../components/landing/PromoBanner'
import ProductFeatures from '../components/landing/ProductFeatures'
import Pricing from '../components/landing/Pricing'
import POSUpgradeBanner from '../components/landing/POSUpgradeBanner'
import TrustedBy from '../components/landing/TrustedBy'
import Footer from '../components/landing/Footer'

const Home = () => {
    return (
        <div className='flex flex-col bg-white w-full'>

            {/* Hero section */}
            <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] flex flex-col lg:flex-row items-center py-10 min-h-[100vh]'>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] font-[700] text-black leading-[55px]'>Server better with one faster, flexible platform</h1>
                    <span className='text-[14px] text-[#687588]'>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</span>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <a href="" className='px-[32px]  py-[10px] bg-[#01A653] text-white text-[14px] font-[500] rounded-[4px]'>Get a Demo</a>
                        <a href="" className='px-[32px]  py-[10px] border-[1.5px] border-[#01A653] text-[#01A653] text-[14px] font-[500] rounded-[4px]'>Get a Demo</a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px]'>
                    <div className='w-full lg:p-10 '>
                        <Image src={`/images/poshom.png`} alt='home ' width={1000} height={1000} className='w-full' />
                    </div>
                </div>

            </div>
            <div className='flex flex-col'>
                <StatsOverview />
                <FeauterSection />
            </div>
            <PromoBanner />
            <ProductFeatures />
            <Pricing />
            <POSUpgradeBanner />

            <TrustedBy />

            <div className='px-[10px] md:px-[50px] w-full py-20 bg-gradient-to-b from-[white] to-[#01A653]/10 lg:px-[100px]py-10 flex flex-col gap-[40px] items-center justify-center'>
                <h1 className='text-[24px] font-[700] text-center text-black'>Frequently Asked Questions</h1>
                <div className='flex felx-col gap-[20px] w-[80%]'>
                    <div className='py-4 px-14 bg-white w-full rounded-[4px] flex flex-col gap-[30px]'>
                        <div className='w-full flex flex-row items-center justify-between'>

                            <h1 className='text-[14px] font-[500] text-black'>What types of consulting services do you offer?</h1>
                            <div>
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L9.33564 8.40945C9.71452 8.74624 10.2855 8.74624 10.6644 8.40945L19 1" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" />
                                </svg>

                            </div>
                        </div>
                        <span className='text-[14px] text-[#687588]'>The upfront costs for Toast are hardware and implementation****, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home