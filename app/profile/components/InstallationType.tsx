import InputField from '@/app/components/reusable/Input'
import React from 'react'

const InstallationType = () => {
    return (
        <div className='bg-white p-3 w-full min-h-[80vh] rounded-[5px] flex flex-col gap-[20px]'>
            <h1 className=' text-black font-[700] text-[20px]'>Choose role</h1>
            <form action="" className='w-full flex flex-col gap-[20px]' method="post">
                <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px] w-full justify-between  cursor-pointer items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-[16px] text-black font-[500]'>Main Kitchen</h1>
                        <span className='text-[12px] text-[#687588]'>I want to track and approve time attendance and time off online, from anywhere.</span>
                    </div>
                    <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                </div>
                <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px] w-full justify-between  cursor-pointer items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-[16px] text-black font-[500]'>Main Kitchen</h1>
                        <span className='text-[12px] text-[#687588]'>I want to track and approve time attendance and time off online, from anywhere.</span>
                    </div>
                    <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                </div>
                <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px] w-full justify-between  cursor-pointer items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-[16px] text-black font-[500]'>Main Kitchen</h1>
                        <span className='text-[12px] text-[#687588]'>I want to track and approve time attendance and time off online, from anywhere.</span>
                    </div>
                    <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                </div>

            </form>
        </div>
    )

}

export default InstallationType