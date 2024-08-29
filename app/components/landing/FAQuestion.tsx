"use client"
import React, { useState } from 'react'

const FAQuestion = () => {

    const [openedFa, setOpenedFa] = useState<number>(0)

    const faquestions = [
        {
            id: 1,
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation****, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a "
        },
        {
            id: 2,
            question: "What types of consulting services do you offer?",
            answer: "The upfront costs for Toast are hardware and implementation****, which vary depending on your specific hardware packages and installation needs. We have flexible payment options available, including payment as a "
        },
    ]
    return (

        <div className='px-[10px] md:px-[50px] w-full py-20 bg-gradient-to-b from-[white] to-[#01A653]/10 lg:px-[100px]py-10 flex flex-col gap-[40px] items-center justify-center'>
            <h1 className='text-[24px] font-[700] text-center text-black'>Frequently Asked Questions</h1>
            <div className='flex flex-col gap-[20px] md:w-[80%]'>
                {faquestions.map((item, index) => {
                    return (
                        <div key={index} className='py-4 px-[10px] md:px-14 bg-white w-full rounded-[4px] flex flex-col gap-[15px]'>
                            <div className='w-full flex flex-row items-center justify-between'>

                                <h1 className='text-[14px] font-[500] text-black'>{item.question}</h1>
                                <div className={`cursor-pointer ${openedFa == item.id ? " rotate-180" : ""} duration-200`} onClick={() => openedFa !== item.id ? setOpenedFa(item.id) : setOpenedFa(0)}>
                                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L9.33564 8.40945C9.71452 8.74624 10.2855 8.74624 10.6644 8.40945L19 1" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </div>
                            </div>
                            <div className={`overflow-hidden ${openedFa == item.id ? " md:h-[10vh]" : "h-0"} duration-200  `}>
                                <span className='text-[14px] text-[#687588] md:line-clamp-4'>{item.answer}</span>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default FAQuestion