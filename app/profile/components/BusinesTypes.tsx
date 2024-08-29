import React from 'react'

const BusinesTypes = () => {
  return (
    <div className='bg-white p-3 w-full h-full rounded-[5px] flex flex-col gap-[20px]'>
    <h1 className=' text-black font-[700] text-[20px]'>Type the name of your business</h1>
    <form action="" className='flex flex-col gap-[20px]' method="post">
        <div className='flex flex-col gap-[4px] w-full'>
            <span className='text-black text-[14px] font-[500]'>Business Name <span className='text-[#E03137]'>*</span></span>
            <input type="text" className='w-full p-3 border-[1.5px] rounded-[10px] place' placeholder='Enter you business name' />
        </div>
        <div className='flex flex-col gap-[4px] w-full'>
            <span className='text-[13px] font-[500]'>Company Domain name <span className='text-[#E03137]'>*</span></span>
            <div className='w-full  flex items-center flex-row gap-[10px]'>
                <input type="text" className='w-full p-3 border-[1.5px] rounded-[10px] place' placeholder='Saga Bay' />
                <div className='w-[100px] border-2 flex items-center justify-center border-[#CBD5E0]  bg-gray-200 h-full rounded-[10px] py-3'>
                    <span className='text-[13px] font-[600] text-[#687588]'>.resto.com</span>
                </div>

            </div>
        </div>
        <div className='flex flex-row items-center gap[4px]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10C16.875 13.797 13.797 16.875 10 16.875ZM1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.51269 1.875 10Z" fill="#111827" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.9583C10.3452 13.9583 10.625 13.6785 10.625 13.3333V10C10.625 9.65482 10.3452 9.375 10 9.375C9.65482 9.375 9.375 9.65482 9.375 10V13.3333C9.375 13.6785 9.65482 13.9583 10 13.9583Z" fill="#111827" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 6.66667C9.375 7.01184 9.65482 7.29167 10 7.29167H10.0083C10.3535 7.29167 10.6333 7.01184 10.6333 6.66667C10.6333 6.32149 10.3535 6.04167 10.0083 6.04167H10C9.65482 6.04167 9.375 6.32149 9.375 6.66667Z" fill="#111827" />
            </svg>
            <span className='text-[12px] font-[500] text-[#687588]'>We will create a unique company URL for you to log into Humanline</span>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-[#111827] text-[20px] font-[700]'>What is the size of your business</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-[16px]'>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#89C550] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>1-10</span>
                    <div className='border-[2px] p-1 border-[#89C550] rounded-full'></div>
                </div>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#CBD5E0] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>11-50</span>
                    <div className='border-[2px] p-1 border-[#CBD5E0] rounded-full'></div>
                </div>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#CBD5E0] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>11-50</span>
                    <div className='border-[2px] p-1 border-[#CBD5E0] rounded-full'></div>
                </div>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#CBD5E0] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>11-50</span>
                    <div className='border-[2px] p-1 border-[#CBD5E0] rounded-full'></div>
                </div>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#CBD5E0] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>11-50</span>
                    <div className='border-[2px] p-1 border-[#CBD5E0] rounded-full'></div>
                </div>
                <div className='p-4 cursor-pointer hover:bg-[#89C550]/20 duration-500 flex flex-row justify-between items-center border-[1.5px] border-[#CBD5E0] rounded-[12px] w-full'>
                    <span className='text-[12px] font-[600] text-black '>11-50</span>
                    <div className='border-[2px] p-1 border-[#CBD5E0] rounded-full'></div>
                </div>
            </div>
        </div>
    </form>
</div>
  )
}

export default BusinesTypes