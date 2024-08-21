import React from 'react'

const StatsOverview = () => {
    return (
        <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] bg-[#01A653] gap-[40px] py-10 flex flex-col lg:flex-row items-center justify-between'>
            <h1 className='text-[16px] font-[700] text-white max-w-[500px] text-center lg:text-start md:text-[24px]'>20K + Restaurants, Coffee shops,
                Alimentation, & more use infinity POS</h1>

                <div className='flex flex-row gap-[6px] items-center'>
                    <div className='px-[20px] flex flex-col items-center'>
                        <h1 className='text-[20px] font-[700] text-white'>103+</h1>
                        <span className='text-[12px] font-[400] text-[#fff]'>Active User</span>
                    </div>
                    <div className='px-[20px] flex flex-col items-center'>
                        <h1 className='text-[20px] font-[700] text-white'>4.8</h1>
                        <span className='text-[12px] font-[400] text-[#fff]'>Reviews</span>
                    </div>
                    <div className='px-[20px] flex flex-col items-center'>
                        <h1 className='text-[20px] font-[700] text-white'>103+</h1>
                        <span className='text-[12px] font-[400] text-[#fff]'>Active User</span>
                    </div>
                </div>
        </div>
    )
}

export default StatsOverview