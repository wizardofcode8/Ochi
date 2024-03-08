import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center gap-5 px-24">
      <div className="cardContainer w-full  h-[52vh]  ">
        <div className="card relative flex items-center justify-center  bg-sky-700 rounded-xl w-full h-full">
          <h1 className='text-6xl font-semibold text-white font-["Neue_Montreal"]'>
            Ochi
          </h1>
          <button className="absolute bottom-10 left-10 py-2 px-5 border-2 border-white rounded-full hover:scale-125 duration-[1s] ">
            &copy;wizardofcode
          </button>
        </div>
      </div>
      <div className="cardContainer w-full h-[52vh] flex gap-5 ">
        <div className="card relative flex items-center justify-center w-1/2 bg-black rounded-xl h-full">
          <h1 className='text-6xl font-semibold text-green-500 font-["Neue_Montreal"]'>
            Clutch
          </h1>
          <button className="absolute bottom-10 left-10 py-2 px-5 border-2 border-white rounded-full hover:scale-125 duration-[1s] ">
            gotit
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 bg-black rounded-xl h-full">
          <h1 className='text-6xl font-semibold text-green-500 font-["Neue_Montreal"]'>
            MONO
          </h1>
          <button className="absolute bottom-10 left-10 py-2 px-5 border-2 border-white rounded-full hover:scale-125 duration-[1s] ">
            megoo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
