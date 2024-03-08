import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useState } from 'react';

const Featured = () => {
  const [hoverState, setHoverState] = useState({
    isHovering1: false,
    isHovering2: false,
  });

  const handleMouseEnter = (key) => {
    setHoverState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverState((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className='w-full py-20'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight ">Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-20">
        <div
          onMouseEnter={() => handleMouseEnter('isHovering1')}
          onMouseLeave={() => handleMouseLeave('isHovering1')}
          className=" cardcontainer relative rounded-xl w-1/2 h-[80vh]">
          <h1 className="absolute left-full flex overflow-hidden -translate-x-[50%] top-1/2 -translate-y-[50%] leading-none tracking-tighter font-semibold text-[#cdea68] z-10 text-8xl">
            {"FYDE".split("").map((item,index) => (
              <motion.span
                key={index}
                initial={{y: "100%"}}
                animate={hoverState.isHovering1 ? {y: "0"} : {y: "100%"}}
                transition={{ease: [0.45, 0, 0.55, 1], delay: index*.1}}
                className='inline-block' >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full bg-green-500 rounded-xl overflow-hidden ">
           <img className='w-full h-full' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter('isHovering2')}
          onMouseLeave={() => handleMouseLeave('isHovering2')}
          className=" cardcontainer relative rounded-xl w-1/2 h-[80vh] ">
          <h1 className="absolute right-full flex overflow-hidden translate-x-[50%] top-1/2 -translate-y-[50%] leading-none tracking-tighter font-semibold text-[#cdea68] z-10 text-8xl">
            {"VISE".split("").map((item,index) => (
              <motion.span
                key={index}
                initial={{y: "100%"}}
                animate={hoverState.isHovering2 ? {y: "0"} : {y: "100%"}}
                transition={{ease: [0.45, 0, 0.55, 1], delay: index*.1}}
                className='inline-block' >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full bg-green-500 rounded-xl overflow-hidden ">
          <img className='w-full h-full' src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
