import React from 'react'

const CompanyType = () => {
    return (
        <div className='bg-white p-3 w-full h-full rounded-[5px] flex flex-col gap-[20px]'>
            <h1 className=' text-black font-[700] text-[20px]'>Choose according to your needs</h1>
            <form action="" className='w-full flex flex-col gap-[20px]' method="post">
                <div className='w-full flex flex-col gap-[10px]'>
                    <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px]  w-full justify-between cursor-pointer  items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-[16px] text-black font-[500]'>Bar Coffee</h1>
                            <span className='text-[12px] text-[#687588]'>A place primarily focused on serving coffee and other beverages, with a bar atmosphere.</span>
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
                            <h1 className='text-[16px] text-black font-[500]'>Bar Restaurant</h1>
                            <span className='text-[12px] text-[#687588]'>A combination of a bar and a restaurant offering food and drinks.</span>
                        </div>
                        <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                    </div>
                    <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px] w-full justify-between  cursor-pointer items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-[16px] text-black font-[500]'>Club</h1>
                            <span className='text-[12px] text-[#687588]'>A venue for entertainment, often featuring music, dancing, and drinks.</span>
                        </div>
                        <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                    </div>
                    <div className='p-3 rounded-[10px] border-[1.5px] flex flex-row gap-[4px] w-full justify-between  cursor-pointer items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-[16px] text-black font-[500]'>Alimentation</h1>
                            <span className='text-[12px] text-[#687588]'>A food store or market selling groceries and other food products.</span>
                        </div>
                        <div className='border-[2px] w-[10px]  h-[10px] border-[#89C550] rounded-full'></div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CompanyType