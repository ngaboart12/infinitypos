import Image from 'next/image'
import React from 'react'

const ProductFeatures = () => {
    return (
        <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] py-20 bg-gradient-to-b from-[white] to-[#01A653]/10'>
            <div className='w-full flex flex-col gap-[50px] items-center'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[32px] font-[700] text-center max-w-[550px] leading-8 '>Find the right restaurant POS software to power your restaurant</h1>
                    <span className='text-[14px] text-[#687588] font-[400] text-center'>Everything you need to run your restaurant easily -- all in one platform.</span>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px]'>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                            <Image src={`/images/feature1.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                        </div>
                        <span className='text-[18px] font-[700]'>Payment Processing</span>
                        <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                        <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                    </div>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                            <Image src={`/images/feature3.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                        </div>
                        <span className='text-[18px] font-[700]'>Menu Management</span>
                        <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                        <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                    </div>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                            <Image src={`/images/feature4.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                        </div>
                        <span className='text-[18px] font-[700]'>Order Management</span>
                        <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                        <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                    </div>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                            <Image src={`/images/feature4.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                        </div>
                        <span className='text-[18px] font-[700]'>Order Management</span>
                        <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                        <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                    </div>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                            <Image src={`/images/feature4.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                        </div>
                        <span className='text-[18px] font-[700]'>Order Management</span>
                        <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                        <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                    </div>
                        <div className='flex flex-col gap-[10px] w-full'>
                            <div className='w-full h-[35vh] bg-white rounded-[12px] p-4'>
                                <Image src={`/images/feature4.png`} width={1000} height={1000} className='w-full h-full object-contain' alt='fetaure section' />
                            </div>
                            <span className='text-[18px] font-[700]'>Order Management</span>
                            <span className='text-[14px] text-[#323B49]'>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</span>
                            <a href="#" className='text-[12px] text-[#01A653]'>Learn More</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeatures