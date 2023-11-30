import React from 'react';
import Background from '../static/PortfolioBlue.png'

export default function Home() {
  return (
  
    <div className="bg-cover bg-center w-screen h-screen flex justify-center p-20" style={{ backgroundImage: `url(${Background})` }}>
      <img
        className="absolute w-[550px] h-[480px] top-[166px] left-[184px] rounded-full shadow-lg shadow-black"
        alt="Rectangle"
        src="assets/Nightlife.jpg"
      />
      <div className="flex flex-col w-[710px] h-[165px] items-start gap-[1px] absolute top-[457px] left-[750px]">
        <p className="relative w-fit mt-[-1.00px] [text-shadow:0px_6px_5px_#00000040] [font-family:'Hepta_Slab-SemiBold',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal] shadow-landing">
          <span className="font-semibold text-black">Hi, I’m</span>
          <span className="text-5xl [font-family:'Hepta_Slab-Bold',Helvetica] font-bold text-[#2a6f85]"> L</span>
          <span className="[font-family:'Hepta_Slab-Bold',Helvetica] font-bold text-black">’Rae</span>
        </p>
        <p className="relative w-[578px] [text-shadow:0px_4px_4px_#00000040] [font-family:var(--landing-font-family)] font-[number:var(--landing-font-weight)] text-black text-4xl tracking-[var(--landing-letter-spacing)] leading-[var(--landing-line-height)] [font-style:var(--landing-font-style)] shadow-landing">
          FULL STACK ENGINEER | REACT.JS | JAVASCRIPT
        </p>
      </div>
    </div>
  
  );
};



