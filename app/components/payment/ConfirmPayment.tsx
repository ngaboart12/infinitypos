"use client"
import React from 'react'

const ComfirmPayment = () => {
    return (
        <div className='w-full flex flex-col gap-[20px] h-full justify-center '>
            <div className='w-full pb-4 border-b'>
                <h1 className='text-[24px] text-black font-[700]'>Select payment</h1>
            </div>
            <form className='flex flex-col gap-[4px] md:pr-[20vh]'>
                <h1 className='font-[600]'>Pay With</h1>
                <div className='flex flex-row gap-[20px] items-center'>
                    <div className='flex flex-row gap-[4px]'>
                        <input type="radio" name='type' />
                        <label htmlFor="" className='text-[14px] font-[600]'>Card</label>
                    </div>
                    <div className='flex flex-row gap-[4px]'>
                        <input type="radio" name='type' />
                        <label htmlFor="" className='text-[14px] font-[600] text-[gray]'>Bank</label>
                    </div>
                    <div className='flex flex-row gap-[4px]'>
                        <input type="radio" name='type' />
                        <label htmlFor="" className='text-[14px] font-[600] text-[gray]'>Transfer</label>
                    </div>
                </div>
                <div className='flex flex-row gap-[20px] items-center'>
                    <div className='px-4 py-2 bg-gray-100'>
                        <h1>Visa</h1>
                    </div>
                    <div className='px-4 py-2 bg-gray-100'>
                        <h1>Visa</h1>
                    </div>
                    <div className='px-4 py-2 bg-gray-100'>
                        <h1>Visa</h1>
                    </div>

                </div>
                <div className='py-4 flex flex-col gap-[10px] pb-20 '>
                    <h1 className='text-[16px] font-[600] text-center'>Enter your 4-digit card pin to confirm this payment</h1>
                    <div className='flex flex-row gap-[10px]  justify-center'>
                         <input type="text" maxLength={1} pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='w-[50px] text-center h-[50px] border rounded-[12px]' />
                         <input type="text" maxLength={1} pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='w-[50px] text-center h-[50px] border rounded-[12px]' />
                         <input type="text" maxLength={1} pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='w-[50px] text-center h-[50px] border rounded-[12px]' />
                         <input type="text" maxLength={1} pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='w-[50px] text-center h-[50px] border rounded-[12px]' />
                    </div>

                </div>
                <button type='submit' className=' bg-[#32C770] flex flex-row items-center gap-[10px] justify-center p-3 text-white font-[700]'>Confirm Payment</button>
                <span className='text-[13px] pt-4 text-[#ACACAC]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</span>
            </form>
        </div>
    )
}

export default ComfirmPayment