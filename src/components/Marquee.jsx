import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-t-3xl bg-[#004D43] text-white'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 6}} className='text-[17vw] leading-none font-["Founder_Grotesk _X-Condesned"] font-bold -mb-3 uppercase'>We Are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 6}} className='text-[17vw] leading-none font-["Founder_Grotesk _X-Condesned"] font-bold -mb-3 uppercase'>We Are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
