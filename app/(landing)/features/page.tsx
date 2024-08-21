import POSUpgradeBanner from '@/app/components/landing/POSUpgradeBanner'
import Button from '@/app/components/reusable/Button'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const FeaturesPage = () => {
    const featureCards = [
        {
            title: 'Menu Management',
            description: "Efficiently create, manage, and update your menu items, categories, and pricing.",
            details: [
                { title: "Easily add, edit, or remove menu items" },
                { title: "Categorize items by type, course, or popularity" },
                { title: "Manage item variations, modifiers, and pricing" }
            ]
        },
        {
            title: 'Order Management',
            description: "Streamline order-taking, processing, and fulfillment.",
            details: [
                { title: "Integrate with kitchen display systems (KDS) for real-time order updates" },
                { title: "Take orders quickly and accurately through touchscreen interface" },
                { title: "Manage dine-in, takeout, and delivery orders efficiently" }
            ]
        },
        {
            title: 'Support and Access  ',
            description: " Ensure uninterrupted operations with reliable support and access.",
            details: [
                { title: "Comprehensive training and onboarding for staff" },
                { title: "Dedicated customer support via phone, email, or live chat" },
                { title: "Remote system access for troubleshooting and updates" }
            ]
        },
        {
            title: 'Payment Processing',
            description: "Accept various payment methods including cash, credit cards, mobile payments, and digital wallets",
            details: [
                { title: "Integrate with popular payment gateways" },
                { title: "Handle refunds and returns efficiently" },
                { title: "Manage tips and gratuity options" }
            ]
        },
        {
            title: 'POS Hardware',
            description: " Choose the right hardware components to suit your business needs.",
            details: [
                { title: "High-performance touchscreen POS terminals" },
                { title: "Durable receipt printers for clear order summaries" },
                { title: "Barcode scanners for efficient inventory management" }
            ]
        },
        {
            title: 'Reporting and Analytics',
            description: "Gain valuable insights into your business performance.",
            details: [
                { title: "Generate detailed sales reports by product, category, and time period" },
                { title: "Track inventory levels and analyze product popularity" },
                { title: "Monitor employee performance and labor costs" }
            ]
        },
    ]
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full px-[10px] md:px-[50px] bg-gradient-to-b from-[white] to-[#01A653]/10 lg:px-[100px] items-center justify-center pt-[20vh] py-10'>
                <div className='flex flex-col gap-[20px] items-center max-w-[600px] mx-auto'>
                    <h1 className='text-[36px] font-[700] text-center leading-10 '>Power Your Business with Our Comprehensive POS System</h1>
                    <span className='text-[14px] text-[#687588]'>Discover the features that drive efficiency, sales, and customer satisfaction</span>
                    <Button href='/' background='#01A653' label=" Explore Our Features" />
                </div>
            </div>
            <div className='px-[10px] md:px-[50px] lg:px-[100px] w-full py-20'>
                <div className='flex flex-col gap-[50px] w-full'>
                    {featureCards.map((item: any, index: number) => {
                        return (
                            <div key={index} className={`flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}  flex-col lg:flex-row gap-[20px] items-center w-full`}>
                                <div className='w-full lg:w-1/2'>
                                    <Image src={`/images/poshom.png`} width={1000} height={1000} className='w-[90%] h-full object-cover' alt='fetaure section' />
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col gap-[10px]'>
                                    <h1 className='text-[24px] font-[700] text-black'>{item.title}</h1>
                                    <span className="text-[14px] text-[#687588] max-w-[400px]">{item.description}</span>
                                    <div className='flex flex-col gap-[10px]'>
                                        {item.details.map((det: any, index: number) => {
                                            return (

                                                <div className='flex flex-row gap-[10px] items-center'>
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#01A653" />
                                                    </svg>
                                                    <span className='text-[14px] text-[#687588]'>{det.title}</span>
                                                </div>

                                            )
                                        })}



                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <POSUpgradeBanner/>
        </div>
    )
}

export default FeaturesPage