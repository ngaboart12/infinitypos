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
import FAQuestion from '../components/landing/FAQuestion'

const Home = () => {
    return (
        <div className='flex flex-col bg-white w-full'>

            {/* Hero section */}
            <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] flex flex-col lg:flex-row items-center pt-40 lg:pt-0 py-10 min-h-[100vh]'>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px] items-center lg:items-start'>
                    <h1 className='text-[48px] font-[700] text-black leading-[55px] text-center lg:text-start'>Server better with one faster, flexible platform</h1>
                    <span className='text-[14px] text-[#687588] text-center lg:text-start'>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</span>
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
             <FAQuestion/>

        </div>
    )
}

export default Home