import React from 'react'

const About = () => {
  return (
    <div className='w-full  bg-[#cdea68] p-20 rounded-t-3xl text-black '>
      <h1 className='font-["Neue_Montreal"] text-[4vw] p-20 leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] pt-10 mt-10 ">
       <div className="w-1/2">
       <h1 className='text-7xl '>Our Approach</h1>
        <button className='group px-10 py-6 uppercase mt-7 bg-zinc-900 rounded-full text-white flex items-center gap-8'>Read More
        <div className='w-2 h-2 group-hover:scale-[200%] transition duration-500 rounded-full bg-zinc-100 '></div>
        </button>
       </div>
       <div className="w-1/2 h-[70vh] bg-[#98ae47] rounded-3xl">
       <img className='w-full h-full' src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
       </div>
      </div>
    </div>
  )
}

export default About
