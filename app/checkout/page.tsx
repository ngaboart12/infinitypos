"use client"
import React, { useState } from 'react'
import PaymentForm from '../components/payment/PaymentForm'
import ComfirmPayment from '../components/payment/ConfirmPayment'


const Checkout = () => {
  const [steps, setSteps] = useState(1)
  return (
    <div className='w-full flex lg:flex-row flex-col-reverse  bg-white'>
      <div className=' w-full lg:w-1/2 h-screen px-10 flex '>
        {steps == 1 && (<PaymentForm setSteps={setSteps} />)}
        {steps == 2 && (<ComfirmPayment />)}
      </div>
      <div className=' w-full lg:w-1/2 lg:h-screen bg-[#FCFCFC] py-10  px-10  flex flex-col gap-[20px]'>
        <div className='w-full pb-4 border-b'>
          <h1 className='text-[24px] text-black font-[600]'>Order Summary</h1>
        </div>
        <div className='flex flex-row items-center justify-between w-full border-b pb-4'>
          <div className='flex flex-row gap-[10px]'>
            <div className='w-[60px] h-[60px] rounded-[4px] border bg-white '></div>
            <div className='flex flex-col gap-[4px]'>
              <h1 className='text-[14px] font-[600]'>Starter plan</h1>
              <span className='text-[12px] text-[#ababab]'>Brown Vegan Leather</span>
            </div>
          </div>
          <div className='flex flex-col gap-[4px]'>
            <span className='text-[14px] font-[500]'>$49.99</span>
            <span className='text-[12px] text-[#ababab]'>Qty: 2</span>
          </div>
        </div>
        <div className='w-full gap-[10px] flex flex-row items-center pb-4 border-b'>
          <div className='w-full border  rounded-[4px]'>
            <input type="text" className='w-full py-4 rounded-[4px] px-4 bg-white ' placeholder='Gift or discount code' />
          </div>
          <button className='p-4 px-6 rounded-[4px] bg-[#A7E071]'>
            <span className='text-white'>Apply</span>
          </button>
        </div>
        <div className='flex flex-col gap-[10px] pb-4 border-b'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-[16px] font-[600] text-black'>Subtotal</span>
            <span className='text-[16px] font-[600] text-black'>$49.80</span>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-[16px] font-[600] text-black'>Shipping</span>
            <span className='text-[16px] font-[600] text-black'>$7.24</span>
          </div>
        </div>
        <div className='flex flex-row w-full border-b justify-between items-center pb-4'>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] font-[600]'>Total</h1>
            <span className='text-[13px] text-[gray]'>Including $2.24 in taxes</span>
          </div>
          <h1 className='text-[36px] font-[700]'>$59.28</h1>
        </div>
      </div>
    </div>
  )
}

export default Checkout