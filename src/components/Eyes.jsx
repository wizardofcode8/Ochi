import React, { useEffect, useState } from "react";

const Eyes = () => {
    const [rotate, setRotate] = useState(0)
  

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
    
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
    
            // Calculate the angle without subtracting 180 degrees
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            angle += 180;
            setRotate(angle);
        });
    }, []);
    

  return (
    <div className="eye w-full h-screen overflow-hidden">
      <div data-scroll  data-scroll-section data-scroll-speed="-.5"  className="eyeimg relative w-full h-screen bg-cover bg-center ">
        <div className=" absolute justify-center gap-10 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
