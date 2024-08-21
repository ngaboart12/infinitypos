import Image from 'next/image'
import React from 'react'

const SignIn = () => {
    return (
        <div className='w-full h-[100vh] flex flex-row'>
            <div className='w-1/2 h-full'>
                <div className='w-full h-full'>
                    <Image src={`/images/FeatureSection.png`} width={1000} height={1000} className='w-full h-full     object-cover' alt='fetaure section' />
                </div>
            </div>
            <div className='w-1/2 h-full justify-center items-center flex px-24'>
                <div className='flex flex-col gap-[10px] w-full'>
                    <h1 className='text-[24px] font-[700] text-black'>Sign In to Your Account</h1>
                    <span className='text-[14px] text-[#687588]'>Welcome to Infinity POS</span>

                    <form action="" className='py-4 w-full flex flex-col gap-[20px] '>
                        <div className=' border w-full rounded-[4px]'>
                            <input type="text" className='p-3 w-full bg-transparent text-[14px] rounded-[4px] ' placeholder='Enter Your email' />
                        </div>
                        <div className=' border w-full rounded-[4px]'>
                            <input type="password" className='p-3 w-full bg-transparent text-[14px] rounded-[4px] ' placeholder='Enter Your passowrd' />
                        </div>
                        <button className='w-full p-3 flex bg-[#01A653] hover:bg-[#19804c] text-white rounded-[4px] items-center justify-center'>
                            <span>Sign In</span>
                        </button>
                        <a href="#" className='text-[14px] text-[#01A653] hover:text-black py-2'>New to Infinity POS?</a>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn