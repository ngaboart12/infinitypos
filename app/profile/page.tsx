"use client"
import React, { useState } from 'react'
import BusinesTypes from './components/BusinesTypes'
import YourRole from './components/YourRole'
import CompanyType from './components/CompanyType'
import InstallationType from './components/InstallationType'

const CompleteProfile = () => {
    const [currentStep, setCurrentStep] = useState<number>(1)
    const stageLabels = [
        {
            label: 'We need some of your Business Information',
            description: "This data is needed so that we can easily provide solutions according to your company's capacity",
            completed: false,
        },
        {
            label: 'What type of business do you operate?',
            description: "This data is needed so that we can easily provide solutions according to your company's capacity",
            completed: false,
        },
        {
            label: 'What is your role in your company?',
            description: "This data is needed so that we can easily provide solutions according to your company's capacity",
            completed: false,
        },
        {
            label: 'Choose your preferred Installation Method',
            description: "This data is needed so that we can easily provide solutions according to your company's capacity",
            completed: false,
        },
    ]

    const handelContinues = () => {
        if (currentStep === 1) {
            setCurrentStep(2)
        }
        if (currentStep === 2) {
            setCurrentStep(3)
        }
        if (currentStep === 3) {
            setCurrentStep(4)
        }
    }
    const handelStepback = () => {
        if (currentStep === 2) {
            setCurrentStep(1)
        }
        if (currentStep === 3) {
            setCurrentStep(2)
        }
        if (currentStep === 4) {
            setCurrentStep(3)
        }
    }
    return (
        <div className='w-full  flex flex-col lg:flex-row px-[10px] md:px-[50px] lg:px-[100px]'>

            <div className=' pt-10 lg:pt-0 w-full lg:w-1/2 flex my-auto ld:pr-10 flex-col gap-[40px] h-full  justify-center'>
                <div className='flex flex-col gap-[10px] items-center lg:items-start'>
                    <div className='flex flex-row items-center gap-[4px]'>
                        <div className='w-[20px] h-[20px] rounded-[4px] bg-green-400/70'></div>
                        <div className={`w-[20px] h-[20px] rounded-[4px] ${currentStep >=2  ?'bg-green-400/70':'bg-white'} `}></div>
                        <div className={`w-[20px] h-[20px] rounded-[4px] ${currentStep >=3  ?'bg-green-400/70':'bg-white'}`}></div>
                        <div className={`w-[20px] h-[20px] rounded-[4px] ${currentStep >=4  ?'bg-green-400/70':'bg-white'}`}></div>
                    </div>
                    <span className='text-[14px] font-[700] text-[green]'>STEP {currentStep} OF 5</span>
                </div>
                <div className='flex flex-col gap-[20px] items-center lg:items-start'>
                    <h1 className=' text-[30px] md:text-[40px] font-[700] leading-10 text-center lg:text-start'>{stageLabels[currentStep-1].label}</h1>
                    <span className='text-[#A0AEC0] text-center lg:text-start'>{stageLabels[currentStep-1].description}</span>
                    <div className='flex flex-col sm:flex-row gap-[20px] items-center'>
                        <button onClick={handelStepback} className='px-[50px] cursor-pointer hover:scale-105 duration-500 rounded-[4px] font-[700] text-[#01A653]  py-[10px] border-[1.5px]  border-[#01A653]'>Cancel</button>
                        <button onClick={handelContinues} className='px-[40px] cursor-pointer hover:scale-105 duration-500 rounded-[4px] font-[700] bg-[#01A653] text-white  py-[10px] border-[1.5px] border-[#01A653]'>Continue</button>
                    </div>
                </div>
            </div>
            <div className=' w-full lg:w-1/2 h-full py-10'>
                <div className='w-full h-full bg-[#F1F2F4] p-3 rounded-[10px]'>
                    {currentStep === 1 && (
                        <BusinesTypes />
                    )}
                    {currentStep === 2 && (
                        <CompanyType />
                    )}
                    {currentStep === 3 && (
                        <YourRole />
                    )}
                    {currentStep === 4 && (
                        <InstallationType />
                    )}
                </div>


            </div>

        </div>
    )
}

export default CompleteProfile