import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen py-20 px-20 flex gap-10 font-["Founder_Grotesk _X-Condesned"] '>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className="">
            <h1 className='text-[6vw] font-semibold tracking-tighter leading-none '>EYE-</h1>
            <h1 className='text-[6vw] font-semibold tracking-tighter leading-none '>OPENING</h1>
        </div>
        <div>
        <h1 className='text-[2vw] font-semibold tracking-tighter leading-none '>Ochi</h1>
        </div>
      </div>
      <div className='w-1/2'>
      <h1 className='text-[4vw] font-semibold tracking-tighter leading-none '>PRESENTATIONS</h1>
      </div>
    </div>
  )
}

export default Footer
  