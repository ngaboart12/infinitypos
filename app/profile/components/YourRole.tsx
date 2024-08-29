import InputField from '@/app/components/reusable/Input'
import React from 'react'

const YourRole = () => {
    return (
        <div className='bg-white p-3 w-full min-h-[80vh] rounded-[5px] flex flex-col gap-[20px]'>
            <h1 className=' text-black font-[700] text-[20px]'>Choose role</h1>
            <form action="" className='w-full flex flex-col gap-[20px]' method="post">
                <div className='flex flex-col md:flex-row gap-[16px] w-full'>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>CEO/Owner/Founder</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>HR Manager</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>HR Staff</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[16px] w-full'>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>IT/Tech Manager</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>IT/Tech Staff</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                    <div className=' p-[16px]  gap-[10px] flex flex-row rounded-[12px] justify-between items-center border'>
                        <span className='text-[12px] text-[black] font-[500] '>Other</span>
                        <div>
                            <div className='w-[20px] h-[20px] border-[2px] rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[4px] w-full'>
                    <span className='text-[14px] font-[400]'>Input Your Role <span className='text-[red]'>*</span></span>
                    <InputField placeholder='Chef' label='Input your role' value='' type='text'  />
                </div>

            </form>
        </div>
    )
}

export default YourRole