import React from 'react'

const Pricing = () => {
    const pricingCard = [
        {
            id: 1,
            title: "Basic",
            price: "$9.99",
            pricing: [
                "Annual Subscription: $539.89/year (10% discount)",
                "Hardware Bundle: $349.99 (one-time cost)",
                "One-Time Purchase: $1450",
            ],
            package: [
                "1 POS terminal",
                "1 receipt printer",
                "Basic reporting (daily sales, inventory)",
                "User-Friendly POS Interface",
                "Waiter Report Generation",
                "Work Period Management",
            ]

        },
        {
            id: 2,
            title: "Premium",
            price: "$19.99",
            pricing: [
                "Annual Subscription: $1,079.89/year (10% discount)",
                "Hardware Bundle: $699.99 (one-time cost)",
                "One-Time Purchase: $2200",
            ],
            package: [
                "2 POS terminals",
                "2 receipt printer",
                "Advanced reporting (sales by employee, peak hours analysis)",
                "Priority email support",
                "User-Friendly POS Interface",
                "Waiter Report Generation",
                "Work Period Management",
            ]
        },
        {
            id: 3,
            title: "Enterprise",
            price: "$29.99",
            pricing: [
                "Annual Subscription: $2,159.89/year (10% discount)",
                "Hardware Bundle: Custom quote based on requirements",
            ],
            package: [
                "Up to 5 POS terminals",
                "Up to 5 receipt printers",
                "Comprehensive reporting suite",
                "Inventory forecasting",
                "24/7 phone and email support",
                "User-Friendly POS Interface",
                "Waiter Report Generation",
                "Work Period Management",
            ]
        },
        {
            id: 4,
            title: "Business",
            price: "$39.99",
            pricing: [
                "Custom pricing based on specific requirements",
                "Contact our sales team for a personalized quote",
                "Estimate: One-Time Purchase: $8000",
            ],
            package: [
                "Unlimited POS terminals and printers",
                "Custom reporting and analytics",
                "Kitchen Display System (KDS)",
                "Dedicated account manager",
                "24/7 priority support",
                "Custom integrations",
                "On-site training and setup",
                "Work Period Management",
            ]

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
                                <div className=' w-full flex flex-col gap-[10px]'>
                                    <h1 className='text-[14px] font-[700] text-black'>Pricing:</h1>
                                    {item.pricing.map((pric: any,pricIndex:number) => {
                                        return (
                                            <div key={pricIndex} className='flex flex-row gap-[10px] items-center'>
                                                <div>

                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31166 13.9837C11.053 13.9837 14.086 10.9507 14.086 7.20937C14.086 3.46802 11.053 0.435059 7.31166 0.435059C3.57031 0.435059 0.537354 3.46802 0.537354 7.20937C0.537354 10.9507 3.57031 13.9837 7.31166 13.9837ZM7.15607 8.85902L9.78368 6.14929L9.17577 5.55981L6.84019 7.96837L5.43609 6.63177L4.85224 7.24511L6.56019 8.87094L6.86403 9.16018L7.15607 8.85902Z" fill="#01A653" />
                                                    </svg>
                                                </div>
                                                <span className='text-[13px] text-[#687588] leading-4'>{pric}</span>

                                            </div>
                                        )
                                    })}

                                </div>
                                <div className=' w-full flex flex-col gap-[10px]'>
                                    <h1 className='text-[14px] font-[700] text-black'>Software Package:</h1>
                                    {item.package.map((packages: any,packageIndex:number) => {
                                        return (
                                            <div key={packageIndex} className='flex flex-row gap-[10px] items-center'>
                                                <div>

                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31166 13.9837C11.053 13.9837 14.086 10.9507 14.086 7.20937C14.086 3.46802 11.053 0.435059 7.31166 0.435059C3.57031 0.435059 0.537354 3.46802 0.537354 7.20937C0.537354 10.9507 3.57031 13.9837 7.31166 13.9837ZM7.15607 8.85902L9.78368 6.14929L9.17577 5.55981L6.84019 7.96837L5.43609 6.63177L4.85224 7.24511L6.56019 8.87094L6.86403 9.16018L7.15607 8.85902Z" fill="#01A653" />
                                                    </svg>
                                                </div>
                                                <span className='text-[13px] text-[#687588] leading-4'>{packages}</span>

                                            </div>
                                        )
                                    })}
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