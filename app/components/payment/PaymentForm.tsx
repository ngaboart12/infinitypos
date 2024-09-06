"use client"
import React from 'react'

type props = {
    setSteps: any
}

const PaymentForm = ({ setSteps }: props) => {

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSteps(2)
    }
    return (
        <div className='w-full flex flex-col gap-[20px] h-full justify-center '>
            <div className='w-full pb-4 border-b'>
                <h1 className='text-[24px] text-black font-[700]'>Select payment</h1>
            </div>
            <form onSubmit={(e) => handelSubmit(e)} className='flex flex-col gap-[4px] md:pr-[20vh]'>
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
                <div className='py-4 flex flex-col gap-[10px] '>
                    <div className='flex flex-col gap-[4px]'>
                        <h1 className='text-[14px] font-[500]'>Card Number</h1>
                        <input type="text" pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='p-3 border rounded-[4px]' placeholder='1234  5678  9101  1121' />
                    </div>
                    <div className='w-full flex flex-col  md:flex-row gap-[20px] items-center'>
                        <div className='flex w-full flex-col gap-[4px]'>
                            <h1 className='text-[14px] font-[500]'>Expiration Date</h1>
                            <input type="date" className='p-3 border rounded-[4px]' placeholder='1234  5678  9101  1121' />
                        </div>
                        <div className='flex w-full flex-col gap-[4px]'>
                            <h1 className='text-[14px] font-[500]'>CVV</h1>
                            <input type="text" maxLength={3} pattern="\d*" onInput={(e: any) => e.target.value = e.target.value.replace(/\D/g, '')} className='p-3 border rounded-[4px]' placeholder='1234' />
                        </div>

                    </div>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <input type="checkbox" className='' />
                        <span className='text-[13px] text-[gray]'>Save Card Details</span>
                    </div>
                </div>
                <button type='submit' className=' bg-[#32C770] flex flex-row items-center gap-[10px] justify-center p-3 text-white font-[700]'><span>Pay</span> <span>USD59.28</span></button>
                <span className='text-[13px] pt-4 text-[#ACACAC]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</span>
            </form>
        </div>
    )
}

export default PaymentForm