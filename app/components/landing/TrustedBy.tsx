"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const TrustedBy = () => {
    const [currentTest, setCurrentTest] = useState<number>(0)
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const testimonails = [
        {
            name: "Ngabo sevelin",
            title: "CEO SAGA BAY",
            profile: <Image src={`/images/testq.png`} width={1000} height={100} alt='log type' className='w-full h-full object-cover rounded-[20px]' />
        },
        {
            name: "Ishimwe Fabrice",
            title: "CEO CONSUMATECH",
            profile: <Image src={`/images/waiter 1.png`} width={1000} height={100} alt='log type' className='w-full h-full object-cover rounded-[20px]' />
        },
        {
            name: "Ineza Gladys",
            title: "CEO IREMBO",
            profile: <Image src={`/images/testq.png`} width={1000} height={100} alt='log type' className='w-full h-full object-cover rounded-[20px]' />
        },
        {
            name: "Nsekuye",
            title: "CEO RSA",
            profile: <Image src={`/images/waiter 1.png`} width={1000} height={100} alt='log type' className='w-full h-full object-cover rounded-[20px]' />
        },
    ]

    const handelClickWithProp = (index: number) => {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
            setCurrentTest(index)
        }, 500)
    }

    const handelNext = () => {
        setIsClicked(true)
        setTimeout(() => {
            setCurrentTest((prevTest) => (prevTest + 1) % testimonails.length)
            setIsClicked(false)
        }, 500)

    }
    const handlePrev = () => {
        setIsClicked(true)
        setTimeout(() => {
            setCurrentTest((prevTest) => (prevTest - 1 + testimonails.length) % testimonails.length)
            setIsClicked(false)
        }, 500)
    }
    return (
        <div className='flex flex-col gap-[30px] items-center py-20'>
            <div className='flex flex-col gap-[40px] items-center'>
                <h1 className='text-[24px] font-[700] text-black max-w-[500px] text-center leading-6'>Trusted by over 120,000 restaurants of all concepts</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-[20px]'>
                    <div className='w-full h-[30px]'>
                        <Image src={`/images/typestudio.svg`} width={1000} height={100} alt='log type' className='w-full h-full' />
                    </div>
                    <div className='w-full h-[30px]'>
                        <Image src={`/images/openvc.svg`} width={1000} height={100} alt='log type' className='w-full h-full' />
                    </div>
                    <div className='w-full h-[30px]'>
                        <Image src={`/images/lanscape.svg`} width={1000} height={100} alt='log type' className='w-full h-full' />
                    </div>
                    <div className='w-full h-[30px]'>
                        <Image src={`/images/socialheaven.svg`} width={1000} height={100} alt='log type' className='w-full h-full' />
                    </div>
                    <div className='w-full h-[30px]'>
                        <Image src={`/images/swapstack.svg`} width={1000} height={100} alt='log type' className='w-full h-full' />
                    </div>

                </div>
            </div>
            <div className='flex flex-col w-full gpa-[20px] px-[10px] md:px-[50px] lg:px-[100px]'>
                <div className='flex flex-row items-center relative'>
                    <div className='hidden md:flex absolute left-[-55px] z-10'>
                        <span onClick={handlePrev} className=' cursor-pointer'>
                            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_14_305)">
                                    <rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 96 34)" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.7071 55.2929C71.3166 54.9024 70.6834 54.9024 70.2929 55.2929L64.2929 61.2929C63.9024 61.6834 63.9024 62.3166 64.2929 62.7071L70.2929 68.7071C70.6834 69.0976 71.3166 69.0976 71.7071 68.7071C72.0976 68.3166 72.0976 67.6834 71.7071 67.2929L66.4142 62L71.7071 56.7071C72.0976 56.3166 72.0976 55.6834 71.7071 55.2929Z" fill="#111827" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_14_305" x="0.200001" y="0.200001" width="131.6" height="131.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_14_305" />
                                        <feOffset dx="-2" dy="4" />
                                        <feGaussianBlur stdDeviation="15.4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_305" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_305" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    <div className={`flex ${isClicked ? "opacity-0" : "opacity-100"} duration-500 transition-all flex-row gap-[20px] items-center justify-center w-full p-4`}>
                        <div className='w-full flex-col flex md:flex-row items-center gap-[10px] md:gap-[50px] w-fu'>
                            <div className=' w-full px-10 md:px-0 md:w-1/2 md:h-[60vh] '>
                                {testimonails[currentTest].profile}
                            </div>
                            <div className=' items-center md:items-start w-full md:w-1/2 flex flex-col gap-[5px]'>
                                <div className='p-2 rounded-[20px] flex items-center justify-center w-[120px] bg-[#E3F6D1]'>
                                    <span className='text-[12px] font-[700] text-center text-[#01A653]'>RESTAURANT</span>
                                </div>
                                <div className='py-4 border-b-2'>
                                    <span className='text-[16px] font-[700] text-black line-clamp-5 text-center md:text-start'>“Speed of service is better for everyone. Not having to do the administrative work of cashing out that’s better for everyone. ”</span>
                                </div>
                                <div className='flex flex-col py-3 items-center md:items-start'>
                                    <span className='text-[14px] font-[700] text-[#323B49]'>{testimonails[currentTest].name}</span>
                                    <span className='text-[16px] font-[400] text-[#01A653]'>{testimonails[currentTest].title}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span onClick={handelNext} className=' hidden md:flex cursor-pointer'>
                            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_14_308)">
                                    <rect x="40" y="34" width="56" height="56" rx="28" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2929 55.2929C64.6834 54.9024 65.3166 54.9024 65.7071 55.2929L71.7071 61.2929C72.0976 61.6834 72.0976 62.3166 71.7071 62.7071L65.7071 68.7071C65.3166 69.0976 64.6834 69.0976 64.2929 68.7071C63.9024 68.3166 63.9024 67.6834 64.2929 67.2929L69.5858 62L64.2929 56.7071C63.9024 56.3166 63.9024 55.6834 64.2929 55.2929Z" fill="#111827" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_14_308" x="0.200001" y="0.200001" width="131.6" height="131.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_14_308" />

                                        <feGaussianBlur stdDeviation="15.4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_308" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_308" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className=' items-center justify-center flex flex-row'>
                    <div className='flex flex-row gap-[10px]'>
                        {Array.from({ length: testimonails.length }).map((_, index: number) => (
                            <div
                                key={index}
                                onClick={() => handelClickWithProp(index)}
                                className={`w-[10px] h-[10px] rounded-full cursor-pointer ${currentTest === index ? 'bg-gray-600' : 'bg-gray-400'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy