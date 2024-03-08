import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item, index)=> {
        return <div className='masker overflow-hidden'>
            <div className="w-fit flex items-center">
              {index === 1 && ( <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1.4}} className=' mr-[1vw] h-[5.7vw] relative -bottom-[0.4vw] rounded-md bg-green-300 '>
                <img className='w-full h-full rounded' src="https://images.unsplash.com/photo-1647337844509-3da06f493872?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2lnbiUyMHBjfGVufDB8fDB8fHww" alt="" />
              </motion.div>)}
            <h1 className="flex items-center h-full uppercase text-[8vw] leading-[7vw] tracking-tighter font-['Founder_Grotesk _X-Condesned'] font-bold">{item}</h1>
            </div>
        </div>
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between py-5 px-20 text-center">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
         return <p className='text-lg font-normal tracking-tight leading-none'>{item}</p>
        })}
      <div className="start flex items-center gap-4">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-semibold text-lg  uppercase rounded-full ">start the project </div>

          <div className="group w-10 hover:scale-125 transition ease-linear duration-200 overflow-hidden h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400 cursor-pointer ">
            <span className='group-hover:scale-125 hover:scale-125 transition ease-linear duration-200 rotate-45'>
              <FaLongArrowAltUp/>
            </span>
            </div>

          
      </div>
      </div>

    </div>
  )
}

export default Landingpage
