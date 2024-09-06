import React from 'react'
import DashNavbar from '../components/dashboard/DashNavbar'
import { GiOverInfinity } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div className='w-full bg-[#F1F5F9] h-screen gap-[20px] flex flex-col'>
            <DashNavbar />
            <div className='flex flex-col gap-[20px] w-full px-[10px] md:px-[50px] lg:px-[150px]'>
                <div className='p-4 bg-white rounded-[12px] gap-[10px] w-full md:w-1/3 flex flex-row items-center'>
                    <div className=' rotate-90'>
                        <GiOverInfinity size={25} />
                    </div>
                    <div className='flex flex-row gap-[10px]'>
                        <span className='text-[13px] font-[600]'>23</span>
                        <span className='text-[13px] font-[600]'>Days Left for Subscription</span>
                    </div>
                </div>
                <div className='w-full p-4 md:p-10 bg-white rounded-[12px] flex flex-col gap-[10px]'>
                    <div className='flex flex-col'>
                        <h1 className='text-[20px] font-[700] text-black'>Plan & Billing</h1>
                        <span className='text-[12px] text-[#687588]'>Manage your subscription plan and billing information</span>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full'>
                        <div className='w-full p-6 border-[1.2px] rounded-[6px] flex flex-col gap-[10px]'>
                            <div className='flex flex-row items-center gap-[20px]'>
                                <h1 className='text-[16px] font-[700] text-black'>Starter plan</h1>
                                <div className='py-1 px-4 rounded-[20px] border border-green-600 flex flex-row gap-[10px] items-center'>
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.75" cy="3.38461" r="2.625" fill="#01A653" />
                                    </svg>
                                    <span className='text-[12px] text-[#01A653]'>Active</span>
                                </div>

                            </div>
                            <span className='text-[14px] text-[#687588]'>Our most popular plan for small teams</span>
                            <div className='flex flex-row items-center'>
                                <span className='text-[24px] font-[700]'>$49.99</span>
                                <span className='text-[12px] text-[#52525B]'>/ month</span>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-[20px]'>
                                <button className='px-6 py-3 border border-[#01A653] text-[13px] font-[600] text-[#01A653] rounded-[4px]'>
                                    Cancel plan
                                </button>
                                <button className='px-6 py-3 bg-[#404643] text-[13px] font-[600] text-white rounded-[4px]'>
                                    Upgrade plan
                                </button>
                            </div>
                        </div>
                        <div className='w-full p-6 border-[1.2px] rounded-[6px] flex flex-col gap-[10px]'>
                            <div className='flex flex-row items-center gap-[20px]'>
                                <h1 className='text-[16px] font-[700] text-black'>Payment method</h1>
                            </div>
                            <span className='text-[14px] text-[#687588]'>Change how you pay for your plan.</span>

                            <div className='flex flex-row justify-between rounded-[6px] border p-4 gap-[20px]'>
                                <div className='flex flex-row  gap-[10px] items-center'>
                                    <div className='rounded-[12px] p-2 border'>
                                        <div className='w-[30px] h-[30px]'></div>
                                    </div>
                                    <div className='flex flex-col gap-[4px]'>
                                        <h1 className='text-[14px] font-[600]'>Visa ending 2024</h1>
                                        <span className='text-[12px] text-[gray]'>Expiry 06/2024</span>
                                        <span className='text-[12px] text-[gray]'>billing@gmail.com</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard