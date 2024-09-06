"use client"

import Image from 'next/image'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

interface FormValues {
    email: string;
    password: string;
}
const SignIn = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            alert("submitting ")
        }

    })
    return (
        <div className='w-full px-[10px] lg:px-[0px] h-[100vh] flex flex-row'>
            <div className='hidden md:flex w-1/2 h-full relative '>
                <div className='w-full h-full absolute z-10'>
                    <Image src={`/images/FeatureSection.png`} width={1000} height={1000} className='w-full h-full     object-cover' alt='fetaure section' />
                </div>
                <div className=' absolute z-20  w-full h-full bg-white/10'></div>
                <div className=' absolute z-30 bottom-10 flex flex-col gap-[10px] px-[40px]'>
                    <span className='text-[16px] text-white font-[500]'>Welcome to Restorant Management portal.
                        Login into your account or contact adminstrator for support & assistance.</span>
                    <p className='text-[14px] font-[400] text-white'>© {new Date().getFullYear()} Restorant Portal, Inc. All rights reserved.   </p>

                </div>
            </div>
            <div className=' w-full md:w-1/2 h-full justify-center items-center flex px-2 sm:px-10 md:px-24'>
                <div className='flex flex-col gap-[10px] w-full'>
                    <h1 className='text-[24px] font-[700] text-black text-center md:text-start'>Sign In to Your Account</h1>
                    <span className='text-[14px] text-[#687588] text-center md:text-start'>Welcome to Infinity POS</span>

                    <form onSubmit={formik.handleSubmit} className='py-4 w-full flex flex-col gap-[20px] '>
                        <div className='flex flex-col gap-[2px]'>

                            <div className=' border w-full rounded-[4px]'>
                                <input type="text" name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} className='p-3 w-full bg-transparent text-[14px] rounded-[4px] ' placeholder='Enter Your email' />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.email}</span>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <div className=' border w-full rounded-[4px]'>
                                <input
                                    name='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} 
                                    type="password" 
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] '
                                    placeholder='Enter Your passowrd' />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.password}</span>
                            ) : null}
                        </div>

                        <button className='w-full p-3 flex bg-[#01A653] hover:bg-[#19804c] text-white rounded-[4px] items-center justify-center'>
                            <span>Sign In</span>
                        </button>
                        <a href="/auth/signup" className='text-[14px] text-[#01A653] hover:text-black py-2 text-center md:text-start'>New to Infinity POS?</a>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn