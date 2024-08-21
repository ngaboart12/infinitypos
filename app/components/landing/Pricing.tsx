import React from 'react'

const Pricing = () => {
    const pricingCard = [
        {
            id: 1,
            title: "Basic",
            price: "$9.99",

        },
        {
            id: 2,
            title: "Premium",
            price: "$19.99",
        },
        {
            id: 3,
            title: "Enterprise",
            price: "$29.99",
        },
        {
            id: 4,
            title: "Business",
            price: "$39.99",

        }
    ]
    return (
        <div className='px-[10px] md:px-[50px] lg:px-[100px] py-20'>
            <div className='flex flex-col gap-[50px] items-center'>
                <div className='flex flex-col items-center gap-[4px]'>

                    <h1 className='text-[32px] font-[700] text-black text-center'>Pricing Plan Categories</h1>
                    <span className='text-[14px] font-[400] text-[#687588] max-w-[600px] text-center'>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-[20px]'>
                    {pricingCard.map((item: any, index: number) => {
                        return (
                            <div key={index} className='border bg-white px-[20px] py-10 rounded-[10px] flex flex-col gap-[20px] items-center relative'>
                                {item.title == "Premium" && (
                                    <div className='w-full p-2 flex items-center justify-center top-0 rounded-t-[10px] absolute bg-[#01A653]'>
                                        <span className='text-[14px] font-[700] text-white'>MOST POPULAR</span>
                                    </div>
                                )}
                                <div className='flex flex-col gap-[4px] w-full'>
                                    <h1 className='text-[16px] font-[600] text-[#071A34]'>{item.title}</h1>
                                    <div className='flex flex-row gap-[10px] items-end'>

                                        <p className='text-[32px] font-[700] text-[#071A34]'>{item.price}</p>
                                        <span className='text-[11px] text-[#52525B]'>/ month</span>
                                    </div>
                                </div>
                                <a href="#" className='px-[30px] w-full flex items-center justify-center text-center font-[700] text-white py-[10px] rounded-[4px] bg-[#01A653]'>
                                    Choose Plan
                                </a>
                                <div className=' w-full flex flex-col gap-[4px]'>
                                    <h1 className='text-[14px] font-[700] text-black'>Pricing:</h1>
                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31166 13.9837C11.053 13.9837 14.086 10.9507 14.086 7.20937C14.086 3.46802 11.053 0.435059 7.31166 0.435059C3.57031 0.435059 0.537354 3.46802 0.537354 7.20937C0.537354 10.9507 3.57031 13.9837 7.31166 13.9837ZM7.15607 8.85902L9.78368 6.14929L9.17577 5.55981L6.84019 7.96837L5.43609 6.63177L4.85224 7.24511L6.56019 8.87094L6.86403 9.16018L7.15607 8.85902Z" fill="#01A653" />
                                        </svg>
                                        <span className='text-[12px] text-[#687588] leading-4'>Annual Subscription: $539.89/year (10% discount)</span>

                                    </div>
                                </div>
                                <div className=' w-full flex flex-col gap-[4px]'>
                                    <h1 className='text-[14px] font-[700] text-black'>Software Package:</h1>
                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31166 13.9837C11.053 13.9837 14.086 10.9507 14.086 7.20937C14.086 3.46802 11.053 0.435059 7.31166 0.435059C3.57031 0.435059 0.537354 3.46802 0.537354 7.20937C0.537354 10.9507 3.57031 13.9837 7.31166 13.9837ZM7.15607 8.85902L9.78368 6.14929L9.17577 5.55981L6.84019 7.96837L5.43609 6.63177L4.85224 7.24511L6.56019 8.87094L6.86403 9.16018L7.15607 8.85902Z" fill="#01A653" />
                                        </svg>
                                        <span className='text-[12px] text-[#687588] leading-4'>Annual Subscription: $539.89/year (10% discount)</span>

                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pricing