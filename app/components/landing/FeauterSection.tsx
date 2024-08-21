import Image from 'next/image'
import React from 'react'

const FeauterSection = () => {
  const cards = [
    {
      icon: <Image src={`/images/desktoppos.png`} width={1000} height={1000} className='w-full ' alt='hhh' />,
      title: 'Accesible from any where',
      description: 'Access our cloud-based system in or out ot the restaurant.',

    },
    {
      icon: <Image src={`/images/phonepos.png`} width={1000} height={1000} className='w-full ' alt='hhh' />,
      title: 'Offline Mode',
      description: 'Reliable offline mode ensures you’re always on.',

    },
    {
      icon: <Image src={`/images/phonepos.png`} width={1000} height={1000} className='w-full ' alt='hhh' />,
      title: '24/7 Support',
      description: 'Connect with real pople who really get it, 27/7',

    },
    {
      icon: <Image src={`/images/desktoppos.png`} width={1000} height={1000} className='w-full ' alt='hhh' />,
      title: 'Website and App Integration',
      description: '100+ intergrations sync directly with our POS.',

    },
  ]
  return (
    <div className='px-[10px] md:px-[50px] lg:px-[100px] relative py-20 '>
      <div className='w-full h-full absolute top-0 left-0'>
        <Image src={`/images/FeatureSection.png`} width={1000} height={1000} className='w-full h-full object-cover' alt='fetaure section' />
      </div>
      <div className='w-full flex flex-col gap-[40px] items-center z-20 relative'>
        <h1 className='text-[28px] font-[700] text-white text-center max-w-[500px] leading-10'>The restaurant and retail point of sale at <span className='text-[#01A653]'>our service.</span> </h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]'>
          {cards.map((item:any, index) => {
            return (
              <div className='flex bg-[#01A653]/40 p-6 rounded-[10px]  flex-col gap-[10px] w-full items-center'>
                <div className=' w-[50px] p-2 bg-[#01A653] rounded-[10px] flex items-center justify-center'>
                 {item.icon}
                </div>
                <h1 className='text-[14px] text-white font-[700] text-center'>{item.title}</h1>
                <span className='text-white font-[400] text-center text-[13px]'>{item.description}</span>
              </div>

            )
          })}

        </div>

      </div>
    </div>
  )
}

export default FeauterSection