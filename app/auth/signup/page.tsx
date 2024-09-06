"use client"
import InputField from '@/app/components/reusable/Input'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Image from 'next/image'
import React, { useState } from 'react'

interface FormValues {
    name: string;
    location: string;
    businessCategory: string;
    description: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Email is required').test('is-full-name', "Please Enter full name", (value) => {
                if (!value) return false;
                return value.trim().split(' ').length >= 2
            }),
        location: Yup.string()
            .required('Location is required'),
        description: Yup.string()
            .required('description is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            location: "",
            businessCategory: "",
            description: "",
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            alert("submitting ")
        }

    })
    return (
        <div className='w-full md:min-h-[100vh] flex flex-row'>
            <div className='hidden fixed md:flex w-1/2 h-[100vh]  '>
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
            <div className=' md:ml-auto w-full md:w-1/2 h-full pu justify-center items-center flex px-4 sm:px-10 md:px-24 py-4 md:py-4'>
                <div className='flex flex-col gap-[4px] w-full'>
                    <h1 className='text-[24px] font-[700] text-black text-center md:text-start'>Create Your Account</h1>
                    <span className='text-[14px] text-[#687588] text-center md:text-start'>Welcome to Infinity POS</span>

                    <form onSubmit={formik.handleSubmit} className='py-4 w-full flex flex-col gap-[10px] '>
                        <div className='flex flex-col gap-[2px]'>
                            <div className=' border w-full rounded-[4px]'>

                                <input
                                    name='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    type="text"
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] '
                                    placeholder='Enter Your Name' />
                            </div>
                            {formik.touched.name && formik.errors.name ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.name}</span>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <div className=' border w-full rounded-[4px]'>
                                <input
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    type="email"
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] '
                                    placeholder='Enter Your Email' />
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
                                    placeholder='Enter Your Email' />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.password}</span>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <div className=' border w-full rounded-[4px]'>
                                <input
                                    name='location'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.location}
                                    type="text"
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] '
                                    placeholder='Enter Your Location ' />
                            </div>
                            {formik.touched.location && formik.errors.location ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.location}</span>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <div className=' border w-full rounded-[4px]'>
                                <input
                                    name='businessCategory'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.businessCategory}
                                    type="text"
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] '
                                    placeholder='Enter Your Location ' />
                            </div>
                            {formik.touched.businessCategory && formik.errors.businessCategory ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.businessCategory}</span>
                            ) : null}
                        </div>

                        <div className=' flex flex-col 2px'>
                            <div className=' border w-full rounded-[4px]'>
                                <textarea
                                    name='description'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    className='p-3 w-full bg-transparent text-[14px] rounded-[4px] ' placeholder='Business description' />
                            </div>
                            {formik.touched.description && formik.errors.description ? (
                                <span className='text-[12px] text-red-400'>{formik.errors.description}</span>
                            ) : null}

                        </div>
                        <div className=' flex flex-row gap-[10px] items-center'>
                            <input type='checkbox' />
                            <span className='text-[14px] text-[#687588] '>I Agree to our <span className='text-[#01A653] underline'> Terms and Conditions</span></span>
                        </div>


                        <button className='w-full p-3 flex bg-[#01A653] hover:bg-[#19804c] text-white rounded-[4px] items-center justify-center'>
                            <span>Sign Up</span>
                        </button>
                        <a href="/auth" className='text-[14px] text-[#01A653] hover:text-black py-2 text-center md:text-start'>Already have an account?</a>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp